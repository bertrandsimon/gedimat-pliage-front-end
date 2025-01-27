import mongoose from 'mongoose'

const newsletterSchema = new mongoose.Schema({
  date: String,
  theme: String,
  titre: String,
  description: String,
  image: String,
})

// Fixing reload bug
const Newsletter =
  mongoose.models.Newsletter || mongoose.model('Newsletter', newsletterSchema)

export default Newsletter
