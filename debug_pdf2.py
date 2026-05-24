import re, sys

with open(r'C:\Users\User\Downloads\AZ-500 507题 题目+答案+讨论比例图.pdf', 'rb') as f:
    raw = f.read()

# Try different encodings
for enc in ['utf-8', 'latin-1', 'gbk', 'gb2312']:
    try:
        c = raw.decode(enc)
        break
    except:
        pass

with open(r'C:\Users\User\exam-quiz\debug_pdf.txt', 'w', encoding='utf-8') as out:
    # Search for hotspot / drag drop
    h_matches = list(re.finditer(r'(?i)hotspot', c))
    d_matches = list(re.finditer(r'(?i)drag.?drop', c))
    tq_matches = list(re.finditer(r'T\d+-Q\d+', c))

    out.write(f"Encoding: {enc}\n")
    out.write(f"HOTSPOT occurrences: {len(h_matches)}\n")
    out.write(f"DRAG DROP occurrences: {len(d_matches)}\n")
    out.write(f"TQ IDs found: {len(tq_matches)}\n\n")

    if h_matches:
        out.write("=== HOTSPOT context ===\n")
        for m in h_matches[:3]:
            out.write(f"Pos {m.start()}: {repr(c[m.start():m.start()+400])}\n\n")

    if d_matches:
        out.write("=== DRAG DROP context ===\n")
        for m in d_matches[:3]:
            out.write(f"Pos {m.start()}: {repr(c[m.start():m.start()+400])}\n\n")

    if tq_matches:
        out.write("=== First TQ IDs ===\n")
        for m in tq_matches[:5]:
            out.write(f"Pos {m.start()}: {repr(c[m.start():m.start()+100])}\n")

    # Also check: what character range is in the file?
    # Maybe T1-Q1 vs T1-Q1 (different dash)
    dash_chars = {}
    for i, ch in enumerate(c[:50000]):
        if ord(ch) > 127:
            dash_chars[ord(ch)] = dash_chars.get(ord(ch), 0) + 1

    out.write(f"\nNon-ASCII chars in first 50k (top 20): {sorted(dash_chars.items(), key=lambda x:-x[1])[:20]}\n")

    # Sample of raw bytes around position 1000
    out.write(f"\nRaw bytes at 1000-1100: {raw[1000:1100]}\n")
    out.write(f"Raw bytes at 2000-2100: {raw[2000:2100]}\n")
    out.write(f"Raw bytes at 5000-5100: {raw[5000:5100]}\n")