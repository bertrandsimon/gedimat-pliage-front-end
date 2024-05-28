import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  colors: Array,
  material_finitions: Array,
  materials: Array,
  thickness_choice: Array,
  width: Number,
  weight: Number,
  description: String,
  images: Array,
  categories: Array,
  active: Boolean,
  new_product: Boolean,
  price_ht: Number,
  tax: Number,
  price_ttc: Number,
});

export default mongoose.model("Product", productSchema);
