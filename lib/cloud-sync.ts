'use client'

// API routes via Next.js (same origin on Vercel)
// No more CORS/mixed-content issues
const API = '/api'

// Per-exam progress structure
export interface ExamProgress {
  wrongIds: number[]
  totalAnswered: number
  totalCorrect: number
  lastUpdated: number
}

export interface CloudData {
  exam: string
  wrongIds: number[]
  totalAnswered: number
  totalCorrect: number
  lastUpdated: number
}

export async function register(code: string, exam = 'CCSP'): Promise<{ token: string; userId: string; name: string }> {
  const res = await fetch(`${API}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code, exam }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.error || 'Invalid code')
  localStorage.setItem('ccsp-auth-token', data.token)
  localStorage.setItem('ccsp-exam', data.exam || exam)
  localStorage.setItem('ccsp-name', data.name || '')
  return { token: data.token, userId: data.userId, name: data.name }
}

export function getToken(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('ccsp-auth-token')
}

export function getName(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('ccsp-name')
}

export function getSavedExam(): string {
  if (typeof window === 'undefined') return 'CCSP'
  return localStorage.getItem('ccsp-exam') || 'CCSP'
}

export function logout(): void {
  localStorage.removeItem('ccsp-auth-token')
  localStorage.removeItem('ccsp-exam')
  localStorage.removeItem('ccsp-name')
}

// Fetch raw data from backend (contains progress for all exams)
async function fetchRawData(): Promise<Record<string, ExamProgress> | null> {
  const token = getToken()
  if (!token) return null
  try {
    const res = await fetch(`${API}/data`, {
      headers: { 'Authorization': `Bearer ${token}` },
      cache: 'no-store',
    })
    if (!res.ok) return null
    const json = await res.json()
    let data = json.data ?? json
    if (typeof data === 'string') {
      try { data = JSON.parse(data) } catch { return null }
    }
    return data as Record<string, ExamProgress> | null
  } catch {
    return null
  }
}

export async function fetchCloudData(exam: string): Promise<CloudData | null> {
  const raw = await fetchRawData()
  if (!raw) return null

  // Get progress for specified exam, fallback to first available or default
  const examList = Object.keys(raw)
  const targetExam = raw[exam] ? exam : (examList[0] || 'CCSP')
  const prog = raw[targetExam]

  if (!prog) return null

  return {
    exam: targetExam,
    wrongIds: prog.wrongIds || [],
    totalAnswered: prog.totalAnswered || 0,
    totalCorrect: prog.totalCorrect || 0,
    lastUpdated: prog.lastUpdated || 0,
  }
}

export async function saveCloudData(data: CloudData): Promise<void> {
  const token = getToken()
  if (!token) return

  try {
    // Fetch current data to merge
    const raw = await fetchRawData()
    const current = raw || {}

    // Update only the current exam's progress
    current[data.exam] = {
      wrongIds: data.wrongIds,
      totalAnswered: data.totalAnswered,
      totalCorrect: data.totalCorrect,
      lastUpdated: data.lastUpdated,
    }

    await fetch(`${API}/data`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(current),
    })
  } catch {
    // offline — will retry next save
  }
}
