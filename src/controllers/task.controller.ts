import { Request, Response } from "express";
import { PersonalTask, WorkTask } from "../models/task.model";
import { TaskManager } from "../services/task.service";

const manager = new TaskManager();

export const listTasks = (req: Request, res: Response) => {
  res.render("index", { tasks: manager.getAll() });
};

export const addTask = (req: Request, res: Response) => {
  const { title, type } = req.body;
  const task =
    type === "work" ? new WorkTask(0, title) : new PersonalTask(0, title);
  manager.addTask(task);
  res.redirect("/");
};

export const toggleTask = (req: Request, res: Response) => {
  manager.toggleTask(Number(req.params.id));
  res.redirect("/");
};

export const deleteTask = (req: Request, res: Response) => {
  manager.deleteTask(Number(req.params.id));
  res.redirect("/");
};
