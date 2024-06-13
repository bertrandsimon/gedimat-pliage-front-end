import { useEffect, useState } from "react";

export const dynamic = 'force-dynamic'
import Image from "next/image"
import Link from "next/link"


export async function ProductsListing ({ subcategory }:any) {

  
    const response = await fetch(process.env.URL +`/api/products`, { cache: 'force-cache' })
    const products = await response.json()
    
    const filteredProducts = products.filter( (product:any) => product.sub_category === subcategory )

    return (

        <div className="grid grid-cols-6 gap-4">

       

            { filteredProducts.map((product:any) => 
            <div key={product._id} >
                
                <div className="min-h-[300px] flex flex-col justify-start items-center rounded-sm gap-2 cursor-pointer transition duration-300 ease-in-out border border-1 borde-black p-4 hover:shadow-lg">
                    <div className="overflow-hidden">
                    <Link href={`/products/${product._id}`}>
                        <Image src={`/images/products/${product.main_image}`} alt="" width={180} height={125} className="object-cover rounded hover:scale-125 transition-transform duration-300 ease-in-out"></Image>
                    </Link>
                    </div>
                    <p className="cursor-pointer pb-2 text-sm text-center">{product.name}</p>
                    <Link href={`/products/${product._id}`}><div className="thinBtn greyBtn"><span className="text-xs">voir</span></div></Link>
                  
                

                </div>

                </div>

            )}


        </div>

    )
}