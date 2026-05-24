import re, json
from pypdf import PdfReader

reader = PdfReader(r'C:\Users\User\Downloads\AZ-500 507题 题目+答案+讨论比例图.pdf')
all_text = '\n'.join(page.extract_text() or '' for page in reader.pages)

block_pat = re.compile(r'(Topic \d+[\s-]*Question #\d+)\s*\n(.*?)(?=Topic \d+[\s-]*Question #\d+|$)', re.DOTALL)
blocks = list(block_pat.finditer(all_text))

dd_questions = []

for m in blocks:
    qid_raw = m.group(1)
    body = m.group(2)

    if not re.search(r'DRAG DROP', body, re.IGNORECASE):
        continue

    topic_m = re.search(r'Topic (\d+)', qid_raw)
    topic = int(topic_m.group(1)) if topic_m else 1
    qnum_m = re.search(r'Question #(\d+)', qid_raw)
    qnum = int(qnum_m.group(1)) if qnum_m else 0
    qid = f"T{topic}-Q{qnum}"

    # Question text
    qs_pat = re.compile(r'(.*?)(?=\n\s*(Correct Answer|Select and Place|店铺)|$)', re.DOTALL)
    qs_m = qs_pat.search(body)
    question_text = qs_m.group(1).strip() if qs_m else ''
    question_text = re.sub(r'^DRAG DROP\s*[-–]?\s*\n', '', question_text, flags=re.IGNORECASE).strip()
    question_text = re.sub(r'店铺：.*', '', question_text).strip()
    question_text = re.sub(r'\n{3,}', '\n\n', question_text)

    ca_match = re.search(r'Correct Answer:\s*\n(.*?)(?=\n\s*(店铺|Note|Reference|https?://)|$)', body, re.DOTALL | re.IGNORECASE)
    ca_text = ca_match.group(1).strip() if ca_match else ''

    # Skip case studies
    if re.search(r'Introductory Info|This is a case study', question_text, re.I):
        continue

    # ORDER type: Step N: or "Step: N" patterns
    is_order = bool(re.search(r'(Which three actions|Which four steps|arrange|sequence|in order|perform in order)', question_text, re.IGNORECASE))

    items = []

    if is_order and ca_text:
        # Extract steps: "Step N: text" or "Step: N text" or "N. text"
        step_pat = re.compile(r'(?:Step\s+)?(?:(\d+)[\.:]\s*|\[(\d+)\]\s*)(.+?)(?=\n\s*(?:Step\s+\d|^\s*(?:\d+[\.:\]]|\[?\d\])|店铺|$))', re.DOTALL | re.MULTILINE)
        for sm in step_pat.finditer(ca_text):
            step_num = int(sm.group(1) or sm.group(2))
            step_text = re.sub(r'\s+', ' ', sm.group(3).strip())
            # Remove trailing "Incorrect Answers:" or explanations
            step_text = re.sub(r'\s*[-–—]\s*Incorrect Answers.*', '', step_text, flags=re.I).strip()
            step_text = re.sub(r'\s*[-–—]\s*Delegated permission.*', '', step_text, flags=re.I).strip()
            if len(step_text) > 5:
                items.append({'position': step_num, 'text': step_text})
        # Fallback: just look for "Step N: text" anywhere
        if not items:
            for line in ca_text.split('\n'):
                line = line.strip()
                if re.match(r'^Step\s+\d', line, re.I) or re.match(r'^\d+[\.:]', line):
                    # Extract step number and text
                    sm = re.match(r'^Step\s+(\d+)[\.:]\s*(.*)', line, re.I)
                    if not sm:
                        sm = re.match(r'^(\d+)[\.:]\s*(.*)', line)
                    if sm:
                        items.append({'position': int(sm.group(1)), 'text': sm.group(2).strip()})
    elif ca_text:
        # SELECT type: extract answer items from the explanation
        # Items look like: "Column encryption key", "Column master key", etc.
        # Or: "Always Encrypted uses two types of keys: column encryption keys and column master keys"
        for line in ca_text.split('\n'):
            line = line.strip()
            if not line or len(line) < 5:
                continue
            # Skip noise
            if re.match(r'^(店铺|Note|Reference|https?://)', line, re.I):
                continue
            # Clean trailing dash + explanation
            clean = re.sub(r'\s*[-–—]\s*(Incorrect Answers|Delegated permission|Application Proxy|Reference:?).*', '', line, flags=re.I).strip()
            # Only keep lines that look like answer choices
            if len(clean) < 5:
                continue
            # Try to find answer items in the explanatory text
            # e.g., "Always Encrypted uses two types of keys: column encryption keys and column master keys"
            # → "column encryption keys" and "column master keys" are the answers
            if clean not in items and not re.match(r'^[A-Z][a-z].*(?:use|uses|can|could|should|need|must|will|are|is)\s', clean):
                # Skip explanatory sentences
                pass

        # Better approach: for select questions, the answer is often in a specific sentence
        # Pattern: "X uses/has/contains/etc. ... A, B, and C"
        # Look for lines where the answer items are separated by "and" or commas
        answer_sentence = ''
        for line in ca_text.split('\n'):
            line = line.strip()
            # Check if line has the answer structure: "A and B" (no trailing explanation)
            if re.match(r'^[A-Z][a-z].*keys?:?\s+', line):
                # This might be an answer statement
                answer_sentence = re.sub(r'[-–—].*', '', line).strip()
                break

        # For "which two/three" questions: extract listed items
        # Items are usually: nouns or noun phrases on their own lines
        # OR they follow "is/are" and then listed
        select_pat = re.compile(r'^\s*([^-\n]{10,80})\s*$', re.MULTILINE)
        for pm in select_pat.finditer(ca_text):
            line = pm.group(1).strip()
            if re.match(r'^(店铺|Note|Reference|https?://|Step\s*\d)', line, re.I):
                continue
            if len(line) > 8 and line[0].isupper() and not line.endswith(':'):
                # Remove trailing explanations
                clean = re.sub(r'\s*[-–—]\s*.*', '', line).strip()
                items.append({'text': clean})

        # Deduplicate
        seen = set()
        unique = []
        for item in items:
            t = item.get('text', item.get('text', ''))
            if t and t not in seen and len(t) > 5:
                seen.add(t)
                unique.append(item)
        items = unique

    dd_questions.append({
        'id': qid,
        'topic': topic,
        'question': question_text,
        'type': 'order' if is_order else 'select',
        'items': items,
        'count': len(items),
    })

# Stats
order_qs = [q for q in dd_questions if q['type'] == 'order']
select_qs = [q for q in dd_questions if q['type'] == 'select']
print(f"Total: {len(dd_questions)}, Order: {len(order_qs)}, Select: {len(select_qs)}")
print(f"Order with items: {sum(1 for q in order_qs if q['count'] > 0)}")
print(f"Select with items: {sum(1 for q in select_qs if q['count'] > 0)}")

with open(r'C:\Users\User\exam-quiz\dragdrop_parsed.json', 'w', encoding='utf-8') as f:
    json.dump(dd_questions, f, ensure_ascii=False, indent=2)

with open(r'C:\Users\User\exam-quiz\dd_order_debug.txt', 'w', encoding='utf-8') as f:
    for q in order_qs:
        f.write(f"\n{q['id']} ({q['count']} items):\n")
        f.write(f"  {q['question'][:120]}\n")
        for item in q['items'][:6]:
            f.write(f"  {item.get('position','?')}. {item.get('text','')[:100]}\n")

print("Saved dragdrop_parsed.json and dd_order_debug.txt")