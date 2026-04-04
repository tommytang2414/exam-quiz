'use client'

import { useState, useEffect } from 'react'

const API = ''
const ADMIN_EMAILS = ['tommytang2414@gmail.com', 'tommytang.cc@gmail.com']
const ADMIN_PASSWORD = 'ccsp-admin-2026'

interface Stats {
  active_codes: number
  total_codes: number
  users: number
}

interface Code {
  code: string
  name: string
  used: boolean
}

interface User {
  id: string
  exam: string
  created_at: number
  name: string
}

interface AllStats {
  [exam: string]: Stats
}

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [loginError, setLoginError] = useState('')
  const [activeTab, setActiveTab] = useState<'stats' | 'codes' | 'users'>('stats')
  const [stats, setStats] = useState<AllStats | null>(null)
  const [codes, setCodes] = useState<Code[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [selectedExam, setSelectedExam] = useState('CCSP')
  const [genName, setGenName] = useState('')
  const [genExam, setGenExam] = useState('CCSP')
  const [genCount, setGenCount] = useState('1')
  const [genMsg, setGenMsg] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('ccsp-admin-email')
    if (saved && ADMIN_EMAILS.includes(saved)) {
      setEmail(saved)
      setLoggedIn(true)
      loadStats()
    }
  }, [])

  const [password, setPassword] = useState('')

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    const normalizedEmail = email.trim().toLowerCase()
    if (ADMIN_EMAILS.map(e => e.toLowerCase()).includes(normalizedEmail) && password === ADMIN_PASSWORD) {
      localStorage.setItem('ccsp-admin-email', normalizedEmail)
      setLoggedIn(true)
      setLoginError('')
      loadStats()
    } else {
      setLoginError('Invalid credentials.')
    }
  }

  function handleLogout() {
    localStorage.removeItem('ccsp-admin-email')
    setLoggedIn(false)
    setEmail('')
  }

  async function api(path: string, opts: RequestInit = {}) {
    const adminEmail = localStorage.getItem('ccsp-admin-email') || ''
    const url = new URL(API + path, window.location.origin)
    url.searchParams.set('admin', adminEmail)
    const r = await fetch(url.toString(), {
      ...opts,
      headers: {
        'Content-Type': 'application/json',
        ...opts.headers,
      },
    })
    return r.json()
  }

  async function loadStats() {
    try {
      const data = await api('/api/admin/stats')
      setStats(data)
    } catch (e: any) {
      console.error(e)
    }
  }

  async function loadCodes() {
    try {
      const data = await api('/api/admin/codes')
      setCodes(data.codes || [])
    } catch (e: any) {
      console.error(e)
    }
  }

  async function loadUsers() {
    try {
      const data = await api(`/api/admin/users?exam=${selectedExam}`)
      setUsers(data.users || [])
    } catch (e: any) {
      console.error(e)
    }
  }

  async function handleRevokeUser(userId: string, exam: string) {
    if (!confirm('Revoke this user? Their code will be freed for reuse.')) return
    try {
      const res = await api('/api/admin/revoke-user', {
        method: 'POST',
        body: JSON.stringify({ user_id: userId, exam }),
      })
      if (res.error) alert('Error: ' + res.error)
      else {
        loadUsers()
        loadStats()
      }
    } catch (e: any) {
      alert('Error: ' + e.message)
    }
  }

  useEffect(() => {
    if (!loggedIn) return
    if (activeTab === 'codes') loadCodes()
    if (activeTab === 'users') loadUsers()
    if (activeTab === 'stats') loadStats()
  }, [loggedIn, activeTab, selectedExam])

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault()
    if (!genName.trim()) { setGenMsg('Please enter a name'); return }
    setGenMsg('Generating...')
    try {
      const res = await api('/api/admin/gen-code', {
        method: 'POST',
        body: JSON.stringify({ exam: genExam, name: genName.trim(), count: parseInt(genCount) || 1 }),
      })
      if (res.error) { setGenMsg('Error: ' + res.error) }
      else {
        setGenMsg(`Generated: ${res.codes.join('  ')}`)
        loadCodes()
        loadStats()
      }
    } catch (e: any) {
      setGenMsg('Error: ' + e.message)
    }
  }

  if (!loggedIn) {
    return (
      <main className="admin-screen">
        <div className="login-box">
          <h1 className="login-title">Admin Login</h1>
          <p className="login-sub">Enter your admin email</p>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@gmail.com"
              className="code-input"
            />
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              className="code-input"
            />
            {loginError && <p className="error-msg">{loginError}</p>}
            <button type="submit" className="start-btn">Sign In</button>
          </form>
        </div>
      </main>
    )
  }

  const unusedCount = codes.filter(c => !c.used).length
  const usedCount = codes.filter(c => c.used).length

  return (
    <main className="admin-screen">
      <div className="admin-container">
        <div className="admin-header">
          <div>
            <h1 className="text-2xl font-bold text-slate-100">Exam Quiz Admin</h1>
            <p className="text-slate-500 text-sm mt-1">{email}</p>
          </div>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>

        <div className="tab-bar">
          {(['stats', 'codes', 'users'] as const).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`tab ${activeTab === tab ? 'active' : ''}`}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === 'stats' && stats && (
          <div className="stats-grid">
            {Object.entries(stats).map(([exam, s]) => (
              <div key={exam}>
                <div className="exam-label">{exam}</div>
                <div className="stats-row">
                  <div className="stat-box">
                    <div className="stat-num">{s.users}</div>
                    <div className="stat-label">Users</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-num">{s.total_codes}</div>
                    <div className="stat-label">Codes Generated</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-num">{s.active_codes}</div>
                    <div className="stat-label">Codes Used</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-num">{s.total_codes - s.active_codes}</div>
                    <div className="stat-label">Unused</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'codes' && (
          <div>
            <form onSubmit={handleGenerate} className="gen-form">
              <input type="text" value={genName} onChange={e => setGenName(e.target.value)}
                placeholder="Name (e.g. Tommy)" className="gen-input" />
              <select value={genExam} onChange={e => setGenExam(e.target.value)} className="gen-select">
                <option value="CCSP">CCSP</option>
                <option value="CISSP">CISSP</option>
                <option value="AAIA">AAIA</option>
              </select>
              <input type="number" value={genCount} onChange={e => setGenCount(e.target.value)}
                min="1" max="50" className="gen-input count-input" />
              <button type="submit" className="btn-primary">Generate</button>
            </form>
            {genMsg && <div className={genMsg.startsWith('Error') ? 'error-msg' : 'success-msg'}>{genMsg}</div>}
            <p className="codes-summary">{unusedCount} unused · {usedCount} used</p>
            <div className="codes-grid">
              {codes.map(c => (
                <div key={c.code} className={`code-chip ${c.used ? 'used' : ''}`} title={c.name}>
                  <span>{c.code}</span>
                  <span className="code-name">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div>
            <div className="user-exam-sel">
              <select value={selectedExam} onChange={e => setSelectedExam(e.target.value)} className="gen-select">
                <option value="CCSP">CCSP</option>
                <option value="CISSP">CISSP</option>
                <option value="AAIA">AAIA</option>
              </select>
            </div>
            {users.length === 0 ? (
              <p className="empty-msg">No users yet</p>
            ) : (
              <table className="users-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>User ID</th>
                    <th>Exam</th>
                    <th>Registered</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(u => (
                    <tr key={u.id}>
                      <td>{u.name}</td>
                      <td className="mono">{u.id}</td>
                      <td>{u.exam}</td>
                      <td>{new Date(u.created_at * 1000).toLocaleDateString()}</td>
                      <td>
                        <button
                          onClick={() => handleRevokeUser(u.id, u.exam)}
                          className="revoke-btn"
                        >
                          Revoke
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>

      <style>{`
        .admin-screen {
          min-height: 100vh;
          background: #0f172a;
          color: #e2e8f0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          padding: 2rem 1.5rem;
        }
        .admin-container { max-width: 900px; margin: 0 auto; }
        .admin-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem; }
        .login-box { background: rgba(30,41,59,0.8); border: 1px solid rgba(71,85,105,0.5); border-radius: 1.25rem; padding: 2rem; width: 100%; max-width: 360px; margin: 3rem auto; display: flex; flex-direction: column; gap: 1rem; }
        .login-title { font-size: 1.25rem; font-weight: 700; color: #f1f5f9; text-align: center; }
        .login-sub { color: #64748b; font-size: 0.875rem; text-align: center; }
        .code-input { width: 100%; padding: 0.875rem 1rem; border-radius: 0.875rem; border: 1px solid rgba(99,102,241,0.4); background: rgba(15,23,42,0.8); color: #f1f5f9; font-size: 1rem; font-family: ui-monospace, monospace; outline: none; }
        .start-btn { width: 100%; background: #4f46e5; color: white; font-weight: 600; padding: 0.875rem; border-radius: 0.875rem; border: none; cursor: pointer; font-size: 1rem; }
        .start-btn:hover { background: #6366f1; }
        .error-msg { background: rgba(127,29,29,0.4); border: 1px solid rgba(220,38,38,0.4); border-radius: 0.5rem; padding: 0.75rem; color: #f87171; font-size: 0.875rem; }
        .success-msg { background: rgba(6,78,59,0.4); border: 1px solid rgba(16,185,129,0.4); border-radius: 0.5rem; padding: 0.75rem; color: #6ee7b7; font-size: 0.875rem; white-space: pre-wrap; margin-top: 0.75rem; }
        .logout-btn { background: rgba(30,41,59,0.6); color: #64748b; border: 1px solid rgba(71,85,105,0.4); border-radius: 0.5rem; padding: 0.3rem 0.75rem; font-size: 0.75rem; cursor: pointer; }
        .tab-bar { display: flex; gap: 0.25rem; background: rgba(15,23,42,0.6); padding: 0.25rem; border-radius: 0.75rem; margin-bottom: 1.5rem; }
        .tab { padding: 0.5rem 1rem; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 500; color: #64748b; cursor: pointer; border: none; background: none; }
        .tab.active { background: rgba(79,70,229,0.3); color: #a5b4fc; }
        .stats-grid { display: flex; flex-direction: column; gap: 1.5rem; }
        .exam-label { font-size: 0.75rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem; }
        .stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; }
        .stat-box { background: rgba(30,41,59,0.7); border: 1px solid rgba(71,85,105,0.4); border-radius: 0.875rem; padding: 1rem; text-align: center; }
        .stat-num { font-size: 2rem; font-weight: 700; color: #f1f5f9; }
        .stat-label { font-size: 0.7rem; color: #64748b; margin-top: 0.25rem; }
        .gen-form { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 0.75rem; }
        .gen-input { background: rgba(15,23,42,0.8); border: 1px solid rgba(71,85,105,0.6); border-radius: 0.625rem; color: #f1f5f9; padding: 0.6rem 0.875rem; font-size: 0.875rem; min-width: 160px; flex: 1; outline: none; }
        .gen-input:focus { border-color: rgba(99,102,241,0.6); }
        .count-input { max-width: 80px; flex: none; }
        .gen-select { background: rgba(30,41,59,0.8); border: 1px solid rgba(71,85,105,0.6); border-radius: 0.625rem; color: #f1f5f9; padding: 0.6rem 0.875rem; font-size: 0.875rem; outline: none; }
        .btn-primary { background: #4f46e5; color: white; font-weight: 600; padding: 0.6rem 1.25rem; border-radius: 0.625rem; border: none; cursor: pointer; }
        .btn-primary:hover { background: #6366f1; }
        .codes-summary { color: #64748b; font-size: 0.8rem; margin-bottom: 0.5rem; }
        .codes-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 0.5rem; }
        .code-chip { background: rgba(15,23,42,0.8); border: 1px solid rgba(71,85,105,0.5); border-radius: 0.5rem; padding: 0.5rem 0.75rem; font-family: ui-monospace, monospace; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.05em; color: #94a3b8; display: flex; justify-content: space-between; align-items: center; gap: 0.5rem; }
        .code-chip.used { opacity: 0.5; color: #475569; border-color: rgba(30,41,59,0.5); }
        .code-chip.used::after { content: '✓'; color: #475569; font-size: 0.7rem; }
        .code-name { font-family: sans-serif; font-size: 0.7rem; font-weight: 400; color: #475569; }
        .user-exam-sel { margin-bottom: 1rem; }
        .users-table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
        .users-table th { text-align: left; color: #64748b; font-weight: 500; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 0.5rem 0.75rem; border-bottom: 1px solid rgba(71,85,105,0.4); }
        .users-table td { padding: 0.625rem 0.75rem; border-bottom: 1px solid rgba(30,41,59,0.5); color: #94a3b8; }
        .mono { font-family: ui-monospace, monospace; font-size: 0.75rem; }
        .empty-msg { color: #475569; font-size: 0.875rem; padding: 1rem 0; }
        .revoke-btn { background: rgba(220,38,38,0.3); color: #f87171; border: 1px solid rgba(220,38,38,0.4); border-radius: 0.375rem; padding: 0.25rem 0.625rem; font-size: 0.7rem; cursor: pointer; }
        .revoke-btn:hover { background: rgba(220,38,38,0.5); }
        .mt-1 { margin-top: 0.25rem; }
        .text-2xl { font-size: 1.5rem; }
        .font-bold { font-weight: 700; }
        .text-slate-100 { color: #f1f5f9; }
        .text-slate-500 { color: #64748b; }
        .text-sm { font-size: 0.875rem; }
      `}</style>
    </main>
  )
}
