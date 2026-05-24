import re

with open(r"C:\Users\User\Downloads\AZ-500 507题 题目+答案+讨论比例图.pdf", "rb") as f:
    content = f.read().decode("latin-1")

# Find HOTSPOT and DRAG DROP blocks
hotspot_ids = []
drag_ids = []
hotspot_samples = {}

pattern = r'(HOTSPOT|DRAG DROP)\s*\n?\s*(T\d+-Q\d+)(.*?)(?=T\d+-Q\d+|$)'
matches = list(re.finditer(pattern, content, re.DOTALL | re.IGNORECASE))

print(f"Found {len(matches)} total blocks")

for m in matches:
    qtype = m.group(1).strip()
    qid = m.group(2).strip()
    if qtype == "HOTSPOT":
        hotspot_ids.append(qid)
        if len(hotspot_samples) < 2 and qid not in hotspot_samples:
            hotspot_samples[qid] = m.group(3)[:1200]
    elif qtype == "DRAG DROP":
        drag_ids.append(qid)

print(f"HOTSPOT: {len(hotspot_ids)}, DRAG DROP: {len(drag_ids)}")
print(f"\nSample HOTSPOT blocks:")
for qid, block in list(hotspot_samples.items())[:2]:
    print(f"\n=== {qid} ===")
    print(block)

# Also look at what drag drop looks like
for qid in drag_ids[:2]:
    idx = content.find(qid)
    if idx >= 0:
        print(f"\n=== DRAG DROP: {qid} ===")
        print(content[idx:idx+1200])