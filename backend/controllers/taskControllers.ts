import { Request, Response } from "express";
import moment from 'moment';
import Task from "../models/Task";
import Project from "../models/Project";

export const createTaskController = async (req: Request, res: Response) => {
  try {
    const { label, description, started_at, ended_at } = req.body;
    const projects = await Project.find();
    const createdTask = new Task({
      label,
      description,
      projects: projects,
      started_at: moment().format(started_at),
      ended_at: moment().format(ended_at),
    });

    // save project in DB
    await createdTask.save();

    res
      .status(201)
      .json({ message: "Task created successfully!", task: createdTask });
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

export const getTaskController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    res.status(201).json({
      task,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getTasksController = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();

    res.status(201).json({
      tasks,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTaskController = async (req: Request, res: Response) => {
  try {
    const { label, description, started_at, ended_at } = req.body;
    const task = await Task.findById(req.params.id);
    if (!task) {
      throw new Error("No task found.");
    }
    await Task.updateOne(
      { _id: task?._id },
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
      message: "task updated!",
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTaskController = async (req: Request, res: Response) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    res.status(201).json({
      message: "Task deleted",
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
