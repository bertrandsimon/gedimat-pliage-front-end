import mongoose from "mongoose";

const priceCalculationSchema = new mongoose.Schema({
  color_price: Number,
  material_price: Number,
  material_finition_price: Number,
  quantity_discount: Number,
  material_thickness_price: Number,
  preparation_time_price: Number,
  variable_time_price: Number,
  surface_calculation: String,
});

const PriceCalculation =
  mongoose.models.PriceCalculation ||
  mongoose.model("PriceCalculation", priceCalculationSchema);

export default PriceCalculation;
