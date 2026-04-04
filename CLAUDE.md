# Exam Quiz App

Mobile-first MCQ practice app for CCSP/CISSP exam preparation with cloud sync and multi-user support.

## URLs
- **App**: https://ccsp-quiz.vercel.app
- **Admin Panel**: https://ccsp-quiz.vercel.app/admin
- **VPS Backend API**: http://18.139.210.59:5001

## Stack
- Next.js 14 (App Router), TypeScript, Tailwind CSS v3 + Geist font
- Flask API on AWS Lightsail VPS (Python)
- SQLite database on VPS
- Vercel API routes as proxy (bypasses CORS)

## Quick Start
```bash
cd C:/Users/user/exam-quiz
npm run dev
```

## Deploy
```bash
cd C:/Users/user/exam-quiz
npx vercel --prod --yes
```

## Vercel Best Practices

### Deploy Sequence
Vercel checks git author. If remote is already set to GitHub, deploy will fail.
```bash
cd C:/Users/user/exam-quiz
npx vercel --prod --yes
# No need to remove/add origin — exam-quiz has its own repo
```

### Keep Deployments Clean
Old deployments accumulate and use bandwidth. After major changes:
```bash
# List deployments
npx vercel ls

# Remove old deployment (by full URL)
echo "y" | npx vercel rm https://ccsp-quiz-XXXXX-tommytangcc-3823s-projects.vercel.app
```

### Avoid Over-Deploying
Each deploy creates a new production deployment. Batch changes before deploying.
- Don't `vercel --prod` after every small fix
- Commit all changes first, then deploy once
- Vercel auto-expires old deployments after 90 days (if no alias points to them)

### Project Organization (Vercel Account: tommytangcc-3823)
| Project | URL | Purpose |
|---------|-----|---------|
| exam-quiz | https://ccsp-quiz.vercel.app | Exam practice app |
| exchange-website | https://winwinexchangehk.com | Win Win Exchange client site |
| portfolio | https://portfolio-olive-one-30.vercel.app | Tommy portfolio |

### Bandwidth Limits (Free Tier)
- 100GB/month shared across all projects
- Monitor in Vercel dashboard if concerned
- This project (quiz app) uses minimal bandwidth (~1MB/month for typical use)

## Architecture

### Frontend (Vercel)
- `app/page.tsx` — main UI (login, home, quiz, done, review screens)
- `app/globals.css` — pure CSS utilities
- `lib/cloud-sync.ts` — API calls via Vercel proxy (`/api/*`)
- `lib/quiz-store.ts` — React state management
- `lib/questions/` — question banks by exam
  - `index.ts` — `getQuestions(exam)`, `ExamType`, `DEFAULT_EXAM`
  - `ccsp.ts` — 1438 CCSP questions (ready)
  - `cissp.ts` — placeholder (empty, coming soon)

### API Proxy (Vercel)
- `app/api/register/route.ts` — POST, proxies to VPS `/api/register`
- `app/api/data/route.ts` — GET/PUT, proxies to VPS `/api/data`

### Backend (VPS Flask)
- `vps_api/app.py` — Flask API, DB at `/home/ubuntu/ccsp-quiz/auth.db`
- Admin token stored in DB `users` table

### Database Schema
```sql
codes(id, exam, code, used_by, used_at, created_at)
users(id, exam, token, data, created_at, updated_at)
admins(google_id, email, name, added_at)  -- legacy, now uses email whitelist
```

## Authentication Flow
1. User enters activation code + selects exam
2. Vercel API route proxies to VPS `/api/register`
3. VPS validates (code exists AND code.name matches submitted name AND exam matches)
4. If valid → creates user + token OR returns existing token (reused=true)
5. Token stored in localStorage on device
6. Same code + same name + same exam = same user on any device

**Code is name-assigned**: Each code is pre-assigned to a specific name (Tommy, Hailey, etc). Wrong name = 403 error.

### Admin Authentication
Email + password login (stored in localStorage after login).
- Allowed emails: `tommytang2414@gmail.com`, `tommytang.cc@gmail.com`
- Password: `ccsp-admin-2026`

Login sends `X-Admin-Email` header to VPS for validation.

## Activation Codes (name-assigned, exam-aware)

| Code | User | Exam |
|------|------|------|
| `ALPWBB36` | Tommy | CCSP |
| `5KN3WTNX` | Hailey | CCSP |

