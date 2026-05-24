"""Final comprehensive parser for HOTSPOT and DRAG DROP order questions."""
import re, json
from pypdf import PdfReader

reader = PdfReader(r'C:\Users\User\Downloads\AZ-500 507题 题目+答案+讨论比例图.pdf')
all_text = '\n'.join(page.extract_text() or '' for page in reader.pages)

block_pat = re.compile(r'(Topic \d+[\s-]*Question #\d+)\s*\n(.*?)(?=Topic \d+[\s-]*Question #\d+|$)', re.DOTALL)
blocks = list(block_pat.finditer(all_text))

def clean_text(text):
    text = re.sub(r'店铺：.*', '', text)
    text = re.sub(r'\n{3,}', '\n\n', text)
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def get_tq_id(qid_raw):
    topic_m = re.search(r'Topic (\d+)', qid_raw)
    topic = int(topic_m.group(1)) if topic_m else 1
    qnum_m = re.search(r'Question #(\d+)', qid_raw)
    qnum = int(qnum_m.group(1)) if qnum_m else 0
    return f"T{topic}-Q{qnum}", topic, qnum

def extract_question(body, qtype='HOTSPOT'):
    """Extract question text by stopping at NOTE, Hot Area, or Correct Answer."""
    markers = [
        re.search(r'\nNOTE[:\s]', body),
        re.search(r'\nHot Area:', body),
        re.search(r'\nCorrect Answer:', body),
    ]
    stops = [(m.start(), m.group(0)) for m in markers if m]
    if not stops:
        return ''
    first_stop = min(stops, key=lambda x: x[0])
    raw_q = body[:first_stop[0]]
    # Remove "HOTSPOT -" or "DRAG DROP -" prefix
    prefix = qtype.replace(' ', '')
    raw_q = re.sub(rf'^{prefix}\s*[-–]?\s*', '', raw_q, flags=re.IGNORECASE).strip()
    text = clean_text(raw_q)
    if re.search(r'Introductory Info|This is a case study', text, re.I):
        return ''
    return text

# ─── HOTSPOT ────────────────────────────────────────────────────────────────
hotspot_questions = []

for m in blocks:
    qid_raw = m.group(1)
    body = m.group(2)

    if not re.search(r'HOTSPOT', body, re.IGNORECASE):
        continue

    qid, topic, qnum = get_tq_id(qid_raw)
    question_text = extract_question(body)
    if not question_text:
        continue

    ca_match = re.search(r'Correct Answer:\s*\n(.*)', body, re.DOTALL | re.IGNORECASE)
    if not ca_match:
        continue
    ca_text = ca_match.group(1)

    # Parse boxes: "Box N: Answer - Explanation"
    box_pat = re.compile(
        r'Box\s+(\d+)[:\s]+([^\n]+?)(?:\s*[-–]\s*(.+?))?(?=\n\s*Box\s+\d|\Z)',
        re.DOTALL
    )
    boxes = []
    for bm in re.finditer(box_pat, ca_text):
        box_num = int(bm.group(1))
        answer = clean_text(bm.group(2))
        explanation = clean_text(bm.group(3)) if bm.group(3) else ''
        # Ensure array is large enough
        while len(boxes) < box_num:
            boxes.append({'answer': '', 'explanation': ''})
        boxes[box_num - 1] = {'answer': answer, 'explanation': explanation}

    if not boxes:
        continue

    answers_only = [b['answer'] for b in boxes]
    is_yesno = all(a in ('Yes', 'No', 'No -') for a in answers_only)

    hotspot_questions.append({
        'id': qnum,
        'topic': topic,
        'text': question_text,
        'questionType': 'hotspot',
        'type': 'yesno' if is_yesno else 'text',
        'boxes': boxes,
        'explanation': None,
    })

# ─── DRAG DROP order ─────────────────────────────────────────────────────────
order_keywords = re.compile(
    r'(arrange|sequence|in order|in sequence|perform in order|three actions|four steps)',
    re.IGNORECASE
)
dd_order_questions = []

