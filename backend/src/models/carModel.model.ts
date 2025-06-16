import mongoose, { Schema } from "mongoose";

const carModelSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    index: true,
  },
  foundation_year: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  img_url: {
    type: String,
    require: true,
  },
  brand_id: {
    type: Schema.Types.ObjectId,
    ref: "Brand",
  },
});

export const CarModel = mongoose.model("carModel", carModelSchema);
