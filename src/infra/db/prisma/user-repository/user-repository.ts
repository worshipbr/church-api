import { Injectable } from '@nestjs/common';
import { Client } from '../client/client';
import { User } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: Client) {}

  async getMany(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }
}
