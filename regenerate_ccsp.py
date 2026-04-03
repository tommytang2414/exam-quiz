#!/usr/bin/env python3
"""
Regenerate ccsp.ts from original CCSP questionbank.txt
Using improved CA anchor algorithm with case-insensitive FRAGMENTS check.
"""

import re
import sys

TBANK = 'C:/Users/user/Downloads/CCSP questionbank.txt'
OUTPUT = 'C:/Users/user/exam-quiz/lib/questions/ccsp.ts'

FRAGMENTS = {
    'Security', 'Function', 'Isolation', 'Boundary', 'Protection',
    'Key', 'Establishment', 'Management', 'Account', 'Logging',
    'In', 'On', 'To', 'For', 'Of', 'The', 'And', 'Or', 'Is', 'Are',
    'With', 'From', 'That', 'This', 'Not', 'Can', 'Be', 'May',
    'They', 'Their', 'Them', 'This', 'That', 'These', 'Those',
    'Must', 'Should', 'Could', 'Would', 'Will', 'Shall', 'Might',
    'API', 'SaaS', 'PaaS', 'IaaS', 'FaaS', 'VPC', 'VPN', 'DNS',
    'SIEM', 'IAM', 'RBAC', 'OAuth', 'SAML', 'SSO', 'MFA',
    'CSP', 'CSC', 'PII', 'PHI', 'PCI', 'DSS', 'GDPR',
    'ISO', 'NIST', 'FIPS', 'FedRAMP', 'CSA', 'STAR', 'CSF',
    'Cloud', 'Service', 'Customer', 'Provider', 'Partner', 'Broker',
    'Gateway', 'Ingress', 'Egress', 'Monitoring', 'Contextual',
    'Based', 'architecture', 'Architectures', 'Reference', 'certifications',
    'SSAE', 'Responsibility', 'matrices',
}
FRAGMENTS_LOWER = {f.lower() for f in FRAGMENTS}


def all_splits(n):
    """All 3-way split points for n words into 4 parts."""
    result = []
    for s1 in range(1, n - 2):
        for s2 in range(s1 + 1, n - 1):
            for s3 in range(s2 + 1, n):
                result.append([s1, s2, s3])
    return result


def ca_anchor_pos(words, ca_text, n):
    """Find where the correct answer anchor words appear in the options."""
    ca_words = ca_text.lower().split()
    if not ca_words:
        return -1, -1
    best = None
    for n_try in range(1, min(8, len(ca_words) + 1)):
        anchor = ' '.join(ca_words[:n_try])
        for start in range(n - n_try + 1):
            seg = ' '.join(words[start:start + n_try]).lower()
            if seg == anchor:
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


def smart_partition(words, n, ca_text, answer_idx):
    """Try to find a valid 4-way partition using CA anchor."""
    if n < 4:
        return None
    ca_pos, ca_len = ca_anchor_pos(words, ca_text, n)
    if ca_pos < 0:
        return None

    # ca_words limited to first 4 for anchor matching
    ca_words_limited = ca_text.lower().split()[:4]
    ca_first = ca_words_limited[0]
    ca_len = len(ca_words_limited)

    best = None
    best_score = float('inf')

    for sp in all_splits(n):
        splits = [0] + sp + [n]
        # Check if CA anchor is in the answer option
        if not (splits[answer_idx] <= ca_pos < splits[answer_idx + 1]):
            continue
        opt_words = words[splits[answer_idx]:splits[answer_idx + 1]]
        opt_text = ' '.join(opt_words).lower()
        if not opt_text.startswith(ca_first):
            continue
        if len(opt_words) < ca_len:
            continue
        match = all(opt_words[k].lower() == ca_words_limited[k] for k in range(ca_len))
        if not match:
            continue

        # Check for FRAGMENTS (case-insensitive)
        parts = [' '.join(words[splits[i]:splits[i+1]]) for i in range(4)]
        skip = False
        for p in parts:
            pw = p.split()
            if len(pw) == 1 and pw[0].lower() in FRAGMENTS_LOWER:
                skip = True
                break
        if skip:
            continue

        lens = [splits[i + 1] - splits[i] for i in range(4)]
        bal = max(lens) - min(lens)
        ans_size = lens[answer_idx]
        size_penalty = max(0, ans_size - 12) * 2 + max(0, 3 - ans_size) * 3
        score = bal + size_penalty
        if score < best_score:
            best_score = score
            best = parts

    return best


def equal_partition(words, n):
    """Fallback: equal partition."""
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
    '}',
    '',
    'export const questions: Question[] = [',
]

OK_COUNT = 0
BAD_COUNT = 0
qid = 1

for block in blocks[1:]:
    m_q = re.match(r'Question#\d+Topic(\d+)\s+(.*)$', block)
    if not m_q:
        continue

    topic_num = m_q.group(1)
    after_topic = m_q.group(2)

    m_ca = re.search(r'Correct Answer: ([A-Z])', block)
    m_expl = re.search(r'Explanation:\s*Correct answer:\s*([^.]+)', block)
    if not (m_ca and m_expl):
        BAD_COUNT += 1
        continue

    answer_letter = m_ca.group(1)
    answer_idx = ord(answer_letter) - ord('A')
    ca_text = m_expl.group(1).strip()
    if ca_text.startswith(','):
        ca_text = ca_text[1:].strip()

    # Question text: up to first ?
    qmark = after_topic.find('?')
    if qmark == -1:
        BAD_COUNT += 1
        continue
    question_text = after_topic[:qmark + 1].strip()
    question_text = re.sub(r'\s+', ' ', question_text)
    question_text = re.sub(r'^\d+\s+', '', question_text)  # strip leading topic num

    # Options raw: between ? and Correct Answer
    options_raw = after_topic[qmark + 1:m_ca.start()].strip()
    options_raw = re.sub(r'xmexam\.taobao\.com\s*', '', options_raw).strip()
    # Remove any remaining xmexam
    options_raw = re.sub(r'xmexam\.taobao\.com', '', options_raw).strip()

    words = options_raw.split()
    n = len(words)

    # Partition into 4 options
    if n >= 4:
        opts = smart_partition(words, n, ca_text, answer_idx)
        if opts is None:
            opts = equal_partition(words, n)
    else:
        opts = equal_partition(words, n if words else 4)
        BAD_COUNT += 1

    # Check if clean (no single-word fragment options)
    parts_check = [' '.join(opts[i].split()) for i in range(4)] if opts else []
    is_clean = opts and all(len(o.split()) >= 1 for o in opts) and len(opts) == 4

    # Check for fragment words (case-insensitive)
    has_frag = False
    if opts:
        for o in opts:
            ow = o.split()
            if len(ow) == 1 and ow[0].lower() in FRAGMENTS_LOWER:
                has_frag = True
                break

    if is_clean and not has_frag:
        OK_COUNT += 1
    else:
        BAD_COUNT += 1

    # Build explanation
    explanation = ca_text.lstrip(',').strip()

    # Escape
    text_esc = js_esc(question_text)
    opts_esc = [js_esc(o) for o in (opts if opts else ['CORRUPTED'] * 4)]
    expl_esc = js_esc(explanation)

    entry = (
        '  {{\n'
        '    id: {id},\n'
        '    text: "{text}",\n'
        '    options: ["{opts}"],\n'
        '    answer: {ans},\n'
        '    explanation: "{expl}"\n'
        '  }},'
    ).format(
        id=qid,
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
