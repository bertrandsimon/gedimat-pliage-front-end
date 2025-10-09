import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/app/db'
import User from '@/app/models/User'
import { sendEmail } from '@/lib/email'
import crypto from 'crypto'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
    try {
        console.log('🔍 Magic link request started')
        await connectDB()

        const { email } = await request.json()
        console.log('📧 Requested email:', email)

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            )
        }

        // Check if user exists (remove active: true requirement)
        const user = await User.findOne({ email })
        console.log('👤 User found:', user ? 'YES' : 'NO')
        console.log('👤 User details:', user ? { id: user._id, email: user.email, name: user.name } : 'No user')

        if (!user) {
            console.log('❌ User not found, returning generic message')
            // Don't reveal if user exists or not for security
            return NextResponse.json(
                { message: 'Si cet email existe dans notre système, vous recevrez un lien de connexion.' },
                { status: 200 }
            )
        }

        // Generate secure token
        const magicLinkToken = crypto.randomBytes(32).toString('hex')
        const magicLinkExpiry = new Date(Date.now() + 15 * 60 * 1000) // 15 minutes
        console.log('🔑 Generated token for user:', user._id)

        // Save token to user
        await User.findByIdAndUpdate(user._id, {
            magicLinkToken,
            magicLinkExpiry
        })
        console.log('💾 Token saved to database')

        // Create magic link
        const magicLink = `${process.env.NEXT_PUBLIC_URL}/api/auth/magic-login?token=${magicLinkToken}`
        console.log('🔗 Magic link created')

        // Send email
        console.log('📧 Attempting to send email to:', email)
        const emailResult = await sendEmail({
            to: email,
            subject: 'Lien de connexion - Pliage Aluminium',
            template: 'magic-link',
            data: {
                name: user.name || 'Utilisateur',
                magicLink,
                expiryMinutes: 15
            }
        })
        console.log('✅ Email sent successfully:', emailResult)

        return NextResponse.json(
            { message: 'Si cet email existe dans notre système, vous recevrez un lien de connexion.' },
            { status: 200 }
        )

    } catch (error) {
        console.error('❌ Magic link request error:', error)
        console.error('❌ Error details:', {
            message: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined,
            name: error instanceof Error ? error.name : 'Unknown'
        })
        return NextResponse.json(
            { error: 'Erreur interne du serveur' },
            { status: 500 }
        )
    }
}
