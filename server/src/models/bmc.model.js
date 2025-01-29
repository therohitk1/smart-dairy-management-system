import mongoose, { Schema } from "mongoose";

const bmcSchema = new Schema(
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
    bmcCode: {
      type: Number,
    },
    incharge: {
      type: Schema.Types.ObjectId,
      ref: "Staff",
    },
    mpps: [
      {
        type: Schema.Types.ObjectId,
        ref: "MPP",
      },
    ],
  },
  { timestamps: true }
);

export const BMC = mongoose.model("BMC", bmcSchema);