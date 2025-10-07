import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/app/db'
import User from '@/app/models/User'
import { sendEmail } from '@/lib/email'
import crypto from 'crypto'

export async function POST(request: NextRequest) {
    try {
        await connectDB()

        const { email } = await request.json()

        console.log('🔍 Testing magic link for email:', email)

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            )
        }

        // Check if user exists (remove active: true requirement)
        const user = await User.findOne({ email })
        console.log('👤 User found:', user ? 'YES' : 'NO')

        if (!user) {
            return NextResponse.json(
                {
                    message: 'User not found in database',
                    debug: { email, userExists: false }
                },
                { status: 200 }
            )
        }

        // Generate secure token
        const magicLinkToken = crypto.randomBytes(32).toString('hex')
        const magicLinkExpiry = new Date(Date.now() + 15 * 60 * 1000)

        console.log('🔑 Generated token:', magicLinkToken.substring(0, 10) + '...')
        console.log('⏰ Token expires:', magicLinkExpiry)

        // Save token to user
        await User.findByIdAndUpdate(user._id, {
            magicLinkToken,
            magicLinkExpiry
        })
        console.log('💾 Token saved to database')

        // Create magic link
        const magicLink = `${process.env.NEXT_PUBLIC_URL}/api/auth/magic-login?token=${magicLinkToken}`
        console.log('🔗 Magic link:', magicLink)

        // Test email sending
        console.log('📧 Attempting to send email...')
        const emailResult = await sendEmail({
            to: email,
            subject: 'TEST - Lien de connexion - Pliage Aluminium',
            template: 'magic-link',
            data: {
                name: user.name || 'Utilisateur',
                magicLink,
                expiryMinutes: 15
            }
        })

        console.log('✅ Email sent successfully:', emailResult)

        return NextResponse.json({
            message: 'Test email sent successfully',
            debug: {
                email,
                userExists: true,
                tokenGenerated: true,
                tokenSaved: true,
                emailSent: true,
                magicLink: magicLink,
                emailResult
            }
        })

    } catch (error) {
        console.error('❌ Magic link test error:', error)
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
