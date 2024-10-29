import mongoose from "mongoose";
import Variation from "./Variation";

const materialSchema = new mongoose.Schema({
  name: String,
  active: Boolean,
  variations: [Variation.schema], // Use an array of Variation subdocuments
});

// colors: [color1._id, color2._id], // Array of ObjectIds

// Fixing reload bug
const Material =
  mongoose.models.Material || mongoose.model("Material", materialSchema);

export default Material;
