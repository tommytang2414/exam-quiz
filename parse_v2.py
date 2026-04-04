#!/usr/bin/env python3
"""
CCSP Question Bank Parser v2
Improved algorithm:
1. Extract FULL correct-answer text by matching longest prefix of
   explanation "Correct answer: X..." against options_raw
2. Use exact match as anchor to split before/after
3. Split chunks by capital-letter word boundaries
"""

import re

TBANK = 'C:/Users/user/Downloads/CCSP questionbank.txt'
OUTPUT = 'C:/Users/user/exam-quiz/lib/questions/ccsp.ts'
DRY_RUN = False  # Set True to skip writing output


def find_in_options(phrase: str, options_raw: str) -> str | None:
    """
    Find phrase in options_raw with proper word boundaries.
    Returns the matched text in original case (including a trailing period if
    the option ends with one), or None if not found.

    End boundary: space, period, comma, closing paren, or end of string.
    The period is included in the returned text when present — this is important
    for sentence-style options like "Yes, there could be." where the explanation
    drops the terminal period when splitting on '.'.
    """
    opts_lower = options_raw.lower()
    phrase_lower = phrase.lower()
    pos = 0
    while pos < len(opts_lower):
        idx = opts_lower.find(phrase_lower, pos)
        if idx < 0:
            break
        before_ok = (idx == 0 or opts_lower[idx - 1] == ' ')
        end_idx = idx + len(phrase)
        after_char = opts_lower[end_idx] if end_idx < len(opts_lower) else ''
        after_ok = (after_char == '' or after_char in ' .,)')
        if before_ok and after_ok:
            # Include a trailing period in the returned text so the 'after'
            # chunk starts cleanly at the next option.
            actual_end = end_idx + (1 if after_char == '.' else 0)
            return options_raw[idx:actual_end].strip()
        pos = idx + 1
    return None


def find_all_cap_splits(text: str) -> list[int]:
    """
    Return character positions where a new option can start.
    A split is valid at position i if text[i] is an uppercase letter
    and i > 0 (not the very start).
    """
    positions = []
    words = text.split(' ')
    char_pos = 0
    for i, word in enumerate(words):
        if i > 0 and word and word[0].isupper():
            positions.append(char_pos)
        char_pos += len(word) + 1  # +1 for space
    return positions


def split_chunk(text: str, n_parts: int) -> list[str] | None:
    """
    Split text into n_parts using capital-letter word boundaries.
    Returns None if can't split cleanly.
    """
    text = text.strip()
    if n_parts == 1:
        return [text] if text else None
    if n_parts == 0:
        return [] if not text.strip() else None

    cap_positions = find_all_cap_splits(text)

    if len(cap_positions) < n_parts - 1:
        # Not enough capital-letter boundaries
        return None

    # For n_parts=2: try all single split points, pick most balanced
    # For n_parts=3: try all pairs of split points
    if n_parts == 2:
        best = None
        best_score = float('inf')
        for pos in cap_positions:
            a = text[:pos].strip()
            b = text[pos:].strip()
            if not a or not b:
                continue
            score = abs(len(a) - len(b))
            if score < best_score:
                best_score = score
                best = [a, b]
        return best

    if n_parts == 3:
        best = None
        best_score = float('inf')
        for i in range(len(cap_positions)):
            for j in range(i + 1, len(cap_positions)):
                a = text[:cap_positions[i]].strip()
                b = text[cap_positions[i]:cap_positions[j]].strip()
                c = text[cap_positions[j]:].strip()
                if not a or not b or not c:
                    continue
                lens = [len(a), len(b), len(c)]
                score = max(lens) - min(lens)
                if score < best_score:
                    best_score = score
                    best = [a, b, c]
        return best

    # n_parts >= 4 (rare): just split at first n_parts-1 cap positions
    if len(cap_positions) >= n_parts - 1:
        parts = []
        prev = 0
        for pos in cap_positions[:n_parts - 1]:
            parts.append(text[prev:pos].strip())
            prev = pos
        parts.append(text[prev:].strip())
        return parts if all(parts) else None

    return None


