import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PayloadToken } from '../auth/token.model';
import config from '../config/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(@Inject(config.KEY) configService: ConfigType<typeof config>) {
        console.log("JWR");
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.jwtSecret,
        });
    }

    async validate(payload: PayloadToken) {
        console.log("aqui");
        return payload;
    }
}