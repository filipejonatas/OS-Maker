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
exports.UpdateFaturaDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class UpdateFaturaDto {
    numero;
    clienteCnpj;
    valor;
    data;
    descricaoPagamento;
    descricaoLocacao;
}
exports.UpdateFaturaDto = UpdateFaturaDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Nº da fatura é obrigatório' }),
    __metadata("design:type", String)
], UpdateFaturaDto.prototype, "numero", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'CNPJ do cliente é obrigatório' }),
    (0, class_validator_1.Matches)(/^\d{14}$|^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, {
        message: 'CNPJ deve estar no formato válido (14 dígitos ou XX.XXX.XXX/XXXX-XX)'
    }),
    __metadata("design:type", String)
], UpdateFaturaDto.prototype, "clienteCnpj", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Valor da fatura é obrigatório' }),
    (0, class_validator_1.IsPositive)({ message: 'Valor da fatura deve ser maior que 0' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], UpdateFaturaDto.prototype, "valor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)({}, { message: 'Data da fatura é obrigatória' }),
    __metadata("design:type", Date)
], UpdateFaturaDto.prototype, "data", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Descrição do pagamento é obrigatória' }),
    __metadata("design:type", String)
], UpdateFaturaDto.prototype, "descricaoPagamento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Descrição da locação é obrigatória' }),
    __metadata("design:type", String)
], UpdateFaturaDto.prototype, "descricaoLocacao", void 0);
//# sourceMappingURL=atualizar-fatura.dto.js.map