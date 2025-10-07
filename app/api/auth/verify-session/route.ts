import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export async function GET(request: NextRequest) {
    try {
        const token = request.cookies.get('auth-token')?.value

        if (!token) {
            return NextResponse.json(
                { error: 'No session token found' },
                { status: 401 }
            )
        }

        // Verify JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as any

        return NextResponse.json({
            user: {
                userId: decoded.userId,
                email: decoded.email,
                name: decoded.name,
                surname: decoded.surname,
                isPro: decoded.isPro
            }
        })

    } catch (error) {
        console.error('Session verification error:', error)
        return NextResponse.json(
            { error: 'Invalid session' },
            { status: 401 }
        )
    }
}