def parse_options(options_raw: str, answer_idx: int, ca_text: str) -> list[str] | None:
    """
    Split options_raw into 4 options using ca_text as anchor.
    answer_idx: 0-based index where ca_text should land (0=A,1=B,2=C,3=D).
    """
    if not ca_text:
        return None

    opts_lower = options_raw.lower()
    ca_lower = ca_text.lower()
    ca_pos = opts_lower.find(ca_lower)
    if ca_pos < 0:
        return None

    # Verify start boundary
    if ca_pos > 0 and opts_lower[ca_pos - 1] != ' ':
        return None

    ca_end = ca_pos + len(ca_text)
    # Verify end boundary (space, period, comma, paren, or end of string)
    after_char = opts_lower[ca_end] if ca_end < len(opts_lower) else ''
    if after_char not in ('', ' ', '.', ',', ')'):
        return None

    before = options_raw[:ca_pos]
    after = options_raw[ca_end:]

    n_before = answer_idx
    n_after = 3 - answer_idx

    before_parts = split_chunk(before, n_before)
    after_parts = split_chunk(after, n_after)

    if before_parts is None or after_parts is None:
        return None

    ca_original = options_raw[ca_pos:ca_end].strip()
    all_opts = before_parts + [ca_original] + after_parts
    all_opts = [o.strip() for o in all_opts]

    if len(all_opts) != 4 or any(not o for o in all_opts):
        return None

    return all_opts


def fix_overlaps(opts: list[str]) -> list[str] | None:
    """
    Detect and fix cases where split_chunk incorrectly split a multi-word option.
    Merges adjacent chunks and re-splits the merged text using capital-letter boundaries.
    """
    if len(opts) != 4:
        return None
    opts = [o for o in opts if o]
    if len(opts) != 4:
        return None

    def split_into_4(text: str) -> list[str] | None:
        """Split text into 4 options using capital-letter boundaries."""
        cap_positions = find_all_cap_splits(text)
        if len(cap_positions) < 3:
            return None
        # Try all combinations of 3 split points for 4 parts
        best = None
        best_score = float('inf')
        for i in range(len(cap_positions) - 2):
            for j in range(i + 1, len(cap_positions) - 1):
                for k in range(j + 1, len(cap_positions)):
                    p1, p2, p3 = cap_positions[i], cap_positions[j], cap_positions[k]
                    a = text[:p1].strip()
                    b = text[p1:p2].strip()
                    c = text[p2:p3].strip()
                    d = text[p3:].strip()
                    if not all([a, b, c, d]):
                        continue
                    parts = [a, b, c, d]
                    lens = [len(p) for p in parts]
                    score = max(lens) - min(lens)
                    if score < best_score:
                        best_score = score
                        best = parts
        return best

    for i in range(len(opts) - 1):
        cur = opts[i].strip()
        nxt = opts[i + 1].strip()
        if not cur or not nxt:
            continue

        # Pattern 1: cur is prefix of nxt ("A", "A B") → merge and re-split
        if nxt.lower().startswith(cur.lower() + ' '):
            merged = (cur + ' ' + nxt[len(cur) + 1:]).strip()
            new_text = ' '.join(opts[:i] + [merged] + opts[i + 2:])
            result = split_into_4(new_text)
            if result:
                return result
            opts = opts[:i] + [merged] + opts[i + 2:]
            continue

        # Pattern 2: last word of cur is short (1-2 chars) and nxt starts capital
        cur_words = cur.split()
        nxt_words = nxt.split()
        if (cur_words and nxt_words and
            len(cur_words[-1]) <= 2 and
            nxt_words[0][0].isupper()):
            merged = (cur + ' ' + nxt).strip()
            new_text = ' '.join(opts[:i] + [merged] + opts[i + 2:])
            result = split_into_4(new_text)
            if result:
                return result
            opts = opts[:i] + [merged] + opts[i + 2:]

    return None


def equal_partition(words: list[str]) -> list[str]:
    """Fallback: split words into 4 equal chunks."""
    n = len(words)
    if n < 4:
        return [' '.join(words)] + [''] * 3
    q, r = divmod(n, 4)
    sizes = [q + (1 if i < r else 0) for i in range(4)]
    parts = []
    idx = 0
    for s in sizes:
        parts.append(' '.join(words[idx:idx + s]))
        idx += s
    return parts


def js_esc(s: str) -> str:
    s = s.replace('\\', '\\\\')
    s = s.replace('"', '\\"')
    s = s.replace('\n', ' ')
    s = s.replace('\r', '')
    return s


# ── Main ──────────────────────────────────────────────────────────────────────

with open(TBANK, 'r', encoding='utf-8', errors='replace') as f:
    raw = f.read()

blocks = re.split(r'(?=Question#\d+Topic)', raw)
print(f'Total blocks: {len(blocks) - 1}')

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

ok = 0
fallback = 0
bad = 0
qid = 1

