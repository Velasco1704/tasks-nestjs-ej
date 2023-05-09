import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Tasks, TasksDocuments } from './schema/tasks.schema';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Tasks.name) private tasksModel: Model<TasksDocuments>,
  ) {}
  async create(createTaskDto: CreateTaskDto) {
    return this.tasksModel.create(createTaskDto);
  }

  async findAll() {
    return this.tasksModel.find({});
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const taskUpdated = await this.tasksModel.findByIdAndUpdate(
      { _id: id },
      updateTaskDto,
    );
    return this.tasksModel.findById({ _id: taskUpdated.id });
  }

  async remove(id: string) {
    return this.tasksModel.findByIdAndDelete({ _id: id });
  }
}
