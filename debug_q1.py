import re

with open('C:/Users/user/Downloads/CCSP questionbank.txt', 'r', encoding='utf-8', errors='replace') as f:
    raw = f.read()

blocks = re.split(r'(?=Question#\d+Topic)', raw)

FRAGMENTS_LOWER = {
    'security', 'function', 'isolation', 'boundary', 'protection',
    'key', 'establishment', 'management', 'account', 'logging',
    'in', 'on', 'to', 'for', 'of', 'the', 'and', 'or', 'is', 'are',
    'with', 'from', 'that', 'this', 'not', 'can', 'be', 'may',
    'they', 'their', 'them', 'these', 'those',
    'must', 'should', 'could', 'would', 'will', 'shall', 'might',
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

def equal_partition(words, n):
    q, r = divmod(n, 4)
    parts = [q] * 4
    for i in range(r):
        parts[i] += 1
    sp = [0]
    acc = 0
    for p in parts:
        acc += p
        sp.append(acc)
    return [' '.join(words[sp[i]:sp[i+1]]) for i in range(4)]

def all_splits(n):
    result = []
    for s1 in range(1, n - 2):
        for s2 in range(s1 + 1, n - 1):
            for s3 in range(s2 + 1, n):
                result.append([s1, s2, s3])
    return result

def find_ca_words(ca_text):
    words = ca_text.lower().split()
    stop_words = {'in', 'the', 'a', 'an', 'it', 'this', 'that', 'when', 'which', 'as', 'for', 'to'}
    stop_idx = len(words)
    for i, w in enumerate(words):
        if i > 0 and w in stop_words and i > 2:
            stop_idx = i
            break
    result = words[:stop_idx]
    return result[:2]

def ca_anchor_pos(words, ca_words, n):
    if not ca_words:
        return -1, -1
    best = None
    for n_try in range(min(len(ca_words), 5), 0, -1):
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

def find_answer_partition(words, ca_words_lim, n, splits):
    if not ca_words_lim:
        return -1
    full_anchor = ' '.join(ca_words_lim)
    for start in range(n - len(ca_words_lim) + 1):
        seg = ' '.join(words[start:start + len(ca_words_lim)]).lower()
        if seg == full_anchor.lower():
            answer_end_pos = start + len(ca_words_lim) - 1
            for pi in range(len(splits) - 1):
                if splits[pi] <= answer_end_pos < splits[pi + 1]:
                    return pi
    return -1

def smart_partition(words, n, ca_text, answer_idx):
    if n < 4:
        return None
    ca_words = find_ca_words(ca_text)
    ca_words_limited = ca_words[:2]
    ca_pos, ca_len = ca_anchor_pos(words, ca_words_limited, n)
    if ca_pos < 0:
        return None

    best = None
    best_score = float('inf')

    for sp in all_splits(n):
        splits = [0] + sp + [n]
        ans_part = find_answer_partition(words, ca_words_limited, n, splits)
        if ans_part < 0:
            continue

        in_answer = (splits[ans_part] <= ca_pos < splits[ans_part + 1]) or \
                    (ca_pos < splits[ans_part] and splits[ans_part] - ca_pos <= 2)
        if not in_answer:
            continue

        parts = [' '.join(words[splits[i]:splits[i+1]]) for i in range(4)]

        skip = False
        for p in parts:
            pw = p.split()
            if len(pw) == 1 and pw[0].lower() in FRAGMENTS_LOWER:
                skip = True
                break
        if skip:
            continue

        opt_words = words[splits[ans_part]:splits[ans_part + 1]]
        opt_lower = ' '.join(opt_words).lower()
        anchor_phrase = ' '.join(ca_words_limited)
        if opt_lower.startswith(anchor_phrase) or opt_lower.find(anchor_phrase) >= 0:
            pass
        else:
            continue

        lens = [splits[i + 1] - splits[i] for i in range(4)]
        bal = max(lens) - min(lens)
        ans_size = lens[ans_part]
        size_penalty = max(0, 3 - ans_size) * 5
        score = bal + size_penalty
        if score < best_score:
            best_score = score
            best = parts

    return best

# Process Q1
for b in blocks[1:3]:
    m_q = re.match(r'Question#(\d+)Topic(\d+)\s+(.*)$', b)
    if not m_q:
        continue
    qid = m_q.group(1)
    if qid != '1':
        continue
    after_topic = m_q.group(3)
    qmark = after_topic.find('?')
    if qmark == -1:
        continue
    after_q = after_topic[qmark + 1:]

    m_ca = re.search(r'Correct Answer: ([A-Z])', after_q)
    m_expl = re.search(r'Explanation:', after_q)
    if not (m_ca and m_expl):
        continue

    ca_pos_in_afterq = m_ca.start()
    answer_idx = ord(m_ca.group(1)) - ord('A')

    options_raw = after_topic[qmark + 1:qmark + 1 + ca_pos_in_afterq].strip()
    options_raw = re.sub(r'xmexam\.taobao\.com\s*', '', options_raw).strip()
    words = options_raw.split()
    n = len(words)

    explanation = after_q[m_expl.start():].strip()
    explanation = re.sub(r'^Explanation:\s*', '', explanation).strip()
    ca_sentence = explanation.split('.')[0].strip()
    ca_for_anchor = re.sub(r'^Correct answer:\s*', '', ca_sentence, flags=re.IGNORECASE).strip()

    eq_opts = equal_partition(words, n)
    ca_words_limited = find_ca_words(ca_for_anchor)
    ca_phrase = ' '.join(ca_words_limited)
    eq_opts_lower = [o.lower() for o in eq_opts]

    print(f'Q{qid}: answer_idx={answer_idx}')
    print(f'  equal_opts: {eq_opts}')
    print(f'  eq_opts[{answer_idx}].lower() = "{eq_opts_lower[answer_idx]}"')
    print(f'  ca_phrase = "{ca_phrase}"')
    print(f'  find result: {eq_opts_lower[answer_idx].find(ca_phrase) >= 0}')

    if eq_opts_lower[answer_idx].find(ca_phrase) < 0:
        print('  -> Answer NOT in correct partition, trying smart_partition')
        sp_result = smart_partition(words, n, ca_for_anchor, answer_idx)
        print(f'  smart_partition result: {sp_result}')
    else:
        print('  -> Answer in correct partition, using equal_partition')
