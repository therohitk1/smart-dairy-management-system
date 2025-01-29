import mongoose, { Schema } from "mongoose";

const mpcSchema = new Schema(
  {
    bmc: [
      {
        type: Schema.Types.ObjectId,
        ref: "BMC",
      },
    ],
    mpp: [
      {
        type: Schema.Types.ObjectId,
        ref: "MPP",
      },
    ],
    farmers: [
      {
        type: Schema.Types.ObjectId,
        ref: "Farmer",
      },
    ],
    staffs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Staff",
      },
    ],
  },
  { timestamps: true }
);

export const MPC = mongoose.model("MPC", mpcSchema);
