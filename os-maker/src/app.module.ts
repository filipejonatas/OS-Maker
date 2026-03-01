import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { FaturaModule } from './modules/fatura/fatura.module';
import { ClientesModule } from './modules/clientes/clientes.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    FaturaModule,
    ClientesModule,
  ],
})
export class AppModule {}