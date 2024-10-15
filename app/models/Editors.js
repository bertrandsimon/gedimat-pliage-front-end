const editorSchema = mongoose.Schema({
  name: String,
  country: String,
});

const Editor = mongoose.model("editors", editorSchema);
