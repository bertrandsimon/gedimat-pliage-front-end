import { EmailTemplate } from '../../../components/emails/email-template'
import { Resend } from 'resend'
import * as React from 'react'

const resend = new Resend('re_Z4KUSWdr_8Y74g6HeBKa4dFmVnRPDJ29b')
// const resend = new Resend(process.env.RESEND_API_KEY)

// http://localhost:3000/api/send   (POST)

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['logeen@logeen.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }) as React.ReactElement,
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json({ data })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
