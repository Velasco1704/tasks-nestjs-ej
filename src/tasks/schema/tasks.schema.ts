/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TasksDocuments = Tasks & Document;

@Schema()
export class Tasks {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const TasksSchema = SchemaFactory.createForClass(Tasks);
