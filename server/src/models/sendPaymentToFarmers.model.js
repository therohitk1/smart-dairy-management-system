import mongoose, { Schema } from "mongoose";

const sendPaymentToFarmersSchema = new Schema(
  {
    txnId: {
      type: String,
      required: true,
    },
    farmerCode: {
      type: Number,
      required: true,
    },
    bankDetails: {
      type: Schema.Types.ObjectId,
      ref: "Farmer",
      required: true,
    },
    payment: {
      type: Schema.Types.ObjectId,
      ref: "Payment",
      required: true,
    },
  },
  { timestamps: true }
);

export const SendPaymentToFarmers = mongoose.model(
  "SendPaymentToFarmers",
  sendPaymentToFarmersSchema
);