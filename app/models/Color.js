import mongoose from "mongoose";

const colorSchema = new mongoose.Schema({
  name: String,
  color_hexa: String,
  active: Boolean,
});

export default mongoose.model("Color", userSchema);
