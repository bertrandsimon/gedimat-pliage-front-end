import { NextResponse } from 'next/server'
import { getProducts } from '@/lib/products'

// GET ALL PRODUCTS

// http://localhost:3000/api/products
// https://pliage-aluminium.com/api/products

// https://www.pliage-aluminium.com/api/products

export async function GET() {
  try {
    const products = await getProducts()

    const response = NextResponse.json(products)

    // Set cache headers for better performance
    response.headers.set(
      'Cache-Control',
      'public, s-maxage=3600, stale-while-revalidate=86400'
    )

    return response
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json('ERREUR', { status: 500 })
  }
}
