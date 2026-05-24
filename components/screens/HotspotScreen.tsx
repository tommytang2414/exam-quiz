'use client'

import type { HotspotQuestion } from '@/lib/questions/types'
import type { useQuizStore } from '@/lib/quiz-store'

type Props = {
  store: ReturnType<typeof useQuizStore>
  questions: HotspotQuestion[]
}

export function HotspotScreen({ store, questions: _questions }: Props) {
  const { confirmed, hsIndex, hsQueue, hsSelections, goHome, hsSelect, hsConfirm, hsNext } = store
  const total = hsQueue.length
  const current = hsQueue[hsIndex] as HotspotQuestion | undefined

  if (!current) {
    return (
      <main className="min-h-dvh flex flex-col p-6 gap-4 max-w-sm mx-auto">
        <div className="flex items-center justify-between">
          <button onClick={goHome} className="back-btn">&#8592;</button>
          <span className="text-slate-500 text-sm">Loading...</span>
          <div style={{ width: 40 }} />
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-dvh flex flex-col p-6 gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button onClick={goHome} className="back-btn">&#8592;</button>
        <div className="flex flex-col items-center">
          <span className="review-badge">HOTSPOT</span>
          <span className="text-slate-500 text-xs font-mono mt-0.5">{hsIndex + 1} / {total}</span>
        </div>
        <div style={{ width: 40 }} />
      </div>

      {/* Progress bar */}
      <div className="quiz-progress-track">
        <div className="quiz-progress-fill" style={{
          width: `${((hsIndex + 1) / total) * 100}%`,
          background: 'linear-gradient(90deg, #8b5cf6, #a78bfa)',
        }} />
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col gap-4 max-w-sm mx-auto w-full">
        <div className="question-card">
          {current.topic !== undefined && (
            <span className="domain-badge" style={{ color: '#a78bfa', background: 'rgba(139,92,246,0.12)', borderColor: 'rgba(139,92,246,0.25)' }}>T{current.topic}</span>
          )}
          <p className="question-text">{current.text}</p>
          <p className="text-violet-400 text-xs mt-2">Select Yes or No for each box</p>
        </div>

        {/* Boxes */}
        <div className="space-y-3">
          {current.boxes.map((box, i) => {
            const selected = store.hsSelections[i]
            const isCorrect = confirmed && selected === box.answer
            const isWrong = confirmed && selected !== undefined && selected !== box.answer

            return (
              <div key={i} className={`hs-box ${confirmed ? (isCorrect ? 'hs-box-correct' : isWrong ? 'hs-box-wrong' : 'hs-box-dim') : ''}`}>
                <div className="flex items-start gap-3">
                  <span className="hs-box-label">Box {i + 1}</span>
                  <div className="flex-1">
                    <p className="hs-box-question">
                      {box.explanation ? box.explanation.split('\n')[0].substring(0, 120) : '(see question scenario above)'}
                    </p>
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => !confirmed && store.hsSelect(i, 'Yes')}
                        disabled={confirmed}
                        className={`hs-btn ${!confirmed ? (store.hsSelections[i] === 'Yes' ? 'hs-btn-selected-yes' : '') : ''} ${confirmed && box.answer === 'Yes' ? 'hs-btn-correct' : ''} ${confirmed && store.hsSelections[i] === 'Yes' && box.answer !== 'Yes' ? 'hs-btn-wrong' : ''}`}
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => !confirmed && store.hsSelect(i, 'No')}
                        disabled={confirmed}
                        className={`hs-btn ${!confirmed ? (store.hsSelections[i] === 'No' ? 'hs-btn-selected-no' : '') : ''} ${confirmed && box.answer === 'No' ? 'hs-btn-correct' : ''} ${confirmed && store.hsSelections[i] === 'No' && box.answer !== 'No' ? 'hs-btn-wrong' : ''}`}
                      >
                        No
                      </button>
                    </div>
                    {confirmed && isWrong && (
                      <p className="text-xs mt-1 text-red-400">Correct: {box.answer}</p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Confirm button */}
        {!confirmed && (
          <button
            onClick={hsConfirm}
            className="next-btn w-full"
            style={{ background: '#7c3aed' }}
          >
            Confirm
          </button>
        )}

        {confirmed && (
          <div className="sticky bottom-0 py-4 bg-gradient-to-t from-bg via-bg to-transparent">
            <button onClick={hsNext} className="next-btn w-full" style={{ background: '#7c3aed' }}>
              {hsIndex + 1 >= total ? 'Done' : 'Next'}
            </button>
          </div>
        )}
      </div>
    </main>
  )
}