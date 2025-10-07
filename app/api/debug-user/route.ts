import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/app/db'
import User from '@/app/models/User'

export async function POST(request: NextRequest) {
    try {
        await connectDB()

        const { email } = await request.json()

        console.log('🔍 Debug: Looking for user with email:', email)

        // Test different queries
        const user1 = await User.findOne({ email })
        const user2 = await User.findOne({ email: email })
        const user3 = await User.find({ email })

        console.log('🔍 Query 1 - findOne({ email }):', user1 ? 'FOUND' : 'NOT FOUND')
        console.log('🔍 Query 2 - findOne({ email: email }):', user2 ? 'FOUND' : 'NOT FOUND')
        console.log('🔍 Query 3 - find({ email }):', user3.length > 0 ? `FOUND ${user3.length} users` : 'NOT FOUND')

        // Get all users to compare
        const allUsers = await User.find({}, { email: 1, _id: 1 })
        console.log('🔍 All users in DB:', allUsers.map(u => ({ id: u._id, email: u.email })))

        return NextResponse.json({
            email,
            queries: {
                findOne_email: user1 ? { id: user1._id, email: user1.email } : null,
                findOne_email_explicit: user2 ? { id: user2._id, email: user2.email } : null,
                find_email: user3.map(u => ({ id: u._id, email: u.email }))
            },
            allUsers: allUsers.map(u => ({ id: u._id, email: u.email }))
        })

    } catch (error) {
        console.error('❌ Debug error:', error)
        return NextResponse.json(
            {
                error: 'Debug failed',
                debug: {
                    error: error instanceof Error ? error.message : 'Unknown error'
                }
            },
            { status: 500 }
        )
    }
}
