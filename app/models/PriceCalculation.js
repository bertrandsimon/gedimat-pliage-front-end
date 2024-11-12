import mongoose from 'mongoose'

const priceCalculationSchema = new mongoose.Schema({
  product_name: String,
  measures: Object,
  max_measures: Object,
  min_measures: Object,
  max_width: Number,
  custom_angles: Boolean,
  min_angles: Object,
  min_angles: Object,
  quantity_discount: Number,
  surface_calculation: String,
  prefered_materials: Array,
})

const PriceCalculation =
  mongoose.models.PriceCalculation ||
  mongoose.model('PriceCalculation', priceCalculationSchema)

export default PriceCalculation
