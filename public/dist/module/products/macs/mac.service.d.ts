import { Model } from 'mongoose';
import { Macs } from 'src/schemas/macsSchemas/macs';
export declare class MacsService {
    private readonly macModel;
    constructor(macModel: Model<Macs>);
    getAllMac(): Promise<Macs[]>;
    getMacdetail(_id: string): Promise<Macs>;
}
