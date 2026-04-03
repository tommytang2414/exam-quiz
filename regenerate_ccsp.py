#!/usr/bin/env python3
"""
Regenerate ccsp.ts from original CCSP questionbank.txt
Fixed version: proper anchor and partition logic.
"""

import re

TBANK = 'C:/Users/user/Downloads/CCSP questionbank.txt'
OUTPUT = 'C:/Users/user/exam-quiz/lib/questions/ccsp.ts'

# Fragments - common words that are NOT valid standalone options
# Only used to flag single-word options that are clearly wrong splits
# Case-insensitive check
FRAGMENTS_LOWER = {
    # Common English words that shouldn't be standalone options
    'security', 'function', 'isolation', 'boundary', 'protection',
    'key', 'establishment', 'management', 'account', 'logging',
    'in', 'on', 'to', 'for', 'of', 'the', 'and', 'or', 'is', 'are',
    'with', 'from', 'that', 'this', 'not', 'can', 'be', 'may',
    'they', 'their', 'them', 'these', 'those',
    'must', 'should', 'could', 'would', 'will', 'shall', 'might',
    # Short cloud/computing terms that get split off
    'cloud', 'service', 'customer', 'provider', 'partner', 'broker',
    'gateway', 'ingress', 'egress', 'monitoring',
    'computing', 'storage', 'network', 'oversight',
    'an', 'plan', 'data',
    'shadow', 'governance', 'analysis', 'testing',
    'engineering', 'encryption', 'masking', 'identity', 'models',
    'erasure', 'patching', 'software', 'agreement',
    'administrator', 'rest', 'exploration', 'document', 'labeling',
    'period', 'logs', 'noncompliance', 'auditor', 'classification',
    'lake', 'server', 'forensics', 'files', 'ownership', 'shell',
    'circuits', 'partitioning', 'interruption', 'damage', 'privilege',
    'exercise', 'strategies', 'floor', 'organization', 'hypervisor',
    'design', 'attack', 'app', 'protection', 'avoidance', 'failure',
    'care', 'degrees', 'zones', 'review', 'manager', 'reflection',
    'threat', 'reviews', 'box', 'vendor', 'simulation',
    'scanning', 'plaintext', 'exploit', 'actor', 'does',
    'condition', 'loss', 'controller', 'regulator', 'repository',
    'performance', 'stuffing', 'optimization', 'exercises', 'changes',
    'virtualization', 'host', 'migration', 'infrastructure', 'days',
    'servers', 'copy', 'regulations', 'fieldwork', 'requirements',
    'countries', 'policy', 'processor', 'response', 'owner',
    'elasticity', 'agreements', 'orchestration', 'contextual',
}


def all_splits(n):
    result = []
    for s1 in range(1, n - 2):
        for s2 in range(s1 + 1, n - 1):
            for s3 in range(s2 + 1, n):
                result.append([s1, s2, s3])
    return result


def find_ca_words(ca_text):
    """Extract just the answer phrase from explanation text (stop at common sentence starters)."""
    words = ca_text.lower().split()
    # Stop at sentence-starting words that are likely NOT part of the answer
    stop_words = {'in', 'the', 'a', 'an', 'it', 'this', 'that', 'when', 'which', 'as', 'for', 'to'}
    stop_idx = len(words)
    for i, w in enumerate(words):
        if i > 0 and w in stop_words and i > 2:
            stop_idx = i
            break
    result = words[:stop_idx]
    # Limit to first 2 words to avoid anchor spanning partitions
    return result[:2]


def ca_anchor_pos(words, ca_words, n):
    """Find where the correct answer anchor words appear in options."""
    if not ca_words:
        return -1, -1
    best = None
    # Try different anchor lengths (prefer longer matches)
    for n_try in range(min(len(ca_words), 5), 0, -1):
        anchor = ' '.join(ca_words[:n_try])
        for start in range(n - n_try + 1):
            seg = ' '.join(words[start:start + n_try]).lower()
            if seg == anchor:
                # Count extra matching words after the anchor
                extra = 0
                limit = len(ca_words) - n_try
                remaining = n - start - n_try
                for j in range(min(limit, remaining)):
                    if words[start + n_try + j].lower() == ca_words[n_try + j]:
                        extra += 1
                    else:
                        break
                conf = n_try * 10 + extra
                if best is None or conf > best[2]:
                    best = (start, n_try, conf)
    return (best[0], best[1]) if best else (-1, -1)


