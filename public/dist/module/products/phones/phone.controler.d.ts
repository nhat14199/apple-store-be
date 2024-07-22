import { Phones } from 'src/schemas/phonesShcemas/phones';
import { PhonesService } from './phone.service';
export declare class PhoneController {
    private readonly phoneService;
    constructor(phoneService: PhonesService);
    getAllPhone(): Promise<Phones[]>;
    getIphoneDetail(id: string): Promise<Phones>;
}
