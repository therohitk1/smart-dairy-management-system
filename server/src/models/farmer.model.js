import mongoose, { Schema } from "mongoose";

const farmerSchema = new Schema(
  {
    farmerCode: {
      type: Number,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    fhFirstName: {
      type: String,
      required: true,
    },
    fhLastName: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    phone: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
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
    bankDetails: {
      bankName: {
        type: String,
      },
      accountHolderName: {
        type: String,
      },
      accountNumber: {
        type: String,
      },
      ifscCode: {
        type: String,
      },
    },
    mpcDetails: {
      bmcCode: {
        type: Number,
      },
      mppCode: {
        type: Number,
      },
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Farmer = mongoose.model("Farmer", farmerSchema);