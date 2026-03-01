import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        PrismaModule,

        PassportModule.register({ defaultStrategy: 'jwt' }),

        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService): JwtModuleOptions => {
                const expiresIn = configService.get<string>('JWT_EXPIRES_IN') || '1h';
                return {
                    secret: configService.getOrThrow<string>('JWT_SECRET'),
                    signOptions: {
                        expiresIn: expiresIn,
                    } as any,
                };
            },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [JwtModule, PassportModule],
})

export class AuthModule { }