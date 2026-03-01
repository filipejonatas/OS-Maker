import { IsNotEmpty, IsString, IsOptional } from "class-validator";

export class UpdateClienteDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Razão social é obrigatória' })
    razaoSocial?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Endereço é obrigatório' })
    endereco?: string;
}