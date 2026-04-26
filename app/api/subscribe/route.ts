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

    // Step 1: Create/update the subscription.
    // NOTE: The `automations` field is NOT valid on this endpoint — it is silently
    // ignored by Beehiiv. Automation enrollment requires a separate API call (Step 2).
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

    const beehiivData = await beehiivRes.json().catch(() => ({}))
    console.log(
      '[subscribe] Beehiiv subscription response:',
      JSON.stringify(beehiivData)
    )

    if (!beehiivRes.ok) {
      console.error('[subscribe] Beehiiv subscription error:', beehiivData)
      return NextResponse.json(
        { message: 'Subscription failed. Please try again.' },
        { status: 500 }
      )
    }

    // Step 2: Enroll the subscriber into the automation journey.
    // Beehiiv requires a separate POST to /automations/{id}/journeys —
    // there is no way to trigger an automation from the subscriptions endpoint.
    const automationId = 'aut_ed3cb486-48d3-45c8-bd7a-bd0d73aded61'
    try {
      const journeyRes = await fetch(
        `https://api.beehiiv.com/v2/publications/${publicationId}/automations/${automationId}/journeys`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }
      )

      const journeyData = await journeyRes.json().catch(() => ({}))
      console.log(
        '[subscribe] Beehiiv journey enrollment response:',
        JSON.stringify(journeyData)
      )

      if (!journeyRes.ok) {
        // Log but do not block the signup flow.
        console.error(
          '[subscribe] Beehiiv journey enrollment error:',
          journeyData
        )
      }
    } catch (journeyErr) {
      // Log but do not block the signup flow.
      console.error('[subscribe] Beehiiv journey enrollment threw:', journeyErr)
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
