import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FaturaModel = runtime.Types.Result.DefaultSelection<Prisma.$FaturaPayload>;
export type AggregateFatura = {
    _count: FaturaCountAggregateOutputType | null;
    _avg: FaturaAvgAggregateOutputType | null;
    _sum: FaturaSumAggregateOutputType | null;
    _min: FaturaMinAggregateOutputType | null;
    _max: FaturaMaxAggregateOutputType | null;
};
export type FaturaAvgAggregateOutputType = {
    valorLocacao: runtime.Decimal | null;
};
export type FaturaSumAggregateOutputType = {
    valorLocacao: runtime.Decimal | null;
};
export type FaturaMinAggregateOutputType = {
    id: string | null;
    numeroFatura: string | null;
    dataEmissao: Date | null;
    clienteCnpj: string | null;
    descricaoPagamento: string | null;
    descricaoLocacao: string | null;
    valorLocacao: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FaturaMaxAggregateOutputType = {
    id: string | null;
    numeroFatura: string | null;
    dataEmissao: Date | null;
    clienteCnpj: string | null;
    descricaoPagamento: string | null;
    descricaoLocacao: string | null;
    valorLocacao: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FaturaCountAggregateOutputType = {
    id: number;
    numeroFatura: number;
    dataEmissao: number;
    clienteCnpj: number;
    descricaoPagamento: number;
    descricaoLocacao: number;
    valorLocacao: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FaturaAvgAggregateInputType = {
    valorLocacao?: true;
};
export type FaturaSumAggregateInputType = {
    valorLocacao?: true;
};
export type FaturaMinAggregateInputType = {
    id?: true;
    numeroFatura?: true;
    dataEmissao?: true;
    clienteCnpj?: true;
    descricaoPagamento?: true;
    descricaoLocacao?: true;
    valorLocacao?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FaturaMaxAggregateInputType = {
    id?: true;
    numeroFatura?: true;
    dataEmissao?: true;
    clienteCnpj?: true;
    descricaoPagamento?: true;
    descricaoLocacao?: true;
    valorLocacao?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FaturaCountAggregateInputType = {
    id?: true;
    numeroFatura?: true;
    dataEmissao?: true;
    clienteCnpj?: true;
    descricaoPagamento?: true;
    descricaoLocacao?: true;
    valorLocacao?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FaturaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FaturaWhereInput;
    orderBy?: Prisma.FaturaOrderByWithRelationInput | Prisma.FaturaOrderByWithRelationInput[];
    cursor?: Prisma.FaturaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FaturaCountAggregateInputType;
    _avg?: FaturaAvgAggregateInputType;
    _sum?: FaturaSumAggregateInputType;
    _min?: FaturaMinAggregateInputType;
    _max?: FaturaMaxAggregateInputType;
};
export type GetFaturaAggregateType<T extends FaturaAggregateArgs> = {
    [P in keyof T & keyof AggregateFatura]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFatura[P]> : Prisma.GetScalarType<T[P], AggregateFatura[P]>;
};
export type FaturaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FaturaWhereInput;
    orderBy?: Prisma.FaturaOrderByWithAggregationInput | Prisma.FaturaOrderByWithAggregationInput[];
    by: Prisma.FaturaScalarFieldEnum[] | Prisma.FaturaScalarFieldEnum;
    having?: Prisma.FaturaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FaturaCountAggregateInputType | true;
    _avg?: FaturaAvgAggregateInputType;
    _sum?: FaturaSumAggregateInputType;
    _min?: FaturaMinAggregateInputType;
    _max?: FaturaMaxAggregateInputType;
};
export type FaturaGroupByOutputType = {
    id: string;
    numeroFatura: string;
    dataEmissao: Date;
    clienteCnpj: string;
    descricaoPagamento: string;
    descricaoLocacao: string;
    valorLocacao: runtime.Decimal;
    createdAt: Date;
    updatedAt: Date;
    _count: FaturaCountAggregateOutputType | null;
    _avg: FaturaAvgAggregateOutputType | null;
    _sum: FaturaSumAggregateOutputType | null;
    _min: FaturaMinAggregateOutputType | null;
    _max: FaturaMaxAggregateOutputType | null;
};
type GetFaturaGroupByPayload<T extends FaturaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FaturaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FaturaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FaturaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FaturaGroupByOutputType[P]>;
}>>;
export type FaturaWhereInput = {
    AND?: Prisma.FaturaWhereInput | Prisma.FaturaWhereInput[];
    OR?: Prisma.FaturaWhereInput[];
    NOT?: Prisma.FaturaWhereInput | Prisma.FaturaWhereInput[];
    id?: Prisma.StringFilter<"Fatura"> | string;
    numeroFatura?: Prisma.StringFilter<"Fatura"> | string;
    dataEmissao?: Prisma.DateTimeFilter<"Fatura"> | Date | string;
    clienteCnpj?: Prisma.StringFilter<"Fatura"> | string;
    descricaoPagamento?: Prisma.StringFilter<"Fatura"> | string;
    descricaoLocacao?: Prisma.StringFilter<"Fatura"> | string;
    valorLocacao?: Prisma.DecimalFilter<"Fatura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"Fatura"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Fatura"> | Date | string;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.ClienteWhereInput>;
};
export type FaturaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    numeroFatura?: Prisma.SortOrder;
    dataEmissao?: Prisma.SortOrder;
    clienteCnpj?: Prisma.SortOrder;
    descricaoPagamento?: Prisma.SortOrder;
    descricaoLocacao?: Prisma.SortOrder;
    valorLocacao?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    cliente?: Prisma.ClienteOrderByWithRelationInput;
};
export type FaturaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    numeroFatura?: string;
    AND?: Prisma.FaturaWhereInput | Prisma.FaturaWhereInput[];
    OR?: Prisma.FaturaWhereInput[];
    NOT?: Prisma.FaturaWhereInput | Prisma.FaturaWhereInput[];
    dataEmissao?: Prisma.DateTimeFilter<"Fatura"> | Date | string;
    clienteCnpj?: Prisma.StringFilter<"Fatura"> | string;
    descricaoPagamento?: Prisma.StringFilter<"Fatura"> | string;
    descricaoLocacao?: Prisma.StringFilter<"Fatura"> | string;
    valorLocacao?: Prisma.DecimalFilter<"Fatura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"Fatura"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Fatura"> | Date | string;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.ClienteWhereInput>;
}, "id" | "numeroFatura">;
export type FaturaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    numeroFatura?: Prisma.SortOrder;
    dataEmissao?: Prisma.SortOrder;
    clienteCnpj?: Prisma.SortOrder;
    descricaoPagamento?: Prisma.SortOrder;
    descricaoLocacao?: Prisma.SortOrder;
    valorLocacao?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FaturaCountOrderByAggregateInput;
    _avg?: Prisma.FaturaAvgOrderByAggregateInput;
    _max?: Prisma.FaturaMaxOrderByAggregateInput;
    _min?: Prisma.FaturaMinOrderByAggregateInput;
    _sum?: Prisma.FaturaSumOrderByAggregateInput;
};
export type FaturaScalarWhereWithAggregatesInput = {
    AND?: Prisma.FaturaScalarWhereWithAggregatesInput | Prisma.FaturaScalarWhereWithAggregatesInput[];
    OR?: Prisma.FaturaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FaturaScalarWhereWithAggregatesInput | Prisma.FaturaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Fatura"> | string;
    numeroFatura?: Prisma.StringWithAggregatesFilter<"Fatura"> | string;
    dataEmissao?: Prisma.DateTimeWithAggregatesFilter<"Fatura"> | Date | string;
    clienteCnpj?: Prisma.StringWithAggregatesFilter<"Fatura"> | string;
    descricaoPagamento?: Prisma.StringWithAggregatesFilter<"Fatura"> | string;
    descricaoLocacao?: Prisma.StringWithAggregatesFilter<"Fatura"> | string;
    valorLocacao?: Prisma.DecimalWithAggregatesFilter<"Fatura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Fatura"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Fatura"> | Date | string;
};
export type FaturaCreateInput = {
    id?: string;
    numeroFatura: string;
    dataEmissao?: Date | string;
    descricaoPagamento: string;
    descricaoLocacao: string;
    valorLocacao: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cliente: Prisma.ClienteCreateNestedOneWithoutFaturasInput;
};
export type FaturaUncheckedCreateInput = {
    id?: string;
    numeroFatura: string;
    dataEmissao?: Date | string;
    clienteCnpj: string;
    descricaoPagamento: string;
    descricaoLocacao: string;
    valorLocacao: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FaturaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numeroFatura?: Prisma.StringFieldUpdateOperationsInput | string;
    dataEmissao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    descricaoPagamento?: Prisma.StringFieldUpdateOperationsInput | string;
    descricaoLocacao?: Prisma.StringFieldUpdateOperationsInput | string;
    valorLocacao?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutFaturasNestedInput;
};
export type FaturaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numeroFatura?: Prisma.StringFieldUpdateOperationsInput | string;
    dataEmissao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clienteCnpj?: Prisma.StringFieldUpdateOperationsInput | string;
    descricaoPagamento?: Prisma.StringFieldUpdateOperationsInput | string;
    descricaoLocacao?: Prisma.StringFieldUpdateOperationsInput | string;
    valorLocacao?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FaturaCreateManyInput = {
    id?: string;
    numeroFatura: string;
    dataEmissao?: Date | string;
    clienteCnpj: string;
    descricaoPagamento: string;
    descricaoLocacao: string;
    valorLocacao: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FaturaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numeroFatura?: Prisma.StringFieldUpdateOperationsInput | string;
    dataEmissao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    descricaoPagamento?: Prisma.StringFieldUpdateOperationsInput | string;
    descricaoLocacao?: Prisma.StringFieldUpdateOperationsInput | string;
    valorLocacao?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FaturaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numeroFatura?: Prisma.StringFieldUpdateOperationsInput | string;
    dataEmissao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clienteCnpj?: Prisma.StringFieldUpdateOperationsInput | string;
    descricaoPagamento?: Prisma.StringFieldUpdateOperationsInput | string;
    descricaoLocacao?: Prisma.StringFieldUpdateOperationsInput | string;
    valorLocacao?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FaturaListRelationFilter = {
    every?: Prisma.FaturaWhereInput;
    some?: Prisma.FaturaWhereInput;
    none?: Prisma.FaturaWhereInput;
};
export type FaturaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FaturaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numeroFatura?: Prisma.SortOrder;
    dataEmissao?: Prisma.SortOrder;
    clienteCnpj?: Prisma.SortOrder;
    descricaoPagamento?: Prisma.SortOrder;
    descricaoLocacao?: Prisma.SortOrder;
    valorLocacao?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FaturaAvgOrderByAggregateInput = {
    valorLocacao?: Prisma.SortOrder;
};
export type FaturaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numeroFatura?: Prisma.SortOrder;
    dataEmissao?: Prisma.SortOrder;
    clienteCnpj?: Prisma.SortOrder;
    descricaoPagamento?: Prisma.SortOrder;
    descricaoLocacao?: Prisma.SortOrder;
    valorLocacao?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FaturaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numeroFatura?: Prisma.SortOrder;
    dataEmissao?: Prisma.SortOrder;
    clienteCnpj?: Prisma.SortOrder;
    descricaoPagamento?: Prisma.SortOrder;
    descricaoLocacao?: Prisma.SortOrder;
    valorLocacao?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FaturaSumOrderByAggregateInput = {
    valorLocacao?: Prisma.SortOrder;
};
export type FaturaCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.FaturaCreateWithoutClienteInput, Prisma.FaturaUncheckedCreateWithoutClienteInput> | Prisma.FaturaCreateWithoutClienteInput[] | Prisma.FaturaUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.FaturaCreateOrConnectWithoutClienteInput | Prisma.FaturaCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.FaturaCreateManyClienteInputEnvelope;
    connect?: Prisma.FaturaWhereUniqueInput | Prisma.FaturaWhereUniqueInput[];
};
export type FaturaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.FaturaCreateWithoutClienteInput, Prisma.FaturaUncheckedCreateWithoutClienteInput> | Prisma.FaturaCreateWithoutClienteInput[] | Prisma.FaturaUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.FaturaCreateOrConnectWithoutClienteInput | Prisma.FaturaCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.FaturaCreateManyClienteInputEnvelope;
    connect?: Prisma.FaturaWhereUniqueInput | Prisma.FaturaWhereUniqueInput[];
};
export type FaturaUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.FaturaCreateWithoutClienteInput, Prisma.FaturaUncheckedCreateWithoutClienteInput> | Prisma.FaturaCreateWithoutClienteInput[] | Prisma.FaturaUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.FaturaCreateOrConnectWithoutClienteInput | Prisma.FaturaCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.FaturaUpsertWithWhereUniqueWithoutClienteInput | Prisma.FaturaUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.FaturaCreateManyClienteInputEnvelope;
    set?: Prisma.FaturaWhereUniqueInput | Prisma.FaturaWhereUniqueInput[];
    disconnect?: Prisma.FaturaWhereUniqueInput | Prisma.FaturaWhereUniqueInput[];
    delete?: Prisma.FaturaWhereUniqueInput | Prisma.FaturaWhereUniqueInput[];
    connect?: Prisma.FaturaWhereUniqueInput | Prisma.FaturaWhereUniqueInput[];
    update?: Prisma.FaturaUpdateWithWhereUniqueWithoutClienteInput | Prisma.FaturaUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.FaturaUpdateManyWithWhereWithoutClienteInput | Prisma.FaturaUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.FaturaScalarWhereInput | Prisma.FaturaScalarWhereInput[];
};
export type FaturaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.FaturaCreateWithoutClienteInput, Prisma.FaturaUncheckedCreateWithoutClienteInput> | Prisma.FaturaCreateWithoutClienteInput[] | Prisma.FaturaUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.FaturaCreateOrConnectWithoutClienteInput | Prisma.FaturaCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.FaturaUpsertWithWhereUniqueWithoutClienteInput | Prisma.FaturaUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.FaturaCreateManyClienteInputEnvelope;
    set?: Prisma.FaturaWhereUniqueInput | Prisma.FaturaWhereUniqueInput[];
    disconnect?: Prisma.FaturaWhereUniqueInput | Prisma.FaturaWhereUniqueInput[];
    delete?: Prisma.FaturaWhereUniqueInput | Prisma.FaturaWhereUniqueInput[];
    connect?: Prisma.FaturaWhereUniqueInput | Prisma.FaturaWhereUniqueInput[];
    update?: Prisma.FaturaUpdateWithWhereUniqueWithoutClienteInput | Prisma.FaturaUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.FaturaUpdateManyWithWhereWithoutClienteInput | Prisma.FaturaUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.FaturaScalarWhereInput | Prisma.FaturaScalarWhereInput[];
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type FaturaCreateWithoutClienteInput = {
    id?: string;
    numeroFatura: string;
    dataEmissao?: Date | string;
    descricaoPagamento: string;
    descricaoLocacao: string;
    valorLocacao: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FaturaUncheckedCreateWithoutClienteInput = {
    id?: string;
    numeroFatura: string;
    dataEmissao?: Date | string;
    descricaoPagamento: string;
    descricaoLocacao: string;
    valorLocacao: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FaturaCreateOrConnectWithoutClienteInput = {
    where: Prisma.FaturaWhereUniqueInput;
    create: Prisma.XOR<Prisma.FaturaCreateWithoutClienteInput, Prisma.FaturaUncheckedCreateWithoutClienteInput>;
};
export type FaturaCreateManyClienteInputEnvelope = {
    data: Prisma.FaturaCreateManyClienteInput | Prisma.FaturaCreateManyClienteInput[];
    skipDuplicates?: boolean;
};
export type FaturaUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.FaturaWhereUniqueInput;
    update: Prisma.XOR<Prisma.FaturaUpdateWithoutClienteInput, Prisma.FaturaUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.FaturaCreateWithoutClienteInput, Prisma.FaturaUncheckedCreateWithoutClienteInput>;
};
export type FaturaUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.FaturaWhereUniqueInput;
    data: Prisma.XOR<Prisma.FaturaUpdateWithoutClienteInput, Prisma.FaturaUncheckedUpdateWithoutClienteInput>;
};
export type FaturaUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.FaturaScalarWhereInput;
    data: Prisma.XOR<Prisma.FaturaUpdateManyMutationInput, Prisma.FaturaUncheckedUpdateManyWithoutClienteInput>;
};
export type FaturaScalarWhereInput = {
    AND?: Prisma.FaturaScalarWhereInput | Prisma.FaturaScalarWhereInput[];
    OR?: Prisma.FaturaScalarWhereInput[];
    NOT?: Prisma.FaturaScalarWhereInput | Prisma.FaturaScalarWhereInput[];
    id?: Prisma.StringFilter<"Fatura"> | string;
    numeroFatura?: Prisma.StringFilter<"Fatura"> | string;
    dataEmissao?: Prisma.DateTimeFilter<"Fatura"> | Date | string;
    clienteCnpj?: Prisma.StringFilter<"Fatura"> | string;
    descricaoPagamento?: Prisma.StringFilter<"Fatura"> | string;
    descricaoLocacao?: Prisma.StringFilter<"Fatura"> | string;
    valorLocacao?: Prisma.DecimalFilter<"Fatura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"Fatura"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Fatura"> | Date | string;
};
export type FaturaCreateManyClienteInput = {
    id?: string;
    numeroFatura: string;
    dataEmissao?: Date | string;
    descricaoPagamento: string;
    descricaoLocacao: string;
    valorLocacao: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FaturaUpdateWithoutClienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numeroFatura?: Prisma.StringFieldUpdateOperationsInput | string;
    dataEmissao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    descricaoPagamento?: Prisma.StringFieldUpdateOperationsInput | string;
    descricaoLocacao?: Prisma.StringFieldUpdateOperationsInput | string;
    valorLocacao?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FaturaUncheckedUpdateWithoutClienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numeroFatura?: Prisma.StringFieldUpdateOperationsInput | string;
    dataEmissao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    descricaoPagamento?: Prisma.StringFieldUpdateOperationsInput | string;
    descricaoLocacao?: Prisma.StringFieldUpdateOperationsInput | string;
    valorLocacao?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FaturaUncheckedUpdateManyWithoutClienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numeroFatura?: Prisma.StringFieldUpdateOperationsInput | string;
    dataEmissao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    descricaoPagamento?: Prisma.StringFieldUpdateOperationsInput | string;
    descricaoLocacao?: Prisma.StringFieldUpdateOperationsInput | string;
    valorLocacao?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FaturaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    numeroFatura?: boolean;
    dataEmissao?: boolean;
    clienteCnpj?: boolean;
    descricaoPagamento?: boolean;
    descricaoLocacao?: boolean;
    valorLocacao?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["fatura"]>;
export type FaturaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    numeroFatura?: boolean;
    dataEmissao?: boolean;
    clienteCnpj?: boolean;
    descricaoPagamento?: boolean;
    descricaoLocacao?: boolean;
    valorLocacao?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["fatura"]>;
export type FaturaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    numeroFatura?: boolean;
    dataEmissao?: boolean;
    clienteCnpj?: boolean;
    descricaoPagamento?: boolean;
    descricaoLocacao?: boolean;
    valorLocacao?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["fatura"]>;
export type FaturaSelectScalar = {
    id?: boolean;
    numeroFatura?: boolean;
    dataEmissao?: boolean;
    clienteCnpj?: boolean;
    descricaoPagamento?: boolean;
    descricaoLocacao?: boolean;
    valorLocacao?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FaturaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "numeroFatura" | "dataEmissao" | "clienteCnpj" | "descricaoPagamento" | "descricaoLocacao" | "valorLocacao" | "createdAt" | "updatedAt", ExtArgs["result"]["fatura"]>;
export type FaturaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
};
export type FaturaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
};
export type FaturaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
};
export type $FaturaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Fatura";
    objects: {
        cliente: Prisma.$ClientePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        numeroFatura: string;
        dataEmissao: Date;
        clienteCnpj: string;
        descricaoPagamento: string;
        descricaoLocacao: string;
        valorLocacao: runtime.Decimal;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["fatura"]>;
    composites: {};
};
export type FaturaGetPayload<S extends boolean | null | undefined | FaturaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FaturaPayload, S>;
export type FaturaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FaturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FaturaCountAggregateInputType | true;
};
export interface FaturaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Fatura'];
        meta: {
            name: 'Fatura';
        };
    };
    findUnique<T extends FaturaFindUniqueArgs>(args: Prisma.SelectSubset<T, FaturaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FaturaClient<runtime.Types.Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FaturaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FaturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FaturaClient<runtime.Types.Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FaturaFindFirstArgs>(args?: Prisma.SelectSubset<T, FaturaFindFirstArgs<ExtArgs>>): Prisma.Prisma__FaturaClient<runtime.Types.Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FaturaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FaturaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FaturaClient<runtime.Types.Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FaturaFindManyArgs>(args?: Prisma.SelectSubset<T, FaturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FaturaCreateArgs>(args: Prisma.SelectSubset<T, FaturaCreateArgs<ExtArgs>>): Prisma.Prisma__FaturaClient<runtime.Types.Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FaturaCreateManyArgs>(args?: Prisma.SelectSubset<T, FaturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FaturaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FaturaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FaturaDeleteArgs>(args: Prisma.SelectSubset<T, FaturaDeleteArgs<ExtArgs>>): Prisma.Prisma__FaturaClient<runtime.Types.Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FaturaUpdateArgs>(args: Prisma.SelectSubset<T, FaturaUpdateArgs<ExtArgs>>): Prisma.Prisma__FaturaClient<runtime.Types.Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FaturaDeleteManyArgs>(args?: Prisma.SelectSubset<T, FaturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FaturaUpdateManyArgs>(args: Prisma.SelectSubset<T, FaturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FaturaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FaturaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FaturaUpsertArgs>(args: Prisma.SelectSubset<T, FaturaUpsertArgs<ExtArgs>>): Prisma.Prisma__FaturaClient<runtime.Types.Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FaturaCountArgs>(args?: Prisma.Subset<T, FaturaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FaturaCountAggregateOutputType> : number>;
    aggregate<T extends FaturaAggregateArgs>(args: Prisma.Subset<T, FaturaAggregateArgs>): Prisma.PrismaPromise<GetFaturaAggregateType<T>>;
    groupBy<T extends FaturaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FaturaGroupByArgs['orderBy'];
    } : {
        orderBy?: FaturaGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FaturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FaturaFieldRefs;
}
export interface Prisma__FaturaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cliente<T extends Prisma.ClienteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClienteDefaultArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FaturaFieldRefs {
    readonly id: Prisma.FieldRef<"Fatura", 'String'>;
    readonly numeroFatura: Prisma.FieldRef<"Fatura", 'String'>;
    readonly dataEmissao: Prisma.FieldRef<"Fatura", 'DateTime'>;
    readonly clienteCnpj: Prisma.FieldRef<"Fatura", 'String'>;
    readonly descricaoPagamento: Prisma.FieldRef<"Fatura", 'String'>;
    readonly descricaoLocacao: Prisma.FieldRef<"Fatura", 'String'>;
    readonly valorLocacao: Prisma.FieldRef<"Fatura", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"Fatura", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Fatura", 'DateTime'>;
}
export type FaturaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaturaSelect<ExtArgs> | null;
    omit?: Prisma.FaturaOmit<ExtArgs> | null;
    include?: Prisma.FaturaInclude<ExtArgs> | null;
    where: Prisma.FaturaWhereUniqueInput;
};
export type FaturaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaturaSelect<ExtArgs> | null;
    omit?: Prisma.FaturaOmit<ExtArgs> | null;
    include?: Prisma.FaturaInclude<ExtArgs> | null;
    where: Prisma.FaturaWhereUniqueInput;
};
export type FaturaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaturaSelect<ExtArgs> | null;
    omit?: Prisma.FaturaOmit<ExtArgs> | null;
    include?: Prisma.FaturaInclude<ExtArgs> | null;
    where?: Prisma.FaturaWhereInput;
    orderBy?: Prisma.FaturaOrderByWithRelationInput | Prisma.FaturaOrderByWithRelationInput[];
    cursor?: Prisma.FaturaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FaturaScalarFieldEnum | Prisma.FaturaScalarFieldEnum[];
};
export type FaturaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaturaSelect<ExtArgs> | null;
    omit?: Prisma.FaturaOmit<ExtArgs> | null;
    include?: Prisma.FaturaInclude<ExtArgs> | null;
    where?: Prisma.FaturaWhereInput;
    orderBy?: Prisma.FaturaOrderByWithRelationInput | Prisma.FaturaOrderByWithRelationInput[];
    cursor?: Prisma.FaturaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FaturaScalarFieldEnum | Prisma.FaturaScalarFieldEnum[];
};
export type FaturaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaturaSelect<ExtArgs> | null;
    omit?: Prisma.FaturaOmit<ExtArgs> | null;
    include?: Prisma.FaturaInclude<ExtArgs> | null;
    where?: Prisma.FaturaWhereInput;
    orderBy?: Prisma.FaturaOrderByWithRelationInput | Prisma.FaturaOrderByWithRelationInput[];
    cursor?: Prisma.FaturaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FaturaScalarFieldEnum | Prisma.FaturaScalarFieldEnum[];
};
export type FaturaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaturaSelect<ExtArgs> | null;
    omit?: Prisma.FaturaOmit<ExtArgs> | null;
    include?: Prisma.FaturaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FaturaCreateInput, Prisma.FaturaUncheckedCreateInput>;
};
export type FaturaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FaturaCreateManyInput | Prisma.FaturaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FaturaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaturaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FaturaOmit<ExtArgs> | null;
    data: Prisma.FaturaCreateManyInput | Prisma.FaturaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FaturaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FaturaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaturaSelect<ExtArgs> | null;
    omit?: Prisma.FaturaOmit<ExtArgs> | null;
    include?: Prisma.FaturaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FaturaUpdateInput, Prisma.FaturaUncheckedUpdateInput>;
    where: Prisma.FaturaWhereUniqueInput;
};
export type FaturaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FaturaUpdateManyMutationInput, Prisma.FaturaUncheckedUpdateManyInput>;
    where?: Prisma.FaturaWhereInput;
    limit?: number;
};
export type FaturaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaturaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FaturaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FaturaUpdateManyMutationInput, Prisma.FaturaUncheckedUpdateManyInput>;
    where?: Prisma.FaturaWhereInput;
    limit?: number;
    include?: Prisma.FaturaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FaturaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaturaSelect<ExtArgs> | null;
    omit?: Prisma.FaturaOmit<ExtArgs> | null;
    include?: Prisma.FaturaInclude<ExtArgs> | null;
    where: Prisma.FaturaWhereUniqueInput;
    create: Prisma.XOR<Prisma.FaturaCreateInput, Prisma.FaturaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FaturaUpdateInput, Prisma.FaturaUncheckedUpdateInput>;
};
export type FaturaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaturaSelect<ExtArgs> | null;
    omit?: Prisma.FaturaOmit<ExtArgs> | null;
    include?: Prisma.FaturaInclude<ExtArgs> | null;
    where: Prisma.FaturaWhereUniqueInput;
};
export type FaturaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FaturaWhereInput;
    limit?: number;
};
export type FaturaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FaturaSelect<ExtArgs> | null;
    omit?: Prisma.FaturaOmit<ExtArgs> | null;
    include?: Prisma.FaturaInclude<ExtArgs> | null;
};
export {};
