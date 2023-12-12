import { Injectable } from '@nestjs/common';
import { Client } from '../client/client';
import { User } from '../../../../core/models/user';
import { IUser } from '../../../../core/interfaces/user.interface';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: Client) {}

  async getByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return User.clone(user as IUser);
  }

  async getMany(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users.map((u) => User.clone(u as IUser));
  }
}
