'use client'

import type { DragDropQuestion } from '@/lib/questions/types'
import type { useQuizStore } from '@/lib/quiz-store'

type Props = {
  store: ReturnType<typeof useQuizStore>
  questions: DragDropQuestion[]
}

export function DragDropScreen({ store, questions: _questions }: Props) {
  const { confirmed, ddIndex, ddQueue, ddSelections, goHome, ddSelect, ddConfirm, ddNext } = store
  const total = ddQueue.length
  const current = ddQueue[ddIndex] as DragDropQuestion | undefined

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
          <span className="review-badge">DRAG DROP</span>
          <span className="text-slate-500 text-xs font-mono mt-0.5">{ddIndex + 1} / {total}</span>
        </div>
        <div style={{ width: 40 }} />
      </div>

      {/* Progress bar */}
      <div className="quiz-progress-track">
        <div className="quiz-progress-fill" style={{
          width: `${((ddIndex + 1) / total) * 100}%`,
          background: 'linear-gradient(90deg, #0891b2, #22d3ee)',
        }} />
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col gap-4 max-w-sm mx-auto w-full">
        <div className="question-card">
          {current.topic !== undefined && (
            <span className="domain-badge" style={{ color: '#22d3ee', background: 'rgba(8,145,178,0.12)', borderColor: 'rgba(8,145,178,0.25)' }}>T{current.topic}</span>
          )}
          <p className="question-text">{current.text}</p>
          <p className="text-cyan-400 text-xs mt-2">
            {current.dragType === 'order'
              ? `Arrange ${current.items.length} steps in order`
              : `Select ${current.items.length} items`
            }
          </p>
        </div>

        {/* Steps list — number the items in correct order for review */}
        <div className="options-list">
          {/* Show all items in a numbered list */}
          {current.items.map((item, i) => {
            const userPos = store.ddSelections[i]
            const correctPos = item.position
            const isCorrect = !confirmed || userPos === correctPos

            return (
              <div key={i} className="option-btn dd-step-item">
                <span className="option-letter">{i + 1}</span>
                <span className="dd-item-text">{item.text}</span>
                {confirmed && (
                  <span className={`dd-position-badge ${isCorrect ? 'dd-correct' : 'dd-wrong'}`}>
                    {userPos ?? '?'} / {correctPos}
                  </span>
                )}
                {!confirmed && (
                  <input
                    type="number"
                    min={1}
                    max={current.items.length}
                    value={store.ddSelections[i] ?? ''}
                    onChange={(e) => store.ddSelect(i, e.target.value ? parseInt(e.target.value) : null)}
                    className="dd-position-input"
                    placeholder="#"
                  />
                )}
              </div>
            )
          })}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Confirm */}
        {!confirmed && (
          <button
            onClick={ddConfirm}
            className="next-btn w-full"
            style={{ background: '#0891b2' }}
          >
            Confirm
          </button>
        )}

        {confirmed && (
          <div className="sticky bottom-0 py-4 bg-gradient-to-t from-bg via-bg to-transparent">
            <button onClick={ddNext} className="next-btn w-full" style={{ background: '#0891b2' }}>
              {ddIndex + 1 >= total ? 'Done' : 'Next'}
            </button>
          </div>
        )}
      </div>
    </main>
  )
}