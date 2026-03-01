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
exports.ClientesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ClientesService = class ClientesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createClienteDto) {
        const cliente = await this.prisma.cliente.findUnique({
            where: { cnpj: createClienteDto.cnpj },
        });
        if (cliente) {
            throw new common_1.BadRequestException('Cliente já existe');
        }
        return this.prisma.cliente.create({
            data: createClienteDto,
        });
    }
    async findOne(cnpj) {
        const cliente = await this.prisma.cliente.findUnique({
            where: { cnpj },
            include: {
                faturas: {
                    select: {
                        id: true,
                        numeroFatura: true,
                        dataEmissao: true,
                        valorLocacao: true,
                        status: true,
                        createdAt: true,
                    },
                    orderBy: {
                        createdAt: 'desc',
                    }
                }
            }
        });
        if (!cliente) {
            throw new common_1.NotFoundException('Cliente não encontrado');
        }
        return cliente;
    }
    async findAll(query) {
        const where = {};
        if (query) {
            where.OR = [
                { cnpj: { contains: query, mode: 'insensitive' } },
                { razaoSocial: { contains: query, mode: 'insensitive' } },
                { endereco: { contains: query, mode: 'insensitive' } },
            ];
        }
        return this.prisma.cliente.findMany({
            where,
            include: {
                _count: {
                    select: {
                        faturas: true,
                    }
                }
            },
            orderBy: {
                createdAt: 'desc',
            }
        });
    }
    async update(cnpj, updateClienteDto) {
        const cliente = await this.prisma.cliente.findUnique({
            where: { cnpj },
        });
        if (!cliente) {
            throw new common_1.NotFoundException('Cliente não encontrado');
        }
        return this.prisma.cliente.update({
            where: { cnpj },
            data: updateClienteDto,
        });
    }
    async delete(cnpj) {
        const cliente = await this.prisma.cliente.findUnique({
            where: { cnpj },
            include: {
                _count: {
                    select: {
                        faturas: true,
                    }
                }
            }
        });
        if (!cliente) {
            throw new common_1.NotFoundException('Cliente não encontrado');
        }
        if (cliente._count.faturas > 0) {
            throw new common_1.BadRequestException('Não é possível deletar um cliente que possui faturas associadas');
        }
        return this.prisma.cliente.delete({
            where: { cnpj },
        });
    }
};
exports.ClientesService = ClientesService;
exports.ClientesService = ClientesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientesService);
//# sourceMappingURL=clientes.service.js.map