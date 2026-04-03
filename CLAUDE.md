# Exam Quiz App

Mobile-first MCQ practice app for CCSP/CISSP exam preparation with cloud sync and multi-user support.

## URLs
- **App**: https://ccsp-quiz.vercel.app
- **Admin Panel**: http://18.139.210.59:5001/admin.html
- **VPS Backend API**: http://18.139.210.59:5001

## Stack
- Next.js 14 (App Router), TypeScript, pure CSS
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
```

## Authentication Flow
1. User enters activation code + selects exam
2. Vercel API route proxies to VPS `/api/register`
3. VPS validates (code exists AND code.name matches submitted name AND exam matches)
4. If valid → creates user + token OR returns existing token (reused=true)
5. Token stored in localStorage on device
6. Same code + same name + same exam = same user on any device

**Code is name-assigned**: Each code is pre-assigned to a specific name (Tommy, Hailey, etc). Wrong name = 403 error.

## Activation Codes (name-assigned, exam-aware)

| Code | User | Exam |
|------|------|------|
| `ALPWBB36` | Tommy | CCSP |
| `5KN3WTNX` | Hailey | CCSP |

Generate more via admin panel (http://18.139.210.59:5001/admin.html) with admin token — each code requires a name assignment.

## Admin Token
```
sbm1Sdkjb0WkUS2iG2FsOHbm_lfSmjDulhZPq3ilhgA
```

## Cloud Sync
User progress stored in VPS DB `users.data` as JSON:
```json
{"exam": "CCSP", "wrongIds": [], "totalAnswered": 0, "totalCorrect": 0, "lastUpdated": 1234567890}
```

## Exam Types
- **CCSP** (default) — 1438 questions ready
- **CISSP** — coming soon

## VPS Management

### Connect
```bash
ssh -i "C:/Users/user/PycharmProjects/CryptoStrategy/mcp_server/LightsailDefaultKey-ap-southeast-1.pem" ubuntu@18.139.210.59
```

### Restart Flask app
```bash
systemctl --user restart flask-ccsp
```

### Check status
```bash
systemctl --user status flask-ccsp
```

### View logs
```bash
tail -f /home/ubuntu/ccsp-quiz/flask.log
```

## Question Parsing
Textbank uses SINGLE-SPACE separation (no pipe `|`). Parsed by matching first 80 chars of question text.
`vps_api/rebuild_questions.py` — CA anchor algorithm for fixing corrupted options.

## Worklog

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
