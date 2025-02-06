import { NextResponse } from 'next/server'
import connectDB from '@/app/db'
import Product from '@/app/models/Product'
import { ObjectId } from 'mongodb'

// GET PRODUCT BY ID  http://localhost:3000/api/products/666adf15c9493b71dbea1e46

// https://pliage-aluminium.vercel.app/api/products/666adf15c9493b71dbea1e46

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
    const product = await Product.findById(id).populate('price_calculation')

    //const product = await Product.findById(id)

    if (!product) {
      return NextResponse.json({ error: 'Produit non trouvé' }, { status: 400 })
    }

    return NextResponse.json(product)
  } catch {
    return NextResponse.json('ERREUR')
  }
}