def find_answer_partition(words, ca_words, n, splits):
    """Find which partition index actually contains the full answer words."""
    # The answer words might span across partitions. Find the partition
    # that contains the LAST word of the answer.
    if not ca_words:
        return -1
    # Find where answer words start in the words array
    full_anchor = ' '.join(ca_words)
    for start in range(n - len(ca_words) + 1):
        seg = ' '.join(words[start:start + len(ca_words)]).lower()
        if seg == full_anchor.lower():
            # Answer words found at position 'start' to 'start + len(ca_words) - 1'
            answer_end_pos = start + len(ca_words) - 1
            # Find which partition contains answer_end_pos
            for pi in range(len(splits) - 1):
                if splits[pi] <= answer_end_pos < splits[pi + 1]:
                    return pi
    return -1


def smart_partition(words, n, ca_text, answer_idx):
    """Find valid 4-way partition using CA anchor."""
    if n < 4:
        return None
    ca_words = find_ca_words(ca_text)
    ca_pos, ca_len = ca_anchor_pos(words, ca_words, n)
    if ca_pos < 0:
        return None

    # Try all split combinations
    best = None
    best_score = float('inf')

    for sp in all_splits(n):
        splits = [0] + sp + [n]
        # Find which partition the answer is actually in
        ans_part = find_answer_partition(words, ca_words[:ca_len], n, splits)
        if ans_part < 0:
            continue  # Can't find answer in any partition
        # Check if CA anchor is in the answer option (expanded: allow boundary)
        # Allow if anchor is at the start of answer partition OR spans into it
        in_answer = (splits[ans_part] <= ca_pos < splits[ans_part + 1]) or \
                    (ca_pos < splits[ans_part] and splits[ans_part] - ca_pos <= 2)
        if not in_answer:
            continue
        parts = [' '.join(words[splits[i]:splits[i+1]]) for i in range(4)]

        # Check for single-word fragment options (case-insensitive)
        skip = False
        for p in parts:
            pw = p.split()
            if len(pw) == 1 and pw[0].lower() in FRAGMENTS_LOWER:
                skip = True
                break
        if skip:
            continue

        # Verify anchor words are in the answer option
        # The anchor may span multiple partitions, so check if answer option STARTS with the anchor
        # OR if the anchor is contained within (may span across partitions)
        opt_words = words[splits[answer_idx]:splits[answer_idx + 1]]
        opt_lower = ' '.join(opt_words).lower()
        anchor_phrase = ' '.join(ca_words[:ca_len])
        # Check if option starts with anchor
        if opt_lower.startswith(anchor_phrase):
            pass  # Good
        elif opt_lower.find(anchor_phrase) >= 0:
            pass  # Anchor contained (may span partitions)
        else:
            continue

        # Score: prefer balanced partitions
        lens = [splits[i + 1] - splits[i] for i in range(4)]
        bal = max(lens) - min(lens)
        ans_size = lens[ans_part]
        # Penalize if answer option is too small
        size_penalty = max(0, 3 - ans_size) * 5
        score = bal + size_penalty
        if score < best_score:
            best_score = score
            best = parts

    return best


def equal_partition(words, n):
    """Fallback: equal partition."""
    if n < 4:
        return None
    q, r = divmod(n, 4)
    parts = [q] * 4
    for i in range(r):
        parts[i] += 1
    sp = [0]
    acc = 0
    for p in parts:
        acc += p
        sp.append(acc)
    return [' '.join(words[sp[i]:sp[i + 1]]) for i in range(4)]


def js_esc(s):
    s = s.replace('\\', '\\\\')
    s = s.replace('"', '\\"')
    s = s.replace('\n', ' ')
    s = s.replace('\r', '')
    return s


with open(TBANK, 'r', encoding='utf-8', errors='replace') as f:
    raw = f.read()

blocks = re.split(r'(?=Question#\d+Topic)', raw)
print(f'Total blocks: {len(blocks)-1}')

output_lines = [
    'export interface Question {',
    '  id: number',
    '  text: string',
    '  options: string[]',
    '  answer: number // 0-based index',
    '  explanation?: string',
    '  domain?: number // 1-6 CCSP domain',
    '}',
    '',
    'export const questions: Question[] = [',
]

OK_COUNT = 0
BAD_COUNT = 0
PROBLEMS = []
qid = 1

