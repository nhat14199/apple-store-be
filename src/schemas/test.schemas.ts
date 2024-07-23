import { Document, Schema } from 'mongoose';

export interface Test extends Document {
  name: string;
}

export const TestSchema = new Schema({
  name: { type: String, required: true },
});