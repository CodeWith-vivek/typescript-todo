

import { ITask } from "./ITask";

export interface ITaskManager {
  addTask(task: ITask): void;
  getAllTasks(): ITask[];
  completeTask(id: number): void;
}
