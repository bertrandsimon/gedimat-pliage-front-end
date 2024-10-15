const bookSchema = mongoose.Schema({
  title: String,
  author: String,
  style: String,
  editor: { type: mongoose.Schema.Types.ObjectId, ref: "editors" },
});

const Book = mongoose.model("books", bookSchema);
