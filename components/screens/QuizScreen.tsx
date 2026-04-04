'use client'

import { useEffect, useState } from 'react'

type Props = { store: ReturnType<typeof import('@/lib/quiz-store').useQuizStore> }

export function QuizScreen({ store }: Props) {
  const { current, selected, confirmed, sessionAnswered, sessionGoal,
          answer, next, goHome } = store
  const letters = ['A', 'B', 'C', 'D', 'E']
  const isCorrect = selected !== null && current!.answer === selected
  const progress = sessionGoal > 0 ? sessionAnswered / sessionGoal : 0
  const [shake, setShake] = useState(false)

  useEffect(() => {
    if (confirmed && !isCorrect) {
      setShake(true)
      const t = setTimeout(() => setShake(false), 500)
      return () => clearTimeout(t)
    }
  }, [confirmed, isCorrect])

  return (
    <main className="min-h-dvh flex flex-col max-w-lg mx-auto">
      {/* Header */}
      <header className="flex items-center justify-between px-4 pt-4 pb-2">
        <button onClick={goHome} className="back-btn">&#10005;</button>
        <div className="flex flex-col items-center">
          <span className="text-xs text-slate-500 font-mono">
            {sessionAnswered}{sessionGoal > 0 ? `/${sessionGoal}` : ''}
          </span>
          <span className="text-xs text-slate-600">Q#{current!.id}</span>
        </div>
        <div style={{ width: 40 }} />
      </header>

      {/* Progress bar */}
      <div className="px-4 pb-4">
        <div className="quiz-progress-track">
          <div className="quiz-progress-fill"
            style={{ width: `${Math.min(progress * 100, 100)}%` }} />
        </div>
      </div>

      {/* Question card */}
      <div className="flex-1 flex flex-col px-4 gap-5">
        <div className="question-card">
          {current!.domain && (
            <span className="domain-badge">D{current!.domain}</span>
          )}
          <h2 className="question-text">{current!.text}</h2>
        </div>

        {/* Options */}
        <div className="options-list">
          {current!.options.map((opt, i) => {
            const isSelected = selected === i
            const isCorrectOpt = current!.answer === i
            let cls = 'option-btn'
            if (confirmed) {
              if (isCorrectOpt) cls += ' option-correct'
              else if (isSelected) cls += ' option-wrong'
              else cls += ' option-dim'
            } else if (isSelected) {
              cls += ' option-selected'
            }
            return (
              <button
                key={i}
                onClick={() => answer(i)}
                disabled={confirmed}
                className={`${cls} ${shake && isSelected ? 'option-shake' : ''}`}
              >
                <span className="option-letter">{letters[i]}</span>
                <span className="option-text">{opt}</span>
              </button>
            )
          })}
        </div>

        {/* Explanation */}
        {confirmed && (
          <div className={`exp-box ${isCorrect ? 'exp-correct' : 'exp-wrong'}`}>
            <p className="exp-label">
              {isCorrect ? '&#10003; Correct!' : `&#10007; Answer: ${letters[current!.answer]}`}
            </p>
            {current!.explanation && (
              <p className="exp-text">{current!.explanation}</p>
            )}
          </div>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Next button — sticky at bottom */}
        {confirmed && (
          <div className="sticky bottom-0 py-4 bg-gradient-to-t from-bg via-bg to-transparent">
            <button onClick={next} className="next-btn w-full">
              {sessionAnswered >= sessionGoal && sessionGoal > 0 ? 'Finish' : 'Next &#8594;'}
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
