import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
  avatar: String,
  active: Boolean,
  level: Number,
});

export default mongoose.model("Admin", adminSchema);
