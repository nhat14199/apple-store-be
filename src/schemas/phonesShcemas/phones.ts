// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// @Schema()
// export class Phones extends Document {
//   @Prop()
//   name: string;
//   @Prop()
//   new: string;
//   @Prop()
//   price: string;
//   @Prop()
//   image: string;
//   @Prop()
//   brand1: [];
//   @Prop()
//   storage: [];
// }

// export const PhonesSchema = SchemaFactory.createForClass(Phones);


import { Document, Schema } from 'mongoose';

export interface apple extends Document {
  name: string;
}

export const PhonesSchema = new Schema({
  name: { type: String, required: true },
});