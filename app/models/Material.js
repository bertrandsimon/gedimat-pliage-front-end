import mongoose from "mongoose";

const materialSchema = new mongoose.Schema({
  name: String,
  active: Boolean,
});

// export default mongoose.model("Material", materialSchema);

const Material =
  mongoose.models.Material || mongoose.model("Material", materialSchema);

export default Material;
