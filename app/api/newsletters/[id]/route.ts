import { NextResponse } from 'next/server'
import connectDB from '@/app/db'
import Newsletter from '@/app/models/Newsletter'
import { ObjectId } from 'mongodb'

// GET PRODUCT BY ID  http://localhost:3000/api/newsletters/67977da57220004951fc60b8

// https://pliage-aluminium.vercel.app/api/newsletters/67977da57220004951fc60b8

export async function GET(request: any, { params }: any) {
  await connectDB()

  const { id } = params

  try {
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Id newsletter non valide' },
        { status: 400 }
      )
    }
    const newsletter = await Newsletter.findById(id)

    if (!newsletter) {
      return NextResponse.json(
        { error: 'Newsletter non trouvée' },
        { status: 400 }
      )
    }

    return NextResponse.json(newsletter)
  } catch {
    return NextResponse.json('ERREUR')
  }
}
