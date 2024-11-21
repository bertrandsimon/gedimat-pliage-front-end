import { NextResponse } from 'next/server'
import connectDB from '../../db'

import Material from '@/app/models/Material'

// GET ALL PRODUCTS

// http://localhost:3000/api/materials
// https://pliage-aluminium.vercel.app/api/materials

export async function GET() {
  await connectDB()
  try {
    const materials = await Material.find()
    return NextResponse.json(materials)
  } catch {
    return NextResponse.json('ERREUR')
  }
}
