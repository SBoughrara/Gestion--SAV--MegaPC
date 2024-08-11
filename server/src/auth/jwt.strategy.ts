import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { request } from 'express';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,  
      secretOrKey: 'sfectoria',
    });
  }

  async validate(payload: any) { // payload is the decoding of the JWT payload={id:...}
    const user = await this.prisma.user.findUnique({
      where: { id: payload.id },
    });
    return payload;
  }
}
