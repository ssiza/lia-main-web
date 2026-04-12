import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

interface BookingBody {
  name: string
  email: string
  phone: string
  address: string
  services: string[]
  date: string
  time: string
  notes?: string
}

function businessEmailHtml(b: BookingBody) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="font-family:system-ui,sans-serif;background:#f9f9f9;margin:0;padding:24px;">
  <div style="max-width:560px;margin:0 auto;background:white;border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);">
    <div style="background:#176f33;padding:28px 32px;">
      <h1 style="color:white;margin:0;font-size:20px;">New Booking Request</h1>
      <p style="color:rgba(255,255,255,.75);margin:4px 0 0;font-size:14px;">Li'A Home Services</p>
    </div>
    <div style="padding:32px;">
      <table style="width:100%;border-collapse:collapse;">
        ${[
          ['Name', b.name],
          ['Email', b.email],
          ['Phone', b.phone],
          ['Address', b.address],
          ['Services', b.services.join(', ')],
          ['Date', b.date],
          ['Time', b.time],
          ...(b.notes ? [['Notes', b.notes]] : []),
        ].map(([label, value]) => `
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#6b7280;font-size:14px;font-weight:500;width:120px;">${label}</td>
            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#111827;font-size:14px;">${value}</td>
          </tr>
        `).join('')}
      </table>
      <div style="margin-top:28px;padding:16px;background:#f0faf4;border-radius:12px;">
        <p style="margin:0;font-size:13px;color:#176f33;font-weight:600;">Action Required</p>
        <p style="margin:6px 0 0;font-size:13px;color:#374151;">Please confirm this booking by contacting the client at <strong>${b.email}</strong> or <strong>${b.phone}</strong>.</p>
      </div>
    </div>
  </div>
</body>
</html>`
}

function clientEmailHtml(b: BookingBody) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="font-family:system-ui,sans-serif;background:#f9f9f9;margin:0;padding:24px;">
  <div style="max-width:560px;margin:0 auto;background:white;border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);">
    <div style="background:#176f33;padding:28px 32px;">
      <h1 style="color:white;margin:0;font-size:20px;">Booking Received! ✓</h1>
      <p style="color:rgba(255,255,255,.75);margin:4px 0 0;font-size:14px;">Li'A Home Services</p>
    </div>
    <div style="padding:32px;">
      <p style="color:#374151;font-size:15px;margin:0 0 20px;">Hi <strong>${b.name}</strong>,</p>
      <p style="color:#374151;font-size:15px;margin:0 0 24px;">
        Thank you for booking with Li'A Home Services! We've received your request and will confirm your appointment shortly.
      </p>
      <div style="background:#f9f9f9;border-radius:12px;padding:20px;margin-bottom:24px;">
        <h3 style="margin:0 0 14px;font-size:14px;color:#6b7280;text-transform:uppercase;letter-spacing:.05em;">Booking Summary</h3>
        <table style="width:100%;border-collapse:collapse;">
          ${[
            ['Services', b.services.join(', ')],
            ['Date', b.date],
            ['Time', b.time],
            ['Address', b.address],
          ].map(([label, value]) => `
            <tr>
              <td style="padding:8px 0;color:#6b7280;font-size:14px;font-weight:500;width:100px;">${label}</td>
              <td style="padding:8px 0;color:#111827;font-size:14px;">${value}</td>
            </tr>
          `).join('')}
        </table>
      </div>
      <p style="color:#374151;font-size:14px;margin:0 0 6px;">Questions? Reach us at:</p>
      <p style="color:#176f33;font-size:14px;font-weight:600;margin:0;">
        📞 (646) 261-6917 · ✉️ info@liahomeservices.com
      </p>
    </div>
    <div style="padding:20px 32px;background:#f9f9f9;border-top:1px solid #f0f0f0;">
      <p style="margin:0;font-size:12px;color:#9ca3af;">
        Li'A Home Services · Everett, MA 02149<br/>
        Licensed &amp; Insured · Serving Everett, MA &amp; Surrounding Areas
      </p>
    </div>
  </div>
</body>
</html>`
}

export async function POST(request: NextRequest) {
  try {
    const body: BookingBody = await request.json()

    const { name, email, phone, address, services, date, time } = body

    if (!name || !email || !phone || !address || !services?.length || !date || !time) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const FROM   = process.env.FROM_EMAIL || 'onboarding@resend.dev'
    const TO     = process.env.NOTIFICATION_EMAIL || 'info@liahomeservices.com'

    if (!apiKey) {
      console.log('⚠️  RESEND_API_KEY not set — booking logged to console:')
      console.log(JSON.stringify(body, null, 2))
      return NextResponse.json({ success: true, note: 'Email not sent (no API key)' })
    }

    const resend = new Resend(apiKey)

    await Promise.all([
      resend.emails.send({
        from: FROM,
        to: TO,
        subject: `New Booking: ${name} — ${services.join(', ')}`,
        html: businessEmailHtml(body),
      }),
      resend.emails.send({
        from: FROM,
        to: email,
        subject: "We've received your booking — Li'A Home Services",
        html: clientEmailHtml(body),
      }),
    ])

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Booking API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
