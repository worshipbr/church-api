import { Module } from '@nestjs/common';
import { Client } from './db/prisma/client/client';
import { UserRepository } from './db/prisma/user-repository/user-repository';
import { PasswordHash } from './utils/password-hash/password-hash';
import { AuthService } from './utils/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [Client, UserRepository, PasswordHash, AuthService],
  exports: [UserRepository, PasswordHash],
})
export class InfraModule {}
