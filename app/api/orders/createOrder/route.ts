import { NextResponse } from "next/server";
import connectDB from "@/app/db";
import Order from '../../../models/Order';
import User from '../../../models/User';

export async function POST(request: Request) {
  try {
    // Parse request body
    const bodyText = await request.text();
    const { orderDatas } = JSON.parse(bodyText);
    console.log("orderDatas in route :", orderDatas)
    // Connect to the database
    await connectDB();

    // Fetch customer information for performance optimization
    let customer_name = '';
    let customer_surname = '';
    const customer_id = orderDatas.customer_id || "default_customer_id";
    
    if (customer_id !== "default_customer_id") {
      try {
        const customer = await User.findById(customer_id);
        if (customer) {
          customer_name = customer.name || '';
          customer_surname = customer.surname || '';
        }
      } catch (userError) {
        console.error('Error fetching customer data:', userError);
        // Continue with empty values if user lookup fails
      }
    }

    // Create a new Order instance
    const newOrder = new Order({
      created_at: new Date(),
      customer_id: customer_id,
      customer_name: customer_name,
      customer_surname: customer_surname,
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
