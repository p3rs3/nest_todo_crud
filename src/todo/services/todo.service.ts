import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ToDo } from '../schemas/todo.schema';
import { ToDoEntity } from '../entities/todo.entity';
import { CreateToDoDto } from '../dto/create-todo.dto';
import { UpdateToDoDto } from '../dto/update-todo.dto';

@Injectable()
export class ToDoService {
    constructor(@InjectModel(ToDo.name) private todoModel) {}
    private todos: ToDoEntity[] = [];

    async getTodoList(): Promise<ToDo[]> {
        return this.todoModel.find().exec();
    }

    async getTodo(id: string): Promise<ToDo> {
        return this.todoModel.findById(id);
    }

    async setTodo(dto: CreateToDoDto): Promise<ToDo> {
        const newTodo = new this.todoModel(dto);

        return newTodo.save();
    }

    async updateTodo(id: string, dto: UpdateToDoDto): Promise<ToDo> {
        return this.todoModel.findByIdAndUpdate(id, dto, {new: true});
    }

    async deleteTodo(id: string): Promise<ToDo> {
      return this.todoModel.findByIdAndRemove(id);
    }
}