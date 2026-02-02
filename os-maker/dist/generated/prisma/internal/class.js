"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.3.0",
    "engineVersion": "9d6ad21cbbceab97458517b147a6a09ff43aa735",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider = \"prisma-client\"\n  output   = \"../../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\" // ou \"mysql\" ou \"sqlite\"\n}\n\nmodel Cliente {\n  cnpj        String @id\n  razaoSocial String\n  endereco    String\n\n  faturas Fatura[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map(\"clientes\")\n}\n\nmodel Fatura {\n  id           String   @id @default(uuid())\n  numeroFatura String   @unique\n  dataEmissao  DateTime @default(now())\n\n  clienteCnpj String\n  cliente     Cliente @relation(fields: [clienteCnpj], references: [cnpj])\n\n  descricaoPagamento String  @db.Text\n  descricaoLocacao   String  @db.Text\n  valorLocacao       Decimal @db.Decimal(10, 2)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map(\"faturas\")\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Cliente\":{\"fields\":[{\"name\":\"cnpj\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"razaoSocial\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"endereco\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"faturas\",\"kind\":\"object\",\"type\":\"Fatura\",\"relationName\":\"ClienteToFatura\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"clientes\"},\"Fatura\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"numeroFatura\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dataEmissao\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"clienteCnpj\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"cliente\",\"kind\":\"object\",\"type\":\"Cliente\",\"relationName\":\"ClienteToFatura\"},{\"name\":\"descricaoPagamento\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"descricaoLocacao\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"valorLocacao\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"faturas\"}},\"enums\":{},\"types\":{}}");
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map