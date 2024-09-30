import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  colors: Array,
  materials: Array,
  material_finitions: [String],
  material_thickness: [Number],
  length: Number,
  weight: Number,
  width: Number,
  description: String,
  main_image: String,
  images: [String],
  category: String,
  sub_category: String,
  active: Boolean,
  new_product: Boolean,
  price_ht: Number,
  tax: Number,
  custom_measures: Boolean,
  measures: [String],
});

// export default mongoose.model("Product", productSchema);

// Fixing reload bug
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
