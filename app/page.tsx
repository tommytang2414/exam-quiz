'use client'

import { useQuizStore } from '@/lib/quiz-store'
import { LoginScreen, HomeScreen, QuizScreen, DoneScreen, ReviewScreen } from '@/components/screens'

export default function QuizPage() {
  const store = useQuizStore()

  if (store.loadState === 'loading') {
    return (
      <main className="min-h-dvh flex items-center justify-center">
        <p className="loading-dots">Loading</p>
      </main>
    )
  }

  if (store.mode === 'login') return <LoginScreen store={store} />
  if (store.mode === 'home') return <HomeScreen store={store} />
  if (store.mode === 'done') return <DoneScreen store={store} />
  if (store.mode === 'quiz' && store.current) return <QuizScreen store={store} />
  if (store.mode === 'review' && store.current) return <ReviewScreen store={store} />
  return null
}
