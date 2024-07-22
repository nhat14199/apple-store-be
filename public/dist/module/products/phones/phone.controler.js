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
exports.PhoneController = void 0;
const phone_service_1 = require("./phone.service");
const common_1 = require("@nestjs/common");
let PhoneController = class PhoneController {
    constructor(phoneService) {
        this.phoneService = phoneService;
    }
    async getAllPhone() {
        try {
            const phones = await this.phoneService.getAllPhones();
            return phones;
        }
        catch (error) {
            return error;
        }
    }
    async getIphoneDetail(id) {
        try {
            const resp = await this.phoneService.getIphoneDetail(id);
            return resp;
        }
        catch (error) {
            return error;
        }
    }
};
exports.PhoneController = PhoneController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PhoneController.prototype, "getAllPhone", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PhoneController.prototype, "getIphoneDetail", null);
exports.PhoneController = PhoneController = __decorate([
    (0, common_1.Controller)('products/phones'),
    __metadata("design:paramtypes", [phone_service_1.PhonesService])
], PhoneController);
//# sourceMappingURL=phone.controler.js.map