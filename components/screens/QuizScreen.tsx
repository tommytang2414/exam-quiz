'use client'

import { useEffect, useState } from 'react'

type Props = { store: ReturnType<typeof import('@/lib/quiz-store').useQuizStore> }

export function QuizScreen({ store }: Props) {
  const { current, selected, confirmed, selectedMulti, answer, next, goHome,
          confirmMulti } = store
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  const isMulti = current!.isMulti
  const progress = store.sessionGoal > 0 ? store.sessionAnswered / store.sessionGoal : 0
  const [shake, setShake] = useState(false)

  useEffect(() => {
    if (confirmed && !isMulti && selected !== null && current!.answer !== selected) {
      setShake(true)
      const t = setTimeout(() => setShake(false), 500)
      return () => clearTimeout(t)
    }
  }, [confirmed, isMulti, selected, current])

  const handleOptionClick = (i: number) => {
    if (confirmed) return
    answer(i)
  }

  const isCorrectOption = (i: number) => {
    if (isMulti) {
      const correctLetters = (current!.answer as string).split(',')
      return correctLetters.includes(letters[i])
    }
    return current!.answer === i
  }

  const isSelected = (i: number) => {
    if (isMulti) return selectedMulti.has(i)
    return selected === i
  }

  const optionClass = (i: number) => {
    let cls = 'option-btn'
    if (confirmed) {
      if (isCorrectOption(i)) cls += ' option-correct'
      else if (isSelected(i)) cls += ' option-wrong'
      else cls += ' option-dim'
    } else if (isSelected(i)) {
      cls += ' option-selected'
    }
    if (isMulti && isSelected(i) && !confirmed) cls += ' option-multi-selected'
    return cls
  }

  return (
    <main className="min-h-dvh flex flex-col max-w-lg mx-auto">
      {/* Header */}
      <header className="flex items-center justify-between px-4 pt-4 pb-2">
        <button onClick={goHome} className="back-btn">&#10005;</button>
        <div className="flex flex-col items-center">
          <span className="text-xs text-slate-500 font-mono">
            {store.sessionAnswered}{store.sessionGoal > 0 ? `/${store.sessionGoal}` : ''}
          </span>
          <span className="text-xs text-slate-600">Q#{current!.id}{isMulti ? ' (multi)' : ''}</span>
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
          {current!.topic !== undefined && (
            <span className="domain-badge">T{current!.topic}</span>
          )}
          <h2 className="question-text">{current!.text}</h2>
          {isMulti && !confirmed && (
            <p className="text-amber-400 text-xs mt-2">Select all that apply</p>
          )}
        </div>

        {/* Options */}
        <div className="options-list">
          {current!.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleOptionClick(i)}
              disabled={confirmed}
              className={`${optionClass(i)} ${shake && isSelected(i) && !isMulti ? 'option-shake' : ''}`}
            >
              <span className="option-letter">{letters[i]}</span>
              <span className="option-text">{opt}</span>
              {isMulti && isSelected(i) && !confirmed && (
                <span className="ml-auto text-amber-400 text-sm">&#10003;</span>
              )}
            </button>
          ))}
        </div>

        {/* Multi-select confirm button */}
        {isMulti && !confirmed && selectedMulti.size > 0 && (
          <div className="sticky bottom-0 py-4 bg-gradient-to-t from-bg via-bg to-transparent">
            <button onClick={confirmMulti} className="next-btn w-full bg-amber-600 hover:bg-amber-500">
              Confirm Selection ({selectedMulti.size})
            </button>
          </div>
        )}

        {/* Explanation */}
        {confirmed && (
          <div className={`exp-box ${(isMulti ? selectedMulti.size > 0 && [...selectedMulti].every(i => isCorrectOption(i)) : selected === current!.answer) ? 'exp-correct' : 'exp-wrong'}`}>
            <p className="exp-label">
              {isMulti
                ? selectedMulti.size > 0 && [...selectedMulti].every(i => isCorrectOption(i))
                  ? '&#10003; Correct!'
                  : `&#10007; Answer: ${current!.answer}`
                : selected === current!.answer
                  ? '&#10003; Correct!'
                  : `&#10007; Answer: ${letters[current!.answer as number]}`
              }
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
              {store.sessionAnswered >= store.sessionGoal && store.sessionGoal > 0 ? 'Finish' : 'Next &#8594;'}
            </button>
          </div>
        )}
      </div>
    </main>
  )
}