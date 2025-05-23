

import express from "express";
import { PersonalTask, WorkTask } from "../models/Task";
import { TaskManager } from "../models/TaskManger";

const router = express.Router();
const manager = new TaskManager();

router.get("/", (req, res) => {
  res.render("index", { tasks: manager.getAll() });
});

router.post("/add", (req, res) => {
  const { title, type } = req.body;
  const task =
    type === "work" ? new WorkTask(0, title) : new PersonalTask(0, title);
  manager.addTask(task);
  res.redirect("/");
});

router.post("/toggle/:id", (req, res) => {
  manager.toggleTask(Number(req.params.id));
  res.redirect("/");
});

router.post("/delete/:id", (req, res) => {
  manager.deleteTask(Number(req.params.id));
  res.redirect("/");
});

export default router;
