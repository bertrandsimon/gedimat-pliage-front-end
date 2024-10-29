import mongoose from "mongoose";

const variationSchema = new mongoose.Schema({
  name: String,
  color_hexa: String,
  active: Boolean,
  provider: String,
  price: Number,
  thickness: Number,
});

// export default mongoose.model("Variation", variationSchema);

const Variation =
  mongoose.models.Variation || mongoose.model("Variation", variationSchema);

export default Variation;
