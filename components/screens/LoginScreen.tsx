'use client'

import { useState } from 'react'

type Props = { store: ReturnType<typeof import('@/lib/quiz-store').useQuizStore> }

export function LoginScreen({ store }: Props) {
  const [code, setCode] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const c = code.trim().toUpperCase()
    if (c.length >= 4) {
      store.doRegister(c)
    }
  }

  return (
    <main className="min-h-dvh flex flex-col items-center justify-center p-6">
      <div className="login-card">
        <div className="login-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9"/>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
          </svg>
        </div>
        <h1 className="login-title">Exam Quiz</h1>
        <p className="login-subtitle">Enter your activation code to start</p>

        <form onSubmit={handleSubmit} className="w-full space-y-4 mt-2">
          <input
            type="text"
            value={code}
            onChange={e => setCode(e.target.value.toUpperCase())}
            placeholder="CODE"
            maxLength={12}
            className="code-input"
            autoFocus
            autoComplete="off"
            spellCheck={false}
          />
          {store.loginError && (
            <p className="text-red-400 text-sm text-center">{store.loginError}</p>
          )}
          <button
            type="submit"
            disabled={store.isRegistering || code.trim().length < 4}
            className="start-btn w-full disabled:opacity-50"
          >
            {store.isRegistering ? 'Verifying...' : 'Activate'}
          </button>
        </form>

        <p className="text-slate-600 text-xs text-center mt-4">
          Get your code from the administrator
        </p>
      </div>
    </main>
  )
}
