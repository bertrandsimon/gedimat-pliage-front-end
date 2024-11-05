import mongoose from "mongoose";
import PriceCalculation from "./PriceCalculation"; // import the PriceCalculation model to populate the field

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
  schema_img: String,
  category: String,
  sub_category: String,
  active: Boolean,
  new_product: Boolean,
  price_ht: Number,
  tax: Number,
  custom_measures: Boolean,
  measures: [String],
  price_calculation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: PriceCalculation,
  },
});

// export default mongoose.model("Product", productSchema);

// Fixing reload bug
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
