import mongoose from "mongoose";
import Color from "./Color";

const materialSchema = new mongoose.Schema({
  name: String,
  active: Boolean,
  colors: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Color,
  },
});

// colors: [color1._id, color2._id], // Array of ObjectIds

// Fixing reload bug
const Material =
  mongoose.models.Material || mongoose.model("Material", materialSchema);

export default Material;
