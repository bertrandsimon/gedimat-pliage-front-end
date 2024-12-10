import { NextResponse } from 'next/server'
import connectDB from '@/app/db'
import Order from '@/app/models/Order'

// DELETE order BY _id  http://localhost:3000/api/orders/deleteOrder/
// select DELETE in thunderclient + JSON
// {
//    "id": "67570618f1e1e9d075e11107"
//  }

export async function DELETE(request: Request) {
  await connectDB()

  try {
    const { id } = await request.json() // Extract `id` from the request body

    if (!id) {
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      )
    }

    const deletedOrder = await Order.findByIdAndDelete(id)

    if (!deletedOrder) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 })
    }

    return NextResponse.json({
      message: 'Order deleted successfully',
      order: deletedOrder,
    })
  } catch (error) {
    console.error('Error deleting order:', error)
    return NextResponse.json(
      { error: 'Failed to delete the order' },
      { status: 500 }
    )
  }
}
