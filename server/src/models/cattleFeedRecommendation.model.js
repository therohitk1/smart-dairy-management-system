import mongoose, { Schema } from "mongoose";

const cattleFeedRecommendationSchema = new Schema(
  {
    breed: {
      type: String,
      required: true,
    },
    ageGroup: {
      type: String,
      required: true,
    },
    healthCondition: {
      type: String,
      default: "Healthy",
    },
    feedType: {
      type: String,
      required: true,
    },
    ingredients: [
      {
        type: String,
        required: true,
      },
    ],
    quantity: {
      type: Number,
      required: true,
    },
    instructions: {
      type: String,
    },
  },
  { timestamps: true }
);

export const CattleFeedRecommendation = mongoose.model(
  "CattleFeedRecommendation",
  cattleFeedRecommendationSchema
);