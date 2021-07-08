import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDoModule } from './todo/todo.module';

@Module({
  imports: [ToDoModule, MongooseModule.forRoot(`mongodb+srv://todo:ihaBuiEeKkY4TjHD@cluster0.qovit.mongodb.net/todo?retryWrites=true&w=majority`)],
  controllers: [],
  providers: [],
})
export class AppModule {}