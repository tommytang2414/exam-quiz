"""Write output to file to avoid encoding issues."""
import re, json
from pypdf import PdfReader

reader = PdfReader(r'C:\Users\User\Downloads\AZ-500 507题 题目+答案+讨论比例图.pdf')
all_text = '\n'.join(page.extract_text() or '' for page in reader.pages)

block_pat = re.compile(r'(Topic \d+[\s-]*Question #\d+)\s*\n(.*?)(?=Topic \d+[\s-]*Question #\d+|$)', re.DOTALL)
blocks = list(block_pat.finditer(all_text))

dd_order_pat = re.compile(r'(Which three actions|Which four steps|arrange|sequence|in order|perform in order|in sequence)', re.IGNORECASE)

dd_questions = []

for m in blocks:
    qid_raw = m.group(1)
    body = m.group(2)

    if not re.search(r'DRAG DROP', body, re.IGNORECASE):
        continue

    qs_pat = re.compile(r'(.*?)(?=\n\s*(Correct Answer|Select and Place|店铺)[：:]|$)', re.DOTALL)
    qs_m = qs_pat.search(body)
    question_text = qs_m.group(1).strip() if qs_m else body[:500]
    question_text = re.sub(r'店铺：.*', '', question_text).strip()
    question_text = re.sub(r'\n{3,}', '\n\n', question_text)

    topic_m = re.search(r'Topic (\d+)', qid_raw)
    topic = int(topic_m.group(1)) if topic_m else 1
    qnum_m = re.search(r'Question #(\d+)', qid_raw)
    qnum = int(qnum_m.group(1)) if qnum_m else 0
    qid = f"T{topic}-Q{qnum}"

    is_order = bool(dd_order_pat.search(question_text))
    ca_match = re.search(r'Correct Answer:\s*\n(.*)', body, re.DOTALL | re.IGNORECASE)

    items = []
    if ca_match:
        ca_text = ca_match.group(1)
        if is_order:
            for sm in re.finditer(r'(?:Step\s+)?(\d+)[\.:]\s*(.+?)(?=\n\s*(?:Step\s+\d+|\d+[\.:])|\Z)', ca_text, re.DOTALL):
                step_num = int(sm.group(1))
                step_text = re.sub(r'\s+', ' ', sm.group(2).strip())
                items.append({'position': step_num, 'text': step_text})
        else:
            # Select: each line starting with capital letter could be an answer
            for line in ca_text.split('\n'):
                line = line.strip()
                if not line:
                    continue
                # Skip noise lines
                if re.match(r'^(店铺|Note|Reference|https?://|Step\s+\d)', line, re.I):
                    continue
                if len(line) < 5:
                    continue
                # Clean trailing explanation
                clean = re.sub(r'\s*[-–—]\s*.*', '', line).strip()
                if clean and clean[0].isupper() and len(clean) > 4:
                    items.append({'text': clean})

    # Deduplicate
    seen = set()
    unique_items = []
    for item in items:
        t = item.get('text', '')
        if t and t not in seen:
            seen.add(t)
            unique_items.append(item)
    items = unique_items

    dd_questions.append({
        'id': qid,
        'topic': topic,
        'question': question_text,
        'type': 'order' if is_order else 'select',
        'items': items,
        'count': len(items),
    })

with open(r'C:\Users\User\exam-quiz\dd_parsed_output.txt', 'w', encoding='utf-8') as f:
    order_qs = [q for q in dd_questions if q['type'] == 'order']
    select_qs = [q for q in dd_questions if q['type'] == 'select']
    f.write(f"Total: {len(dd_questions)}, Order: {len(order_qs)}, Select: {len(select_qs)}\n")

    f.write("\n=== ORDER questions ===\n")
    for q in order_qs:
        f.write(f"\n{q['id']} ({q['count']} items):\n")
        f.write(f"  Q: {q['question'][:150]}\n")
        for item in q['items'][:8]:
            f.write(f"  {item['position']}. {item['text'][:100]}\n")

    f.write("\n=== SELECT questions ===\n")
    for q in select_qs:
        f.write(f"\n{q['id']} ({q['count']} items):\n")
        f.write(f"  Q: {q['question'][:150]}\n")
        for item in q['items'][:8]:
            f.write(f"  * {item['text'][:100]}\n")

# Show stats
print(f"Order: {len(order_qs)}, Select: {len(select_qs)}")
print(f"Order with >0 items: {sum(1 for q in order_qs if q['count'] > 0)}")
print(f"Select with >0 items: {sum(1 for q in select_qs if q['count'] > 0)}")