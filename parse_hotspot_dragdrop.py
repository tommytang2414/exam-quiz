"""
Parse HOTSPOT and DRAG DROP questions from AZ-500 PDF.
HOTSPOT: 152 questions — each has N boxes with Yes/No or specific text answers
DRAG DROP: 39 questions — either multi-select from list OR ordered steps
"""
import re
from pypdf import PdfReader
from typing import Optional

reader = PdfReader(r'C:\Users\User\Downloads\AZ-500 507题 题目+答案+讨论比例图.pdf')
all_text = '\n'.join(page.extract_text() or '' for page in reader.pages)

# ─── Split into question blocks ────────────────────────────────────────────
# Format: "Topic X\nQuestion #N" or "Topic X - Question #N"
block_pat = re.compile(r'(Topic \d+[\s-]*Question #\d+|T\d+-Q\d+)\s*\n(.*?)(?=Topic \d+[\s-]*Question #\d+|T\d+-Q\d+|$)', re.DOTALL)
blocks = list(block_pat.finditer(all_text))

# ─── Parse HOTSPOT questions ─────────────────────────────────────────────────
hotspot_questions = []

hs_pat = re.compile(r'HOTSPOT\s*[-–]?\s*\n(.*?)(?=Correct Answer:|Hot Area:|店铺：|$)', re.DOTALL | re.IGNORECASE)
ca_pat = re.compile(r'Box (\d+):\s*([^\n]+?)\s*[-–]\s*\n?(.*?)(?=\nBox \d+:|$)', re.DOTALL)
simple_yesno = re.compile(r'Box (\d+):\s*(Yes|No)', re.IGNORECASE)

for m in blocks:
    qid_raw = m.group(1)
    body = m.group(2)

    if not re.search(r'HOTSPOT', body, re.IGNORECASE):
        continue

    # Extract question text (everything before "Hot Area:" or "Correct Answer:")
    qs_pat = re.compile(r'(.*?)(?=\n\s*(Hot Area|Correct Answer|店铺)[：:]|$)', re.DOTALL)
    qs_m = qs_pat.search(body)
    question_text = qs_m.group(1).strip() if qs_m else body[:500]

    # Clean trailing junk from question text
    question_text = re.sub(r'店铺：.*', '', question_text).strip()
    question_text = re.sub(r'\n{3,}', '\n\n', question_text)

    # Find topic
    topic_m = re.search(r'T(\d+)', qid_raw)
    topic = int(topic_m.group(1)) if topic_m else 1

    # Extract boxes from Correct Answer section
    ca_match = re.search(r'Correct Answer:\s*\n(.*)', body, re.DOTALL | re.IGNORECASE)
    boxes = {}
    if ca_match:
        ca_text = ca_match.group(1)
        # Try structured "Box N: Answer - Explanation" pattern
        for bm in re.finditer(r'Box\s+(\d+):\s*([^\n]+?)(?:\s*[-–]\s*(.*?))?(?=\n\s*Box|\Z)', ca_text, re.DOTALL):
            box_num = int(bm.group(1))
            answer = bm.group(2).strip()
            explanation = bm.group(3).strip() if bm.group(3) else ''
            boxes[box_num] = {'answer': answer, 'explanation': explanation}

    # Parse TQ ID (e.g. "T1-Q1")
    tq_m = re.search(r'T(\d+)[- ]*Q(\d+)', qid_raw)
    if tq_m:
        qid = f"T{tq_m.group(1)}-Q{tq_m.group(2)}"
    else:
        q_m2 = re.search(r'Question #(\d+)', qid_raw)
        q_num = int(q_m2.group(1)) if q_m2 else 0
        t_m2 = re.search(r'Topic (\d+)', qid_raw)
        t_num = int(t_m2.group(1)) if t_m2 else 1
        qid = f"T{t_num}-Q{q_num}"

    hotspot_questions.append({
        'id': qid,
        'topic': topic,
        'question': question_text,
        'boxes': boxes,
        'count': len(boxes),
    })

