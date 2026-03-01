import { FaturasService } from "./faturas.service";
import { CreateFaturaDto } from "./criar-fatura.dto";
import { FiltrarFaturaDto } from "./filtrar-fatura.dto";
import { UpdateFaturaDto } from "./atualizar-fatura.dto";
import { UpdateStatusDto } from "./atualizar-status.dto";
export declare class FaturaController {
    private readonly faturasService;
    constructor(faturasService: FaturasService);
    create(createFaturaDto: CreateFaturaDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clienteCnpj: string;
        descricaoPagamento: string;
        descricaoLocacao: string;
        status: import("../../../generated/prisma/enums").FaturaStatus;
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
        status: import("../../../generated/prisma/enums").FaturaStatus;
        numeroFatura: string;
        dataEmissao: Date;
        valorLocacao: import("@prisma/client-runtime-utils").Decimal;
    })[]>;
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
        status: import("../../../generated/prisma/enums").FaturaStatus;
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
        status: import("../../../generated/prisma/enums").FaturaStatus;
        numeroFatura: string;
        dataEmissao: Date;
        valorLocacao: import("@prisma/client-runtime-utils").Decimal;
    }>;
    updateStatus(id: string, updateStatusDto: UpdateStatusDto): Promise<{
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
        status: import("../../../generated/prisma/enums").FaturaStatus;
        numeroFatura: string;
        dataEmissao: Date;
        valorLocacao: import("@prisma/client-runtime-utils").Decimal;
    }>;
}
