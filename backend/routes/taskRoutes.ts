import express from "express";
import {
  createTaskController,
  deleteTaskController,
  getTaskController,
  getTasksController,
  updateTaskController,
} from "../controllers/taskControllers";
const taskRoutes = express.Router();

taskRoutes.post("/create", createTaskController);
taskRoutes.get("/", getTasksController);
taskRoutes.get("/:id", getTaskController);
taskRoutes.patch("/:id", updateTaskController);
taskRoutes.delete("/delete/:id", deleteTaskController);

export default taskRoutes;
