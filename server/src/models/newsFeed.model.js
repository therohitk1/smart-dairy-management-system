import mongoose, { Schema } from "mongoose";

const newsFeedSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["Health", "Weather", "Market", "Events"],
      required: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    image: {
      type: String,
    },
    publishDate: {
      type: Date,
      default: Date.now,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const NewsFeed = mongoose.model("NewsFeed", newsFeedSchema);