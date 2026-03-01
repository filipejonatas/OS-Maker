import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { FaturaModule } from './modules/fatura/fatura.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';


@Module({
  imports: [PrismaModule, FaturaModule, ConfigModule.forRoot({ isGlobal: true }), AuthModule],
})

export class AppModule { }