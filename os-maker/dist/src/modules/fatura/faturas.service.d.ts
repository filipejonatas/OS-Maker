import { PrismaService } from "../../prisma/prisma.service";
import { CreateFaturaDto } from "./criar-fatura.dto";
import { FiltrarFaturaDto } from "./filtrar-fatura.dto";
import { UpdateFaturaDto } from "./atualizar-fatura.dto";
import { FaturaStatus } from "../../../generated/prisma/client";
export declare class FaturasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    criarFatura(createFaturaDto: CreateFaturaDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clienteCnpj: string;
        descricaoPagamento: string;
        descricaoLocacao: string;
        status: FaturaStatus;
        numeroFatura: string;
        dataEmissao: Date;
        valorLocacao: import("@prisma/client-runtime-utils").Decimal;
    }>;
    findOne(id: string): Promise<{
        cliente: {
            cnpj: string;
            razaoSocial: string;
            endereco: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clienteCnpj: string;
        descricaoPagamento: string;
        descricaoLocacao: string;
        status: FaturaStatus;
        numeroFatura: string;
        dataEmissao: Date;
        valorLocacao: import("@prisma/client-runtime-utils").Decimal;
    }>;
    findAll(filterDto: FiltrarFaturaDto): Promise<({
        cliente: {
            cnpj: string;
            razaoSocial: string;
            endereco: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clienteCnpj: string;
        descricaoPagamento: string;
        descricaoLocacao: string;
        status: FaturaStatus;
        numeroFatura: string;
        dataEmissao: Date;
        valorLocacao: import("@prisma/client-runtime-utils").Decimal;
    })[]>;
    updateStatus(id: string, status: FaturaStatus): Promise<{
        cliente: {
            cnpj: string;
            razaoSocial: string;
            endereco: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clienteCnpj: string;
        descricaoPagamento: string;
        descricaoLocacao: string;
        status: FaturaStatus;
        numeroFatura: string;
        dataEmissao: Date;
        valorLocacao: import("@prisma/client-runtime-utils").Decimal;
    }>;
    update(id: string, updateFaturaDto: UpdateFaturaDto): Promise<{
        cliente: {
            cnpj: string;
            razaoSocial: string;
            endereco: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clienteCnpj: string;
        descricaoPagamento: string;
        descricaoLocacao: string;
        status: FaturaStatus;
        numeroFatura: string;
        dataEmissao: Date;
        valorLocacao: import("@prisma/client-runtime-utils").Decimal;
    }>;
}
