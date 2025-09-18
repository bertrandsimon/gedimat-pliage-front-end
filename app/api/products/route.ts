import { NextResponse } from 'next/server'
import connectDB from '../../db'
import Product from '../../models/Product'

// GET ALL PRODUCTS

// http://localhost:3000/api/products
// https://pliage-aluminium.com/api/products

// https://www.pliage-aluminium.com/api/products

export async function GET() {
  await connectDB()
  try {
    // Only select necessary fields for listing page to reduce payload
    const products = await Product.find(
      { active: true },
      {
        _id: 1,
        name: 1,
        main_image: 1,
        category: 1,
        sub_category: 1,
        // Exclude heavy fields like images array, description, etc.
      }
    ).sort({ name: 1 })

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

// Export the function for server-side usage
export async function getProducts() {
  await connectDB()
  try {
    // Only select necessary fields for listing page to reduce payload
    const products = await Product.find(
      { active: true },
      {
        _id: 1,
        name: 1,
        main_image: 1,
        category: 1,
        sub_category: 1,
        // Exclude heavy fields like images array, description, etc.
      }
    ).sort({ name: 1 })

    return products.map(product => ({
      ...product.toObject(),
      _id: product._id.toString()
    }))
  } catch (error) {
    console.error('Error fetching products:', error)
    throw new Error('Failed to fetch products')
  }
}
