#!/usr/bin/env python3
"""
AZ-500 507题 — Final Parser (v5)
Handles ALL 506 question blocks:
- Standard MCQ (A-E), CA on same or next line
- Note: prefix blocks (does/satisfy format)
- 2/3/4/5/6 option questions
- Skips: HOTSPOT, DRAG DROP, BUILD A LIST, SIMULATION
- Records reason for each skipped question
"""

import re
from pypdf import PdfReader

PDF_PATH = r'C:\Users\User\Downloads\AZ-500 507题 题目+答案+讨论比例图.pdf'
OUTPUT = r'C:\Users\User\exam-quiz\lib\questions\az500.ts'
REPORT = r'C:\Users\User\exam-quiz\dq_report.txt'

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
full_text = re.sub(r'\n{3,}', '\n\n', full_text)
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

# ─── Parse ───────────────────────────────────────────────────────────────────

def parse_block(topic, qnum, block):
    """Returns (question_dict, status_str). status != 'ok' means skipped."""
    block = block.strip()
    block = re.sub(r'^Topic \d+Question #\d+\n?', '', block).strip()

    # Skip special types
    if re.search(r'^HOTSPOT\s*-', block, re.MULTILINE):
        return None, 'HOTSPOT'
    if re.search(r'^DRAG DROP\s*-', block, re.MULTILINE):
        return None, 'DRAG_DROP'
    if re.search(r'^BUILD A LIST\s*-', block, re.MULTILINE):
        return None, 'BUILD_A_LIST'
    if re.search(r'^SIMULATION\s*-', block, re.MULTILINE):
        return None, 'SIMULATION'

    # ── Find Correct Answer ──
    # Pattern 1: "Correct Answer:X" on same line
    ca_match = re.search(r'Correct Answer:([A-Z])\s*(?:\n|$)', block)
    # Pattern 2: "Correct Answer:\n  B" (next line)
    if not ca_match:
        ca_match = re.search(r'Correct Answer:\s*\n\s*([A-Z])\s*$', block)
    # Pattern 3: "Correct Answer:\nB" anywhere
    if not ca_match:
        ca_match = re.search(r'Correct Answer:\s*\n\s*([A-Z])', block)

    if not ca_match:
        return None, 'NO_CORRECT_ANSWER'

    answer_letter = ca_match.group(1)
    answer_idx = ord(answer_letter) - ord('A')
    ca_pos = ca_match.start()

    before_ca = block[:ca_pos]
    after_ca = block[ca_match.end():].strip()

    # ── Extract question text ──
    # Remove "Note: ..." prefix (everything before first real question line)
    note_lines = []
    q_text_lines = []
    in_options = False

    for line in before_ca.split('\n'):
        line = line.strip()
        if not line:
            continue
        # Detect options start
        if re.match(r'^[A-E]\.\s', line):
            in_options = True
        if not in_options:
            note_lines.append(line)
        else:
            q_text_lines.append(line)  # shouldn't happen if options already started

    # Re-assemble: the question text is everything before the A. B. C. D. E options
    opt_pattern = re.compile(r'^([A-E])\.\s*(.*)$', re.MULTILINE)
    opt_matches = list(opt_pattern.finditer(before_ca))

    if not opt_matches:
        # Try to find options differently - maybe "A. Yes B. No" on same line
        # Handle cases where options are space-separated on same line
        same_line_opts = re.findall(r'\b([A-E])\.\s+([^\n]+?)(?=\s+[A-E]\.|\s*$)', before_ca)
        if same_line_opts:
            options = [text.strip() for _, text in same_line_opts]
            options = [re.sub(r'\s*Most Voted\s*$', '', o) for o in options]
            question_text = before_ca[:before_ca.find(options[0])].strip() if options else before_ca.strip()
            question_text = re.sub(r'\s+', ' ', question_text).strip()
        else:
            return None, 'NO_OPTIONS'
    else:
        first_opt_start = opt_matches[0].start()
        question_text = before_ca[:first_opt_start].strip()
        question_text = re.sub(r'\s+', ' ', question_text).strip()
        options = [m.group(2).strip() for m in opt_matches]
        options = [re.sub(r'\s*Most Voted\s*$', '', o) for o in options]

    if not question_text:
        return None, 'EMPTY_QUESTION'

    if len(options) < 2:
        return None, f'TOO_FEW_OPTIONS({len(options)})'

    if answer_idx >= len(options):
        return None, f'ANSWER_OUT_OF_RANGE({answer_letter}={answer_idx}>= {len(options)})'

    # ── Extract explanation ──
    explanation = ''
    for line in after_ca.split('\n'):
        line = line.strip()
        if line and not line.startswith('Community vote') and \
           not line.startswith('Reference') and not line.startswith('店铺') and \
           not line.startswith('Incorrect Answers') and not line.startswith('Note:'):
            explanation = line
            break

    return {
        'id': 0,
        'topic': topic,
        'text': question_text,
        'options': options,
        'answer': answer_idx,
        'explanation': explanation,
        'source_qnum': qnum,
    }, 'ok'


