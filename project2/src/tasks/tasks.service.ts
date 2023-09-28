import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { DbService } from "../db/db.service";
import {UpdateTaskDto} from "./dto/UpdateTaskDto";

@Injectable()
export class TasksService {
  constructor(private readonly _dbService: DbService) {}

  create(createTaskDto: CreateTaskDto) {
    this._dbService.storeTask(createTaskDto);
  }

  findAll() {
    return this._dbService.getAllTasks();
  }

  findOne(id: string) {
    return this._dbService.getTaskById(id);
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    this._dbService.updateTaskById(id, updateTaskDto);
  }

  remove(id: string) {
    this._dbService.removeTaskById(id)
  }
}
