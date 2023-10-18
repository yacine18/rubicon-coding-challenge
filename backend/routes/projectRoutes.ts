import express from "express";
import {
  createProjectController,
  deleteProjectController,
  getProjectController,
  getProjectsController,
  updateProjectController,
} from "../controllers/projectControllers";
const projectRouter = express.Router();

projectRouter.post("/create", createProjectController);
projectRouter.get("/", getProjectsController);
projectRouter.get("/:id", getProjectController);
projectRouter.patch("/update/:id", updateProjectController);
projectRouter.delete("/delete/:id", deleteProjectController);

export default projectRouter;
