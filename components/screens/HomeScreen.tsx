'use client'

import { ProgressRing } from '@/components/ProgressRing'
import { SESSION_GOALS, CCSP_DOMAINS, getGreeting } from '@/lib/utils'

type Props = { store: ReturnType<typeof import('@/lib/quiz-store').useQuizStore> }

export function HomeScreen({ store }: Props) {
  const { wrongCount, totalAnswered, totalCorrect, sessionGoal, setSessionGoal,
          startQuiz, doLogout, resetProgress, goReview, examType, setExamType,
          selectedDomains, setSelectedDomains } = store
  const total = store.questions.length
  const done = totalAnswered
  const remaining = total - done
  const pct = done > 0 ? Math.round((totalCorrect / done) * 100) : 0
  const goalLabel = sessionGoal === 0 ? 'All' : `${sessionGoal}`

  return (
    <main className="min-h-dvh flex flex-col items-center justify-center p-6 gap-6">
      {/* Header */}
      <div className="flex w-full max-w-sm justify-between items-start">
        <div>
          <p className="text-slate-400 text-sm font-medium">{getGreeting()}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-slate-500 text-xs">{examType} Exam</span>
            <select
              value={examType}
              onChange={e => {
                const exam = e.target.value as 'CCSP' | 'CISSP'
                setExamType(exam)
                localStorage.setItem('ccsp-exam', exam)
              }}
              className="exam-select"
            >
              <option value="CCSP">CCSP</option>
              <option value="CISSP" disabled>CISSP (soon)</option>
            </select>
          </div>
        </div>
        <button onClick={doLogout} className="logout-btn">Sign out</button>
      </div>

      {/* Progress ring + accuracy */}
      <div className="relative" style={{ width: 160, height: 160 }}>
        <ProgressRing pct={total > 0 ? (done / total) * 100 : 0} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-slate-100">{pct}%</span>
          <span className="text-xs text-slate-500">{done}/{total}</span>
        </div>
      </div>

      {/* Stat cards */}
      <div className="w-full max-w-sm stat-card-grid">
        <div className="stat-card">
          <div className="text-2xl font-bold text-slate-100">{totalCorrect}</div>
          <div className="text-xs text-slate-500 mt-0.5">correct</div>
        </div>
        <div className="stat-card">
          <div className="text-2xl font-bold text-red-400">{wrongCount}</div>
          <div className="text-xs text-slate-500 mt-0.5">to review</div>
        </div>
        <div className="stat-card">
          <div className="text-2xl font-bold text-slate-100">{remaining}</div>
          <div className="text-xs text-slate-500 mt-0.5">remaining</div>
        </div>
      </div>

      {/* Session goal */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-slate-500 text-xs">Questions per session</p>
        <div className="flex gap-2 flex-wrap justify-center">
          {SESSION_GOALS.map(g => {
            const label = g === 0 ? 'All' : `${g}`
            const active = sessionGoal === g
            return (
              <button key={g} onClick={() => setSessionGoal(g)}
                className={`goal-chip ${active ? 'active' : ''}`}>{label}</button>
            )
          })}
        </div>
      </div>

      {/* Domain filter */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-slate-500 text-xs">Filter by domain</p>
        <div className="flex gap-1.5 flex-wrap justify-center">
          {CCSP_DOMAINS.map(d => {
            const active = selectedDomains.includes(d.id)
            return (
              <button
                key={d.id}
                onClick={() => {
                  if (active) {
                    setSelectedDomains(selectedDomains.filter(id => id !== d.id))
                  } else {
                    setSelectedDomains([...selectedDomains, d.id])
                  }
                }}
                className={`domain-chip ${active ? 'active' : ''}`}
                title={d.name}
              >
                D{d.id}
              </button>
            )
          })}
          {selectedDomains.length > 0 && (
            <button onClick={() => setSelectedDomains([])} className="domain-chip-clear">
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Wrong card */}
      {wrongCount > 0 && (
        <div className="wrong-card w-full max-w-sm">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-red-300 font-semibold text-sm">{wrongCount} questions need review</p>
              <p className="text-red-400/60 text-xs mt-0.5">Focus on your weak areas</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button onClick={goReview} className="wrong-retry-btn">Review</button>
              <button onClick={() => startQuiz(true)} className="wrong-retry-btn">Practice</button>
            </div>
          </div>
        </div>
      )}

      <button onClick={() => startQuiz(false)} className="start-btn">
        {done === 0 ? `Start · ${goalLabel}` : `Continue · ${goalLabel}`}
      </button>

      {done > 0 && (
        <button onClick={resetProgress} className="reset-link">Reset all progress</button>
      )}

      <p className="text-slate-600 text-xs">Synced across all your devices</p>
    </main>
  )
}
