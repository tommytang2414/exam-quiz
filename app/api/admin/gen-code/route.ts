import { NextRequest, NextResponse } from 'next/server'

const VPS = 'http://18.139.210.59:5001'

export async function POST(req: NextRequest) {
  const adminEmail = req.headers.get('X-Admin-Email') || ''
  const body = await req.json()
  try {
    const res = await fetch(`${VPS}/api/admin/gen-code`, {
      method: 'POST',
      headers: {
        'X-Admin-Email': adminEmail,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const data = await res.json()
    return NextResponse.json(data)
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
