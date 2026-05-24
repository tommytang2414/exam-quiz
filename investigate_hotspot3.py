import re
from pypdf import PdfReader

reader = PdfReader(r'C:\Users\User\Downloads\AZ-500 507题 题目+答案+讨论比例图.pdf')
all_text = '\n'.join(page.extract_text() or '' for page in reader.pages)

hs_idxs = [m.start() for m in re.finditer(r'HOTSPOT', all_text)]
dd_idxs = [m.start() for m in re.finditer(r'DRAG DROP', all_text)]

with open(r'C:\Users\User\exam-quiz\hotspot_dragdrop.txt', 'w', encoding='utf-8') as f:
    f.write(f"HOTSPOT: {len(hs_idxs)}, DRAG DROP: {len(dd_idxs)}\n\n")

    for idx in hs_idxs[:3]:
        f.write(f"\n=== HOTSPOT at pos {idx} ===\n")
        f.write(all_text[idx:idx+1400])
        f.write("\n\n")

    for idx in dd_idxs[:3]:
        f.write(f"\n=== DRAG DROP at pos {idx} ===\n")
        f.write(all_text[idx:idx+1400])
        f.write("\n\n")