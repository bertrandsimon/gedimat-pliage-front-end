
import Image from 'next/image'
import SingleProduct from '@/app/singleProduct/singleProduct'
import { NextResponse } from "next/server";
import connectDB from "@/app/db";
import Product from "@/app/models/Product";
import { ObjectId } from "mongodb";
export const dynamic = 'force-dynamic'


export default async function Page({params}:any) {
   
  // ex : http://localhost:3000/api/products/666adf1ac9493b71dbea1e4b
   const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products/${params.id}`)
   const item = await response.json()

  const response2 = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/materials`)
  const materials = await response2.json()

   //console.log("single product :", item)
  
    return (
        
      <div><SingleProduct item={item} materials={materials}/></div>

    )
}

