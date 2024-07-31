import { NextResponse } from 'next/server';
import connectDB from '@/app/db';
import Order from '@/app/models/Order';
import { ObjectId } from "mongodb";

// GET ORDER LIST BY ID : ie > http://localhost:3000/api/orders/66a8dab31d157a619f477fcf

export async function GET(request:any, {params}:any) {
  await connectDB();

  const {id} = params;
 

  try {

   if (!ObjectId.isValid(id)) {
       return NextResponse.json({ error : 'Id produit non valide' }, { status: 400 })
   }
   const order = await Order.findById(id)

   if (!order) {
       return NextResponse.json ({ error : 'Produit non trouvé'}, { status : 400} )
   }

     return NextResponse.json(order)
  }
  catch {
   return NextResponse.json('ERREUR');
  }

}