'use client'

import { useEffect, useState } from 'react'

type Props = { store: ReturnType<typeof import('@/lib/quiz-store').useQuizStore> }

export function ReviewScreen({ store }: Props) {
  const { current, selected, confirmed, reviewNext, reviewQueue, goHome } = store
  const idx = reviewQueue.indexOf(current!)
  const total = reviewQueue.length
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  const [shake, setShake] = useState(false)

  const isMulti = current!.isMulti
  const answer = current!.answer

  useEffect(() => {
    if (confirmed && !isMulti && selected !== null && answer !== selected) {
      setShake(true)
      const t = setTimeout(() => setShake(false), 500)
      return () => clearTimeout(t)
    }
  }, [confirmed, isMulti, selected, answer])

  const isCorrectOpt = (i: number) => {
    if (isMulti) {
      const correctLetters = (answer as string).split(',')
      return correctLetters.includes(letters[i])
    }
    return answer === i
  }

  const isSelected = (i: number) => selected === i

  return (
    <main className="min-h-dvh flex flex-col p-6 gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button onClick={goHome} className="back-btn">&#8592;</button>
        <div className="flex flex-col items-center">
          <span className="review-badge">REVIEW MODE</span>
          <span className="text-slate-500 text-xs font-mono mt-0.5">{idx + 1} / {total}</span>
        </div>
        <div style={{ width: 40 }} />
      </div>

      {/* Progress bar */}
      <div className="quiz-progress-track">
        <div className="quiz-progress-fill" style={{
          width: `${((idx + 1) / total) * 100}%`,
          background: 'linear-gradient(90deg, #f59e0b, #fbbf24)'
        }} />
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col gap-4 max-w-sm mx-auto w-full">
        <div className="question-card">
          {current!.topic !== undefined && (
            <span className="domain-badge" style={{ color: '#fbbf24', background: 'rgba(245, 158, 11, 0.12)', borderColor: 'rgba(245, 158, 11, 0.25)' }}>T{current!.topic}</span>
          )}
          <p className="question-text">{current!.text}</p>
          {isMulti && (
            <p className="text-amber-400 text-xs mt-2">Multi-select: choose all that apply</p>
          )}
        </div>

        <div className="options-list">
          {current!.options.map((opt, i) => {
            const correct = isCorrectOpt(i)
            const sel = isSelected(i)
            let cls = 'option-btn'
            if (confirmed) {
              if (correct) cls += ' option-correct'
              else if (sel) cls += ' option-wrong'
              else cls += ' option-dim'
            } else if (sel) {
              cls += ' option-selected'
            }
            return (
              <button
                key={i}
                onClick={() => store.reviewAnswer(i)}
                disabled={confirmed}
                className={`${cls} ${shake && sel ? 'option-shake' : ''}`}
              >
                <span className="option-letter">{letters[i]}</span>
                <span className="option-text">{opt}</span>
              </button>
            )
          })}
        </div>

        {confirmed && (
          <div className={`exp-box ${(!isMulti && selected === answer) || (isMulti && current!.options.map((_, i) => isCorrectOpt(i)).every(c => c)) ? 'exp-correct' : 'exp-wrong'}`}>
            <p className="exp-label">
              {isMulti
                ? `&#10007; Answer: ${answer}`
                : selected === answer
                  ? '&#10003; You got it!'
                  : `&#10007; Answer: ${typeof answer === 'number' && (answer as number) in letters ? letters[answer as number] : String(answer)}`
              }
            </p>
            {current!.explanation && (
              <p className="exp-text">{current!.explanation}</p>
            )}
          </div>
        )}

        <div className="flex-1" />

        {confirmed && (
          <div className="sticky bottom-0 py-4 bg-gradient-to-t from-bg via-bg to-transparent">
            <button onClick={reviewNext} className="next-btn w-full" style={{ background: '#f59e0b' }}>
              {idx + 1 >= total ? 'Done' : 'Next &#8594;'}
            </button>
          </div>
        )}
      </div>
    </main>
  )
}