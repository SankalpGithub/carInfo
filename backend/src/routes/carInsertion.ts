import { Router, Request, Response } from "express";
import {
  insertBrand,
  insertModel,
  insertVariant,
} from "../controllers/carInsertion.controller";
import { upload } from "../middlewares/multer.middleware";

const router = Router();

router.post(
  "/brand",
  upload.fields([{ name: "brandImage", maxCount: 1 }]),
  insertBrand
);

router.post(
  "/model",
  upload.fields([{ name: "modelImage", maxCount: 1 }]),
  insertModel
);

router.post("/variant", upload.array("variantImage", 20), insertVariant);

export default router;
