import { NextResponse } from 'next/server'
import connectDB from '../../db'
import Newsletter from '../../models/Newsletter'

// GET ALL NEWSLETTERS
// http://localhost:3000/api/newsletters

export async function GET() {
  await connectDB()
  try {
    const newsletters = await Newsletter.find()
    return NextResponse.json(newsletters)
  } catch {
    return NextResponse.json('ERREUR')
  }
}
