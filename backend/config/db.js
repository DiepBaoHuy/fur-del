import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://baohuy2511:25112003@cluster0.qwtozrd.mongodb.net/furniture"
    )
    .then(() => console.log("DB Connected"));
};
