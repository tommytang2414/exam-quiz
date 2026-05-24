#!/usr/bin/env python3
"""
AZ-500 507题 — Final Parser (v6)
Handles ALL question types:
- Single-select MCQ: Correct Answer:A → answer: "A"
- Multi-select MCQ: Correct Answer:AB → answer: "A,B"
- Skipped: HOTSPOT, DRAG DROP, SIMULATION
- Note/does-format questions
"""

import re
from pypdf import PdfReader
from collections import Counter

PDF_PATH = r'C:\Users\User\Downloads\AZ-500 507题 题目+答案+讨论比例图.pdf'
OUTPUT = r'C:\Users\User\exam-quiz\lib\questions\az500.ts'

r = PdfReader(PDF_PATH)
print(f"Pages: {len(r.pages)}")

# Build line-by-line text
print("Reading PDF...")
all_lines = []
for page in r.pages:
    text = (page.extract_text() or '').replace('\x00', '').replace('\r', '\n')
    text = re.sub(r'\n+', '\n', text)
    for line in text.split('\n'):
        line = line.strip()
        if line:
            all_lines.append(line)

full_text = '\n'.join(all_lines)
full_text = re.sub(r'店铺：学习小店66', '', full_text)
print(f"Lines: {len(all_lines)}, chars: {len(full_text)}")

# Split into question blocks
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

print(f"Blocks: {len(blocks)}")

def parse_block(topic, qnum, block):
    block = block.strip()
    block = re.sub(r'^Topic \d+Question #\d+\n?', '', block).strip()

    # Skip special types
    if re.search(r'^HOTSPOT\s*-', block, re.MULTILINE): return None, 'HOTSPOT'
    if re.search(r'^DRAG DROP\s*-', block, re.MULTILINE): return None, 'DRAG_DROP'
    if re.search(r'^BUILD A LIST\s*-', block, re.MULTILINE): return None, 'BUILD_A_LIST'
    if re.search(r'^SIMULATION\s*-', block, re.MULTILINE): return None, 'SIMULATION'
    if re.search(r'^Introductory Info', block): return None, 'CASE_STUDY'

    # Find Correct Answer: can be "A", "AB", "ABC", etc.
    # Pattern: "Correct Answer:ABCD" with possible whitespace before newline
    ca_match = re.search(r'Correct Answer:\s*([A-Z]{1,6})\s*(?:\n|$)', block)
    if not ca_match:
        return None, 'NO_CORRECT_ANSWER'

    answer_str = ca_match.group(1)  # e.g. "A" or "AB" or "ABC"
    ca_pos = ca_match.start()
    before_ca = block[:ca_pos]
    after_ca = block[ca_match.end():].strip()

    # Extract question text: everything before first option (A. B. C. D. E.)
    opt_pattern = re.compile(r'^([A-E])\.\s*(.*)$', re.MULTILINE)
    opt_matches = list(opt_pattern.finditer(before_ca))

    if not opt_matches:
        return None, 'NO_OPTIONS'

    first_opt_start = opt_matches[0].start()
    question_text = before_ca[:first_opt_start].strip()
    question_text = re.sub(r'\s+', ' ', question_text).strip()

    if not question_text:
        return None, 'EMPTY_QUESTION'

    options = []
    for m in opt_matches:
        text = m.group(2).strip()
        text = re.sub(r'\s*Most Voted\s*$', '', text)
        options.append(text)

    if len(options) < 2:
        return None, f'TOO_FEW_OPTIONS({len(options)})'

    # Validate answer letters
    answer_letters = list(answer_str.upper())
    for letter in answer_letters:
        idx = ord(letter) - ord('A')
        if idx >= len(options):
            return None, f'ANSWER_OUT_OF_RANGE({letter}={idx}>= {len(options)})'

    # Extract explanation
    explanation = ''
    for line in after_ca.split('\n'):
        line = line.strip()
        if line and not line.startswith('Community vote') and \
           not line.startswith('Reference') and not line.startswith('店铺') and \
           not line.startswith('Incorrect Answers') and not line.startswith('Note:'):
            explanation = line
            break

    # Determine if multi-select
    is_multi = len(answer_letters) > 1

    return {
        'id': 0,
        'topic': topic,
        'text': question_text,
        'options': options,
        'answer': answer_str,  # string: "A" or "A,B" (comma-separated)
        'explanation': explanation,
        'source_qnum': qnum,
        'is_multi': is_multi,
    }, 'ok'

# Parse all blocks
questions = []
skipped = {}
fixable = []

for topic, qnum, block in blocks:
    result, status = parse_block(topic, qnum, block)
    if status != 'ok':
        skipped[status] = skipped.get(status, 0) + 1
        if status not in ['HOTSPOT', 'DRAG_DROP', 'SIMULATION', 'CASE_STUDY', 'BUILD_A_LIST']:
            fixable.append((topic, qnum, status, block[:200]))
        continue
    questions.append(result)

# Assign sequential IDs
for i, q in enumerate(questions):
    q['id'] = i + 1

# Stats
topic_counts = Counter(q['topic'] for q in questions)
multi_count = sum(1 for q in questions if q['is_multi'])
single_count = len(questions) - multi_count

print(f"\n{'='*50}")
print(f"TOTAL BLOCKS: {len(blocks)}")
print(f"MCQ PARSED:   {len(questions)} ({single_count} single, {multi_count} multi-select)")
print(f"SKIPPED:      {len(blocks) - len(questions)}")
print(f"\nSkipped breakdown:")
for k, v in sorted(skipped.items()):
    print(f"  {k:20s}: {v:3d}")

print(f"\nTopic distribution:")
for t in sorted(topic_counts.keys()):
    print(f"  Topic {t:2d}: {topic_counts[t]:3d}")

if fixable:
    print(f"\nFixable:")
    for t, q, s, b in fixable:
        print(f"  T{t}-Q{q} [{s}]: {b[:80]}")

# Generate TypeScript
# Note: answer is now string to support multi-select
lines = [
    'export interface Question {',
    '  id: number',
    '  topic: number',
    '  text: string',
    '  options: string[]',
    '  answer: number | string, // number = single-select (0-based), string = multi-select ("A,B")',
    '  explanation?: string',
    '}\n',
    'export const questions: Question[] = [',
]
for q in questions:
    t = q['text'].replace('"', '\\"')
    opts = [o.replace('"', '\\"') for o in q['options']]
    expl = q['explanation'].replace('"', '\\"') if q['explanation'] else ''
    opts_py = [f'"{o}"' for o in opts]
    ans = q['answer']
    # If single-select, use number; if multi-select, use string
    if not q['is_multi']:
        ans_val = ord(ans) - ord('A')
        lines.append(f'  {{ id: {q["id"]}, topic: {q["topic"]}, text: "{t}", options: [{", ".join(opts_py)}], answer: {ans_val}, explanation: "{expl}" }},')
    else:
        lines.append(f'  {{ id: {q["id"]}, topic: {q["topic"]}, text: "{t}", options: [{", ".join(opts_py)}], answer: "{ans}", explanation: "{expl}" }},')
lines.append(']')

with open(OUTPUT, 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print(f"\nWritten: {OUTPUT} ({len(questions)} questions)")