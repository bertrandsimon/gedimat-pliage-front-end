import { Resend } from 'resend'
import * as React from 'react'
import MagicLinkEmail from '@/components/emails/magic-link-template'

const resend = new Resend('re_Z4KUSWdr_8Y74g6HeBKa4dFmVnRPDJ29b')

interface SendEmailOptions {
    to: string
    subject: string
    template: string
    data: any
}

export async function sendEmail({ to, subject, template, data }: SendEmailOptions) {
    try {
        console.log('📧 Email service called with:', { to, subject, template })

        let emailComponent: React.ReactElement

        switch (template) {
            case 'magic-link':
                console.log('📧 Creating magic link email component')
                emailComponent = MagicLinkEmail({
                    name: data.name,
                    magicLink: data.magicLink,
                    expiryMinutes: data.expiryMinutes
                }) as React.ReactElement
                break
            default:
                throw new Error(`Unknown email template: ${template}`)
        }

        console.log('📧 Sending email via Resend...')
        const { data: result, error } = await resend.emails.send({
            from: 'Alice de Pliage Aluminium <alice@pliage-aluminium.com>',
            to: [to],
            subject,
            react: emailComponent,
        })

        if (error) {
            console.error('❌ Resend email error:', error)
            throw new Error(`Failed to send email: ${error.message}`)
        }

        console.log('✅ Email sent successfully via Resend:', result)
        return result
    } catch (error) {
        console.error('❌ Email service error:', error)
        console.error('❌ Email error details:', {
            message: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined,
            name: error instanceof Error ? error.name : 'Unknown'
        })
        throw error
    }
}
