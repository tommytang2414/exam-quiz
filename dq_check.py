#!/usr/bin/env python3
"""AZ-500 data quality analysis."""
from pypdf import PdfReader
import re

r = PdfReader(r'C:\Users\User\Downloads\AZ-500 507题 题目+答案+讨论比例图.pdf')

# Build full text in one shot
print("Reading PDF...")
all_text = ''
for page in r.pages:
    text = page.extract_text() or ''
    text = text.replace('\x00', '').replace('\r', '\n')
    text = re.sub(r'\n+', '\n', text).strip()
    all_text += text + '\n'

all_text = re.sub(r'店铺：学习小店66', '', all_text)
print(f"Total chars: {len(all_text)}")

# Split blocks
question_starts = list(re.finditer(r'Topic (\d+)Question #(\d+)', all_text))
blocks = []
for i, m in enumerate(question_starts):
    topic = int(m.group(1))
    qnum = int(m.group(2))
    start = m.start()
    end = question_starts[i+1].start() if i+1 < len(question_starts) else len(all_text)
    blocks.append((topic, qnum, all_text[start:end]))

print(f"Blocks: {len(blocks)}")

# Fixable ones
fixable_qs = {
    'T1-Q29': (1, 29), 'T2-Q123': (2, 123), 'T3-Q68': (3, 68),
    'T4-Q35': (4, 35), 'T4-Q64': (4, 64), 'T4-Q77': (4, 77),
    'T4-Q114': (4, 114), 'T5-Q15': (5, 15), 'T5-Q60': (5, 60), 'T6-Q30': (6, 30)
}

for label, (topic, qnum) in fixable_qs.items():
    for t, q, block in blocks:
        if t == topic and q == qnum:
            block_clean = re.sub(r'^Topic \d+Question #\d+\n?', '', block).strip()
            fname = f'C:/Users/user/exam-quiz/fix_{label.replace("-", "_")}.txt'
            with open(fname, 'w', encoding='utf-8') as f:
                f.write(block_clean)
            print(f"{label}: {len(block_clean)} chars written")
            break

print("Done")