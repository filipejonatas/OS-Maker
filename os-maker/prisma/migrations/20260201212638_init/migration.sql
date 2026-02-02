-- CreateTable
CREATE TABLE "clientes" (
    "cnpj" TEXT NOT NULL,
    "razaoSocial" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("cnpj")
);

-- CreateTable
CREATE TABLE "faturas" (
    "id" TEXT NOT NULL,
    "numeroFatura" TEXT NOT NULL,
    "dataEmissao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clienteCnpj" TEXT NOT NULL,
    "descricaoPagamento" TEXT NOT NULL,
    "descricaoLocacao" TEXT NOT NULL,
    "valorLocacao" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "faturas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "faturas_numeroFatura_key" ON "faturas"("numeroFatura");

-- AddForeignKey
ALTER TABLE "faturas" ADD CONSTRAINT "faturas_clienteCnpj_fkey" FOREIGN KEY ("clienteCnpj") REFERENCES "clientes"("cnpj") ON DELETE RESTRICT ON UPDATE CASCADE;
