export interface MulterRequest extends Express.Request {
  files: {
    brandImage?: Express.Multer.File[];
    modelImage?: Express.Multer.File[];
    // other possible file fields
  };
}
