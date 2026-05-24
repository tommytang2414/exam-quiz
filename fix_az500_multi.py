#!/usr/bin/env python3
"""Update az500.ts to add isMulti marker for multi-select questions."""
import re

path = r'C:\Users\User\exam-quiz\lib\questions\az500.ts'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# For multi-select questions, change answer from string to object
# Old: answer: "BC"
# New: answer: "BC" // multi-select

# Actually, simpler: add a marker `// multi-select` comment and update the interface
# The answer field can be `number | string` but we need a way to know if it's multi

# Strategy: store multi-select answers as an array of indices
# Multi-select: answer: [1, 2] = options B and C are correct
# Single-select: answer: 0 = option A is correct

# But wait - changing from string "BC" to number array [1,2] would break existing questions
# Better: add a dedicated `isMulti: boolean` field

# Let's update the interface to include isMulti flag
new_content = content.replace(
    '  answer: number | string, // number = single (0-based), string = multi-select ("A,B")',
    '  answer: number | string, // number = single-select, string = multi-select ("BC")\n  isMulti?: boolean, // true = multi-select, answer is comma-separated letters'
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Interface updated.")

# Now find all multi-select entries (answer: "AB" style) and add isMulti: true
lines = content.split('\n')
changes = 0
new_lines = []
for line in lines:
    # Find entries like answer: "BC", (multi-select string answer)
    m = re.match(r'(\s*\{\s*id: \d+,\s*topic: \d+,\s*text: "[^"]*",\s*options: \[.*\],\s*answer: "([A-Z]{2,})",)', line)
    if m:
        # Add isMulti flag
        indent = m.group(1).rstrip('{').rstrip()
        letter = m.group(2)
        # Change answer: "BC" to answer: "BC", isMulti: true
        line = line.replace(f'answer: "{letter}"', f'answer: "{letter}", isMulti: true')
        changes += 1
    new_lines.append(line)

with open(path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))

print(f"Added isMulti flag to {changes} multi-select questions.")