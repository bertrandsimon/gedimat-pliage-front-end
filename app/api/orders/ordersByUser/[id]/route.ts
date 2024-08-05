import { NextResponse } from "next/server";
import connectDB from "@/app/db";

import Order from "@/app/models/Order";


// GET all orders BY userID  http://localhost:3000/api/orders/ordersByUser/66a1fd40412ecec228ca63dd

// https://pliage-aluminium.vercel.app/api/orders/ordersByUser/66a1fd40412ecec228ca63dd

export async function GET(request:any, {params}:any) {
   await connectDB();

   const {id} = params;
  
   try {

    // if (!id) {
    //     return NextResponse.json({ error : 'Id user non valide' }, { status: 400 })
    // }
    const orders = await Order.find({ customer_id : id})

    if (!orders) {
        return NextResponse.json ({ error : 'Commandes non trouvées'}, { status : 400} )
    }

      return NextResponse.json(orders)
   }
   catch {
    return NextResponse.json('ERREUR');
   }

}