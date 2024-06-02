import { NextResponse } from "next/server";
import connectDB from "@/app/db";
import Product from "@/app/models/Product";
import { ObjectId } from "mongodb";

// GET PRODUCT BY ID : ie > http://localhost:3000/api/products/6659b61a31cbb00c6bf9d3a1

export async function GET(request:any, {params}:any) {
   await connectDB();

   const {id} = params;
  

   try {

    if (!ObjectId.isValid(id)) {
        return NextResponse.json({ error : 'Id produit non valide' }, { status: 400 })
    }
    const product = await Product.findById(id)

    if (!product) {
        return NextResponse.json ({ error : 'Produit non trouvé'}, { status : 400} )
    }

      return NextResponse.json(product)
   }
   catch {
    return NextResponse.json('ERREUR');
   }

}