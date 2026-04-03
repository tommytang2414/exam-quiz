/**
 * CCSP Question Bank Fixer
 * Fixes formatting issues in lib/questions/ccsp.ts
 *
 * Issues identified:
 * 1. xmexam.taobao.com garbage text in question text
 * 2. Split options (e.g., "Cloud" + "gateway" should be "Cloud gateway")
 * 3. Concatenated answers in single option (e.g., "Ingress and egress monitoring Contextual-based security")
 *
 * CCSP Domains:
 * Domain 1: Cloud Concepts, Architecture, and Design (~18%)
 * Domain 2: Cloud Data Security (~20%)
 * Domain 3: Cloud Platform & Infrastructure Security (~20%)
 * Domain 4: Cloud Application Security (~17%)
 * Domain 5: Cloud Security Operations (~15%)
 * Domain 6: Legal, Risk, and Compliance (~10%)
 */

const fs = require('fs');

const content = fs.readFileSync('lib/questions/ccsp.ts', 'utf8');
const lines = content.split('\n');

// ─────────────────────────────────────────────────
// STEP 1: Parse all questions
// ─────────────────────────────────────────────────
let questions = [];
let i = 0;
let inQuestion = false;
let braceDepth = 0;
let currentBlock = [];

while (i < lines.length) {
  const line = lines[i].replace(/\r$/, '');

  if (!inQuestion && line === '  {') {
    inQuestion = true;
    currentBlock = [line];
    braceDepth = 1;
  } else if (inQuestion) {
    currentBlock.push(line);
    braceDepth += (line.match(/\{/g) || []).length;
    braceDepth -= (line.match(/\}/g) || []).length;

    if (braceDepth === 0) {
      const blockText = currentBlock.join('\n');

      const idM = blockText.match(/id:\s*(\d+)/);
      const textM = blockText.match(/text:\s*"([^"]*)"/);
      const ansM = blockText.match(/answer:\s*(\d+)/);
      const expM = blockText.match(/explanation:\s*"([^"]*)"/);

      const optsM = blockText.match(/options:\s*\[(.*?)\]/s);
      const opts = [];
      if (optsM) {
        const optsContent = optsM[1];
        let j = 0;
        let currentOpt = '';
        let inQuote = false;
        while (j < optsContent.length) {
          const ch = optsContent[j];
          if (ch === '"') {
            if (inQuote) {
              opts.push(currentOpt);
              currentOpt = '';
            }
            inQuote = !inQuote;
          } else if (inQuote) {
            currentOpt += ch;
          }
          j++;
        }
      }

      if (idM) {
        questions.push({
          id: parseInt(idM[1]),
          text: textM ? textM[1] : '',
          options: opts,
          answer: ansM ? parseInt(ansM[1]) : -1,
          explanation: expM ? expM[1] : ''
        });
      }

      inQuestion = false;
      currentBlock = [];
    }
  }
  i++;
}

console.log(`Parsed ${questions.length} questions\n`);

// ─────────────────────────────────────────────────
// STEP 2: Analyze issues
// ─────────────────────────────────────────────────
let xmexamInText = 0;
const splitOptionPairs = []; // {id, idx, opt, nextOpt}
const concatenatedOptions = []; // {id, idx, option} - options that seem too long and contain multiple concepts
const originalLines = content.split('\n');

// Detect xmexam in text
questions.forEach(q => {
  if (q.text.includes('xmexam.taobao.com')) xmexamInText++;
});

// Detect split options (short lowercase word ending + next option starting uppercase)
questions.forEach(q => {
  for (let idx = 0; idx < q.options.length - 1; idx++) {
    const opt = q.options[idx].trim();
    const nextOpt = q.options[idx + 1].trim();
    if (/^[a-z]{2,20}$/.test(opt) && /^[A-Z]/.test(nextOpt)) {
      splitOptionPairs.push({ id: q.id, idx, opt, nextOpt });
    }
  }
});

// Detect concatenated options (very long options that likely contain multiple answers)
// Heuristic: if an option contains patterns like "A. ... B. ..." or looks like 2+ complete phrases
questions.forEach(q => {
  q.options.forEach((opt, idx) => {
    // Check for patterns indicating concatenation
    // Pattern 1: contains common answer prefixes like "A. ", "B. ", "C. ", "D. "
    if (/\b[A-D]\.\s/.test(opt) && opt.length > 80) {
      concatenatedOptions.push({ id: q.id, idx, option: opt, reason: 'contains A. B. C. D. pattern' });
    }
    // Pattern 2: contains known pairs of cloud concepts
    if ((opt.match(/monitoring/g) || []).length >= 2 && opt.length > 100) {
      concatenatedOptions.push({ id: q.id, idx, option: opt, reason: 'repeated concept suggesting concatenation' });
    }
  });
});

