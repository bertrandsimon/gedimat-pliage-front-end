
import Image from 'next/image'
import SingleProduct from '@/app/singleProduct/singleProduct'
import { NextResponse } from "next/server";
import connectDB from "@/app/db";
import Product from "@/app/models/Product";
import { ObjectId } from "mongodb";
export const dynamic = 'force-dynamic'


export default async function Page({params}:any) {
   
  // ex : http://localhost:3000/api/products/666adf15c9493b71dbea1e46
   const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products/${params.id}`)
 
   const item = await response.json()

   //console.log("single product :", item)
  
    return (
        
      <div><SingleProduct item={item}/></div>

    )
}

