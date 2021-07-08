import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class ToDo {
    @Prop()
    text: string
    
    @Prop()
    completed: boolean
}

export const ToDoSchema = SchemaFactory.createForClass(ToDo);