import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ClienteModel = runtime.Types.Result.DefaultSelection<Prisma.$ClientePayload>;
export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null;
    _min: ClienteMinAggregateOutputType | null;
    _max: ClienteMaxAggregateOutputType | null;
};
export type ClienteMinAggregateOutputType = {
    cnpj: string | null;
    razaoSocial: string | null;
    endereco: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClienteMaxAggregateOutputType = {
    cnpj: string | null;
    razaoSocial: string | null;
    endereco: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClienteCountAggregateOutputType = {
    cnpj: number;
    razaoSocial: number;
    endereco: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ClienteMinAggregateInputType = {
    cnpj?: true;
    razaoSocial?: true;
    endereco?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClienteMaxAggregateInputType = {
    cnpj?: true;
    razaoSocial?: true;
    endereco?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClienteCountAggregateInputType = {
    cnpj?: true;
    razaoSocial?: true;
    endereco?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ClienteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClienteWhereInput;
    orderBy?: Prisma.ClienteOrderByWithRelationInput | Prisma.ClienteOrderByWithRelationInput[];
    cursor?: Prisma.ClienteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClienteCountAggregateInputType;
    _min?: ClienteMinAggregateInputType;
    _max?: ClienteMaxAggregateInputType;
};
export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
    [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCliente[P]> : Prisma.GetScalarType<T[P], AggregateCliente[P]>;
};
export type ClienteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClienteWhereInput;
    orderBy?: Prisma.ClienteOrderByWithAggregationInput | Prisma.ClienteOrderByWithAggregationInput[];
    by: Prisma.ClienteScalarFieldEnum[] | Prisma.ClienteScalarFieldEnum;
    having?: Prisma.ClienteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClienteCountAggregateInputType | true;
    _min?: ClienteMinAggregateInputType;
    _max?: ClienteMaxAggregateInputType;
};
export type ClienteGroupByOutputType = {
    cnpj: string;
    razaoSocial: string;
    endereco: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ClienteCountAggregateOutputType | null;
    _min: ClienteMinAggregateOutputType | null;
    _max: ClienteMaxAggregateOutputType | null;
};
type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClienteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClienteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClienteGroupByOutputType[P]>;
}>>;
export type ClienteWhereInput = {
    AND?: Prisma.ClienteWhereInput | Prisma.ClienteWhereInput[];
    OR?: Prisma.ClienteWhereInput[];
    NOT?: Prisma.ClienteWhereInput | Prisma.ClienteWhereInput[];
    cnpj?: Prisma.StringFilter<"Cliente"> | string;
    razaoSocial?: Prisma.StringFilter<"Cliente"> | string;
    endereco?: Prisma.StringFilter<"Cliente"> | string;
    createdAt?: Prisma.DateTimeFilter<"Cliente"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Cliente"> | Date | string;
    faturas?: Prisma.FaturaListRelationFilter;
};
export type ClienteOrderByWithRelationInput = {
    cnpj?: Prisma.SortOrder;
    razaoSocial?: Prisma.SortOrder;
    endereco?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    faturas?: Prisma.FaturaOrderByRelationAggregateInput;
};
export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    cnpj?: string;
    AND?: Prisma.ClienteWhereInput | Prisma.ClienteWhereInput[];
    OR?: Prisma.ClienteWhereInput[];
    NOT?: Prisma.ClienteWhereInput | Prisma.ClienteWhereInput[];
    razaoSocial?: Prisma.StringFilter<"Cliente"> | string;
    endereco?: Prisma.StringFilter<"Cliente"> | string;
    createdAt?: Prisma.DateTimeFilter<"Cliente"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Cliente"> | Date | string;
    faturas?: Prisma.FaturaListRelationFilter;
}, "cnpj">;
export type ClienteOrderByWithAggregationInput = {
    cnpj?: Prisma.SortOrder;
    razaoSocial?: Prisma.SortOrder;
    endereco?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ClienteCountOrderByAggregateInput;
    _max?: Prisma.ClienteMaxOrderByAggregateInput;
    _min?: Prisma.ClienteMinOrderByAggregateInput;
};
export type ClienteScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClienteScalarWhereWithAggregatesInput | Prisma.ClienteScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClienteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClienteScalarWhereWithAggregatesInput | Prisma.ClienteScalarWhereWithAggregatesInput[];
    cnpj?: Prisma.StringWithAggregatesFilter<"Cliente"> | string;
    razaoSocial?: Prisma.StringWithAggregatesFilter<"Cliente"> | string;
    endereco?: Prisma.StringWithAggregatesFilter<"Cliente"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Cliente"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Cliente"> | Date | string;
};
export type ClienteCreateInput = {
    cnpj: string;
    razaoSocial: string;
    endereco: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    faturas?: Prisma.FaturaCreateNestedManyWithoutClienteInput;
};
export type ClienteUncheckedCreateInput = {
    cnpj: string;
    razaoSocial: string;
    endereco: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    faturas?: Prisma.FaturaUncheckedCreateNestedManyWithoutClienteInput;
};
export type ClienteUpdateInput = {
    cnpj?: Prisma.StringFieldUpdateOperationsInput | string;
    razaoSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    endereco?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    faturas?: Prisma.FaturaUpdateManyWithoutClienteNestedInput;
};
export type ClienteUncheckedUpdateInput = {
    cnpj?: Prisma.StringFieldUpdateOperationsInput | string;
    razaoSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    endereco?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    faturas?: Prisma.FaturaUncheckedUpdateManyWithoutClienteNestedInput;
};
export type ClienteCreateManyInput = {
    cnpj: string;
    razaoSocial: string;
    endereco: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClienteUpdateManyMutationInput = {
    cnpj?: Prisma.StringFieldUpdateOperationsInput | string;
    razaoSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    endereco?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClienteUncheckedUpdateManyInput = {
    cnpj?: Prisma.StringFieldUpdateOperationsInput | string;
    razaoSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    endereco?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClienteCountOrderByAggregateInput = {
    cnpj?: Prisma.SortOrder;
    razaoSocial?: Prisma.SortOrder;
    endereco?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClienteMaxOrderByAggregateInput = {
    cnpj?: Prisma.SortOrder;
    razaoSocial?: Prisma.SortOrder;
    endereco?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClienteMinOrderByAggregateInput = {
    cnpj?: Prisma.SortOrder;
    razaoSocial?: Prisma.SortOrder;
    endereco?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClienteScalarRelationFilter = {
    is?: Prisma.ClienteWhereInput;
    isNot?: Prisma.ClienteWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type ClienteCreateNestedOneWithoutFaturasInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutFaturasInput, Prisma.ClienteUncheckedCreateWithoutFaturasInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutFaturasInput;
    connect?: Prisma.ClienteWhereUniqueInput;
};
export type ClienteUpdateOneRequiredWithoutFaturasNestedInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutFaturasInput, Prisma.ClienteUncheckedCreateWithoutFaturasInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutFaturasInput;
    upsert?: Prisma.ClienteUpsertWithoutFaturasInput;
    connect?: Prisma.ClienteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClienteUpdateToOneWithWhereWithoutFaturasInput, Prisma.ClienteUpdateWithoutFaturasInput>, Prisma.ClienteUncheckedUpdateWithoutFaturasInput>;
};
export type ClienteCreateWithoutFaturasInput = {
    cnpj: string;
    razaoSocial: string;
    endereco: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClienteUncheckedCreateWithoutFaturasInput = {
    cnpj: string;
    razaoSocial: string;
    endereco: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClienteCreateOrConnectWithoutFaturasInput = {
    where: Prisma.ClienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutFaturasInput, Prisma.ClienteUncheckedCreateWithoutFaturasInput>;
};
export type ClienteUpsertWithoutFaturasInput = {
    update: Prisma.XOR<Prisma.ClienteUpdateWithoutFaturasInput, Prisma.ClienteUncheckedUpdateWithoutFaturasInput>;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutFaturasInput, Prisma.ClienteUncheckedCreateWithoutFaturasInput>;
    where?: Prisma.ClienteWhereInput;
};
export type ClienteUpdateToOneWithWhereWithoutFaturasInput = {
    where?: Prisma.ClienteWhereInput;
    data: Prisma.XOR<Prisma.ClienteUpdateWithoutFaturasInput, Prisma.ClienteUncheckedUpdateWithoutFaturasInput>;
};
export type ClienteUpdateWithoutFaturasInput = {
    cnpj?: Prisma.StringFieldUpdateOperationsInput | string;
    razaoSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    endereco?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClienteUncheckedUpdateWithoutFaturasInput = {
    cnpj?: Prisma.StringFieldUpdateOperationsInput | string;
    razaoSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    endereco?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClienteCountOutputType = {
    faturas: number;
};
export type ClienteCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    faturas?: boolean | ClienteCountOutputTypeCountFaturasArgs;
};
export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteCountOutputTypeSelect<ExtArgs> | null;
};
export type ClienteCountOutputTypeCountFaturasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FaturaWhereInput;
};
export type ClienteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cnpj?: boolean;
    razaoSocial?: boolean;
    endereco?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    faturas?: boolean | Prisma.Cliente$faturasArgs<ExtArgs>;
    _count?: boolean | Prisma.ClienteCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cliente"]>;
export type ClienteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cnpj?: boolean;
    razaoSocial?: boolean;
    endereco?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["cliente"]>;
export type ClienteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cnpj?: boolean;
    razaoSocial?: boolean;
    endereco?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["cliente"]>;
export type ClienteSelectScalar = {
    cnpj?: boolean;
    razaoSocial?: boolean;
    endereco?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ClienteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"cnpj" | "razaoSocial" | "endereco" | "createdAt" | "updatedAt", ExtArgs["result"]["cliente"]>;
export type ClienteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    faturas?: boolean | Prisma.Cliente$faturasArgs<ExtArgs>;
    _count?: boolean | Prisma.ClienteCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ClienteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ClientePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Cliente";
    objects: {
        faturas: Prisma.$FaturaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        cnpj: string;
        razaoSocial: string;
        endereco: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["cliente"]>;
    composites: {};
};
export type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClientePayload, S>;
export type ClienteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClienteCountAggregateInputType | true;
};
export interface ClienteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Cliente'];
        meta: {
            name: 'Cliente';
        };
    };
    findUnique<T extends ClienteFindUniqueArgs>(args: Prisma.SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClienteFindFirstArgs>(args?: Prisma.SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClienteFindManyArgs>(args?: Prisma.SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClienteCreateArgs>(args: Prisma.SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClienteCreateManyArgs>(args?: Prisma.SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ClienteDeleteArgs>(args: Prisma.SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClienteUpdateArgs>(args: Prisma.SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClienteDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClienteUpdateManyArgs>(args: Prisma.SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ClienteUpsertArgs>(args: Prisma.SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ClienteCountArgs>(args?: Prisma.Subset<T, ClienteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClienteCountAggregateOutputType> : number>;
    aggregate<T extends ClienteAggregateArgs>(args: Prisma.Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>;
    groupBy<T extends ClienteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClienteGroupByArgs['orderBy'];
    } : {
        orderBy?: ClienteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClienteFieldRefs;
}
export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    faturas<T extends Prisma.Cliente$faturasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cliente$faturasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClienteFieldRefs {
    readonly cnpj: Prisma.FieldRef<"Cliente", 'String'>;
    readonly razaoSocial: Prisma.FieldRef<"Cliente", 'String'>;
    readonly endereco: Prisma.FieldRef<"Cliente", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Cliente", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Cliente", 'DateTime'>;
}
export type ClienteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where: Prisma.ClienteWhereUniqueInput;
};
export type ClienteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where: Prisma.ClienteWhereUniqueInput;
};
export type ClienteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where?: Prisma.ClienteWhereInput;
    orderBy?: Prisma.ClienteOrderByWithRelationInput | Prisma.ClienteOrderByWithRelationInput[];
    cursor?: Prisma.ClienteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClienteScalarFieldEnum | Prisma.ClienteScalarFieldEnum[];
};
export type ClienteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where?: Prisma.ClienteWhereInput;
    orderBy?: Prisma.ClienteOrderByWithRelationInput | Prisma.ClienteOrderByWithRelationInput[];
    cursor?: Prisma.ClienteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClienteScalarFieldEnum | Prisma.ClienteScalarFieldEnum[];
};
export type ClienteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where?: Prisma.ClienteWhereInput;
    orderBy?: Prisma.ClienteOrderByWithRelationInput | Prisma.ClienteOrderByWithRelationInput[];
    cursor?: Prisma.ClienteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClienteScalarFieldEnum | Prisma.ClienteScalarFieldEnum[];
};
export type ClienteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClienteCreateInput, Prisma.ClienteUncheckedCreateInput>;
};
export type ClienteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClienteCreateManyInput | Prisma.ClienteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClienteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    data: Prisma.ClienteCreateManyInput | Prisma.ClienteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClienteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClienteUpdateInput, Prisma.ClienteUncheckedUpdateInput>;
    where: Prisma.ClienteWhereUniqueInput;
};
export type ClienteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClienteUpdateManyMutationInput, Prisma.ClienteUncheckedUpdateManyInput>;
    where?: Prisma.ClienteWhereInput;
    limit?: number;
};
export type ClienteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClienteUpdateManyMutationInput, Prisma.ClienteUncheckedUpdateManyInput>;
    where?: Prisma.ClienteWhereInput;
    limit?: number;
};
export type ClienteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where: Prisma.ClienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClienteCreateInput, Prisma.ClienteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClienteUpdateInput, Prisma.ClienteUncheckedUpdateInput>;
};
export type ClienteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where: Prisma.ClienteWhereUniqueInput;
};
export type ClienteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClienteWhereInput;
    limit?: number;
};
export type Cliente$faturasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ClienteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
};
export {};
