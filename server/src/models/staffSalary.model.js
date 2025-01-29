import mongoose, { Schema } from "mongoose";

const staffSalarySchema = new Schema(
  {
    txnId: {
      type: String,
      required: true,
    },
    staffCode: {
      type: Number,
      required: true,
    },
    bankDetails: {
      type: Schema.Types.ObjectId,
      ref: "Staff",
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// Method to calculate salary based on role and total amount.
staffSalarySchema.methods.calculateSalary = function (role, totalAmount) {
  const fixedSalary = 10000; // Define a fixed salary base
  return role === "incharge"
    ? fixedSalary
    : fixedSalary + totalAmount * 0.03;
};

export const StaffSalary = mongoose.model("StaffSalary", staffSalarySchema);