import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || "mongodb://mongo:27017/mydb";
    await mongoose.connect(mongoURI, {
      connectTimeoutMS: 10000,
    });
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // اگه خطا داد، اپلیکیشن متوقف بشه
  }
};

export default connectDB;
