import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import * as React from 'react'
import MagicLinkEmail from '@/components/emails/magic-link-template'

const resend = new Resend('re_Z4KUSWdr_8Y74g6HeBKa4dFmVnRPDJ29b')

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json()

        console.log('📧 Testing direct email to:', email)

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            )
        }

        // Create a test magic link
        const testMagicLink = `${process.env.NEXT_PUBLIC_URL}/api/auth/magic-login?token=test123`

        // Create email component
        const emailComponent = MagicLinkEmail({
            name: 'Test User',
            magicLink: testMagicLink,
            expiryMinutes: 15
        }) as React.ReactElement

        console.log('📧 Sending test email...')

        // Send email using exact same config as order emails
        const { data: result, error } = await resend.emails.send({
            from: 'Alice de Pliage Aluminium <alice@pliage-aluminium.com>',
            to: [email],
            subject: 'TEST - Lien de connexion - Pliage Aluminium',
            react: emailComponent,
        })

        if (error) {
            console.error('❌ Resend error:', error)
            return NextResponse.json(
                {
                    error: 'Email failed to send',
                    resendError: error
                },
                { status: 500 }
            )
        }

        console.log('✅ Test email sent successfully:', result)

        return NextResponse.json({
            message: 'Test email sent successfully',
            result,
            debug: {
                email,
                from: 'Alice de Pliage Aluminium <alice@pliage-aluminium.com>',
                subject: 'TEST - Lien de connexion - Pliage Aluminium'
            }
        })

    } catch (error) {
        console.error('❌ Direct email test error:', error)
        return NextResponse.json(
            {
                error: 'Test failed',
                debug: {
                    error: error instanceof Error ? error.message : 'Unknown error',
                    stack: error instanceof Error ? error.stack : undefined
                }
            },
            { status: 500 }
        )
    }
}
