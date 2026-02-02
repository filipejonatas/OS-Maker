import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Cliente: "Cliente";
    readonly Fatura: "Fatura";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ClienteScalarFieldEnum: {
    readonly cnpj: "cnpj";
    readonly razaoSocial: "razaoSocial";
    readonly endereco: "endereco";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum];
export declare const FaturaScalarFieldEnum: {
    readonly id: "id";
    readonly numeroFatura: "numeroFatura";
    readonly dataEmissao: "dataEmissao";
    readonly clienteCnpj: "clienteCnpj";
    readonly descricaoPagamento: "descricaoPagamento";
    readonly descricaoLocacao: "descricaoLocacao";
    readonly valorLocacao: "valorLocacao";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FaturaScalarFieldEnum = (typeof FaturaScalarFieldEnum)[keyof typeof FaturaScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
