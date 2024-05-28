import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  surname: String,
  active: Boolean,
  email: String,
  password: String,
  avatar: String,
  is_pro: Boolean,
  pro_number: Number,
  kbis_file: String,
});

// export default mongoose.model("User", userSchema);

// Fixing reload bug
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
