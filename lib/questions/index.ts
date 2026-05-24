import { questions as ccspQuestions } from './ccsp'
import { questions as cisspQuestions } from './cissp'
import { questions as az500Questions } from './az500'

export type ExamType = 'CCSP' | 'CISSP' | 'AZ500'

// Unified question type for all exam types
export interface Question {
  id: number
  topic?: number  // CCSP = domain (1-6), AZ500 = topic (1-18)
  text: string
  options: string[]
  answer: number | string
  explanation?: string
  isMulti?: boolean  // true = multi-select, answer is comma-separated letters
}

const QUESTION_BANKS = {
  CCSP: ccspQuestions as unknown as Question[],
  CISSP: cisspQuestions as unknown as Question[],
  AZ500: az500Questions as unknown as Question[],
}

export function getQuestions(exam: ExamType): Question[] {
  return QUESTION_BANKS[exam] ?? []
}

export const DEFAULT_EXAM: ExamType = 'AZ500'

export const AZ500_TOPICS = [
  { id: 1, name: 'Identity & Access' },
  { id: 2, name: 'Platform Security' },
  { id: 3, name: 'Storage & Networking' },
  { id: 4, name: 'Compute & Containers' },
  { id: 5, name: 'Monitoring & Logging' },
  { id: 6, name: 'Security Operations' },
  { id: 7, name: 'Security Posture' },
  { id: 8, name: 'Infrastructure' },
  { id: 9, name: 'Key Vault' },
  { id: 10, name: 'Governance' },
  { id: 11, name: 'Azure AD' },
  { id: 12, name: 'Hybrid Identity' },
  { id: 13, name: 'App Registration' },
  { id: 14, name: 'API Management' },
  { id: 16, name: 'Private Link' },
  { id: 17, name: 'Defender for Cloud' },
  { id: 18, name: 'App Security' },
] as const

export const CCSP_DOMAINS = [
  { id: 1, name: 'Cloud Concepts' },
  { id: 2, name: 'Data Security' },
  { id: 3, name: 'Platform & Infra' },
  { id: 4, name: 'App Security' },
  { id: 5, name: 'Security Ops' },
  { id: 6, name: 'Legal & Compliance' },
] as const