"""Look at HOTSPOT answers on following pages — answers span page boundaries."""
import re
from pypdf import PdfReader

reader = PdfReader(r'C:\Users\User\Downloads\AZ-500 507题 题目+答案+讨论比例图.pdf')
all_text = '\n'.join(page.extract_text() or '' for page in reader.pages)

block_pat = re.compile(r'(Topic \d+[\s-]*Question #\d+)\s*\n(.*?)(?=Topic \d+[\s-]*Question #\d+|$)', re.DOTALL)
blocks = list(block_pat.finditer(all_text))

# For each HOTSPOT block, check: is the next block's start the answer continuation?
hot = [(i, m) for i, m in enumerate(blocks) if re.search(r'HOTSPOT', m.group(2))]

with open(r'C:\Users\User\exam-quiz\hs_answers_follow.txt', 'w', encoding='utf-8') as f:
    # Show pairs of consecutive blocks for HOTSPOT questions
    for i, m in hot[:20]:
        qid = m.group(1)
        body = m.group(2)
        ca_match = re.search(r'Correct Answer:\s*\n(.*)', body, re.DOTALL | re.IGNORECASE)
        ca_text = ca_match.group(1).strip() if ca_match else '(none)'
        has_box = 'Box ' in ca_text

        # Look at NEXT block
        next_block_body = ''
        if i + 1 < len(blocks):
            next_block_body = blocks[i+1].group(2)[:400]

        f.write(f"\n{'='*60}\n")
        f.write(f"{qid} | has box: {has_box} | next starts: {blocks[i+1].group(1) if i+1 < len(blocks) else 'END'}\n")
        f.write(f"CA text (first 150): {ca_text[:150]}\n")
        if not has_box and next_block_body:
            f.write(f"Next block (first 250):\n{next_block_body[:250]}\n")
            # Does next block start with Box content?
            next_box = re.search(r'Box\s+\d+', next_block_body)
            if next_box:
                f.write(f"  ^^ NEXT BLOCK HAS ANSWER BOX at pos {next_box.start()}\n")
        f.write("\n")