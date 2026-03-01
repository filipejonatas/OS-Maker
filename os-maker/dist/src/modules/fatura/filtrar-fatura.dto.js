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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiltrarFaturaDto = void 0;
const class_validator_1 = require("class-validator");
const client_1 = require("../../../generated/prisma/client");
class FiltrarFaturaDto {
    id;
    clienteId;
    status;
    createdAt;
    to;
    query;
}
exports.FiltrarFaturaDto = FiltrarFaturaDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)('4', { message: 'ID da fatura é obrigatório' }),
    __metadata("design:type", String)
], FiltrarFaturaDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)('4', { message: 'ID do cliente é obrigatório' }),
    __metadata("design:type", String)
], FiltrarFaturaDto.prototype, "clienteId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.FaturaStatus, { message: 'Status da fatura é obrigatório' }),
    __metadata("design:type", String)
], FiltrarFaturaDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)({}, { message: 'Data de criação da fatura é obrigatória' }),
    __metadata("design:type", Date)
], FiltrarFaturaDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)({}, { message: 'Data final inválida' }),
    __metadata("design:type", Date)
], FiltrarFaturaDto.prototype, "to", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FiltrarFaturaDto.prototype, "query", void 0);
//# sourceMappingURL=filtrar-fatura.dto.js.map