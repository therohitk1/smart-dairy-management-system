import mongoose, { Schema } from "mongoose";

const paymentReportSchema = new Schema(
  {
    reportDate: {
      startDate: {
        type: Date,
      },
      endDate: {
        type: Date,
      },
    },
    farmerCode: {
      type: Number,
    },
    avgFat: {
      type: Number,
    },
    avgSnf: {
      type: Number,
    },
    avgRate: {
      type: Number,
    },
    totalQuantity: {
      type: Number,
    },
    totalAmount: {
      type: Number,
    },
  },
  { timestamps: true }
);

export const Payment = mongoose.model("Payment", paymentReportSchema);