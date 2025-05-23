
import { ITask } from "../interfaces/ITask";

export abstract class Task implements ITask {
  constructor(
    public id: number,
    public title: string,
    public completed: boolean = false
  ) {}
  isCompleted: boolean = false;

  abstract getType(): string;

  toggle(): void {
    this.completed = !this.completed;
  }
}

export class PersonalTask extends Task {
  getType(): string {
    return "Personal";
  }
}

export class WorkTask extends Task {
  getType(): string {
    return "Work";
  }
}
