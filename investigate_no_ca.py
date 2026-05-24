#!/usr/bin/env python3
"""Investigate NO_CORRECT_ANSWER questions."""
from pypdf import PdfReader
import re

r = PdfReader(r'C:\Users\User\Downloads\AZ-500 507题 题目+答案+讨论比例图.pdf')

all_lines = []
for page in r.pages:
    text = (page.extract_text() or '').replace('\x00', '').replace('\r', '\n')
    text = re.sub(r'\n+', '\n', text)
    for line in text.split('\n'):
        line = line.strip()
        if line:
            all_lines.append(line)

all_text = '\n'.join(all_lines)
all_text = re.sub(r'店铺：学习小店66', '', all_text)

question_starts = []
for i, line in enumerate(all_lines):
    m = re.match(r'Topic (\d+)Question #(\d+)', line)
    if m:
        question_starts.append((i, int(m.group(1)), int(m.group(2))))

blocks = []
for idx in range(len(question_starts)):
    start_i = question_starts[idx][0]
    end_i = question_starts[idx+1][0] if idx+1 < len(question_starts) else len(all_lines)
    topic = question_starts[idx][1]
    qnum = question_starts[idx][2]
    block_text = '\n'.join(all_lines[start_i:end_i])
    blocks.append((topic, qnum, block_text))

# Show all NO_CORRECT_ANSWER blocks
no_ca_qs = [
    (1, 21), (1, 27), (1, 32), (1, 42),
    (2, 14), (2, 17), (2, 34), (2, 40), (2, 42), (2, 61), (2, 98), (2, 107),
    (3, 1), (3, 36),
    (4, 21), (4, 31), (4, 38), (4, 78), (4, 125),
    (5, 20), (5, 45), (5, 60),
    (6, 19),
    (18, 1)
]

for topic, qnum in no_ca_qs:
    for t, q, block in blocks:
        if t == topic and q == qnum:
            block_clean = re.sub(r'^Topic \d+Question #\d+\n?', '', block).strip()
            # Find where Correct Answer is
            ca_pos = block_clean.find('Correct Answer')
            if ca_pos == -1:
                print(f'=== T{topic}-Q{qnum}: NO "Correct Answer" STRING FOUND ===')
                print(block_clean[:300])
                print()
            else:
                print(f'=== T{topic}-Q{qnum}: CA at pos {ca_pos} ===')
                print(block_clean[ca_pos:ca_pos+50])
                print()
            break