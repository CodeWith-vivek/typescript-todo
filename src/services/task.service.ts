

import { Task } from "../models/task.model";
import { ITaskManager } from "../interfaces/task-manager.interface";
import { ITask } from "../interfaces/task.interface";

export class TaskManager implements ITaskManager {
  getAllTasks(): ITask[] {
    throw new Error("Method not implemented.");
  }
  completeTask(id: number): void {
    throw new Error("Method not implemented.");
  }
  private tasks: Task[] = [];
  private nextId: number = 1;

  addTask(task: Task): void {
    task.id = this.nextId++;
    this.tasks.push(task);
  }

  getAll(): Task[] {
    return this.tasks;
  }

  toggleTask(id: number): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task) task.toggle();
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}
