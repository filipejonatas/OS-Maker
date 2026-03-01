import { IsOptional, IsString, IsDateString, IsEnum, IsUUID } from "class-validator";
import { FaturaStatus } from "../../../generated/prisma/client";

export class FiltrarFaturaDto {
    @IsOptional()
    @IsUUID('4', { message: 'ID da fatura é obrigatório' })
    id?: string;

    @IsOptional()
    @IsUUID('4', { message: 'ID do cliente é obrigatório' })
    clienteId?: string;

    @IsOptional()
    @IsEnum(FaturaStatus, { message: 'Status da fatura é obrigatório' })
    status?: FaturaStatus;

    @IsOptional()
    @IsDateString({}, { message: 'Data de criação da fatura é obrigatória' })
    createdAt?: Date;

    @IsOptional()
    @IsDateString({}, { message: 'Data final inválida' })
    to?: Date;

    @IsOptional()
    @IsString()
    query?: string;
}