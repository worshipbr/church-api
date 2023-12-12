import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../../../core/models/jwt-payload';
import { stringify } from 'querystring';

@Injectable()
export class AuthService {
  constructor(private readonly jwt: JwtService) {}

  createAccessToken(payload: JwtPayload): string {
    const accessToekn = this.jwt.sign(payload);
    return accessToekn;
  }

  validAccessToken(token: string): boolean {
    const result = this.jwt.verify(token);
    return !!result;
  }
}
