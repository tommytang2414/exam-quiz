#!/usr/bin/env python3
"""Apply all known fixes to ccsp.ts with domain field."""

with open('lib/questions/ccsp.ts', 'r', encoding='utf-8') as f:
    content = f.read()

fixes_applied = []

def do_fix(name, old, new):
    global content
    if old in content:
        content = content.replace(old, new)
        fixes_applied.append(f'Fixed {name}')
        return True
    return False

# Fix Q353 (with domain: 2)
do_fix('Q353',
    '\n    id: 353,\n    text: "What type of data is displayed below?",\n    options: ["{ \\"Test\\": { \\"Vendor\\":", "\\"IC2\\", \\"Exam\\": false", "} } Structured", "Unstructured XML Semi-structured"],\n    answer: 3,\n    explanation: "ML Semi-structured Correct Answer: D Explanation: Correct answer: Semi-structured The question includes JSON-formatted data",\n    domain: 2\n  },',
    '\n    id: 353,\n    text: "What type of data is displayed below? { \\"Test\\": { \\"Vendor\\": \\"IC2\\", \\"Exam\\": false } }",\n    options: ["Structured", "Unstructured", "XML", "Semi-structured"],\n    answer: 3,\n    explanation: "Semi-structured",\n    domain: 2\n  },')

# Fix Q813 (with domain: 4)
do_fix('Q813',
    '\n    id: 813,\n    text: "A bad actor coerces an application to send a crafted request to an unexpected destination. The result is that it fetches a remote resource for that bad actor. How can this be prevented?",\n    options: ["Enable HTTP redirection Send raw", "responses to clients Identity and", "Access Management Enforce \\"deny", "by default\\" firewall policies"],\n    answer: 3,\n    explanation: "? Enable HTTP redirection Send raw responses to clients Identity and Access Management Enforce \\"deny by default\\" firewall policies Correct Answer: D xmexam",\n    domain: 4\n  },',
    '\n    id: 813,\n    text: "A bad actor coerces an application to send a crafted request to an unexpected destination. The result is that it fetches a remote resource for that bad actor. How can this be prevented?",\n    options: ["Enable HTTP redirection", "Send raw responses to clients", "Identity and Access Management", "Enforce deny by default firewall policies"],\n    answer: 3,\n    explanation: "Enforce deny by default firewall policies",\n    domain: 4\n  },')

# Fix Q317
do_fix('Q317',
    '    options: ["Operating system", "Username Process", "ID", "GUID"]',
    '    options: ["Operating system", "Username Process ID", "GUID", "User access"]')

# Fix Q407
do_fix('Q407',
    '    options: ["Federated identity", "Key Shared", "ID", "Certificate"]',
    '    options: ["Federated identity", "Key Shared ID", "Certificate", "Public Key Infrastructure"]')

# Fix Q43
do_fix('Q43',
    '    options: ["Overwriting Cryptographic", "erase", "Shredding", "Degaussing"]',
    '    options: ["Overwriting", "Cryptographic erase", "Shredding", "Degaussing"]')

# Fix Q240
do_fix('Q240',
    '    options: ["Incineration Cryptographic", "erase", "Degaussing", "Shredding"]',
    '    options: ["Incineration", "Cryptographic erase", "Degaussing", "Shredding"]')

# Fix Q825
do_fix('Q825',
    '    options: ["Damage Exploitability", "Reproducibility Denial", "of", "Service"]',
    '    options: ["Damage", "Exploitability", "Reproducibility", "Denial of Service"]')

# Fix Q1125
do_fix('Q1125',
    '    options: ["Man-in-the-middle Credential", "stuffing Pass-the-hash", "VM", "sprawl"]',
    '    options: ["Man-in-the-middle", "Credential stuffing", "Pass-the-hash", "VM sprawl"]')

# Fix Q1398
do_fix('Q1398',
    '    options: ["Assurance Termination", "Metrics Right", "to", "audit"]',
    '    options: ["Assurance", "Termination", "Metrics", "Right to audit"]')

# Fix Q434 (long text with domain: 2)
import re
q434_idx = content.find('\n    id: 434,')
if q434_idx != -1:
    q434_end = content.find('\n  },', q434_idx)
    q434_block = content[q434_idx:q434_end+5]
    if '"Database", "as"' in q434_block:
        new_block = (
            '\n    id: 434,\n'
            '    text: "In regard to data sanitization, which type of cloud service model requires special considerations as the data is often more interconnected throughout the platform?",\n'
            '    options: ["Database as a Service (DBaaS)", "Infrastructure as a Service (IaaS)", "Software as a Service (SaaS)", "Platform as a Service (PaaS)"],\n'
            '    answer: 2,\n'
            '    explanation: "Software as a Service (SaaS)",\n'
            '    domain: 2\n'
            '  },'
        )
        content = content[:q434_idx] + new_block + content[q434_end+5:]
        fixes_applied.append('Fixed Q434')

# Fix Q968
do_fix('Q968',
    '    options: ["Testing Requirements", "Development Operations", "and", "Maintenance"]',
    '    options: ["Testing Requirements", "Development Operations and Maintenance", "Test Case", "Implementation"]')

# Remove orphaned text from Q353 fix remnant
if '  },swer:' in content:
    content = content.replace('  },swer: Semi-structured The question includes JSON-formatted data"', '  },')
    fixes_applied.append('Removed orphaned text')

# Remove duplicate closing braces
if '  },\n  },\n' in content:
    content = content.replace('  },\n  },\n', '  },\n')
    fixes_applied.append('Removed duplicate closing brace')

with open('lib/questions/ccsp.ts', 'w', encoding='utf-8') as f:
    f.write(content)

for fix in fixes_applied:
    print(fix)
print(f'\nTotal fixes: {len(fixes_applied)}')
