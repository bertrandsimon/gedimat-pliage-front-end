import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/app/db'
import User from '@/app/models/User'

export async function GET(request: NextRequest) {
    try {
        await connectDB()

        // Get all users
        const users = await User.find({}, { email: 1, name: 1, surname: 1, active: 1, _id: 1 })

        console.log('👥 All users in database:', users)

        return NextResponse.json({
            message: 'Users retrieved successfully',
            count: users.length,
            users: users.map(user => ({
                id: user._id,
                email: user.email,
                name: user.name,
                surname: user.surname,
                active: user.active
            }))
        })

    } catch (error) {
        console.error('❌ Error fetching users:', error)
        return NextResponse.json(
            {
                error: 'Failed to fetch users',
                debug: {
                    error: error instanceof Error ? error.message : 'Unknown error'
                }
            },
            { status: 500 }
        )
    }
}
