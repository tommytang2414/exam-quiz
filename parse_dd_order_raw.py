"""Look at raw Correct Answer sections for order questions with 0 items."""
import re, json
from pypdf import PdfReader

reader = PdfReader(r'C:\Users\User\Downloads\AZ-500 507题 题目+答案+讨论比例图.pdf')
all_text = '\n'.join(page.extract_text() or '' for page in reader.pages)

block_pat = re.compile(r'(Topic \d+[\s-]*Question #\d+)\s*\n(.*?)(?=Topic \d+[\s-]*Question #\d+|$)', re.DOTALL)
blocks = list(block_pat.finditer(all_text))

dd_order_pat = re.compile(r'(Which three actions|Which four steps|arrange|sequence|in order|perform in order)', re.IGNORECASE)

zero_item_qids = []

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

    is_order = bool(dd_order_pat.search(body))
    if not is_order:
        continue

    ca_match = re.search(r'Correct Answer:\s*\n(.*)', body, re.DOTALL | re.IGNORECASE)
    if not ca_match:
        continue

    ca_text = ca_match.group(1)[:600]
    zero_item_qids.append((qid, ca_text))

with open(r'C:\Users\User\exam-quiz\dd_order_raw_ca.txt', 'w', encoding='utf-8') as f:
    for qid, ca_text in zero_item_qids[:12]:
        f.write(f"\n=== {qid} ===\n")
        f.write(ca_text)
        f.write("\n")