import mongoose, { model } from "mongoose";
import { Brand } from "../models/brand.model";
import { ApiError } from "../utils/apiError";
import { ApiResponse } from "../utils/apiResponse";
import { asyncHandler } from "../utils/asyncHandler";
import { CarModel } from "../models/carModel.model";
import { Variant } from "../models/variant.model";
import { Specification } from "../models/specification.model";

export const getAllBrands = asyncHandler(async (req, res) => {
  // Fetch all brands, minus internal Mongo fields you probably don’t need
  const brands = await Brand.find().select("-__v");

  if (!brands) {
    throw new ApiError(400, "No Brands Found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, brands, "Get all brands successfully"));
});

export const getModelsByBrandId = asyncHandler(async (req, res) => {
  const { brandId } = req.params;

  // basic validation in case an invalid ObjectId slips through
  if (!mongoose.Types.ObjectId.isValid(brandId)) {
    return res.status(400).json({ message: "Invalid brand ID" });
  }

  const models = await CarModel.find({ brand_id: brandId }).select("-__v"); // or .populate('something') if needed

  if (!models) {
    throw new ApiError(400, "no models found");
  }

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        models,
        `model of brand id (${brandId}) found successfully`
      )
    );
});

export const getVariantsByModelId = asyncHandler(async (req, res) => {
  const { carModel_id } = req.params;

  // basic validation in case an invalid ObjectId slips through
  if (!mongoose.Types.ObjectId.isValid(carModel_id)) {
    return res.status(400).json({ message: "Invalid model ID" });
  }

  const variants = await Variant.find({ carModel_id }).select("-__v"); // or .populate('something') if needed

  if (!variants) {
    throw new ApiError(400, "no variant found");
  }

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        variants,
        `variants of model id (${carModel_id}) found successfully`
      )
    );
});

export const getSpecificationByVariantId = asyncHandler(async (req, res) => {
  const { variant_id } = req.params;

  // basic validation in case an invalid ObjectId slips through
  if (!mongoose.Types.ObjectId.isValid(variant_id)) {
    return res.status(400).json({ message: "Invalid model ID" });
  }

  const specification = await Specification.find({ variant_id }).select("-__v"); // or .populate('something') if needed

  if (!specification) {
    throw new ApiError(400, "no variant found");
  }

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        specification,
        `variants of model id (${variant_id}) found successfully`
      )
    );
});
