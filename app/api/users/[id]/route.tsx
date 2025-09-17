import { NextResponse } from 'next/server'
import connectDB from '@/app/db'
import User from '@/app/models/User'

import { ObjectId } from 'mongodb'

// GET USER BY ID  http://localhost:3000/api/users/67a0c5661f2cd8a80db305d3

// https://pliage-aluminium.vercel.app/api/users/67a0c5661f2cd8a80db305d3


export async function GET(request: any, { params }: any) {
    await connectDB()

    const { id } = params

    try {
        if (!ObjectId.isValid(id)) {
            return NextResponse.json(
                { error: 'User ID non valide' },
                { status: 400 }
            )
        }

        const user = await User.findById(id)
        if (!user) {
            return NextResponse.json({ error: 'User non trouvé' }, { status: 400 })
        }


        const response = NextResponse.json(user)

        // Set cache headers : ACTIVATE FOR CACHE
        // response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')

        // Set cache headers : DESACTIVATE FOR CACHE
        //response.headers.set('Cache-Control', 'no-store')

        return response
    } catch {
        return NextResponse.json('ERREUR')
    }
}

// PUT UPDATE USER
export async function PUT(request: any, { params }: any) {
    await connectDB()

    const { id } = params

    try {
        if (!ObjectId.isValid(id)) {
            return NextResponse.json(
                { error: 'User ID non valide' },
                { status: 400 }
            )
        }

        const body = await request.json()
        const { proNumber, address, cp, city, phone } = body

        // Only allow updating specific fields (excluding name, surname, email)
        const updateData: any = {}
        if (proNumber !== undefined) updateData.proNumber = proNumber
        if (address !== undefined) updateData.address = address
        if (cp !== undefined) updateData.cp = cp
        if (city !== undefined) updateData.city = city
        if (phone !== undefined) updateData.phone = phone

        const user = await User.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        )

        if (!user) {
            return NextResponse.json({ error: 'User non trouvé' }, { status: 404 })
        }

        return NextResponse.json({
            success: true,
            message: 'Informations mises à jour avec succès',
            user
        })

    } catch (error) {
        console.error('Error updating user:', error)
        return NextResponse.json(
            { error: 'Erreur lors de la mise à jour' },
            { status: 500 }
        )
    }
}
