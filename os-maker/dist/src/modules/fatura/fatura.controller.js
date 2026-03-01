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
exports.FaturaController = void 0;
const common_1 = require("@nestjs/common");
const faturas_service_1 = require("./faturas.service");
const criar_fatura_dto_1 = require("./criar-fatura.dto");
const filtrar_fatura_dto_1 = require("./filtrar-fatura.dto");
const atualizar_fatura_dto_1 = require("./atualizar-fatura.dto");
const atualizar_status_dto_1 = require("./atualizar-status.dto");
let FaturaController = class FaturaController {
    faturasService;
    constructor(faturasService) {
        this.faturasService = faturasService;
    }
    async create(createFaturaDto) {
        return this.faturasService.criarFatura(createFaturaDto);
    }
    async findAll(filterDto) {
        return this.faturasService.findAll(filterDto);
    }
    async findOne(id) {
        return this.faturasService.findOne(id);
    }
    async update(id, updateFaturaDto) {
        return this.faturasService.update(id, updateFaturaDto);
    }
    async updateStatus(id, updateStatusDto) {
        return this.faturasService.updateStatus(id, updateStatusDto.status);
    }
};
exports.FaturaController = FaturaController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_fatura_dto_1.CreateFaturaDto]),
    __metadata("design:returntype", Promise)
], FaturaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filtrar_fatura_dto_1.FiltrarFaturaDto]),
    __metadata("design:returntype", Promise)
], FaturaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FaturaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, atualizar_fatura_dto_1.UpdateFaturaDto]),
    __metadata("design:returntype", Promise)
], FaturaController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, atualizar_status_dto_1.UpdateStatusDto]),
    __metadata("design:returntype", Promise)
], FaturaController.prototype, "updateStatus", null);
exports.FaturaController = FaturaController = __decorate([
    (0, common_1.Controller)('faturas'),
    __metadata("design:paramtypes", [faturas_service_1.FaturasService])
], FaturaController);
//# sourceMappingURL=fatura.controller.js.map