"""Inspect raw CA for SELECT-type DRAG DROP questions."""
import re
from pypdf import PdfReader

reader = PdfReader(r'C:\Users\User\Downloads\AZ-500 507题 题目+答案+讨论比例图.pdf')
all_text = '\n'.join(page.extract_text() or '' for page in reader.pages)

block_pat = re.compile(r'(Topic \d+[\s-]*Question #\d+)\s*\n(.*?)(?=Topic \d+[\s-]*Question #\d+|$)', re.DOTALL)
blocks = list(block_pat.finditer(all_text))

select_qids = ['T1-Q43', 'T2-Q80', 'T2-Q89', 'T2-Q95', 'T2-Q97', 'T2-Q115', 'T2-Q119',
               'T3-Q14', 'T3-Q51', 'T4-Q27', 'T4-Q59', 'T6-Q1']

with open(r'C:\Users\User\exam-quiz\dd_select_raw.txt', 'w', encoding='utf-8') as f:
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

        if qid not in select_qids:
            continue

        # Question text
        qs_pat = re.compile(r'(.*?)(?=\n\s*(Correct Answer|Select and Place|店铺)|$)', re.DOTALL)
        qs_m = qs_pat.search(body)
        question_text = qs_m.group(1).strip() if qs_m else ''
        question_text = re.sub(r'^DRAG DROP\s*[-–]?\s*\n', '', question_text, flags=re.IGNORECASE).strip()
        question_text = re.sub(r'店铺：.*', '', question_text).strip()
        question_text = re.sub(r'\n{3,}', '\n\n', question_text)

        ca_match = re.search(r'Correct Answer:\s*\n(.*?)(?=\n\s*(店铺|Note|Reference|https?://)|$)', body, re.DOTALL | re.IGNORECASE)
        ca_text = ca_match.group(1) if ca_match else ''

        f.write(f"\n{'='*60}\n")
        f.write(f"{qid}\n")
        f.write(f"{'='*60}\n")
        f.write(f"QUESTION:\n{question_text}\n\n")
        f.write(f"CORRECT ANSWER SECTION:\n{ca_text}\n")
        f.write("\n")