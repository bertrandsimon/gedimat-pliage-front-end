
import Image from 'next/image'
import SingleProduct from '@/app/singleProduct/singleProduct'
import { NextResponse } from "next/server";
import connectDB from "@/app/db";
import Product from "@/app/models/Product";
import { ObjectId } from "mongodb";
export const dynamic = 'force-dynamic'

// export async function fetchSingleProduct( {params}:any ) {
   
 
//   const response = await fetch(`${process.env.URL}/api/products/${params.id}`, { cache: 'no-store' })

//   const item = await response.json()

   
    
// }


export default async function Page({params}:any) {
   
 
   const response = await fetch(`${process.env.URL}/api/products/${params.id}`)
   //const response = await fetch(`${process.env.URL}/api/products/${params.id}`, { cache: 'no-store' })
   const item = await response.json()
  
    return (
        
      <div><SingleProduct item={item}/></div>

    )
}

