// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// @Schema()
// export class Macs extends Document {
//   @Prop()
//   name: string;
//   @Prop()
//   new: string;
//   @Prop()
//   price: string;
//   @Prop()
//   image: string;
// }

// export const MacsSchema = SchemaFactory.createForClass(Macs)

import { Document, Schema } from 'mongoose';

export interface apple extends Document {
  name: string;
}

export const MacsSchema = new Schema({
  name: { type: String, required: true },
});