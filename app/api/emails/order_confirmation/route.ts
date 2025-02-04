import { EmailOrderTemplate } from '../../../../components/emails/order-template'
import { Resend } from 'resend'
import * as React from 'react'

const resend = new Resend('re_Z4KUSWdr_8Y74g6HeBKa4dFmVnRPDJ29b')
// const resend = new Resend(process.env.RESEND_API_KEY)

// http://localhost:3000/api/emails/order_confirmation  (POST)

export async function POST(req: Request) {
  try {
    const { email, mailOrderDate, orderId } = await req.json()
    const { data, error } = await resend.emails.send({
      from: 'Alice de Pliage Aluminium <alice@pliage-aluminium.com>',
      to: [`${email}`],
      subject: 'Votre commande sur Pliage-aluminium.com',
      react: EmailOrderTemplate({
        firstName: 'John',
        mailOrderDate,
        orderId,
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
