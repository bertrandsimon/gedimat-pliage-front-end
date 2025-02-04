import { NextResponse } from 'next/server'
import connectDB from '../../db'
import Product from '../../models/Product'

// GET ALL PRODUCTS

// http://localhost:3000/api/products
// https://pliage-aluminium.vercel.app/api/products

// https://www.pliage-aluminium.com/api/products

export async function GET() {
  await connectDB()
  try {
    const products = await Product.find({ active: true })
    return NextResponse.json(products)
  } catch {
    return NextResponse.json('ERREUR')
  }
}
