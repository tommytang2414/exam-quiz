"""Debug: verify block boundaries for HOTSPOT questions."""
import re
from pypdf import PdfReader

reader = PdfReader(r'C:\Users\User\Downloads\AZ-500 507题 题目+答案+讨论比例图.pdf')
all_text = '\n'.join(page.extract_text() or '' for page in reader.pages)

# Check exact text around a block boundary
idx = all_text.find('Topic 2')
print("Sample boundary text (Topic 2 to Topic 3):")
print(repr(all_text[idx:idx+200]))
print()

# Test both regex patterns
old_pat = re.compile(r'(Topic \d+[\s-]*Question #\d+)\s*\n(.*?)(?=Topic \d+[\s-]*Question #\d+|$)', re.DOTALL)
new_pat = re.compile(r'(Topic \d+[\s-]*Question #\d+)\s*\n(.*?)(?=(?:Topic \d+[\s-]*Question #\d+)|$)', re.DOTALL)

old_blocks = list(old_pat.finditer(all_text))
new_blocks = list(new_pat.finditer(all_text))

print(f"OLD pattern blocks: {len(old_blocks)}")
print(f"NEW pattern blocks: {len(new_blocks)}")

old_hs = [m for m in old_blocks if re.search(r'HOTSPOT', m.group(2))]
new_hs = [m for m in new_blocks if re.search(r'HOTSPOT', m.group(2))]
print(f"OLD HOTSPOT: {len(old_hs)}")
print(f"NEW HOTSPOT: {len(new_hs)}")

# Show a HOTSPOT block text with the new pattern
for m in new_hs[:2]:
    body = m.group(2)
    ca = re.search(r'Correct Answer:', body)
    print(f"\nBlock {m.group(1)}: Correct Answer found: {bool(ca)}")
    if ca:
        print(f"  CA context: {repr(body[ca.start():ca.start()+100])}")