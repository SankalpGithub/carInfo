import { Router } from "express";
import {
  insertBrand,
  insertModel,
  insertSpecification,
  insertVariant,
} from "../controllers/carInsertion.controller";
import { upload } from "../middlewares/multer.middleware";

const router = Router();

router.post(
  "/brand",
  upload.fields([{ name: "brand_image", maxCount: 1 }]),
  insertBrand
);

router.post(
  "/model",
  upload.fields([{ name: "model_image", maxCount: 1 }]),
  insertModel
);

router.post("/variant", upload.array("variant_image", 20), insertVariant);

router.post("/specification", insertSpecification);

export default router;
