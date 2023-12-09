import { Module } from '@nestjs/common';
import { Client } from './db/prisma/client/client';
import { UserRepository } from './db/prisma/user-repository/user-repository';

@Module({
  providers: [Client, UserRepository],
  exports: [UserRepository],
})
export class InfraModule {}
