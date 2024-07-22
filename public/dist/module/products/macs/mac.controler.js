"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MacsController = void 0;
const common_1 = require("@nestjs/common");
const mac_service_1 = require("./mac.service");
let MacsController = class MacsController {
    constructor(macService) {
        this.macService = macService;
    }
    async getAllMacs() {
        try {
            const macs = await this.macService.getAllMac();
            return macs;
        }
        catch (error) {
            return error;
        }
    }
    async getMacDetail(id) {
        try {
            const resp = await this.macService.getMacdetail(id);
            return resp;
        }
        catch (error) {
            console.log('error', error);
            return error;
        }
    }
};
exports.MacsController = MacsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MacsController.prototype, "getAllMacs", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MacsController.prototype, "getMacDetail", null);
exports.MacsController = MacsController = __decorate([
    (0, common_1.Controller)('products/macs'),
    __metadata("design:paramtypes", [mac_service_1.MacsService])
], MacsController);
//# sourceMappingURL=mac.controler.js.map