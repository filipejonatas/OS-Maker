import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Prisma } from "../../generated/prisma/client.js";

@Injectable()
export class FaturasService {
    constructor(private readonly prisma: PrismaService) {}

    async findAll() {
        // Sem await está OK aqui (só retorna a lista)
        return this.prisma.fatura.findMany({
            include: { cliente: true }, // Inclui dados do cliente
            orderBy: { dataEmissao: 'desc' } // Ordena por data
        });
    }

    async findOne(id: string) {
        // ✅ Com await para validar se existe
        const fatura = await this.prisma.fatura.findUnique({
            where: { id },
            include: { cliente: true }
        });

        if (!fatura) {
            throw new NotFoundException(`Fatura com ID ${id} não encontrada`);
        }

        return fatura;
    }

    async create(data: Prisma.FaturaCreateInput) {
        // ✅ Com await se você quiser logar ou fazer algo depois
        const fatura = await this.prisma.fatura.create({ 
            data,
            include: { cliente: true }
        });

        console.log(`✅ Fatura ${fatura.numeroFatura} criada com sucesso!`);

        return fatura;
    }

    async update(id: string, data: Prisma.FaturaUpdateInput) {
        // ✅ Com await para verificar se existe antes
        await this.findOne(id); // Lança erro se não existir

        return this.prisma.fatura.update({ 
            where: { id }, 
            data,
            include: { cliente: true }
        });
    }

    async delete(id: string) {
        // ✅ Com await para verificar se existe antes
        await this.findOne(id); // Lança erro se não existir

        return this.prisma.fatura.delete({ where: { id } });
    }
}