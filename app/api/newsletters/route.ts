import { NextResponse } from 'next/server'
import connectDB from '../../db'
import Newsletter from '../../models/Newsletter'

// GET ALL NEWSLETTERS
// http://localhost:3000/api/newsletters
// https://pliage-aluminium.vercel.app/api/newsletters

export async function GET() {
  await connectDB()
  try {
    const newsletters = await Newsletter.find()

    const response = NextResponse.json(newsletters)

    // Add CORS headers
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type')

    return response
  } catch {
    const errorResponse = NextResponse.json('ERREUR')
    errorResponse.headers.set('Access-Control-Allow-Origin', '*')
    return errorResponse
  }
}
