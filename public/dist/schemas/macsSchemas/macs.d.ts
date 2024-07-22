import { Document } from 'mongoose';
export declare class Macs extends Document {
    name: string;
    new: string;
    price: string;
    image: string;
}
export declare const MacsSchema: import("mongoose").Schema<Macs, import("mongoose").Model<Macs, any, any, any, Document<unknown, any, Macs> & Macs & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Macs, Document<unknown, {}, import("mongoose").FlatRecord<Macs>> & import("mongoose").FlatRecord<Macs> & Required<{
    _id: unknown;
}>>;
