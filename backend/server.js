import { } from "./app";
import dotenv from "dotenv";

import { connectDatabase } from "./config/database";

import cloudinary from "cloudinary";



dotenv.config({ path: "./backend/config/config.env" });

connectDatabase();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT} `);
});