for block in blocks[1:]:
    m_q = re.match(r'Question#(\d+)Topic(\d+)\s+(.*)$', block)
    if not m_q:
        BAD_COUNT += 1
        continue

    after_topic = m_q.group(3)
    topic_num = int(m_q.group(2))  # Topic number (1-6)

    # Find Correct Answer and Explanation (search AFTER the question mark)
    qmark = after_topic.find('?')
    if qmark == -1:
        BAD_COUNT += 1
        continue

    after_q = after_topic[qmark + 1:]
    m_ca = re.search(r'Correct Answer: ([A-Z])', after_q)
    m_expl = re.search(r'Explanation:', after_q)
    if not (m_ca and m_expl):
        BAD_COUNT += 1
        continue

    ca_pos_in_afterq = m_ca.start()
    answer_letter = m_ca.group(1)
    answer_idx = ord(answer_letter) - ord('A')

    # Extract options: between ? and Correct Answer
    options_raw = after_topic[qmark + 1:qmark + 1 + ca_pos_in_afterq].strip()
    # Remove xmexam garbage
    options_raw = re.sub(r'xmexam\.taobao\.com\s*', '', options_raw).strip()
    options_raw = re.sub(r'xmexam\.taobao\.com', '', options_raw).strip()

    words = options_raw.split()
    n = len(words)

    # Extract question text and explanation
    question_text = after_topic[:qmark + 1].strip()
    question_text = re.sub(r'\s+', ' ', question_text)
    question_text = re.sub(r'^\d+\s+', '', question_text)  # strip leading topic num

    # Remove xmexam from question text too
    question_text = re.sub(r'xmexam\.taobao\.com\s*', '', question_text).strip()

    # Explanation: from "Explanation:" to end of block
    explanation = after_topic[m_expl.start():].strip()
    explanation = re.sub(r'^Explanation:\s*', '', explanation).strip()
    # ca_for_anchor = first sentence (before first period)
    ca_sentence = explanation.split('.')[0].strip() if explanation else ''
    # Strip "Correct answer: " prefix if present
    ca_for_anchor = re.sub(r'^Correct answer:\s*', '', ca_sentence, flags=re.IGNORECASE).strip()
    if not ca_for_anchor:
        ca_for_anchor = ca_sentence

    # Partition: try equal first, fall back to smart if result has obvious fragments
    if n >= 4:
        opts = equal_partition(words, n)
        # Verify equal_partition result: answer should be in the answer_idx partition
        # If not, try smart_partition
        eq_opts_check = [' '.join(opts[i].split()).lower() for i in range(4)] if opts else []
        ca_words_limited = ca_for_anchor.lower().split()[:2]
        if eq_opts_check and ca_words_limited:
            ans_opt_text = eq_opts_check[answer_idx]
            ca_phrase = ' '.join(ca_words_limited)
            if ans_opt_text.find(ca_phrase) < 0:
                # Answer not in correct partition, try smart_partition
                opts_sp = smart_partition(words, n, ca_for_anchor, answer_idx)
                if opts_sp:
                    opts = opts_sp
        if opts is None:
            opts = equal_partition(words, n)
    else:
        opts = equal_partition(words, n if n > 0 else 4)
        PROBLEMS.append({'id': qid, 'issue': 'n<4', 'words': words})
        BAD_COUNT += 1

    # Validate: must have exactly 4 options, no empty or obviously corrupted
    is_bad = False
    if not opts or len(opts) != 4:
        is_bad = True
    else:
        for o in opts:
            ow = o.split()
            if len(ow) == 0:
                is_bad = True
                break
            # Also check for obviously wrong content
            if 'Correct Answer' in o or 'Explanation' in o or 'xmexam' in o.lower():
                is_bad = True
                break

    if is_bad:
        BAD_COUNT += 1
        PROBLEMS.append({'id': qid, 'issue': 'bad_opts', 'opts': opts, 'words': words[:20]})
    else:
        OK_COUNT += 1

    # Build entry
    opts_final = opts if opts and len(opts) == 4 else ['CORRUPTED'] * 4
    text_esc = js_esc(question_text)
    opts_esc = [js_esc(o) for o in opts_final]
    expl_esc = js_esc(explanation.split('.')[0].strip() if explanation else '')

    entry = (
        '  {{\n'
        '    id: {id},\n'
        '    text: "{text}",\n'
        '    options: ["{opts}"],\n'
        '    answer: {ans},\n'
        '    explanation: "{expl}",\n'
        '    domain: {domain}\n'
        '  }},'
    ).format(
        id=qid,
        domain=topic_num,
        text=text_esc,
        opts='", "'.join(opts_esc),
        ans=answer_idx,
        expl=expl_esc,
    )
    output_lines.append(entry)
    qid += 1

output_lines.append(']')

with open(OUTPUT, 'w', encoding='utf-8') as f:
    f.write('\n'.join(output_lines))

print(f'OK: {OK_COUNT}, BAD: {BAD_COUNT}, Total: {qid - 1}')
print(f'Output: {OUTPUT}')
print(f'\nProblem questions ({len(PROBLEMS)}):')
for p in PROBLEMS[:20]:
    print(f'  Q{p["id"]}: {p["issue"]}')
    if 'opts' in p:
        print(f'    opts: {p["opts"]}')
    if 'words' in p:
        print(f'    words: {p["words"]}')
