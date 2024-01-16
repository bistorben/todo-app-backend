import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

// MongoDB connection

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connected with MongoDB"))
  .catch((error) => console.log(error, " - Database did not connected!"));

mongoose.connection.on("error", () => console.log("Database connection error"));

// middlewares

app.listen(PORT, () => {
  console.log("Server is listening");
});
