import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  colors: Array,
  material_finitions: Array,
  materials: Array,
  width: Number,
  weight: Number,
  description: String,
  images: Array,
  categories: Array,
  active: Boolean,
});

export default mongoose.model("Product", userSchema);
