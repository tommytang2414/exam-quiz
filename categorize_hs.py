import re
from pypdf import PdfReader

reader = PdfReader(r'C:\Users\User\Downloads\AZ-500 507题 题目+答案+讨论比例图.pdf')
all_text = '\n'.join(page.extract_text() or '' for page in reader.pages)

block_pat = re.compile(r'(Topic \d+[\s-]*Question #\d+)\s*\n(.*?)(?=Topic \d+[\s-]*Question #\d+|$)', re.DOTALL)
blocks = list(block_pat.finditer(all_text))
hot = [(i, m) for i, m in enumerate(blocks) if re.search(r'HOTSPOT', m.group(2))]

# Categorize: has_box=True vs False
with_box = []
without_box = []

for i, m in hot:
    body = m.group(2)
    ca_m = re.search(r'Correct Answer:\s*\n(.*)', body, re.DOTALL | re.IGNORECASE)
    ca_text = ca_m.group(1) if ca_m else ''
    has = 'Box ' in ca_text

    topic_m = re.search(r'Topic (\d+)', m.group(1))
    topic = topic_m.group(1) if topic_m else '?'

    qnum_m = re.search(r'Question #(\d+)', m.group(1))
    qnum = qnum_m.group(1) if qnum_m else '?'

    if has:
        with_box.append(f"T{topic}-Q{qnum}")
    else:
        without_box.append((topic, qnum, ca_text[:80]))

print(f"With boxes: {len(with_box)}")
print(f"Without boxes: {len(without_box)}")
print(f"\nWithout boxes by topic:")
by_topic = {}
for t, q, ca in without_box:
    by_topic.setdefault(t, []).append(q)

for t in sorted(by_topic.keys()):
    qs = by_topic[t]
    print(f"  Topic {t}: {len(qs)} questions, Q#s: {','.join(qs)}")

print(f"\nSample 'without box' CA texts:")
for t, q, ca in without_box[:15]:
    print(f"  T{t}-Q{q}: {repr(ca)}")