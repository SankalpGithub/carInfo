export interface MulterRequest extends Express.Request {
  files: {
    brand_image?: Express.Multer.File[];
    model_image?: Express.Multer.File[];
    variant_image?: Express.Multer.File[];
    // other possible file fields
  };
}