print(f"Parsed {len(hotspot_questions)} HOTSPOT questions")
for q in hotspot_questions[:5]:
    print(f"  {q['id']}: {len(q['boxes'])} boxes, preview: {q['question'][:80]}...")
    for bnum, bval in sorted(q['boxes'].items()):
        print(f"    Box {bnum}: {bval['answer']}")

# ─── Parse DRAG DROP questions ────────────────────────────────────────────────
dragdrop_questions = []

dd_select_pat = re.compile(r'(Which two|Which three|Which four|Select the|Choose the|Identify the).*?(?:should be made available|during|from the list|to the answer|for each|appropriate)', re.DOTALL | re.IGNORECASE)
dd_order_pat = re.compile(r'(Which three actions|Which four steps|arrange|sequence|in order|perform in order|in sequence)', re.DOTALL | re.IGNORECASE)

for m in blocks:
    qid_raw = m.group(1)
    body = m.group(2)

    if not re.search(r'DRAG DROP', body, re.IGNORECASE):
        continue

    # Extract question text
    qs_pat = re.compile(r'(.*?)(?=\n\s*(Correct Answer|Select and Place|店铺)[：:]|$)', re.DOTALL)
    qs_m = qs_pat.search(body)
    question_text = qs_m.group(1).strip() if qs_m else body[:500]
    question_text = re.sub(r'店铺：.*', '', question_text).strip()
    question_text = re.sub(r'\n{3,}', '\n\n', question_text)

    # Find topic
    topic_m = re.search(r'T(\d+)', qid_raw)
    topic = int(topic_m.group(1)) if topic_m else 1

    # Extract Correct Answer section
    ca_match = re.search(r'Correct Answer:\s*\n(.*)', body, re.DOTALL | re.IGNORECASE)

    # Determine if it's ordering or selecting
    is_order = bool(dd_order_pat.search(question_text))

    # Parse TQ ID
    tq_m = re.search(r'T(\d+)[- ]*Q(\d+)', qid_raw)
    if tq_m:
        qid = f"T{tq_m.group(1)}-Q{tq_m.group(2)}"
    else:
        q_m2 = re.search(r'Question #(\d+)', qid_raw)
        q_num = int(q_m2.group(1)) if q_m2 else 0
        t_m2 = re.search(r'Topic (\d+)', qid_raw)
        t_num = int(t_m2.group(1)) if t_m2 else 1
        qid = f"T{t_num}-Q{q_num}"

    items = []
    if ca_match:
        ca_text = ca_match.group(1)
        # Extract lines that look like ordered steps or selected items
        # Step pattern: "Step N: text" or "N. text"
        for sm in re.finditer(r'(?:Step\s+)?(\d+)[:\.]\s*(.+?)(?=\n(?:Step\s+\d+|^\s*\d+[\.:])|\Z)', ca_text, re.DOTALL | re.MULTILINE):
            step_num = int(sm.group(1))
            step_text = sm.group(2).strip()
            items.append({'position': step_num, 'text': step_text})

    dragdrop_questions.append({
        'id': qid,
        'topic': topic,
        'question': question_text,
        'type': 'order' if is_order else 'select',
        'items': items,
    })

print(f"\nParsed {len(dragdrop_questions)} DRAG DROP questions")
for q in dragdrop_questions[:5]:
    print(f"  {q['id']}: {q['type']} ({len(q['items'])} items), preview: {q['question'][:80]}...")
    for item in q['items']:
        print(f"    [{item['position']}] {item['text'][:80]}")

# Save results
import json
with open(r'C:\Users\User\exam-quiz\hotspot_dragdrop_parsed.json', 'w', encoding='utf-8') as f:
    json.dump({'hotspot': hotspot_questions, 'dragdrop': dragdrop_questions}, f, ensure_ascii=False, indent=2)
print("\nSaved to hotspot_dragdrop_parsed.json")