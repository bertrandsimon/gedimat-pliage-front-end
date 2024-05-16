import mongoose from "mongoose";

const materialSchema = new mongoose.Schema({
  name: String,
  active: Boolean,
});

export default mongoose.model("Material", userSchema);
