import { Router, Request, Response } from "express";
import {
  insertBrand,
  insertModel,
} from "../controllers/carInsertion.controller";

const router = Router();

router.post("/brand", insertBrand);

router.post("/model", insertModel);

export default router;
