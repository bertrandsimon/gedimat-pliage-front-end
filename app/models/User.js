import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  surname: String,
});

export default mongoose.model("User", userSchema);
