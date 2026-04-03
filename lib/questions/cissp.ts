export interface Question {
  id: number
  text: string
  options: string[]
  answer: number // 0-based index
  explanation?: string
}

export const questions: Question[] = [
  // TODO: Add CISSP questions
]
