#!/usr/bin/env python3
"""Fix Q353 and Q813 in the regenerated ccsp.ts."""

with open('lib/questions/ccsp.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix Q353
old_353 = ('    id: 353,\n'
    '    text: "What type of data is displayed below?",\n'
    '    options: ["{ \\"Test\\": { \\"Vendor\\":", "\\"IC2\\", \\"Exam\\": false", "} } Structured", "Unstructured XML Semi-structured"],\n'
    '    answer: 3,\n'
    '    explanation: "ML Semi-structured Correct Answer: D Explanation: Correct an')

new_353 = ('    id: 353,\n'
    '    text: "What type of data is displayed below? { \\"Test\\": { \\"Vendor\\": \\"IC2\\", \\"Exam\\": false } }",\n'
    '    options: ["Structured", "Unstructured", "XML", "Semi-structured"],\n'
    '    answer: 3,\n'
    '    explanation: "Semi-structured",\n'
    '  },')

if old_353 in content:
    content = content.replace(old_353, new_353)
    print("Fixed Q353")
else:
    print("Q353 old text not found")

# Fix Q813
old_813 = ('    id: 813,\n'
    '    text: "A bad actor coerces an application to send a crafted request to an unexpected destination. The result is that it fetches a remote resource for that bad actor. How can this be prevented?",\n'
    '    options: ["Enable HTTP redirection Send raw", "responses to clients Identity and", "Access Management Enforce \\"deny", "by default\\" firewall policies"],\n'
    '    answer: 3,\n'
    '    explanation: "? Enable HTTP redirection Send raw responses to clients Identity and Access Management Enforce \\"deny by default\\" firewall policies Correct Answer: D xmexam"\n'
    '  },')

new_813 = ('    id: 813,\n'
    '    text: "A bad actor coerces an application to send a crafted request to an unexpected destination. The result is that it fetches a remote resource for that bad actor. How can this be prevented?",\n'
    '    options: ["Enable HTTP redirection", "Send raw responses to clients", "Identity and Access Management", "Enforce deny by default firewall policies"],\n'
    '    answer: 3,\n'
    '    explanation: "Enforce deny by default firewall policies",\n'
    '  },')

if old_813 in content:
    content = content.replace(old_813, new_813)
    print("Fixed Q813")
else:
    print("Q813 old text not found")
    idx = content.find('\n    id: 813,')
    if idx != -1:
        end = content.find('\n  },', idx)
        block = content[idx:end+5]
        print("Q813 block:")
        print(repr(block))

with open('lib/questions/ccsp.ts', 'w', encoding='utf-8') as f:
    f.write(content)
