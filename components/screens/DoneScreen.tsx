'use client'

import { ProgressRing } from '@/components/ProgressRing'

type Props = { store: ReturnType<typeof import('@/lib/quiz-store').useQuizStore> }

export function DoneScreen({ store }: Props) {
  const { sessionCorrect, sessionAnswered, totalCorrect, totalAnswered,
          wrongCount, sessionGoal, startQuiz, goHome } = store
  const total = store.questions.length
  const pct = sessionAnswered > 0 ? Math.round((sessionCorrect / sessionAnswered) * 100) : 0
  const stars = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0
  const done = totalAnswered
  const totalPct = done > 0 ? Math.round((totalCorrect / done) * 100) : 0
  const scoreColor = pct >= 70 ? '#6ee7b7' : pct >= 50 ? '#fbbf24' : '#f87171'

  return (
    <main className="min-h-dvh flex flex-col items-center justify-center p-6 gap-6">
      {/* Stars */}
      <div className="flex gap-2">
        {[1,2,3].map(s => (
          <span key={s} className={`star ${s <= stars ? 'star-on' : 'star-off'}`}>&#9733;</span>
        ))}
      </div>

      {/* Score ring */}
      <div className="relative" style={{ width: 180, height: 180 }}>
        <ProgressRing pct={pct} size={180} stroke={14} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span style={{ fontSize: '3rem', fontWeight: 800, color: scoreColor, lineHeight: 1 }}>{pct}%</span>
          <span className="text-xs text-slate-500 mt-1">{sessionCorrect}/{sessionAnswered}</span>
        </div>
      </div>

      {sessionAnswered >= sessionGoal && sessionGoal > 0 && (
        <p className="text-emerald-400 text-sm font-medium">Session complete!</p>
      )}

      {/* All-time card */}
      <div className="alltime-card">
        <p className="text-slate-400 text-xs mb-3 font-medium">All-time progress</p>
        <div className="flex gap-5 text-center">
          <div className="flex-1">
            <div className="text-lg font-bold text-slate-200">{totalPct}%</div>
            <div className="text-xs text-slate-500">accuracy</div>
          </div>
          <div className="w-px bg-slate-700" />
          <div className="flex-1">
            <div className="text-lg font-bold text-slate-200">{done}/{total}</div>
            <div className="text-xs text-slate-500">attempted</div>
          </div>
          <div className="w-px bg-slate-700" />
          <div className="flex-1">
            <div className="text-lg font-bold text-red-400">{wrongCount}</div>
            <div className="text-xs text-slate-500">to review</div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="w-full max-w-sm space-y-3">
        <button onClick={() => startQuiz(false)} className="start-btn w-full">Keep going</button>
        {wrongCount > 0 && (
          <button onClick={() => startQuiz(true)} className="wrong-retry-btn w-full">
            Practice wrong
          </button>
        )}
        <button onClick={goHome} className="reset-link w-full text-center">Back to home</button>
      </div>
    </main>
  )
}
