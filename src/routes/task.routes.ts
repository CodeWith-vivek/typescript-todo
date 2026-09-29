import express from "express";
import {
  addTask,
  deleteTask,
  listTasks,
  toggleTask,
} from "../controllers/task.controller";

const router = express.Router();

router.get("/", listTasks);
router.post("/add", addTask);
router.post("/toggle/:id", toggleTask);
router.post("/delete/:id", deleteTask);

export default router;