Generate more via admin panel (https://ccsp-quiz.vercel.app/admin) — each code requires a name assignment.

## Cloud Sync
User progress stored in VPS DB `users.data` as JSON:
```json
{"exam": "CCSP", "wrongIds": [], "totalAnswered": 0, "totalCorrect": 0, "lastUpdated": 1234567890}
```

## Exam Types
- **CCSP** (default) — 1438 questions ready
- **CISSP** — coming soon

## VPS Management

**SSH Key:** `C:/Users/user/PycharmProjects/CryptoStrategy/mcp_server/LightsailDefaultKey-ap-southeast-1.pem`

```bash
ssh -i "C:/Users/user/PycharmProjects/CryptoStrategy/mcp_server/LightsailDefaultKey-ap-southeast-1.pem" ubuntu@18.139.210.59
```

**Restart Flask:**
```bash
ps aux | grep app.py | grep -v grep
kill <PID>
cd /home/ubuntu/ccsp-quiz && nohup python3 app.py > /tmp/flask-ccsp.log 2>&1 &
```

**View logs:** `tail -f /tmp/flask-ccsp.log`

**Database:** `/home/ubuntu/ccsp-quiz/auth.db` (SQLite)

## Question Parsing
Textbank uses SINGLE-SPACE separation (no pipe `|`). Parsed by matching first 80 chars of question text.
`vps_api/rebuild_questions.py` — CA anchor algorithm for fixing corrupted options.

## Changelog

### 2026-04-05 — Admin Panel Enhanced + Email Auth

**Admin Panel (https://ccsp-quiz.vercel.app/admin):**
- Stats tab: Shows users, codes generated, codes used, unused per exam
- Codes tab: Generate activation codes with name assignment, shows used/unused status
- Users tab: Shows user name, ID (shortened), answered/correct/wrong counts, score %, revoke button

**Admin Authentication:**
- Replaced Google SSO (wasn't working) with email + password
- Allowed emails: `tommytang2414@gmail.com`, `tommytang.cc@gmail.com`
- Password: `ccsp-admin-2026`
- Uses query param `?admin=email` instead of header (Vercel strips custom headers)

**API Proxy Routes:**
- `/api/admin/stats` — stats by exam
- `/api/admin/codes?exam=CCSP` — all codes for exam
- `/api/admin/users?exam=CCSP` — all users with progress data
- `/api/admin/gen-code` — POST, generate new codes
- `/api/admin/revoke-user` — POST, delete user + free their code

**VPS Endpoints:**
- `X-Admin-Email` header checked against whitelist
- Users query includes `u.data` (JSON progress) parsed for stats
- Revoke deletes user and frees their code

**Deploy:** `npx vercel --prod --yes` ✓ | VPS restarted ✓

### 2026-04-05 — Q78 Audit + fix_overlaps() Attempt (abandoned)

**Problem:** Q78 options = `["Software-based", "Software as a", "Service (SaaS)", "Type 1 Bare metal"]` — "Software as a Service (SaaS)" incorrectly split across two options.

**fix_overlaps() added:** Post-parse validation that detects and re-merges split options using balanced capital-letter boundary re-splitting. Works for cases where a short word at boundary causes false split.

**Audit results:**
- 16 BAD = 15 textbank format issues (missing `?`) + 1 missing CA/Expl — not parser errors
- 45 FALLBACK = equal_partition fallback — most are valid short single-word options
- Q78 **cannot be fixed**: textbank source only has 3 options (`Software-based`, `Software as a Service (SaaS)`, `Type 1 Bare metal`). 4th option missing from source data. Capital-letter split can't create a 4th option from 3.
- Q353 JSON: `{"Test": {"Vendor": "IC2"...}}` appears as option A — textbank data quality issue (JSON is question content, not an option)

**Parser results:** OK=1437, FALLBACK=45, BAD=16, Total=1482

**Commit:** `d029eee`

### 2026-04-05 — Full App Redesign (Tailwind + Components + Domain Filter)

**Phase 1 — Infrastructure:**
- Installed `tailwindcss@^3`, `postcss`, `autoprefixer`, `geist` npm packages
- Created `tailwind.config.ts` (custom theme, Geist font variable)
- Created `postcss.config.js`
- Updated `app/layout.tsx` with GeistSans font
- Rewrote `app/globals.css`: replaced ~430 lines of hand-written utilities with Tailwind directives + component CSS (~220 lines)
- Deleted duplicate utilities: `flex`, `gap-*`, `p-*`, `text-*`, `font-*` etc — now handled by Tailwind

**Phase 2 — Component Extraction:**
- Extracted `ProgressRing` to `components/ProgressRing.tsx`
- Created `components/screens/` with 5 screen components: LoginScreen, HomeScreen, QuizScreen, DoneScreen, ReviewScreen
- Created `components/screens/index.ts` barrel
- Created `lib/utils.ts` (getGreeting, SESSION_GOALS, CCSP_DOMAINS)
- Slimmed `app/page.tsx` to ~20-line router

**Phase 3 — Domain Filtering:**
- Added `selectedDomains: number[]` + `setSelectedDomains` to quiz-store
- `startQuiz()` and `goReview()` filter by selected domains
- Domain filter D1-D6 chips in HomeScreen with multi-select

**Phase 4 — Visual Redesign:**
- **HomeScreen**: gradient stroke progress ring, 3-column stat cards with borders, exam selector cleaned up
- **QuizScreen**: question card with domain badge, 48px+ touch targets, circle letter badges, green glow on correct, red shake animation on wrong, sticky bottom "Next" button with gradient fade
- **ReviewScreen**: amber/orange accent, "REVIEW MODE" badge, amber progress bar and next button
- **DoneScreen**: large circular score ring with dynamic color (green/amber/red), improved all-time card
- **LoginScreen**: backdrop-blur card, SVG icon (no emoji), cleaner input styling

**Deploy:** `npx vercel --prod --yes` ✓

### 2026-04-04 — Question Bank Full Reparse (parse_v2.py)

**Problem:** Previous parser (regenerate_ccsp.py) used equal partition fallback for ~95% of questions, producing systematically wrong option splits. Q1 had options ["Multi-tenancy Resource pooling", "Shadow IT", "Use of", "default passwords"] — answer index pointed to wrong text.

**New parser (`parse_v2.py`) — 3-phase algorithm:**
1. **Phase 1** — Prefix search: try progressively shorter prefixes of explanation's "Correct answer: X" against options_raw with word-boundary matching
2. **Phase 2** — Substring search: scan all n-grams of ca_raw (handles explanation using full name "Software as a Service (SaaS)" vs option abbreviation "SaaS")
3. **Phase 3** — Reverse word search: try each word from options_raw that appears in ca_raw

**Key improvements over old parser:**
- Word-boundary matching (no substring-within-word like "structured" inside "Semi-structured")
- Period-inclusive matching (sentence options ending with "." are handled correctly)
- Quality rejection: if parse gives lowercase-starting option → retry with shorter anchor
- Retry loop: shrink anchor phrase until parse succeeds with all-uppercase option starts

**Results:** 1437/1482 (97%) clean parses, 45 fallback (3%), 16 bad (<1%)
- Before: ~1397 questions had wrong option splits
- After: ~45 questions use equal-partition fallback (mostly edge cases)

**Deploy:** https://ccsp-quiz.vercel.app ✓

### 2026-04-04 — Domain Display + TypeScript Fix

**Changes:**
- `lib/questions/index.ts`: Added `domain?: number` to exported `Question` interface (was missing, caused TypeScript build error)
- `app/page.tsx`: Added `Domain X` display below question text in both QuizScreen and ReviewScreen
- Build succeeded, deployed to https://ccsp-quiz.vercel.app

**TypeScript error fix**: `Property 'domain' does not exist on type 'Question'` — the `Question` interface in `index.ts` didn't re-export the `domain` field from `ccsp.ts`. Fixed by adding `domain?: number` to the interface.

### 2026-04-04 — CCSP Question Bank Full Fix & Domain Categorization

**Changes:**
- Regenerated `lib/questions/ccsp.ts` from original `CCSP questionbank.txt`
- Removed all 174 `xmexam.taobao.com` garbage text occurrences
- Fixed 11 questions with split/malformed options (Q353, Q813, Q317, Q407, Q43, Q240, Q825, Q1125, Q1398, Q434, Q968)
- Added `domain` field (1-6) to all 1482 questions

**Domain Distribution:**
- Domain 1 (Cloud Concepts, Architecture, Design): 254 questions
- Domain 2 (Cloud Data Security): 293 questions
- Domain 3 (Cloud Platform & Infrastructure Security): 252 questions
- Domain 4 (Cloud Application Security): 251 questions
- Domain 5 (Cloud Security Operations): 240 questions
- Domain 6 (Legal, Risk, and Compliance): 192 questions

**Scripts:**
- `regenerate_ccsp.py` — regenerates ccsp.ts from textbank using CA anchor algorithm
- `apply_all_fixes.py` — applies known manual fixes to regenerated output

**Deploy**: `npx vercel --prod --yes` ✓

### 2026-04-03 — Restructure to Exam Quiz (CCSP/CISSP Centralized)

**Changes**:
- Moved from `C:/Users/user/portfolio/ccsp-quiz` to `C:/Users/user/exam-quiz`
- Questions restructured: `lib/questions/ccsp.ts`, `lib/questions/cissp.ts`, `lib/questions/index.ts`
- `getQuestions(exam)` returns questions for specified exam type
- `quiz-store.ts` updated: `examType` state, exam selector on home screen
- `cloud-sync.ts`: `CloudData` now includes `exam` field
- Login screen: title changed to "Exam Quiz"
- Home screen: exam selector dropdown (CCSP ready, CISSP disabled)
- VPS backend needs update to support exam-aware codes (TODO)

**Deploy**: `npx vercel --prod --yes` ✓ (https://ccsp-quiz.vercel.app)

### 2026-04-03 (earlier) — Fix All Question Options

See git history for details on CA anchor algorithm and question fixing.
