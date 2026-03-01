import { IsEnum } from "class-validator";
import { FaturaStatus } from "../../../generated/prisma/client";

export class UpdateStatusDto {
    @IsEnum(FaturaStatus, { message: 'Status deve ser ABERTA, PAGA ou CANCELADA' })
    status: FaturaStatus;
}