for m in blocks:
    qid_raw = m.group(1)
    body = m.group(2)

    if not re.search(r'DRAG DROP', body, re.IGNORECASE):
        continue

    qid, topic, qnum = get_tq_id(qid_raw)
    question_text = extract_question(body, 'DRAG DROP')
    if not question_text:
        continue

    if not order_keywords.search(question_text):
        continue

    ca_match = re.search(r'Correct Answer:\s*\n(.*)', body, re.DOTALL | re.IGNORECASE)
    if not ca_match:
        continue
    ca_text = ca_match.group(1).strip()
    if not ca_text:
        continue

    items = []
    step_pat = re.compile(
        r'(?:^|\n)\s*(?:Step\s+)?(\d+)[\.:\s]+(.+?)(?=\n\s*(?:Step\s+\d+|\d+[\.:\s]+)|$)',
        re.DOTALL | re.MULTILINE
    )
    for sm in step_pat.finditer(ca_text):
        step_num = int(sm.group(1))
        step_text = clean_text(sm.group(2))
        step_text = re.sub(r'\s*[-–—]\s*(Incorrect|Reference|Delegated permission|Application Proxy).*', '', step_text, flags=re.I)
        step_text = re.sub(r'\s*[,，]\s*You can use the sample code.*', '', step_text)
        if len(step_text) > 5:
            items.append({'position': step_num, 'text': step_text})

    # Deduplicate by position
    pos_seen = {}
    for item in items:
        p = item['position']
        if p not in pos_seen:
            pos_seen[p] = item['text']
    final_items = [{'position': p, 'text': t} for p, t in sorted(pos_seen.items())]

    if not final_items:
        continue

    dd_order_questions.append({
        'id': qnum,
        'topic': topic,
        'text': question_text,
        'questionType': 'dragdrop',
        'dragType': 'order',
        'items': final_items,
        'explanation': None,
    })

# Stats
print(f"HOTSPOT: {len(hotspot_questions)}")
print(f"  yesno: {sum(1 for q in hotspot_questions if q['type']=='yesno')}")
print(f"  text:  {sum(1 for q in hotspot_questions if q['type']=='text')}")
print(f"DRAG DROP order: {len(dd_order_questions)}")
for q in dd_order_questions:
    print(f"  T{q['topic']}-Q{q['id']}: {len(q['items'])} steps")

# Write TypeScript
lines = ['// Auto-generated — HOTSPOT + DRAG DROP order questions\n']
lines.append('import type { HotspotQuestion, DragDropQuestion } from "./types"\n')
lines.append('')
lines.append('export const hotspotQuestions: HotspotQuestion[] = [')
for q in hotspot_questions:
    boxes_js = json.dumps(q['boxes'], ensure_ascii=False)
    text = q['text'].replace('`', '\\`').replace('${', '\\${')
    lines.append(f'  {{ id: {q["id"]}, topic: {q["topic"]}, text: `{text}`, questionType: "hotspot" as const, type: "{q["type"]}" as const, boxes: {boxes_js}, }},')
lines.append(']\n')
lines.append('export const ddOrderQuestions: DragDropQuestion[] = [')
for q in dd_order_questions:
    items_js = json.dumps(q['items'], ensure_ascii=False)
    text = q['text'].replace('`', '\\`').replace('${', '\\${')
    lines.append(f'  {{ id: {q["id"]}, topic: {q["topic"]}, text: `{text}`, questionType: "dragdrop" as const, dragType: "{q["dragType"]}" as const, items: {items_js}, }},')
lines.append(']')

with open(r'C:\Users\User\exam-quiz\lib\questions\az500_extra.ts', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))
print("\nWritten: lib/questions/az500_extra.ts")

with open(r'C:\Users\User\exam-quiz\all_parsed.json', 'w', encoding='utf-8') as f:
    json.dump({'hotspot': hotspot_questions, 'dd_order': dd_order_questions}, f, ensure_ascii=False, indent=2)