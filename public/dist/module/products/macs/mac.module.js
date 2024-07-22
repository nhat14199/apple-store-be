"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MacsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const macs_1 = require("../../../schemas/macsSchemas/macs");
const mac_controler_1 = require("./mac.controler");
const mac_service_1 = require("./mac.service");
let MacsModule = class MacsModule {
};
exports.MacsModule = MacsModule;
exports.MacsModule = MacsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: macs_1.Macs.name, schema: macs_1.MacsSchema }]),
        ],
        controllers: [mac_controler_1.MacsController],
        providers: [mac_service_1.MacsService],
    })
], MacsModule);
//# sourceMappingURL=mac.module.js.map