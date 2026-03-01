export declare const FaturaStatus: {
    readonly ABERTA: "ABERTA";
    readonly PAGA: "PAGA";
    readonly CANCELADA: "CANCELADA";
};
export type FaturaStatus = (typeof FaturaStatus)[keyof typeof FaturaStatus];
