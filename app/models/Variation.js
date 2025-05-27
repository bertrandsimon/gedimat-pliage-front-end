import mongoose from "mongoose";

const variationSchema = new mongoose.Schema({
  name: String,
  code_mn : String,
  color_hexa: String,
  active: Boolean,
  provider: String,
  price: Number,
  thickness: Number,
  max_length : Number, 
  max_width : Number,
  agencies : Array,
  max_unfolded_surface : Number
});

// export default mongoose.model("Variation", variationSchema);

const Variation =
  mongoose.models.Variation || mongoose.model("Variation", variationSchema);

export default Variation;
