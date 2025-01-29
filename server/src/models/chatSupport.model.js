import mongoose, { Schema } from "mongoose";

const chatSupportSchema = new Schema(
  {
    farmerCode: {
      type: Number,
      required: true,
    },
    supportAgentCode: {
      type: Number,
    },
    messages: [
      {
        sender: {
          type: String,
          enum: ["Farmer", "Agent", "Bot"],
          required: true,
        },
        message: {
          type: String,
          required: true,
        },
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    status: {
      type: String,
      enum: ["Open", "Closed"],
      default: "Open",
    },
  },
  { timestamps: true }
);

export const ChatSupport = mongoose.model("ChatSupport", chatSupportSchema);