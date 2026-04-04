export const SESSION_GOALS = [10, 20, 50, 100, 0]

export function getGreeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 18) return 'Good afternoon'
  return 'Good evening'
}

export const CCSP_DOMAINS = [
  { id: 1, name: 'Cloud Concepts' },
  { id: 2, name: 'Data Security' },
  { id: 3, name: 'Platform & Infrastructure' },
  { id: 4, name: 'Application Security' },
  { id: 5, name: 'Security Operations' },
  { id: 6, name: 'Legal & Compliance' },
] as const
