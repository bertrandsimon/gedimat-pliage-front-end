import mongoose from "mongoose";

const finitionSchema = new mongoose.Schema({
  name: String,
  active: Boolean,
});

// export default mongoose.model("Finition", finitionSchema);

const Finition =
  mongoose.models.Finition || mongoose.model("Finition", finitionSchema);

export default Finition;
