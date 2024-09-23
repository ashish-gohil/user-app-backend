import mongoose from "mongoose";
import { seedUsers } from "./seedData";

const dbUrl = process.env.DB_URL || "mongodb://mongo:27017/userAppDb";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dbUrl);
    console.log("MongoDB Connected");
    await seedUsers();
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1); 
  }
};

export default connectDB;
