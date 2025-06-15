import { Router, Request, Response } from "express";
import { registerUser } from "../controllers/user.controller";

const router = Router();

router.route("/register").post(registerUser);

export default router;
