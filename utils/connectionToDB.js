import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectionToMongo = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to DB!");
  } catch (error) {
    console.error(error);
  }
};
