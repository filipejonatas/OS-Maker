import { IsOptional, IsString, IsNotEmpty, IsNumber, IsPositive, IsDateString, Matches } from "class-validator";
import { Type } from "class-transformer";

export class UpdateFaturaDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Nº da fatura é obrigatório' })
    numero?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'CNPJ do cliente é obrigatório' })
    @Matches(/^\d{14}$|^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, {
        message: 'CNPJ deve estar no formato válido (14 dígitos ou XX.XXX.XXX/XXXX-XX)'
    })
    clienteCnpj?: string;

    @IsOptional()
    @IsNumber({}, { message: 'Valor da fatura é obrigatório' })
    @IsPositive({ message: 'Valor da fatura deve ser maior que 0' })
    @Type(() => Number)
    valor?: number;

    @IsOptional()
    @IsDateString({}, { message: 'Data da fatura é obrigatória' })
    data?: Date;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Descrição do pagamento é obrigatória' })
    descricaoPagamento?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Descrição da locação é obrigatória' })
    descricaoLocacao?: string;
}
