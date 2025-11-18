import { NextResponse } from 'next/server'
import connectDB from '../../db'

import Material from '@/app/models/Material'

// GET ALL PRODUCTS

// http://localhost:3000/api/materials
// https://pliage-aluminium.vercel.app/api/materials

export async function GET() {
  await connectDB()
  try {
    const materials = await Material.find().sort({ name: 1 })
    const response = NextResponse.json(materials)

    // Cache for 1 minute, but serve stale data for up to 1 hour while revalidating
    // This ensures admin updates appear within 1 minute while maintaining performance
    response.headers.set(
      'Cache-Control',
      'public, s-maxage=60, stale-while-revalidate=3600'
    )

    return response
  } catch {
    return NextResponse.json('ERREUR')
  }
}
