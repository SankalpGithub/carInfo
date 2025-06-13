import mongoose, { Schema } from "mongoose";

const brandSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,

    index: true,
  },
  logo_url: {
    type: String,
    require: true,
  },
});

export const brand = mongoose.model("Brand", brandSchema);
