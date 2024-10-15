import { NextResponse } from "next/server";
import connectDB from '../../db';
import Product from '../../models/Product';


// GET ALL PRODUCTS
// http://localhost:3000/api/test
// https://pliage-aluminium.vercel.app/api/products

export async function GET() {
    await connectDB();
    
    try {
        const products = await Product.find().populate('price_calculation');
        //const products = await Product.find()
        return NextResponse.json(products);
    } catch (error: unknown) {
        // Check if error is an instance of Error
        if (error instanceof Error) {
            console.error('Error fetching products:', error.message); // Log the error for debugging
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            console.error('Unexpected error:', error); // Handle unexpected error type
            return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
        }
    }
}
