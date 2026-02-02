import { PrismaService } from "../prisma/prisma.service";
export declare class FaturasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    '': any;
    findAll(): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: string;
        numeroFatura: string;
        dataEmissao: Date;
        clienteCnpj: string;
        descricaoPagamento: string;
        descricaoLocacao: string;
        valorLocacao: import("@prisma/client-runtime-utils").Decimal;
    }[]>;
}
