import mongoose, { Schema } from "mongoose";

const mppSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      country: {
        type: String,
      },
      villageName: {
        type: String,
      },
      city: {
        type: String,
      },
      districtName: {
        type: String,
      },
      state: {
        type: String,
      },
      pincode: {
        type: String,
      },
    },
    mppCode: {
      type: Number,
    },
    sahayak: {
      type: Schema.Types.ObjectId,
      ref: "Staff",
    },
    farmers: [
      {
        type: Schema.Types.ObjectId,
        ref: "Farmer",
      },
    ],
  },
  { timestamps: true }
);

export const MPP = mongoose.model("MPP", mppSchema);