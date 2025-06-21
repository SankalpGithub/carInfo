import { Router } from "express";
import {
  getAllBrands,
  getModelsByBrandId,
  getSpecificationByVariantId,
  getVariantsByModelId,
} from "../controllers/carInfo.controller";

const router = Router();

router.get("/getAllBrand", getAllBrands);
router.get("/getModelsByBrandId/:brandId", getModelsByBrandId);
router.get("/getVariantsByModelId/:carModel_id", getVariantsByModelId);
router.get(
  "/getSpecificationByVariantId/:variant_id",
  getSpecificationByVariantId
);
export default router;
