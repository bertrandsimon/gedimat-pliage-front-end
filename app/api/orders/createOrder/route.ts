import { NextResponse } from "next/server";
import connectDB from "@/app/db";
import Order from '../../../models/Order';

export async function POST(request: Request) {
  try {
    // Parse request body
    const bodyText = await request.text();
    const { orderDatas } = JSON.parse(bodyText);
    console.log("orderDatas in route :", orderDatas)
    // Connect to the database
    await connectDB();

    // Create a new Order instance
    const newOrder = new Order({
      created_at: new Date(),
      customer_id: orderDatas.customer_id || "default_customer_id",
      products: orderDatas.products || [],
      total_amount_HT: orderDatas.orderDataTotalHT || 0,
      total_amount_TTC: orderDatas.orderDataTotalTTC || 0
    });

    // Save the new order
    await newOrder.save();

    // Return success response with the newly created order
    return NextResponse.json({
      result: true,
      order: newOrder
    });

  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error during order creation:', error);

    // Return error response
    return NextResponse.json({
      result: false,
      error: 'Internal server error'
    });
  }
}
