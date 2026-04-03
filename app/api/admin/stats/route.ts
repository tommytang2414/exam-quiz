import { NextRequest, NextResponse } from 'next/server'

const VPS = 'http://18.139.210.59:5001'

export async function GET(req: NextRequest) {
  const token = req.headers.get('Authorization') || ''
  try {
    const res = await fetch(`${VPS}/api/admin/stats`, {
      headers: { 'Authorization': token },
    })
    const data = await res.json()
    return NextResponse.json(data)
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
