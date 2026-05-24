"""Look at raw HOTSPOT block pages to find where answers actually are."""
import re
from pypdf import PdfReader

reader = PdfReader(r'C:\Users\User\Downloads\AZ-500 507题 题目+答案+讨论比例图.pdf')
all_text = '\n'.join(page.extract_text() or '' for page in reader.pages)

block_pat = re.compile(r'(Topic \d+[\s-]*Question #\d+)\s*\n(.*?)(?=Topic \d+[\s-]*Question #\d+|$)', re.DOTALL)
blocks = list(block_pat.finditer(all_text))
hot = [m for m in blocks if re.search(r'HOTSPOT', m.group(2))]

# Find page numbers for some HOTSPOT blocks
with open(r'C:\Users\User\exam-quiz\hs_raw_pages.txt', 'w', encoding='utf-8') as f:
    for m in hot[20:26]:  # show blocks 20-25
        qid = m.group(1)
        body = m.group(2)
        f.write(f"\n{'='*60}\n")
        f.write(f"{qid}\n")
        f.write(f"{'='*60}\n")
        # Show first 600 chars of body
        f.write(body[:600])
        f.write("\n\n--- CORRECT ANSWER SECTION ---\n")
        ca_m = re.search(r'Correct Answer:', body)
        if ca_m:
            f.write(body[ca_m.start():ca_m.start()+400])
        f.write("\n")