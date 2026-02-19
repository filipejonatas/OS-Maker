import { IsEmail, IsString, MinLength } from "class-validator";

// validacao da senha e email
export class AuthDto {
    @IsEmail({}, { message: 'Email inválido' })
    email: string;

    @IsString()
    @MinLength(6, { message: 'Senha deve ter pelo menos 6 caracteres' })
    password: string;
}