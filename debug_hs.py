"""Debug: why only 23 HOTSPOT boxes extracted."""
import re
from pypdf import PdfReader

reader = PdfReader(r'C:\Users\User\Downloads\AZ-500 507题 题目+答案+讨论比例图.pdf')
all_text = '\n'.join(page.extract_text() or '' for page in reader.pages)

block_pat = re.compile(r'(Topic \d+[\s-]*Question #\d+)\s*\n(.*?)(?=Topic \d+[\s-]*Question #\d+|$)', re.DOTALL)
blocks = list(block_pat.finditer(all_text))

# Check specifically: how many HOTSPOT blocks have "Box N:" in them?
hot = [m for m in blocks if re.search(r'HOTSPOT', m.group(2))]
print(f"TOTAL HOTSPOT blocks: {len(hot)}")

has_box = 0
for m in hot:
    body = m.group(2)
    ca_match = re.search(r'Correct Answer:\s*\n(.*)', body, re.DOTALL | re.IGNORECASE)
    if not ca_match:
        print(f"\nNO CA: {m.group(1)}")
        print(f"  Body snippet: {body[200:400]}")
        continue
    ca_text = ca_match.group(1)
    box_pat = re.compile(r'Box\s+(\d+)[:\s]+([^\n]+?)(?:\s*[-–]\s*(.+?))?(?=\n\s*Box\s+\d|\Z)', re.DOTALL)
    boxes = list(box_pat.finditer(ca_text))
    if boxes:
        has_box += 1
    else:
        print(f"\nNO BOXES: {m.group(1)}, CA text: {repr(ca_text[:200])}")

print(f"\nHOTSPOT blocks with boxes: {has_box}")