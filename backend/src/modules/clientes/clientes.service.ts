import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateClienteDto } from "./clientes.dto";
import { UpdateClienteDto } from "./atualizar-cliente.dto";
import { Prisma } from "../../../generated/prisma/client";

@Injectable()
export class ClientesService {
    constructor(private readonly prisma: PrismaService) { }

    async create(createClienteDto: CreateClienteDto) {
        const cliente = await this.prisma.cliente.findUnique({
            where: { cnpj: createClienteDto.cnpj },
        });
        if (cliente) {
            throw new BadRequestException('Cliente já existe');
        }
        return this.prisma.cliente.create({
            data: createClienteDto,
        });
    }

    async findOne(cnpj: string) {
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
            throw new NotFoundException('Cliente não encontrado');
        }
        return cliente;
    }

    async findAll(query?: string) {
        const where: Prisma.ClienteWhereInput = {};

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

    async update(cnpj: string, updateClienteDto: UpdateClienteDto) {
        const cliente = await this.prisma.cliente.findUnique({
            where: { cnpj },
        });
        if (!cliente) {
            throw new NotFoundException('Cliente não encontrado');
        }
        return this.prisma.cliente.update({
            where: { cnpj },
            data: updateClienteDto,
        });
    }

    async delete(cnpj: string) {
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
            throw new NotFoundException('Cliente não encontrado');
        }

        // Validação: não pode deletar cliente que possui faturas
        if (cliente._count.faturas > 0) {
            throw new BadRequestException('Não é possível deletar um cliente que possui faturas associadas');
        }

        return this.prisma.cliente.delete({
            where: { cnpj },
        });
    }
}