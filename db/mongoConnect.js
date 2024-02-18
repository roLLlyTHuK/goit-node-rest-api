import mongoose from "mongoose";

const { DB_URI } = process.env;

export const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("DB connected successfuly");
  } catch (error) {
    console.log(error);
  }
};
