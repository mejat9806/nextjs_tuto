import mongoose from "mongoose";
require("dotenv").config();

const connection: any = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("connection exist");
      return;
    }
    const mongoURL = process.env.MONGO;
    console.log(typeof process.env.MONGO);
    const db = await mongoose.connect(mongoURL);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error("DB error");
  }
};