# ─── Parse all blocks ───────────────────────────────────────────────────────
questions = []
skipped = {}
fixable = []

for topic, qnum, block in blocks:
    result, status = parse_block(topic, qnum, block)
    if status != 'ok':
        skipped[status] = skipped.get(status, 0) + 1
        if status == 'NO_OPTIONS' or status == 'EMPTY_QUESTION' or \
           status.startswith('TOO_FEW') or status.startswith('NO_CORRECT'):
            fixable.append((topic, qnum, status, block[:200]))

        # Special: NO_CORRECT_ANSWER - try to fix T5-Q60 style
        if status == 'NO_CORRECT_ANSWER':
            # Check if this might be a question with the answer embedded differently
            # e.g., "Correct Answer:\nB" was the pattern
            alt_match = re.search(r'Correct Answer\s*:\s*([A-Z])\s*\n', block)
            if not alt_match:
                # Try one more time - scan for "Answer:" without "Correct"
                alt_match2 = re.search(r'^Answer\s*:\s*([A-Z])', block, re.MULTILINE)
                if not alt_match2:
                    pass  # truly no answer
        continue
    questions.append(result)

# Assign sequential IDs
for i, q in enumerate(questions):
    q['id'] = i + 1

# ─── Report ─────────────────────────────────────────────────────────────────
total = len(blocks)
mcq_total = total - sum(skipped.get(k, 0) for k in ['HOTSPOT', 'DRAG_DROP', 'BUILD_A_LIST', 'SIMULATION'])
from collections import Counter
topic_counts = Counter(q['topic'] for q in questions)

print(f"\n{'='*50}")
print(f"TOTAL BLOCKS: {total}")
print(f"MCQ PARSED:   {len(questions)}")
print(f"SKIPPED:      {total - len(questions)}")
print(f"\nSkipped breakdown:")
for k, v in sorted(skipped.items()):
    pct = v/total*100
    print(f"  {k:20s}: {v:3d} ({pct:.1f}%)")
print(f"\nTopic distribution:")
for t in sorted(topic_counts.keys()):
    print(f"  Topic {t:2d}: {topic_counts[t]:3d}")

print(f"\nFixable (no answer / no options):")
for t, q, s, b in fixable:
    print(f"  T{t}-Q{q} [{s}]: {b[:80]}")

# ─── Write TypeScript ────────────────────────────────────────────────────────
lines = [
    'export interface Question {',
    '  id: number',
    '  topic: number',
    '  text: string',
    '  options: string[]',
    '  answer: number',
    '  explanation?: string',
    '}\n',
    'export const questions: Question[] = [',
]
for q in questions:
    t = q['text'].replace('"', '\\"')
    opts = [o.replace('"', '\\"') for o in q['options']]
    expl = q['explanation'].replace('"', '\\"') if q['explanation'] else ''
    opts_py = [f'"{o}"' for o in opts]
    lines.append(f'  {{ id: {q["id"]}, topic: {q["topic"]}, text: "{t}", options: [{", ".join(opts_py)}], answer: {q["answer"]}, explanation: "{expl}" }},')
lines.append(']')

with open(OUTPUT, 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print(f"\nWritten: {OUTPUT} ({len(questions)} questions)")

# ─── Write DQ report ───────────────────────────────────────────────────────
report_lines = [
    f"AZ-500 Data Quality Report",
    f"=" * 50,
    f"Total question blocks: {total}",
    f"MCQ parsed: {len(questions)}",
    f"Skipped: {total - len(questions)}",
    f"",
    f"Skipped breakdown:",
]
for k, v in sorted(skipped.items()):
    report_lines.append(f"  {k}: {v}")
report_lines.append("")
report_lines.append("Fixable (need manual review):")
for t, q, s, b in fixable:
    report_lines.append(f"  T{t}-Q{q} [{s}]: {b[:100]}")

with open(REPORT, 'w', encoding='utf-8') as f:
    f.write('\n'.join(report_lines))
print(f"Report: {REPORT}")