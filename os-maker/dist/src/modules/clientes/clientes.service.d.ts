import { PrismaService } from "../../prisma/prisma.service";
import { CreateClienteDto } from "./clientes.dto";
import { UpdateClienteDto } from "./atualizar-cliente.dto";
export declare class ClientesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createClienteDto: CreateClienteDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        cnpj: string;
        razaoSocial: string;
        endereco: string;
    }>;
    findOne(cnpj: string): Promise<{
        faturas: {
            id: string;
            createdAt: Date;
            status: import("../../../generated/prisma/enums").FaturaStatus;
            numeroFatura: string;
            dataEmissao: Date;
            valorLocacao: import("@prisma/client-runtime-utils").Decimal;
        }[];
    } & {
        createdAt: Date;
        updatedAt: Date;
        cnpj: string;
        razaoSocial: string;
        endereco: string;
    }>;
    findAll(query?: string): Promise<({
        _count: {
            faturas: number;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        cnpj: string;
        razaoSocial: string;
        endereco: string;
    })[]>;
    update(cnpj: string, updateClienteDto: UpdateClienteDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        cnpj: string;
        razaoSocial: string;
        endereco: string;
    }>;
    delete(cnpj: string): Promise<{
        createdAt: Date;
        updatedAt: Date;
        cnpj: string;
        razaoSocial: string;
        endereco: string;
    }>;
}
