import mongoose from "mongoose";

const priceCalculationSchema = new mongoose.Schema({
  product_name: String,
  measures: Object,
  max_measures: Object,
  min_measures: Object,
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
