import re
from pypdf import PdfReader

reader = PdfReader(r'C:\Users\User\Downloads\AZ-500 507题 题目+答案+讨论比例图.pdf')
print(f"Total pages: {len(reader.pages)}")

all_text = '\n'.join(page.extract_text() or '' for page in reader.pages)

# Find HOTSPOT and DRAG DROP blocks
hs_idxs = [m.start() for m in re.finditer(r'HOTSPOT', all_text)]
dd_idxs = [m.start() for m in re.finditer(r'DRAG DROP', all_text)]

print(f"HOTSPOT occurrences: {len(hs_idxs)}")
print(f"DRAG DROP occurrences: {len(dd_idxs)}")

# Show 2 HOTSPOT samples
for idx in hs_idxs[:2]:
    print(f"\n=== HOTSPOT at pos {idx} ===")
    print(all_text[idx:idx+1200])
    print()

# Show 2 DRAG DROP samples
for idx in dd_idxs[:2]:
    print(f"\n=== DRAG DROP at pos {idx} ===")
    print(all_text[idx:idx+1200])
    print()