import mongoose from "mongoose";

const products_in_orderSchema = new mongoose.Schema({
  //   created_at: Date,
  //   customer_id: String,
  //   status: String,
  //   total_amount: Number,
});

const products_in_order =
  mongoose.models.Products_in_order ||
  mongoose.model("Products_in_orders", products_in_orderSchema);

export default Products_in_orderSchema;
