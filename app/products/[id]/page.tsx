import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import connectDB from '../../db';
import Product from '../../models/Product';


//export const dynamic = 'force-dynamic'
export async function IdPage( {params}:any ) {
    //const {id} = params;
    //console.log(params)
    //const response = await fetch(`${process.env.URL}/api/products/${id}`, { cache: 'no-store' });
     const response = await fetch(process.env.URL +`/api/products/`+ params.id , { cache: 'no-store' })
    
    const product = await response.json();

    //console.log(params)
    console.log('single PRODUCT :', product)

    return (
        
        <div>
            <h1>Product detail</h1>
            <h2>ID : </h2>
        </div>
    )
}

export default IdPage;