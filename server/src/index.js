import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3300, () => {
      console.log(
        `Smart Dairy Management System ⚙️  is listening on http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log("MONGO db connection failed !!! ", error);
  });