import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('mongodb connected successfully');
  } catch (error) {
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;