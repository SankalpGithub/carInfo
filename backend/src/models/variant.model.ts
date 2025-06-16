import mongoose, { Schema } from "mongoose";

const variantSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    index: true,
  },
  price: {
    type: String,
    require: true,
  },
  foundation_year: {
    type: String,
    require: true,
  },
  img_url: {
    type: [String],
    require: true,
  },
  carModel_id: {
    type: Schema.Types.ObjectId,
    ref: "Brand",
  },
  tags: [
    {
      type: String,
      enum: ["Most Searched", "Top Selling", "Trending", null],
    },
  ],
});

export const Variant = mongoose.model("Variant", variantSchema);
