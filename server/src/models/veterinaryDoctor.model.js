import mongoose, { Schema } from "mongoose";

const veterinaryDoctorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    location: {
      type: {
        type: String,
        default: "Point", // GeoJSON Point
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    availability: {
      type: String,
      required: true,
    },
    ratings: {
      type: Number,
      default: 0,
    },
    services: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

veterinaryDoctorSchema.index({ location: "2dsphere" });

export const VeterinaryDoctor = mongoose.model(
  "VeterinaryDoctor",
  veterinaryDoctorSchema
);