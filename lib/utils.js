import mongoose from "mongoose";

export async function connectToDB() {
  if (mongoose.connection.readyState === 1) {
    console.log("🟩 MongoDB already connected");
    return;
  }

  const db = process.env.MONGO;
  console.log(db);

  try {
    await mongoose.connect(db || "");
    console.log("🟩 MongoDB connected");
  } catch (err) {
    console.log("🟥 Error connecting \n", err);
  }
}