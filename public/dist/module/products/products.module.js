"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const common_1 = require("@nestjs/common");
const phone_module_1 = require("./phones/phone.module");
const product_controller_1 = require("./product.controller");
const mac_module_1 = require("./macs/mac.module");
const ipad_module_1 = require("./ipads/ipad.module");
let ProductsModule = class ProductsModule {
};
exports.ProductsModule = ProductsModule;
exports.ProductsModule = ProductsModule = __decorate([
    (0, common_1.Module)({
        imports: [phone_module_1.PhoneModule, ipad_module_1.IpadModule, mac_module_1.MacsModule],
        controllers: [product_controller_1.ProductsController]
    })
], ProductsModule);
//# sourceMappingURL=products.module.js.map