import { NextResponse } from "next/server";
import connectDB from '../../db';
import Product from '../../models/Product';


// GET ALL PRODUCTS

export async function GET() {
   await connectDB();
   try {
    const products = await Product.find()
      return NextResponse.json(products)
   }
   catch {
    return NextResponse.json('ERREUR');
   }

}