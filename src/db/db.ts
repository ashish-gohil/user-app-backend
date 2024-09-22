import mongoose from "mongoose";
import { seedUsers } from "./seedData";

const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/userAppDb";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dbUrl);
    console.log("MongoDB Connected");
    await seedUsers();
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
