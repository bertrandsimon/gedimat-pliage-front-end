
import Image from 'next/image'
import SingleProduct from '@/app/singleProduct/singleProduct'
import { NextResponse } from "next/server";
import connectDB from "@/app/db";
import Product from "@/app/models/Product";
import { ObjectId } from "mongodb";
export const dynamic = 'force-dynamic'


export default async function Page({params}:any) {
   
   const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products/${params.id}`)
 
   const item = await response.json()
  
    return (
        
      <div><SingleProduct item={item}/></div>

    )
}

