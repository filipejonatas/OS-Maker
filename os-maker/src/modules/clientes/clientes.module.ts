import { Module } from "@nestjs/common";
import { ClientesController } from "./clientes.controller";
import { ClientesService } from "./clientes.service";
import { PrismaService } from "../../prisma/prisma.service";
import { PrismaModule } from "../../prisma/prisma.module";

@Module({
    controllers: [ClientesController],
    providers: [ClientesService, PrismaService],
    imports: [PrismaModule],
})
export class ClientesModule {}