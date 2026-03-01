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
exports.FaturasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const client_1 = require("../../../generated/prisma/client");
let FaturasService = class FaturasService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async criarFatura(createFaturaDto) {
        const cliente = await this.prisma.cliente.findUnique({
            where: { cnpj: createFaturaDto.clienteCnpj },
        });
        if (!cliente) {
            throw new common_1.NotFoundException('Cliente não encontrado');
        }
        return this.prisma.fatura.create({
            data: {
                numeroFatura: createFaturaDto.numero,
                clienteCnpj: createFaturaDto.clienteCnpj,
                valorLocacao: createFaturaDto.valor,
                dataEmissao: createFaturaDto.data,
                descricaoPagamento: createFaturaDto.descricaoPagamento,
                descricaoLocacao: createFaturaDto.descricaoLocacao,
                status: client_1.FaturaStatus.ABERTA,
            }
        });
    }
    async findOne(id) {
        const fatura = await this.prisma.fatura.findUnique({
            where: { id },
            include: {
                cliente: {
                    select: {
                        cnpj: true,
                        razaoSocial: true,
                        endereco: true,
                    }
                }
            }
        });
        if (!fatura) {
            throw new common_1.NotFoundException(`Fatura com ID ${id} não encontrada`);
        }
        return fatura;
    }
    async findAll(filterDto) {
        const where = {};
        if (filterDto.id) {
            where.id = filterDto.id;
        }
        if (filterDto.status) {
            where.status = filterDto.status;
        }
        if (filterDto.createdAt || filterDto.to) {
            where.createdAt = {};
            if (filterDto.createdAt) {
                where.createdAt.gte = new Date(filterDto.createdAt);
            }
            if (filterDto.to) {
                where.createdAt.lte = new Date(filterDto.to);
            }
        }
        if (filterDto.query) {
            where.OR = [
                { numeroFatura: { contains: filterDto.query, mode: 'insensitive' } },
                { descricaoPagamento: { contains: filterDto.query, mode: 'insensitive' } },
                { descricaoLocacao: { contains: filterDto.query, mode: 'insensitive' } },
                { cliente: { razaoSocial: { contains: filterDto.query, mode: 'insensitive' } } },
            ];
        }
        if (filterDto.clienteId) {
            where.clienteCnpj = filterDto.clienteId;
        }
        return this.prisma.fatura.findMany({
            where,
            include: {
                cliente: {
                    select: {
                        cnpj: true,
                        razaoSocial: true,
                        endereco: true,
                    }
                }
            },
            orderBy: {
                createdAt: 'desc',
            }
        });
    }
    async updateStatus(id, status) {
        const fatura = await this.prisma.fatura.findUnique({
            where: { id },
        });
        if (!fatura) {
            throw new common_1.NotFoundException(`Fatura com ID ${id} não encontrada`);
        }
        if (status === client_1.FaturaStatus.CANCELADA && fatura.status === client_1.FaturaStatus.PAGA) {
            throw new common_1.BadRequestException('Não é possível cancelar uma fatura que já foi paga');
        }
        if (fatura.status === client_1.FaturaStatus.CANCELADA && status !== client_1.FaturaStatus.CANCELADA) {
            throw new common_1.BadRequestException('Não é possível alterar o status de uma fatura cancelada');
        }
        return this.prisma.fatura.update({
            where: { id },
            data: { status },
            include: {
                cliente: {
                    select: {
                        cnpj: true,
                        razaoSocial: true,
                        endereco: true,
                    }
                }
            }
        });
    }
    async update(id, updateFaturaDto) {
        const fatura = await this.prisma.fatura.findUnique({
            where: { id },
        });
        if (!fatura) {
            throw new common_1.NotFoundException(`Fatura com ID ${id} não encontrada`);
        }
        if (fatura.status === client_1.FaturaStatus.CANCELADA) {
            throw new common_1.BadRequestException('Não é possível atualizar uma fatura cancelada');
        }
        if (fatura.status === client_1.FaturaStatus.PAGA) {
            throw new common_1.BadRequestException('Não é possível atualizar uma fatura que já foi paga');
        }
        if (updateFaturaDto.clienteCnpj && updateFaturaDto.clienteCnpj !== fatura.clienteCnpj) {
            const cliente = await this.prisma.cliente.findUnique({
                where: { cnpj: updateFaturaDto.clienteCnpj },
            });
            if (!cliente) {
                throw new common_1.NotFoundException('Cliente não encontrado');
            }
        }
        const updateData = {};
        if (updateFaturaDto.numero !== undefined) {
            updateData.numeroFatura = updateFaturaDto.numero;
        }
        if (updateFaturaDto.clienteCnpj !== undefined) {
            updateData.clienteCnpj = updateFaturaDto.clienteCnpj;
        }
        if (updateFaturaDto.valor !== undefined) {
            updateData.valorLocacao = updateFaturaDto.valor;
        }
        if (updateFaturaDto.data !== undefined) {
            updateData.dataEmissao = new Date(updateFaturaDto.data);
        }
        if (updateFaturaDto.descricaoPagamento !== undefined) {
            updateData.descricaoPagamento = updateFaturaDto.descricaoPagamento;
        }
        if (updateFaturaDto.descricaoLocacao !== undefined) {
            updateData.descricaoLocacao = updateFaturaDto.descricaoLocacao;
        }
        return this.prisma.fatura.update({
            where: { id },
            data: updateData,
            include: {
                cliente: {
                    select: {
                        cnpj: true,
                        razaoSocial: true,
                        endereco: true,
                    }
                }
            }
        });
    }
};
exports.FaturasService = FaturasService;
exports.FaturasService = FaturasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FaturasService);
//# sourceMappingURL=faturas.service.js.map