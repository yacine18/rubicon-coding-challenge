import { Request, Response } from "express";
import Project from "../models/Project";
import moment from "moment";

export const createProjectController = async (req: Request, res: Response) => {
  try {
    const { label, description, started_at, ended_at } = req.body;
    const createdProject = new Project({
      label,
      description,
      started_at: moment().format(started_at),
      ended_at: moment().format(ended_at),
    });

    // save project in DB
    await createdProject.save();

    res.status(201).json({
      message: "Project created successfully!",
      project: createdProject,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getProjectController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);

    res.status(201).json({
      project,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getProjectsController = async (req: Request, res: Response) => {
  try {
    const projects = await Project.find();

    res.status(201).json({
      projects,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProjectController = async (req: Request, res: Response) => {
  try {
    const { label, description, started_at, ended_at } = req.body;
    const project = await Project.findById(req.params.id);
    if (!project) {
      throw new Error("No project found.");
    }
    await Project.updateOne(
      { _id: project?._id },
      {
        $set: {
          label,
          description,
          started_at,
          ended_at,
        },
      }
    );
    res.status(201).json({
      message: "Project updated!",
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProjectController = async (req: Request, res: Response) => {
  try {
    await Project.findByIdAndDelete(req.params.id);

    res.status(201).json({
      message: "Project deleted",
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
