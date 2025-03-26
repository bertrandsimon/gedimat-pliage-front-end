import { NextResponse } from 'next/server'
import connectDB from '@/app/db'
import Product from '@/app/models/Product'
import Material from '@/app/models/Material'
import { ObjectId } from 'mongodb'

// GET PRODUCT BY ID  http://localhost:3000/api/products/666adf1ac9493b71dbea1e49

// https://pliage-aluminium.vercel.app/api/products/666adf15c9493b71dbea1e46
// Populate bug correction : add mongoose.set('strictPopulate', false) in db.ts

export async function GET(request: any, { params }: any) {
  await connectDB()

  const { id } = params

  try {
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Id produit non valide' },
        { status: 400 }
      )
    }
    const product = await Product.findById(id)
      .populate('price_calculation')
      .populate('product_materials')

    if (!product) {
      return NextResponse.json({ error: 'Produit non trouvé' }, { status: 400 })
    }

    //

    //

    const response = NextResponse.json(product)
    
    // Set cache headers : ACTIVATE FOR CACHE
   // response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
    
  // Set cache headers : DESACTIVATE FOR CACHE
  //response.headers.set('Cache-Control', 'no-store')

    return response
  } catch {
    return NextResponse.json('ERREUR')
  }
}
