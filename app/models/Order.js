import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  created_at: Date,
  customer_id: String,
  products: Array,
  status: String,
  total_amount_HT: Number,
  total_amount_TTC: Number,
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
