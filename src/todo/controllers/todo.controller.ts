import { Body, Controller, Delete, Get, Patch, Post, Param, Header } from '@nestjs/common';
import { CreateToDoDto } from '../dto/create-todo.dto';
import { UpdateToDoDto } from '../dto/update-todo.dto';
import { ToDo } from '../schemas/todo.schema';
import { ToDoService } from '../services/todo.service';

@Controller('/todos')
export class ToDoController {
  constructor(private readonly ToDoService: ToDoService) {}

  @Get()
  async getTodoList(): Promise<ToDo[]> {
    return this.ToDoService.getTodoList();
  }

  @Get(':id')
  async getTodo(@Param('id') id: string): Promise<ToDo> {
    return this.ToDoService.getTodo(id);
  }

  @Post()
  async setTodo(@Body() dto: CreateToDoDto): Promise<ToDo> {
    return this.ToDoService.setTodo(dto);
  }

  @Patch('/update/:id')
  async updateTodo(@Param('id') id: string, @Body() dto: UpdateToDoDto): Promise<ToDo> {

    return this.ToDoService.updateTodo(id, dto);
  }

  @Delete('/delete/:id')
  async deleteTodo(@Param('id') id: string): Promise<ToDo> {
    return this.ToDoService.deleteTodo(id);
  }
}