import { questions as ccspQuestions, type Question as QuestionType } from './ccsp'
import { questions as cisspQuestions } from './cissp'

export type ExamType = 'CCSP' | 'CISSP'

export interface Question {
  id: number
  text: string
  options: string[]
  answer: number
  explanation?: string
  domain?: number
}

const QUESTION_BANKS: Record<ExamType, QuestionType[]> = {
  CCSP: ccspQuestions,
  CISSP: cisspQuestions,
}

export function getQuestions(exam: ExamType): QuestionType[] {
  return QUESTION_BANKS[exam] ?? []
}

export const DEFAULT_EXAM: ExamType = 'CCSP'
