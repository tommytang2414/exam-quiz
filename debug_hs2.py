"""Debug: why only 23 HOTSPOT boxes extracted."""
import re
from pypdf import PdfReader

reader = PdfReader(r'C:\Users\User\Downloads\AZ-500 507题 题目+答案+讨论比例图.pdf')
all_text = '\n'.join(page.extract_text() or '' for page in reader.pages)

block_pat = re.compile(r'(Topic \d+[\s-]*Question #\d+)\s*\n(.*?)(?=Topic \d+[\s-]*Question #\d+|$)', re.DOTALL)
blocks = list(block_pat.finditer(all_text))
hot = [m for m in blocks if re.search(r'HOTSPOT', m.group(2))]

with open(r'C:\Users\User\exam-quiz\hs_debug.txt', 'w', encoding='utf-8') as f:
    f.write(f"TOTAL HOTSPOT blocks: {len(hot)}\n")

    has_box = 0
    no_box_ca = []
    no_ca = []
    skip_case_study = 0

    for m in hot:
        qid_raw = m.group(1)
        body = m.group(2)

        # Skip case study intros (same as parser)
        markers = [re.search(r'\nNOTE[:\s]', body), re.search(r'\nHot Area:', body), re.search(r'\nCorrect Answer:', body)]
        stops = [(m2.start(), m2.group(0)) for m2 in markers if m2]
        if not stops:
            no_ca.append(qid_raw)
            continue
        first_stop = min(stops, key=lambda x: x[0])
        raw_q = body[:first_stop[0]]
        raw_q2 = re.sub(r'^HOTSPOT\s*[-]?\s*', '', raw_q, flags=re.IGNORECASE).strip()
        if re.search(r'Introductory Info|This is a case study', raw_q2, re.I):
            skip_case_study += 1
            continue

        ca_match = re.search(r'Correct Answer:\s*\n(.*)', body, re.DOTALL | re.IGNORECASE)
        if not ca_match:
            no_ca.append(qid_raw)
            continue
        ca_text = ca_match.group(1)

        box_pat = re.compile(r'Box\s+(\d+)[:\s]+([^\n]+?)(?:\s*[-–]\s*(.+?))?(?=\n\s*Box\s+\d|\Z)', re.DOTALL)
        boxes_found = list(box_pat.finditer(ca_text))

        if boxes_found:
            has_box += 1
        else:
            no_box_ca.append((qid_raw, ca_text[:200]))

    f.write(f"Has boxes: {has_box}\n")
    f.write(f"Skip case study: {skip_case_study}\n")
    f.write(f"No CA found: {len(no_ca)}\n")
    f.write(f"No boxes in CA: {len(no_box_ca)}\n\n")

    f.write("=== NO CA ===\n")
    for x in no_ca[:5]:
        f.write(f"  {x}\n")

    f.write("\n=== NO BOXES ===\n")
    for qid, ca in no_box_ca[:10]:
        f.write(f"\n{qid}:\n  CA: {ca}\n")

print(f"Done. Has boxes: {has_box}, skip case study: {skip_case_study}, no CA: {len(no_ca)}, no boxes in CA: {len(no_box_ca)}")