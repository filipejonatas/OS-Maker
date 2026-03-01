import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateFaturaDto } from "./criar-fatura.dto";
import { FiltrarFaturaDto } from "./filtrar-fatura.dto";
import { UpdateFaturaDto } from "./atualizar-fatura.dto";
import { FaturaStatus } from "../../../generated/prisma/client.js";
import { Prisma } from "../../../generated/prisma/client.js";

@Injectable()
export class FaturasService {
    constructor(private readonly prisma: PrismaService) { }

    async criarFatura(createFaturaDto: CreateFaturaDto) {
        const cliente = await this.prisma.cliente.findUnique({
            where: { cnpj: createFaturaDto.clienteCnpj },
        });
        if (!cliente) {
            throw new NotFoundException('Cliente não encontrado');
        }
        
        return this.prisma.fatura.create({
            data: {
                numeroFatura: createFaturaDto.numero,
                clienteCnpj: createFaturaDto.clienteCnpj,
                valorLocacao: createFaturaDto.valor,
                dataEmissao: createFaturaDto.data,
                descricaoPagamento: createFaturaDto.descricaoPagamento,
                descricaoLocacao: createFaturaDto.descricaoLocacao,
                status: FaturaStatus.ABERTA,
            }
        });
    }

    async findOne(id: string) {
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
            throw new NotFoundException(`Fatura com ID ${id} não encontrada`);
        }

        return fatura;
    }

    async findAll(filterDto: FiltrarFaturaDto) {
        const where: Prisma.FaturaWhereInput = {};

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

    async updateStatus(id: string, status: FaturaStatus) {
        const fatura = await this.prisma.fatura.findUnique({
            where: { id },
        });

        if (!fatura) {
            throw new NotFoundException(`Fatura com ID ${id} não encontrada`);
        }

        // Validação: não pode cancelar uma fatura que já está paga
        if (status === FaturaStatus.CANCELADA && fatura.status === FaturaStatus.PAGA) {
            throw new BadRequestException('Não é possível cancelar uma fatura que já foi paga');
        }

        // Validação: não pode alterar status de uma fatura cancelada
        if (fatura.status === FaturaStatus.CANCELADA && status !== FaturaStatus.CANCELADA) {
            throw new BadRequestException('Não é possível alterar o status de uma fatura cancelada');
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

    async update(id: string, updateFaturaDto: UpdateFaturaDto) {
        const fatura = await this.prisma.fatura.findUnique({
            where: { id },
        });

        if (!fatura) {
            throw new NotFoundException(`Fatura com ID ${id} não encontrada`);
        }

        // Validação: não pode atualizar uma fatura cancelada
        if (fatura.status === FaturaStatus.CANCELADA) {
            throw new BadRequestException('Não é possível atualizar uma fatura cancelada');
        }

        // Validação: não pode atualizar uma fatura paga
        if (fatura.status === FaturaStatus.PAGA) {
            throw new BadRequestException('Não é possível atualizar uma fatura que já foi paga');
        }

        // Verificar se o cliente existe se clienteCnpj foi fornecido
        if (updateFaturaDto.clienteCnpj && updateFaturaDto.clienteCnpj !== fatura.clienteCnpj) {
            const cliente = await this.prisma.cliente.findUnique({
                where: { cnpj: updateFaturaDto.clienteCnpj },
            });
            if (!cliente) {
                throw new NotFoundException('Cliente não encontrado');
            }
        }

        const updateData: Prisma.FaturaUncheckedUpdateInput = {};

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
}