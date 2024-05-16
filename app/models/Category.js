import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: String,
  sub_categories: Array,
  active: Boolean,
  position: Number,
});

export default mongoose.model("Category", userSchema);
