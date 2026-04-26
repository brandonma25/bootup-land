import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, role } = body as { email?: string; role?: string }

    if (!email || !role) {
      return NextResponse.json(
        { message: 'Email and role are required.' },
        { status: 400 }
      )
    }

    const apiKey = process.env.BEEHIIV_API_KEY
    const publicationId = process.env.BEEHIIV_PUBLICATION_ID

    if (!apiKey || !publicationId) {
      console.log(
        `[subscribe] Beehiiv not configured. Would have subscribed: ${email} (${role})`
      )
      return NextResponse.json({ success: true })
    }

    const beehiivRes = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          reactivate_existing: false,
          send_welcome_email: false,
          utm_source: 'landing-page',
          utm_medium: 'paid',
          utm_campaign: 'b2-thesis-test',
          tags: ['bootup_signup'],
          custom_fields: [{ name: 'role', value: role }],
        }),
      }
    )

    if (!beehiivRes.ok) {
      const error = await beehiivRes.json().catch(() => ({}))
      console.error('[subscribe] Beehiiv error:', error)
      return NextResponse.json(
        { message: 'Subscription failed. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[subscribe] Unexpected error:', err)
    return NextResponse.json(
      { message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
