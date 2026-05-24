"""Look at raw page images to see if answers are in image form.
Also check: are there pages after all question blocks that contain just answers?"""
import re
from pypdf import PdfReader

reader = PdfReader(r'C:\Users\User\Downloads\AZ-500 507题 题目+答案+讨论比例图.pdf')
all_text = '\n'.join(page.extract_text() or '' for page in reader.pages)

# Check last part of PDF — do we have pages after "Topic 6Question #XX"?
last_topic = re.findall(r'Topic \d+', all_text)
print(f"Last topic occurrences: {last_topic[-5:] if last_topic else 'none'}")

# Find where the last question block ends
block_pat = re.compile(r'(Topic \d+[\s-]*Question #\d+)\s*\n(.*?)(?=Topic \d+[\s-]*Question #\d+|$)', re.DOTALL)
blocks = list(block_pat.finditer(all_text))
last_block = blocks[-1]
print(f"Last block: {last_block.group(1)}")
print(f"Last block starts at: {last_block.start()}, ends at: {last_block.end()}")
print(f"PDF total length: {len(all_text)}")

# Look at last 500 chars
print(f"\nLast 500 chars of PDF:")
print(repr(all_text[-500:]))

# Look at last few pages
print(f"\n\nLast 10 pages (page 538-548):")
for i in range(min(537, len(reader.pages)-10), len(reader.pages)):
    text = (reader.pages[i].extract_text() or '').strip()
    if text:
        print(f"\n--- Page {i+1} ---")
        print(text[:300])