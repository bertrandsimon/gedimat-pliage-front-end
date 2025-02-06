import EmailWeCallYouBackToAdminTemplate from '@/components/emails/we-call-you-back-to-admin-template'
import { Resend } from 'resend'
import * as React from 'react'

const resend = new Resend('re_Z4KUSWdr_8Y74g6HeBKa4dFmVnRPDJ29b')
// const resend = new Resend(process.env.RESEND_API_KEY)

// Sent we call you back notification to ADMIN
// http://localhost:3000/api/emails/we_call_you_back_to_admin  (POST)

export async function POST(req: Request) {
  try {
    const { telephone } = await req.json()
    const { data, error } = await resend.emails.send({
      from: 'ADMIN SITE PLIAGE ALUMINIUM<alice@pliage-aluminium.com>',
      to: ['trandber@hotmail.com'],
      subject:
        'Nouvelle demande pour être rappelé sur le site Pliage-aluminium.com',
      react: EmailWeCallYouBackToAdminTemplate({
        telephone,
      }) as React.ReactElement,
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json({ data })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
