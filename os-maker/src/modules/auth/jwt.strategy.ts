import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";

export interface JwtPayload {
    sub: string;
    email: string;
}
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(config: ConfigService) {
        const secret = config.getOrThrow<string>('JWT_SECRET');
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: secret,
        });
    }

    async validate(payload: JwtPayload) {
        if (!payload.sub || !payload.email) {
            throw new UnauthorizedException('Token Invalido');
        }

        return {
            sub: payload.sub,
            email: payload.email
        };
    }
}