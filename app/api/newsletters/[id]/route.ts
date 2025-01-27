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
      const errorResponse = NextResponse.json(
        { error: 'Id newsletter non valide' },
        { status: 400 }
      )
      errorResponse.headers.set('Access-Control-Allow-Origin', '*')
      errorResponse.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS')
      errorResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type')
      return errorResponse
    }

    const newsletter = await Newsletter.findById(id)

    if (!newsletter) {
      const errorResponse = NextResponse.json(
        { error: 'Newsletter non trouvée' },
        { status: 404 }
      )
      errorResponse.headers.set('Access-Control-Allow-Origin', '*')
      errorResponse.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS')
      errorResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type')
      return errorResponse
    }

    const response = NextResponse.json(newsletter)
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type')

    return response
  } catch (error) {
    console.error('Error:', error)
    const errorResponse = NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
    errorResponse.headers.set('Access-Control-Allow-Origin', '*')
    errorResponse.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS')
    errorResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type')
    return errorResponse
  }
}

// Handle CORS preflight requests (OPTIONS)
export async function OPTIONS() {
  const response = new NextResponse(null, { status: 204 })
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  return response
}
