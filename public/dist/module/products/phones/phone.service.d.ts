import { Model } from 'mongoose';
import { Phones } from 'src/schemas/phonesShcemas/phones';
export declare class PhonesService {
    private readonly phonesModel;
    constructor(phonesModel: Model<Phones>);
    getAllPhones(): Promise<Phones[]>;
    getIphoneDetail(id: string): Promise<Phones>;
}
