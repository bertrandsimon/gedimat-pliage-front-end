import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  surname: String,
  active: Boolean,
  email: String,
  password: String,
  avatar: String,
  is_pro: Boolean,
  proNumber: String,
  kbis_file: String,
  token: String,
  address: String,
  cp: String,
  city: String,
  phone: String,
  // Magic link fields
  magicLinkToken: String,
  magicLinkExpiry: Date
});

// export default mongoose.model("User", userSchema);

// Fixing reload bug
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
