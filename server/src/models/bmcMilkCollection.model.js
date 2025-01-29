import mongoose, { Schema } from "mongoose";

const bmcMilkCollectionSchema = new Schema(
  {
    mppCode: {
      type: Number,
      required: true,
    },
    collectionDate: {
      type: Date,
    },
    shift: {
      type: String,
      enum: ["morning", "evening"],
      lowercase: true,
    },
    milkType: {
      type: String,
      enum: ["C", "B", "M"], // C -> cow, B -> buffalo, M -> mix
    },
    fat: {
      type: Number,
    },
    snf: {
      type: Number,
    },
    rate: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    totalAmount: {
      type: Number,
    },
  },
  { timestamps: true }
);

export const BMCMilkCollection = mongoose.model(
  "BMCMilkCollection",
  bmcMilkCollectionSchema
);
