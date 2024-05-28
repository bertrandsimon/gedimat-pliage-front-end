import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
  sub_categories: Array,
  active: Boolean,
  position: Number,
});

// export default mongoose.model("Category", categorySchema);

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
