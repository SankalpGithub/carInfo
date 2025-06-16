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
  country: {
    type: String,
    require: true,
  },
  foundation_year: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  official_website_link: {
    type: String,
    require: true,
  },
});

export const Brand = mongoose.model("Brand", brandSchema);
