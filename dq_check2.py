#!/usr/bin/env python3
"""AZ-500 full quality check - write fixable blocks."""
from pypdf import PdfReader
import re

r = PdfReader(r'C:\Users\User\Downloads\AZ-500 507题 题目+答案+讨论比例图.pdf')

# Build full text line by line (streaming approach)
all_lines = []
for page in r.pages:
    text = page.extract_text() or ''
    text = text.replace('\x00', '').replace('\r', '\n')
    text = re.sub(r'\n+', '\n', text)
    for line in text.split('\n'):
        line = line.strip()
        if line:
            all_lines.append(line)

full_text = '\n'.join(all_lines)
full_text = re.sub(r'店铺：学习小店66', '', full_text)
print(f"Lines: {len(all_lines)}, chars: {len(full_text)}")

# Split into blocks
question_starts = []
for i, line in enumerate(all_lines):
    m = re.match(r'Topic (\d+)Question #(\d+)', line)
    if m:
        question_starts.append((i, int(m.group(1)), int(m.group(2))))

print(f"Question starts: {len(question_starts)}")

# Build blocks
blocks = []
for idx in range(len(question_starts)):
    start_line_idx = question_starts[idx][0]
    end_line_idx = question_starts[idx+1][0] if idx+1 < len(question_starts) else len(all_lines)
    topic = question_starts[idx][1]
    qnum = question_starts[idx][2]
    block_text = '\n'.join(all_lines[start_line_idx:end_line_idx])
    blocks.append((topic, qnum, block_text))

print(f"Blocks: {len(blocks)}")

# Fixable
fixable_qs = [
    (1, 29), (2, 123), (3, 68), (4, 35), (4, 64), (4, 77),
    (4, 114), (5, 15), (5, 60), (6, 30)
]

for topic, qnum in fixable_qs:
    for t, q, block in blocks:
        if t == topic and q == qnum:
            block_clean = re.sub(r'^Topic \d+Question #\d+\n?', '', block).strip()
            fname = f'C:/Users/user/exam-quiz/fix_T{topic}_Q{qnum}.txt'
            with open(fname, 'w', encoding='utf-8') as f:
                f.write(block_clean)
            print(f"T{topic}-Q{qnum}: {len(block_clean)} chars")
            break