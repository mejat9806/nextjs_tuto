import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connection: any = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Connection exists");
      return;
    }

    /*  const mongoURL = process.env.MONGO;
    console.log("MongoDB URI:", mongoURL); // Add this line for debugging
    if (!mongoURL) {
      throw new Error("MongoDB URI not found in environment variables");
    }

    console.log("Connecting to MongoDB:", mongoURL); */
    const db = await mongoose.connect(
      "mongodb+srv://ameraizat98:ameraizat98@cluster0.ojb3uvl.mongodb.net/next14tuto?retryWrites=true&w=majority&appName=Cluster0",
    );
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("DB error");
  }
};
