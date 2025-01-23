import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI =
      process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio_db";

    await mongoose.connect(mongoURI);
    console.log("🌿 Connected to MongoDB successfully");

    if (mongoose.connection.db) {
      // ایجاد ایندکس‌های مورد نیاز
      await mongoose.connection.db
        .collection("contacts")
        .createIndex({ email: 1 });
      await mongoose.connection.db
        .collection("contacts")
        .createIndex({ createdAt: -1 });
    }
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
