import { IsNotEmpty, IsString, Matches } from "class-validator";

export class CreateClienteDto {
    @IsString()
    @IsNotEmpty({ message: 'CNPJ é obrigatório' })
    @Matches(/^\d{14}$|^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, {
        message: 'CNPJ deve estar no formato válido (14 dígitos ou XX.XXX.XXX/XXXX-XX)'
    })
    cnpj: string;

    @IsString()
    @IsNotEmpty({ message: 'Razão social é obrigatória' })
    razaoSocial: string;

    @IsString()
    @IsNotEmpty({ message: 'Endereço é obrigatório' })
    endereco: string;
}


