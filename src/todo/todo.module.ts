import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDoController } from './controllers/todo.controller'; 
import { ToDo, ToDoSchema } from './schemas/todo.schema';
import { ToDoService } from './services/todo.service'; 

@Module({
    imports: [MongooseModule.forFeature([
    {
        name: ToDo.name,    
        schema: ToDoSchema,
    }
    ])],
    controllers: [ToDoController],
    providers: [ToDoService],
})

export class ToDoModule {}