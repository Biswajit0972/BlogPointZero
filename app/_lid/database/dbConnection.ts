import mongoose from "mongoose";
import {dbConnect} from "@/app/_utils/type";

const isDbConnected:dbConnect = {
isConnected: 0,
}

export const dbConnection = async ():Promise<void> => {
  try {
      if (isDbConnected.isConnected === 1) {
          console.log("Data base is already connected!")
          return;
      }
      const res = await mongoose.connect(process.env.DATABASE_URI || "");
      isDbConnected.isConnected = res.connections[0].readyState;
      console.log("Database Connected", isDbConnected.isConnected);
  }catch (e) {
      console.error(e);
      console.log("Database connection failed!!")
  }
}