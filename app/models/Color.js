import mongoose from "mongoose";

const colorSchema = new mongoose.Schema({
  name: String,
  color_hexa: String,
  active: Boolean,
});

// export default mongoose.model("Color", colorSchema);

const Color = mongoose.models.Color || mongoose.model("Color", colorSchema);

export default Color;
