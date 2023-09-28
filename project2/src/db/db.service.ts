import { Injectable } from '@nestjs/common';
import { Task } from '../tasks/entities/task.entity';
import { faker } from '@faker-js/faker';
import { CreateTaskDto } from '../tasks/dto/create-task.dto';
import { UpdateTaskDto } from '../tasks/dto/UpdateTaskDto';

@Injectable()
export class DbService {
  private tasks: Task[];

  constructor() {
    const tasks = [];

    for (let i = 0; i < 15; i++) {
      tasks.push({
        id: faker.string.uuid(),
        task: faker.git.commitMessage(),
        done: false,
      });
    }

    this.tasks = tasks;
  }

  storeTask(createTaskDto: CreateTaskDto) {
    const task = {
      id: faker.string.uuid(),
      task: createTaskDto.task,
      done: createTaskDto.done,
    };

    this.tasks.push(task);
  }

  getAllTasks() {
    return this.tasks;
  }

  getTaskById(taskId: string) {
    for (let i=0; i<this.tasks.length; i++) {
      const task = this.tasks[i];

      if (task.id === taskId) {
        return task;
      }
    }
  }

  updateTaskById(taskId: string, updateTaskDto: UpdateTaskDto) {
    const _tasks = [];

    for (let i=0; i<this.tasks.length; i++) {
      const task = this.tasks[i];

      if (task.id === taskId) {
        _tasks.push(updateTaskDto);
      } else {
        _tasks.push(task);
      }
    }

    this.tasks = _tasks;
  }

  removeTaskById(taskId: string) {
    const _tasks = [];

    for (let i=0; i<this.tasks.length; i++) {
      const task = this.tasks[i];

      if (task.id !== taskId) {
        _tasks.push(task);
      }
    }

    this.tasks = _tasks;
  }
}
