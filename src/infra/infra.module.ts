import { Module } from '@nestjs/common';
import { Client } from './db/prisma/client/client';
import { UserRepository } from './db/prisma/user-repository/user-repository';
import { PasswordHash } from './utils/password-hash/password-hash';

@Module({
  providers: [Client, UserRepository, PasswordHash],
  exports: [UserRepository, PasswordHash],
})
export class InfraModule {}
