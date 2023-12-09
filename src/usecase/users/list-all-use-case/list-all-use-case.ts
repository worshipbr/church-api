import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../infra/db/prisma/user-repository/user-repository';

@Injectable()
export class ListAllUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute() {
    return this.userRepository.getMany();
  }
}
