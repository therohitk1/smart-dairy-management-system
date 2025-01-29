import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema(
  {
    adminCode: {
      type: Number,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Admin = mongoose.model("Admin", adminSchema);