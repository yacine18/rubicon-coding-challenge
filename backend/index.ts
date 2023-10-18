import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import projectRouter from "./routes/projectRoutes";
import taskRoutes from "./routes/taskRoutes";

dotenv.config();

// connect mongoDB database
const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI as string, {}).then(() => {
      console.log("Mongodb connected successfully!");
    });
  } catch (error: any) {
    console.log("MongDB connection failed!", error.message);
  }
};
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// routes
app.use("/api/projects", projectRouter);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || "5050";
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