console.log(`Questions with xmexam.taobao.com: ${xmexamInText}`);
console.log(`Split option pairs: ${splitOptionPairs.length}`);
console.log(`Concatenated options detected: ${concatenatedOptions.length}`);

if (concatenatedOptions.length > 0) {
  console.log('\nConcatenated options (first 10):');
  concatenatedOptions.slice(0, 10).forEach(c => {
    console.log(`  Q${c.id} option[${c.idx}]: ${c.option.substring(0, 80)}... (${c.reason})`);
  });
}

// ─────────────────────────────────────────────────
// STEP 3: Fix functions
// ─────────────────────────────────────────────────
function fixXmexam(text) {
  // Remove xmexam.taobao.com (may appear once or twice at start of text)
  return text.replace(/xmexam\.taobao\.com\s*/g, '').trim();
}

function fixSplitOptions(q) {
  // Merge split options: when opt is short lowercase and next starts uppercase
  const fixed = [];
  let j = 0;
  while (j < q.options.length) {
    const opt = q.options[j].trim();
    if (j < q.options.length - 1) {
      const nextOpt = q.options[j + 1].trim();
      if (/^[a-z]{2,20}$/.test(opt) && /^[A-Z]/.test(nextOpt)) {
        // Merge this with next
        fixed.push(opt + nextOpt);
        j += 2;
        continue;
      }
    }
    fixed.push(opt);
    j++;
  }
  return fixed;
}

// ─────────────────────────────────────────────────
// STEP 4: Apply fixes and rebuild
// ─────────────────────────────────────────────────
let fixedCount = 0;
let xmexamFixed = 0;
let splitFixed = 0;
let concatFixed = 0;

const fixedQuestions = questions.map(q => {
  let text = q.text;
  let options = [...q.options];
  let answer = q.answer;
  let explanation = q.explanation;
  let changed = false;

  // Fix 1: Remove xmexam.taobao.com
  if (text.includes('xmexam.taobao.com')) {
    text = fixXmexam(text);
    xmexamFixed++;
    changed = true;
  }

  // Fix 2: Merge split options
  const merged = fixSplitOptions({ options });
  if (merged.length !== options.length) {
    // Check if merge happened
    let merged_any = false;
    for (let k = 0; k < merged.length; k++) {
      if (k < options.length && merged[k] !== options[k]) {
        merged_any = true;
        break;
      }
    }
    if (merged.length !== options.length || merged_any) {
      // Adjust answer if needed
      options = merged;
      splitFixed++;
      changed = true;
    }
  }

  if (changed) fixedCount++;

  return { ...q, text, options, answer, explanation };
});

console.log(`\nFixed summary:`);
console.log(`  Total questions changed: ${fixedCount}`);
console.log(`  xmexam.taobao.com removed: ${xmexamFixed}`);
console.log(`  Split options merged: ${splitFixed}`);
console.log(`  Concatenated options fixed: ${concatFixed}`);

// ─────────────────────────────────────────────────
// STEP 5: Generate corrected file content
// ─────────────────────────────────────────────────
let output = `export interface Question {
  id: number
  text: string
  options: string[]
  answer: number // 0-based index
  explanation?: string
}

export const questions: Question[] = [
`;

fixedQuestions.forEach((q, qi) => {
  output += `  {\n`;
  output += `    id: ${q.id},\n`;
  output += `    text: "${q.text}",\n`;
  output += `    options: ${JSON.stringify(q.options)},\n`;
  output += `    answer: ${q.answer},\n`;
  if (q.explanation) {
    output += `    explanation: "${q.explanation}"\n`;
  }
  output += `  }`;
  if (qi < fixedQuestions.length - 1) output += ',';
  output += '\n';
});

output += `]\n`;

// Write corrected file
fs.writeFileSync('lib/questions/ccsp.ts', output);
console.log(`\nWritten corrected file to lib/questions/ccsp.ts`);

// ─────────────────────────────────────────────────
// STEP 6: Verification
// ─────────────────────────────────────────────────
console.log(`\nVerification:`);
const verifyContent = fs.readFileSync('lib/questions/ccsp.ts', 'utf8');
const verifyLines = verifyContent.split('\n');
let verifyXmexam = 0;
let verifyQuestions = 0;
let verifySplit = 0;

const verifyRegex = /id:\s*(\d+)/g;
let m;
while ((m = verifyRegex.exec(verifyContent)) !== null) verifyQuestions++;

const xmexamRegex = /xmexam\.taobao\.com/g;
while ((m = xmexamRegex.exec(verifyContent)) !== null) verifyXmexam++;

console.log(`  Total questions in file: ${verifyQuestions}`);
console.log(`  Remaining xmexam.taobao.com: ${verifyXmexam}`);