for block in blocks[1:]:
    m = re.match(r'Question#(\d+)Topic(\d+)\s+(.*)$', block, re.DOTALL)
    if not m:
        bad += 1
        continue

    topic_num = int(m.group(2))
    after_topic = m.group(3)

    qmark = after_topic.find('?')
    if qmark == -1:
        bad += 1
        continue

    after_q = after_topic[qmark + 1:]
    m_ca = re.search(r'Correct Answer:\s*([A-Z])', after_q)
    m_expl = re.search(r'Explanation:', after_q)
    if not (m_ca and m_expl):
        bad += 1
        continue

    answer_letter = m_ca.group(1)
    answer_idx = ord(answer_letter) - ord('A')

    options_raw = after_topic[qmark + 1:qmark + 1 + m_ca.start()].strip()
    options_raw = re.sub(r'xmexam\.taobao\.com\s*', '', options_raw).strip()

    question_text = after_topic[:qmark + 1].strip()
    question_text = re.sub(r'\s+', ' ', question_text)
    question_text = re.sub(r'^\d+\s+', '', question_text)
    question_text = re.sub(r'xmexam\.taobao\.com\s*', '', question_text).strip()

    explanation = after_q[m_expl.start():]
    explanation = re.sub(r'^Explanation:\s*', '', explanation).strip()
    explanation_first = explanation.split('.')[0].strip()
    ca_raw = re.sub(r'^Correct answer:\s*', '', explanation_first, flags=re.IGNORECASE).strip()

    # Phase 1: try all prefixes of ca_raw (longest-first).
    # Reject parses where any option starts with a lowercase letter.
    ca_words = ca_raw.split()
    opts = None
    for n in range(len(ca_words), 0, -1):
        phrase_candidate = ' '.join(ca_words[:n])
        ca_text = find_in_options(phrase_candidate, options_raw)
        if ca_text:
            candidate = parse_options(options_raw, answer_idx, ca_text)
            if candidate and not any(o and o[0].islower() for o in candidate):
                fixed = fix_overlaps(candidate)
                opts = fixed if fixed else candidate
                break

    # Phase 2: if prefix search failed, try all substrings of ca_raw.
    # Handles cases where explanation uses full form ("Software as a Service (SaaS)")
    # but options use abbreviation ("SaaS").
    if opts is None:
        for start in range(1, len(ca_words)):          # skip start=0 (already tried)
            for n in range(len(ca_words) - start, 0, -1):
                phrase_candidate = ' '.join(ca_words[start:start + n])
                ca_text = find_in_options(phrase_candidate, options_raw)
                if ca_text:
                    candidate = parse_options(options_raw, answer_idx, ca_text)
                    if candidate and not any(o and o[0].islower() for o in candidate):
                        fixed = fix_overlaps(candidate)
                        opts = fixed if fixed else candidate
                        break
            if opts:
                break

    # Phase 3: try each word from options_raw that appears in ca_raw.
    # Handles abbreviation/expansion mismatches (e.g. "SaaS" vs "(SaaS)").
    # Sort by decreasing word length to prefer more specific matches.
    if opts is None:
        ca_raw_lower = ca_raw.lower()
        option_words = sorted(
            set(options_raw.split()),
            key=lambda w: -len(w)
        )
        for word in option_words:
            if word.lower() not in ca_raw_lower:
                continue
            ca_text = find_in_options(word, options_raw)
            if ca_text:
                candidate = parse_options(options_raw, answer_idx, ca_text)
                if candidate and not any(o and o[0].islower() for o in candidate):
                    fixed = fix_overlaps(candidate)
                    opts = fixed if fixed else candidate
                    break

    if opts:
        ok += 1
    else:
        # Fallback to equal partition
        words = options_raw.split()
        opts = equal_partition(words)
        fallback += 1

    # Sanity check
    is_bad = not opts or len(opts) != 4 or any(not o for o in opts)
    if is_bad:
        bad += 1
        opts = ['CORRUPTED'] * 4

    text_esc = js_esc(question_text)
    opts_esc = [js_esc(o) for o in opts]
    expl_first = js_esc(explanation_first)

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
        expl=expl_first,
    )
    output_lines.append(entry)
    qid += 1

output_lines.append(']')

print(f'\nResults: OK={ok}, FALLBACK={fallback}, BAD={bad}, Total={qid - 1}')

if not DRY_RUN:
    with open(OUTPUT, 'w', encoding='utf-8') as f:
        f.write('\n'.join(output_lines))
    print(f'Written to {OUTPUT}')
else:
    print('DRY RUN — not written')
