import { NextRequest, NextResponse } from 'next/server'

const VPS = 'http://18.139.210.59:5001'

export async function GET(req: NextRequest) {
  const adminEmail = req.nextUrl.searchParams.get('admin') || ''
  const exam = req.nextUrl.searchParams.get('exam') || 'CCSP'
  try {
    const res = await fetch(`${VPS}/api/admin/users?exam=${exam}`, {
      headers: {
        'X-Admin-Email': adminEmail,
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    return NextResponse.json(data)
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
