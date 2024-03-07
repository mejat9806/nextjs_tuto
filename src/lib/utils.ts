import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURL = process.env.MONGO;
const connection: any = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Connection exists");
      return;
    }

    const db = await mongoose.connect(mongoURL as string);
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("DB error");
  }
};
