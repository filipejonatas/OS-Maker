# OS-Maker API

API backend para sistema de gestão de faturas e clientes.

## Tecnologias

- **NestJS** - Framework Node.js
- **Prisma** - ORM para PostgreSQL
- **PostgreSQL** - Banco de dados
- **JWT** - Autenticação
- **Passport** - Estratégias de autenticação

## Estrutura do Projeto

```
src/
├── modules/
│   ├── auth/          # Autenticação e autorização
│   ├── clientes/      # Gestão de clientes
│   └── fatura/        # Gestão de faturas
├── prisma/            # Schema e configuração do Prisma
└── common/            # Filtros, guards e decorators compartilhados
```

## Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Banco de dados
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
DIRECT_URL=postgresql://user:password@localhost:5432/dbname

# JWT
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=1h

# App
PORT=3000
FRONTEND_URL=http://localhost:3000
```

### Instalação

```bash
# Instalar dependências
npm install

# Gerar cliente Prisma
npx prisma generate --schema=src/prisma/schema.prisma

# Executar migrações (se necessário)
npx prisma migrate dev --schema=src/prisma/schema.prisma
```

## Executando a Aplicação

```bash
# Desenvolvimento
npm run start:dev

# Produção
npm run build
npm run start:prod
```

## Endpoints Principais

### Autenticação
- `POST /api/auth/login` - Login (público)

### Clientes
- `GET /api/clientes` - Listar clientes
- `GET /api/clientes/:cnpj` - Buscar cliente por CNPJ
- `POST /api/clientes` - Criar cliente
- `PATCH /api/clientes/:cnpj` - Atualizar cliente
- `DELETE /api/clientes/:cnpj` - Deletar cliente

### Faturas
- `GET /api/faturas` - Listar faturas (com filtros)
- `GET /api/faturas/:id` - Buscar fatura por ID
- `POST /api/faturas` - Criar fatura
- `PATCH /api/faturas/:id` - Atualizar fatura
- `PATCH /api/faturas/:id/status` - Atualizar status da fatura

## Testes

```bash
# Testes unitários
npm run test

# Testes e2e
npm run test:e2e

# Cobertura de testes
npm run test:cov
```

## Licença

UNLICENSED
