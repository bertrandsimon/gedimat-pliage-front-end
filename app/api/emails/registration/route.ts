import { EmailTemplate } from '../../../../components/emails/registration-template'
import { Resend } from 'resend'
import * as React from 'react'

const resend = new Resend('re_Z4KUSWdr_8Y74g6HeBKa4dFmVnRPDJ29b')
// const resend = new Resend(process.env.RESEND_API_KEY)

// http://localhost:3000/api/emails/registration  (POST)

export async function POST(req: Request) {
  try {
    const { email, surname } = await req.json()

    const { data, error } = await resend.emails.send({
      from: 'Alice de Pliage Aluminium <alice@pliage-aluminium.com>',
      to: [`${email}`],
      subject: 'Votre inscription sur pliage-aluminium.com',
      react: EmailTemplate({ firstName: surname }) as React.ReactElement,
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json({ data })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
