import re, json
from pypdf import PdfReader

reader = PdfReader(r'C:\Users\User\Downloads\AZ-500 507题 题目+答案+讨论比例图.pdf')
all_text = '\n'.join(page.extract_text() or '' for page in reader.pages)

block_pat = re.compile(r'(Topic \d+[\s-]*Question #\d+)\s*\n(.*?)(?=Topic \d+[\s-]*Question #\d+|$)', re.DOTALL)
blocks = list(block_pat.finditer(all_text))

hotspot_questions = []

for m in blocks:
    qid_raw = m.group(1)
    body = m.group(2)

    if not re.search(r'HOTSPOT', body, re.IGNORECASE):
        continue

    # Topic
    topic_m = re.search(r'Topic (\d+)', qid_raw)
    topic = int(topic_m.group(1)) if topic_m else 1
    qnum_m = re.search(r'Question #(\d+)', qid_raw)
    qnum = int(qnum_m.group(1)) if qnum_m else 0
    qid = f"T{topic}-Q{qnum}"

    # Question text: up to "Hot Area:" or "Correct Answer:" or shop marks
    qs_pat = re.compile(r'(.*?)(?=\n\s*(Hot Area|Correct Answer|店铺))[：:]?', re.DOTALL)
    qs_m = qs_pat.search(body)
    question_text = qs_m.group(1).strip() if qs_m else ''
    question_text = re.sub(r'^HOTSPOT\s*[-–]?\s*\n', '', question_text, flags=re.IGNORECASE).strip()
    question_text = re.sub(r'店铺：.*', '', question_text).strip()
    question_text = re.sub(r'\n{3,}', '\n\n', question_text)

    # Correct Answer section
    ca_match = re.search(r'Correct Answer:\s*\n(.*?)(?=\n\s*(店铺|Note|Reference|https?://)|$)', body, re.DOTALL | re.IGNORECASE)
    ca_text = ca_match.group(1) if ca_match else ''

    # Parse boxes
    # Pattern 1: "Box N: Answer - Explanation" or "Box N: Answer"
    # Pattern 2: standalone "Box N: Yes" / "Box N: No"
    boxes = {}
    box_pat = re.compile(r'Box\s+(\d+)[:\s]+([^\n]+?)(?:\s*[-–]\s*(.+?))?(?=\n\s*(?:Box\s+\d|店铺|$)|$)', re.DOTALL)
    for bm in box_pat.finditer(ca_text):
        box_num = int(bm.group(1))
        answer = bm.group(2).strip()
        explanation = bm.group(3).strip() if bm.group(3) else ''
        # Remove trailing explanation noise
        answer = re.sub(r'\s+', ' ', answer)
        explanation = re.sub(r'\s+', ' ', explanation)
        boxes[box_num] = {'answer': answer, 'explanation': explanation}

    hotspot_questions.append({
        'id': qid,
        'topic': topic,
        'question': question_text,
        'boxes': boxes,
        'count': len(boxes),
    })

print(f"HOTSPOT: {len(hotspot_questions)} questions")

# Stats
yesno_count = 0
text_count = 0
for q in hotspot_questions:
    answers = [b['answer'] for b in q['boxes'].values()]
    if all(a in ('Yes', 'No') for a in answers):
        yesno_count += 1
    else:
        text_count += 1

print(f"  Yes/No boxes: {yesno_count}")
print(f"  Text answers: {text_count}")

# Show text-answer questions
print("\n=== Text-answer HOTSPOTs ===")
for q in hotspot_questions:
    answers = [b['answer'] for b in q['boxes'].values()]
    if not all(a in ('Yes', 'No') for a in answers):
        print(f"\n{q['id']} ({q['count']} boxes):")
        print(f"  Q: {q['question'][:120]}")
        for bnum, bval in sorted(q['boxes'].items()):
            print(f"  Box {bnum}: \"{bval['answer']}\"")

with open(r'C:\Users\User\exam-quiz\hotspot_parsed.json', 'w', encoding='utf-8') as f:
    json.dump(hotspot_questions, f, ensure_ascii=False, indent=2)
print("\nSaved hotspot_parsed.json")