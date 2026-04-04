import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0f172a',
        'bg-card': 'rgba(30, 41, 59, 0.6)',
        'bg-correct': 'rgba(6, 78, 59, 0.5)',
        'bg-wrong': 'rgba(127, 29, 29, 0.5)',
        'bg-red-card': 'rgba(127, 29, 29, 0.3)',
        accent: '#4f46e5',
        'accent-hover': '#6366f1',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
