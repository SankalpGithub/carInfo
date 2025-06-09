import dotenv from "dotenv";
import connectDB from "./config/db";
import app from "./app";

dotenv.config({
  path: "/.env",
});

const port: number = Number(process.env.PORT) || 8000;

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("error", err);
    });
    app.listen(port, () => {
      console.log(`Server is running on port : ${port}`);
    });
  })
  .catch((err) => {
    console.log("mongodb connection failed !!", err);
  });
