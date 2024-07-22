import { MacsService } from './mac.service';
import { Macs } from 'src/schemas/macsSchemas/macs';
export declare class MacsController {
    private readonly macService;
    constructor(macService: MacsService);
    getAllMacs(): Promise<Macs[]>;
    getMacDetail(id: string): Promise<Macs>;
}
