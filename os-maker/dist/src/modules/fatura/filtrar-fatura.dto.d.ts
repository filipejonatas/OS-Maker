import { FaturaStatus } from "../../../generated/prisma/client";
export declare class FiltrarFaturaDto {
    id?: string;
    clienteId?: string;
    status?: FaturaStatus;
    createdAt?: Date;
    to?: Date;
    query?: string;
}
