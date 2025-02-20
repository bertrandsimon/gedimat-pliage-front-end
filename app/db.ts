import mongoose from 'mongoose'
mongoose.set('strictPopulate', false)
const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://jobimat:O2AnB6A1jOokWVb1@cluster0.qdjfkjz.mongodb.net/pliagealuminium',
      {
        //: true,
        //useUnifiedTopology: true,
      }
    )
    //console.log('MongoDB connected');
  } catch (error) {
    //console.error('MongoDB connection error:', error);
  }
}

export default connectDB
