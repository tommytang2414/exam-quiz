'use client'

import { useState, useEffect, useCallback } from 'react'
import { getQuestions, DEFAULT_EXAM, type ExamType, type Question, AZ500_TOPICS, CCSP_DOMAINS } from './questions'
import { fetchCloudData, saveCloudData, register, getToken, logout, getSavedExam } from './cloud-sync'
import { hotspotQuestions } from './questions/az500_extra'
import { ddOrderQuestions } from './questions/az500_extra'
import type { HotspotQuestion, DragDropQuestion } from './questions/types'

type QuizMode = 'login' | 'home' | 'quiz' | 'done' | 'review' | 'select-exam' | 'hotspot' | 'dragdrop'
type LoadState = 'loading' | 'ready'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function useQuizStore() {
  const [mode, setMode] = useState<QuizMode>('login')
  const [loadState, setLoadState] = useState<LoadState>('loading')
  const [wrongIds, setWrongIds] = useState<Set<number>>(new Set())
  const [queue, setQueue] = useState<Question[]>([])
  const [current, setCurrent] = useState<Question | null>(null)
  const [selected, setSelected] = useState<number | null>(null)
  const [selectedMulti, setSelectedMulti] = useState<Set<number>>(new Set())
  const [confirmed, setConfirmed] = useState(false)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [totalCorrect, setTotalCorrect] = useState(0)
  const [sessionCorrect, setSessionCorrect] = useState(0)
  const [sessionAnswered, setSessionAnswered] = useState(0)
  const [sessionGoal, setSessionGoal] = useState(20)
  const [loginError, setLoginError] = useState('')
  const [isRegistering, setIsRegistering] = useState(false)
  const [reviewQueue, setReviewQueue] = useState<Question[]>([])
  const [reviewAnswered, setReviewAnswered] = useState(0)
  const [examType, setExamType] = useState<ExamType>(DEFAULT_EXAM)
  const [selectedDomains, setSelectedDomains] = useState<number[]>([])

  // HOTSPOT state
  const [hsQueue, setHsQueue] = useState<HotspotQuestion[]>([])
  const [hsIndex, setHsIndex] = useState(0)
  const [hsSelections, setHsSelections] = useState<Record<number, string>>({})
  const [hsConfirmed, setHsConfirmed] = useState(false)

  // DRAG DROP state
  const [ddQueue, setDdQueue] = useState<DragDropQuestion[]>([])
  const [ddIndex, setDdIndex] = useState(0)
  const [ddSelections, setDdSelections] = useState<(number | null)[]>([])
  const [ddConfirmed, setDdConfirmed] = useState(false)

  useEffect(() => {
    const token = getToken()
    const savedExam = getSavedExam() as ExamType
    if (token) {
      ;(async () => {
        const cloud = await fetchCloudData(savedExam)
        if (cloud) {
          setWrongIds(new Set(cloud.wrongIds))
          setTotalAnswered(cloud.totalAnswered)
          setTotalCorrect(cloud.totalCorrect)
        }
        setExamType(savedExam)
        setMode('home')
        setLoadState('ready')
      })()
    } else {
      setExamType(DEFAULT_EXAM)
      setMode('login')
      setLoadState('ready')
    }
  }, [])

  const doRegister = useCallback(async (code: string) => {
    setLoginError('')
    setIsRegistering(true)
    try {
      await register(code)
      setWrongIds(new Set())
      setTotalAnswered(0)
      setTotalCorrect(0)
      setMode('home')
    } catch (e: any) {
      setLoginError(e.message || 'Invalid code')
    } finally {
      setIsRegistering(false)
    }
  }, [])

  const doLogout = useCallback(() => {
    logout()
    setWrongIds(new Set())
    setTotalAnswered(0)
    setTotalCorrect(0)
    setSessionCorrect(0)
    setSessionAnswered(0)
    setExamType(DEFAULT_EXAM)
    setMode('login')
  }, [])

  const startQuiz = useCallback((wrongOnly = false) => {
    const allQuestions = getQuestions(examType)
    const filtered = selectedDomains.length > 0
      ? allQuestions.filter(q => selectedDomains.includes(q.topic ?? 0))
      : allQuestions
    const src = wrongOnly && wrongIds.size > 0
      ? filtered.filter(q => wrongIds.has(q.id))
      : filtered
    const shuffled = shuffle(src)
    const limited = shuffled.slice(0, sessionGoal > 0 ? sessionGoal : filtered.length)
    setQueue(limited)
    setCurrent(limited[0] ?? null)
    setSelected(null)
    setSelectedMulti(new Set())
    setConfirmed(false)
    setSessionCorrect(0)
    setSessionAnswered(0)
    setMode('quiz')
  }, [wrongIds, sessionGoal, examType, selectedDomains])

  const goReview = useCallback(() => {
    const allQuestions = getQuestions(examType)
    const filtered = selectedDomains.length > 0
      ? allQuestions.filter(q => selectedDomains.includes(q.topic ?? 0))
      : allQuestions
    const wrongQs = filtered.filter(q => wrongIds.has(q.id))
    const sorted = wrongQs.sort((a, b) => a.id - b.id)
    setReviewQueue(sorted)
    setCurrent(sorted[0] ?? null)
    setSelected(null)
    setSelectedMulti(new Set())
    setConfirmed(false)
    setReviewAnswered(0)
    setMode('review')
  }, [wrongIds, examType, selectedDomains])

  const reviewAnswer = useCallback((optIndex: number) => {
    if (confirmed) return
    setSelected(optIndex)
    setConfirmed(true)
    setReviewAnswered(a => a + 1)
  }, [confirmed])

  const reviewNext = useCallback(() => {
    const idx = reviewQueue.indexOf(current!)
    if (idx + 1 >= reviewQueue.length) {
      setMode('home')
      setCurrent(null)
    } else {
      setCurrent(reviewQueue[idx + 1])
      setSelected(null)
      setSelectedMulti(new Set())
      setConfirmed(false)
    }
  }, [current, reviewQueue])

  const answer = useCallback((optIndex: number) => {
    if (confirmed) return
    const q = current!
    const isMulti = q.isMulti

    if (isMulti) {
      const next = new Set(selectedMulti)
      if (next.has(optIndex)) {
        next.delete(optIndex)
      } else {
        next.add(optIndex)
      }
      setSelectedMulti(next)
      setSelected(null)
    } else {
      setSelected(optIndex)
      setConfirmed(true)
      const correct = q.answer === optIndex
      const nextAnswered = totalAnswered + 1
      const nextCorrect = correct ? totalCorrect + 1 : totalCorrect
      const nextWrong = new Set(wrongIds)
      if (correct) {
        nextWrong.delete(q.id)
      } else {
        nextWrong.add(q.id)
      }
      setTotalAnswered(nextAnswered)
      setTotalCorrect(nextCorrect)
      setSessionAnswered(a => a + 1)
      setSessionCorrect(c => c + (correct ? 1 : 0))
      setWrongIds(nextWrong)
      saveCloudData({
        exam: examType,
        wrongIds: [...nextWrong],
        totalAnswered: nextAnswered,
        totalCorrect: nextCorrect,
        lastUpdated: Date.now(),
      })
    }
  }, [confirmed, current, wrongIds, totalAnswered, totalCorrect, examType, selectedMulti])

  const confirmMulti = useCallback(() => {
    if (confirmed || !current?.isMulti) return
    setConfirmed(true)
    const correctLetters = (current.answer as string).split(',')
    const correctIndices = new Set(correctLetters.map(l => l.charCodeAt(0) - 65))
    const isCorrect =
      selectedMulti.size === correctIndices.size &&
      [...selectedMulti].every(i => correctIndices.has(i))
    const nextAnswered = totalAnswered + 1
    const nextCorrect = isCorrect ? totalCorrect + 1 : totalCorrect
    const nextWrong = new Set(wrongIds)
    if (isCorrect) {
      nextWrong.delete(current.id)
    } else {
      nextWrong.add(current.id)
    }
    setTotalAnswered(nextAnswered)
    setTotalCorrect(nextCorrect)
    setSessionAnswered(a => a + 1)
    setSessionCorrect(c => c + (isCorrect ? 1 : 0))
    setWrongIds(nextWrong)
    saveCloudData({
      exam: examType,
      wrongIds: [...nextWrong],
      totalAnswered: nextAnswered,
      totalCorrect: nextCorrect,
      lastUpdated: Date.now(),
    })
  }, [confirmed, current, wrongIds, totalAnswered, totalCorrect, examType, selectedMulti])

  const next = useCallback(() => {
    const idx = queue.indexOf(current!)
    if (idx + 1 >= queue.length) {
      setMode('done')
    } else {
      setCurrent(queue[idx + 1])
      setSelected(null)
      setSelectedMulti(new Set())
      setConfirmed(false)
    }
  }, [current, queue])

  const goHome = useCallback(() => {
    setMode('home')
    setCurrent(null)
  }, [])

  const resetProgress = useCallback(async () => {
    setWrongIds(new Set())
    setTotalAnswered(0)
    setTotalCorrect(0)
    await saveCloudData({ exam: examType, wrongIds: [], totalAnswered: 0, totalCorrect: 0, lastUpdated: Date.now() })
  }, [examType])

  // ─── HOTSPOT ──────────────────────────────────────────────────────────────

  const startHotspot = useCallback((wrongOnly = false) => {
    const filtered = selectedDomains.length > 0
      ? hotspotQuestions.filter(q => selectedDomains.includes(q.topic ?? 0))
      : hotspotQuestions
    const src = wrongOnly && wrongIds.size > 0
      ? filtered.filter(q => wrongIds.has(q.id))
      : filtered
    const shuffled = shuffle(src)
    const limited = shuffled.slice(0, sessionGoal > 0 ? sessionGoal : filtered.length)
    setHsQueue(limited)
    setHsIndex(0)
    setHsSelections({})
    setHsConfirmed(false)
    setMode('hotspot')
  }, [wrongIds, sessionGoal, selectedDomains])

  const hsSelect = useCallback((boxIndex: number, value: string) => {
    setHsSelections(prev => ({ ...prev, [boxIndex]: value }))
  }, [])

  const hsConfirm = useCallback(() => {
    setHsConfirmed(true)
    // Update wrongIds based on correctness
    const q = hsQueue[hsIndex]
    const answers = q.boxes.map(b => b.answer)
    const userAnswers = Object.entries(hsSelections).map(([k, v]) => ({ idx: parseInt(k), val: v }))
    const allCorrect = answers.every((a, i) => hsSelections[i] === a)
    if (!allCorrect) {
      setWrongIds(prev => new Set([...prev, q.id]))
    } else {
      setWrongIds(prev => { const s = new Set(prev); s.delete(q.id); return s })
    }
  }, [hsQueue, hsIndex, hsSelections])

  const hsNext = useCallback(() => {
    if (hsIndex + 1 >= hsQueue.length) {
      setMode('home')
    } else {
      setHsIndex(i => i + 1)
      setHsSelections({})
      setHsConfirmed(false)
    }
  }, [hsIndex, hsQueue.length])

  // ─── DRAG DROP ────────────────────────────────────────────────────────────

  const startDragDrop = useCallback((wrongOnly = false) => {
    const filtered = selectedDomains.length > 0
      ? ddOrderQuestions.filter(q => selectedDomains.includes(q.topic ?? 0))
      : ddOrderQuestions
    const src = wrongOnly && wrongIds.size > 0
      ? filtered.filter(q => wrongIds.has(q.id))
      : filtered
    const shuffled = shuffle(src)
    const limited = shuffled.slice(0, sessionGoal > 0 ? sessionGoal : filtered.length)
    setDdQueue(limited)
    setDdIndex(0)
    setDdSelections(limited[0] ? limited[0].items.map(() => null as number | null) : [] as (number | null)[])
    setDdConfirmed(false)
    setMode('dragdrop')
  }, [wrongIds, sessionGoal, selectedDomains])

  const ddSelect = useCallback((itemIndex: number, position: number | null) => {
    setDdSelections(prev => {
      const next = [...prev]
      next[itemIndex] = position
      return next
    })
  }, [])

  const ddConfirm = useCallback(() => {
    setDdConfirmed(true)
    const q = ddQueue[ddIndex]
    const correctOrder = q.items.map(item => item.position)
    const userOrder = ddSelections.filter(p => p !== null) as number[]
    const allCorrect =
      userOrder.length === correctOrder.length &&
      userOrder.every((pos, i) => pos === correctOrder[i])
    if (!allCorrect) {
      setWrongIds(prev => new Set([...prev, q.id]))
    } else {
      setWrongIds(prev => { const s = new Set(prev); s.delete(q.id); return s })
    }
  }, [ddQueue, ddIndex, ddSelections])

  const ddNext = useCallback(() => {
    if (ddIndex + 1 >= ddQueue.length) {
      setMode('home')
    } else {
      setDdIndex(i => i + 1)
      setDdSelections(ddQueue[ddIndex + 1] ? ddQueue[ddIndex + 1].items.map(() => null as number | null) : [] as (number | null)[])
      setDdConfirmed(false)
    }
  }, [ddIndex, ddQueue])

  const wrongCount = wrongIds.size

  return {
    mode, loadState,
    current, selected, confirmed,
    selectedMulti, setSelectedMulti,
    totalAnswered, totalCorrect,
    sessionCorrect, sessionAnswered,
    sessionGoal, setSessionGoal,
    wrongCount,
    loginError, isRegistering,
    doRegister, doLogout,
    startQuiz, answer, next, goHome, resetProgress,
    goReview, reviewAnswer, reviewNext,
    reviewQueue,
    examType, setExamType,
    selectedDomains, setSelectedDomains,
    questions: getQuestions(examType),
    confirmMulti,
    // HOTSPOT
    hotspotQuestions, hsQueue, hsIndex, hsSelections, hsConfirmed,
    startHotspot, hsSelect, hsConfirm, hsNext,
    // DRAG DROP
    ddOrderQuestions, ddQueue, ddIndex, ddSelections, ddConfirmed,
    startDragDrop, ddSelect, ddConfirm, ddNext,
  }
}