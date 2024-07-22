import { Document } from 'mongoose';
export declare class Phones extends Document {
    name: string;
    new: string;
    price: string;
    image: string;
    brand1: [];
    storage: [];
}
export declare const PhonesSchema: import("mongoose").Schema<Phones, import("mongoose").Model<Phones, any, any, any, Document<unknown, any, Phones> & Phones & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Phones, Document<unknown, {}, import("mongoose").FlatRecord<Phones>> & import("mongoose").FlatRecord<Phones> & Required<{
    _id: unknown;
}>>;
