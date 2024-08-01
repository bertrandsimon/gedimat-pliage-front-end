import { NextResponse } from 'next/server';
import connectDB from '@/app/db';
import Order from '@/app/models/Order';

// http://localhost:3000/api/orders/ordersByUser?customer_id=66a1fd40412ecec228ca63dd

// https://pliage-aluminium.vercel.app/api/orders/ordersByUser?customer_id=66a1fd40412ecec228ca63dd

export async function GET(request:any) {
  await connectDB();

  try {
    // Get userId from query parameters
    const { searchParams } = new URL(request.url);
    const customer_id = searchParams.get('customer_id');

    if (!customer_id) {
      return NextResponse.json({ result: false, error: 'Customer ID is required' });
    }

    const orders = await Order.find({ customer_id });

    return NextResponse.json({ result: true, orders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json({ result: false, error: 'Internal server error' });
  }
}