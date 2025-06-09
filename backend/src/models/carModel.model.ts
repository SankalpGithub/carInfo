import mongoose, { Schema } from "mongoose";

const carModelSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    index: true,
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

export const carModel = mongoose.model("carModel", carModelSchema);
