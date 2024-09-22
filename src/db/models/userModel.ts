import mongoose, { Schema } from "mongoose";
import { number } from "zod";

export interface User extends Document {
  name: string;
  email: string;
  age: number;
}

const userSchema: Schema<User> = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures email is unique
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0, // Age can't be negative
  },
});

const User = mongoose.model<User>("User", userSchema);
export default User;
