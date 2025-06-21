import { Brand } from "../models/brand.model";
import { MulterRequest } from "../types";
import { ApiError } from "../utils/apiError";
import { ApiResponse } from "../utils/apiResponse";
import { asyncHandler } from "../utils/asyncHandler";
import { uploadOnCloudinary } from "../utils/cloudinary";
import { CarModel } from "../models/carModel.model";
import { Variant } from "../models/variant.model";
import { Specification } from "../models/specification.model";

export const insertBrand = asyncHandler(async (req, res) => {
  //get brand details from request
  const { name, country, foundation_year, description, official_website_link } =
    req.body;

  //validate req body
  if (
    [name, country, foundation_year, description, official_website_link].some(
      (fields) => fields?.trim() === ""
    )
  ) {
    throw new ApiError(400, "all fileds are required");
  }

  //check if brand already exist
  const existed_brand = await Brand.findOne({ name });
  if (existed_brand) {
    throw new ApiError(409, "Brand name already exists");
  }

  //check for image
  const brand_logo_image_local_path = (req as MulterRequest).files
    ?.brand_image?.[0]?.path;
  if (!brand_logo_image_local_path) {
    throw new ApiError(400, "B`rand logo image not found");
  }

  //upload to cloudinary
  const brand_logo_image = await uploadOnCloudinary(
    brand_logo_image_local_path
  );

  //brand object
  const brand_object = {
    name,
    country,
    foundation_year,
    description,
    official_website_link,
    logo_url: brand_logo_image?.url || "",
  };
  //check for entry created in db successfully
  const brand = await Brand.create(brand_object);

  //return res
  res
    .status(201)
    .json(new ApiResponse(201, brand_object, "Brand inserted successfully"));
});

export const insertModel = asyncHandler(async (req, res) => {
  //get model details from request
  const { name, foundation_year, description, brand_name } = req.body;

  //validate req body
  if (
    [name, foundation_year, description, brand_name].some(
      (fields) => fields?.trim() === ""
    )
  ) {
    throw new ApiError(400, "all fileds are required");
  }

  //check if model already exist
  const existed_model = await CarModel.findOne({ name });
  if (existed_model) {
    throw new ApiError(409, "Model name already exists");
  }

  //check for image
  const model_image_local_path = (req as MulterRequest).files?.model_image?.[0]
    ?.path;
  if (!model_image_local_path) {
    throw new ApiError(400, "model image not found");
  }

  //upload to cloudinary
  const model_image = await uploadOnCloudinary(model_image_local_path);

  //find brand id
  const brand = await Brand.findOne({ name: brand_name }).select("_id");
  if (!brand) {
    throw new ApiError(400, "Brand does not exist");
  }
  const brand_id = brand?._id;

  //model object
  const model_object = {
    name,
    foundation_year,
    description,
    img_url: model_image?.url || "",
    brand_id,
  };

  //check for entry created in db successfully
  await CarModel.create(model_object);

  //return res
  res
    .status(201)
    .json(new ApiResponse(201, model_object, "model inserted successfully"));
});

export const insertVariant = asyncHandler(async (req, res) => {
  //get vaiant details from request
  const { name, price, foundation_year, model_name, tags } = req.body;

  //validate req body
  if (
    [name, price, foundation_year, model_name, tags].some(
      (fields) => fields?.trim() === ""
    )
  ) {
    throw new ApiError(400, "all fileds are required");
  }

  //check if variant already exist
  const existed_variant = await Variant.findOne({ name });
  if (existed_variant) {
    throw new ApiError(409, "variant name already exists");
  }

  //check for image
  const files = req.files as Express.Multer.File[];

  if (!files || files.length === 0) {
    throw new ApiError(400, "No images uploaded");
  }

  //upload to cloudinary
  const variant_images = await Promise.all(
    files.map((file) => uploadOnCloudinary(file.path))
  );
  const imageUrls = variant_images.map((r) => r?.secure_url);

  //find model id
  const model = await CarModel.findOne({ name: model_name }).select("_id");
  if (!model) {
    throw new ApiError(400, "model does not exist");
  }
  const carModel_id = model?._id;

  //variant object
  const variant_object = {
    name,
    price,
    foundation_year,
    tags,
    img_url: imageUrls || "",
    carModel_id,
  };

  //check for entry created in db successfully
  await Variant.create(variant_object);

  //return res
  res
    .status(201)
    .json(
      new ApiResponse(201, variant_object, "Variant inserted successfully")
    );
});

export const insertSpecification = asyncHandler(async (req, res) => {
  const variant_name = req.body.basicInformation.variant_name;
  const variant = await Variant.findOne({ variant_name });
  if (!variant) {
    throw new ApiError(400, "variant not found");
  }

  const specs_object = req.body;

  specs_object.variant_id = variant._id;

  //check for entry created in db successfully
  await Specification.create(specs_object);

  //return res
  res
    .status(201)
    .json(
      new ApiResponse(201, specs_object, "Specification inserted successfully")
    );
});
