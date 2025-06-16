import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app: Application = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//import user router
import userRouter from "./routes/user";

app.use("/api/v1/users/", userRouter);

//import carinsertion router
import carInsertionRouter from "./routes/carInsertion";

app.use("/api/v1/carInsertion/", carInsertionRouter);

export default app;
