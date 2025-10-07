import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/app/db'
import User from '@/app/models/User'
import jwt from 'jsonwebtoken'

export async function GET(request: NextRequest) {
    try {
        await connectDB()

        const { searchParams } = new URL(request.url)
        const token = searchParams.get('token')

        if (!token) {
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/login?error=token-missing`)
        }

        // Find user with valid token
        const user = await User.findOne({
            magicLinkToken: token,
            magicLinkExpiry: { $gt: new Date() }
        })

        if (!user) {
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/login?error=invalid-token`)
        }

        // Clear the magic link token
        await User.findByIdAndUpdate(user._id, {
            magicLinkToken: null,
            magicLinkExpiry: null
        })

        // Create JWT token for session
        const jwtToken = jwt.sign(
            {
                userId: user._id,
                email: user.email,
                name: user.name,
                surname: user.surname,
                isPro: user.is_pro
            },
            process.env.JWT_SECRET || 'fallback-secret',
            { expiresIn: '60d' }
        )

        // Create response with redirect
        const response = NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/dashboard/${user._id}`)

        // Set HTTP-only cookie
        response.cookies.set('auth-token', jwtToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 24 * 60 * 60 * 1000 // 60 days
        })

        return response

    } catch (error) {
        console.error('Magic link login error:', error)
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/login?error=server-error`)
    }
}
