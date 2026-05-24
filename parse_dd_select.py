"""Deep parse: improve DRAG DROP select-type question parsing."""
import re, json
from pypdf import PdfReader

reader = PdfReader(r'C:\Users\User\Downloads\AZ-500 507题 题目+答案+讨论比例图.pdf')
all_text = '\n'.join(page.extract_text() or '' for page in reader.pages)

# Split into blocks
block_pat = re.compile(r'(Topic \d+[\s-]*Question #\d+)\s*\n(.*?)(?=Topic \d+[\s-]*Question #\d+|$)', re.DOTALL)
blocks = list(block_pat.finditer(all_text))

dd_select_pat = re.compile(r'(Which two|Which three|Which four|Select the|Choose the|Identify the|Which of the following|You need to|Which option)', re.IGNORECASE)
dd_order_pat = re.compile(r'(Which three actions|Which four steps|arrange|sequence|in order|perform in order|in sequence|drag the)', re.IGNORECASE)

dd_questions = []

for m in blocks:
    qid_raw = m.group(1)
    body = m.group(2)

    if not re.search(r'DRAG DROP', body, re.IGNORECASE):
        continue

    # Question text (everything before Correct Answer)
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
            # Extract ordered steps
            for sm in re.finditer(r'(?:Step\s+)?(\d+)[\.:]\s*(.+?)(?=\n\s*(?:Step\s+\d+|\d+[\.:])|\Z)', ca_text, re.DOTALL):
                step_num = int(sm.group(1))
                step_text = re.sub(r'\s+', ' ', sm.group(2).strip())
                items.append({'position': step_num, 'text': step_text})
        else:
            # Select: extract answer items — bold/likely items are listed as "Answer - explanation"
            # Pattern: "Item text" (quoted in answer section)
            # Or: lines matching option-style text
            for line in ca_text.split('\n'):
                line = line.strip()
                if not line or re.match(r'^(店铺|Note|Reference|https?://|Step\s+\d)', line, re.I):
                    continue
                # Items that start with capital letters and aren't just numbers
                if line and line[0].isupper() and len(line) > 5:
                    # Remove trailing dash/explanation
                    clean = re.sub(r'\s*[-–—]\s*.*', '', line).strip()
                    if clean:
                        items.append({'text': clean})

    # Deduplicate items by text
    seen = set()
    unique_items = []
    for item in items:
        t = item.get('text', item.get('text', ''))
        if t not in seen:
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

# Summary
order_qs = [q for q in dd_questions if q['type'] == 'order']
select_qs = [q for q in dd_questions if q['type'] == 'select']
print(f"Total: {len(dd_questions)}, Order: {len(order_qs)}, Select: {len(select_qs)}")

# Show select questions with their items
print("\n=== SELECT questions ===")
for q in select_qs:
    print(f"\n{q['id']} ({q['count']} items):")
    print(f"  Q: {q['question'][:120]}")
    for item in q['items'][:6]:
        print(f"  > {item['text'][:80]}")

print("\n=== ORDER questions ===")
for q in order_qs:
    print(f"\n{q['id']} ({q['count']} items):")
    print(f"  Q: {q['question'][:120]}")
    for item in q['items'][:6]:
        print(f"  {item['position']}. {item['text'][:80]}")

with open(r'C:\Users\User\exam-quiz\hotspot_dragdrop_parsed.json', 'w', encoding='utf-8') as f:
    json.dump({'hotspot': [], 'dragdrop': dd_questions}, f, ensure_ascii=False, indent=2)
print("\nSaved.")