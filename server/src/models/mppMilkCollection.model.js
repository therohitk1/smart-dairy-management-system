const MPPMilkCollectionSchema = new Schema(
  {
    farmerCode: {
      type: Number,
      required: true,
    },
    collectionDate: {
      type: Date,
    },
    shift: {
      type: String,
      enum: ["morning", "evening"],
      lowercase: true,
    },
    milkType: {
      type: String,
      enum: ["C", "B", "M"], // C -> cow, B -> buffalo, M -> mix
    },
    fat: {
      type: Number,
    },
    snf: {
      type: Number,
    },
    rate: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    totalAmount: {
      type: Number,
    },
  },
  { timestamps: true }
);

export const MPPMilkCollection = mongoose.model(
  "MPPMilkCollection",
  MPPMilkCollectionSchema
);