

import { ITask } from "./task.interface";

export interface ITaskManager {
  addTask(task: ITask): void;
  getAllTasks(): ITask[];
  completeTask(id: number): void;
}
