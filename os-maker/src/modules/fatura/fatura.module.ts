import { Module } from "@nestjs/common";
import { FaturaController } from "./fatura.controller";
import { FaturasService } from "./faturas.service";
import { PrismaService } from "../../prisma/prisma.service";
import { PrismaModule } from "../../prisma/prisma.module";

@Module({
    controllers: [FaturaController],
    providers: [FaturasService, PrismaService],
    imports: [PrismaModule],
})
export class FaturaModule {}
