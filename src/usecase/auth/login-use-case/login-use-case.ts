import { Injectable } from '@nestjs/common';
import { LoginUseCaseInput } from './input';
import { UserRepository } from '../../../infra/db/prisma/user-repository/user-repository';

@Injectable()
export class LoginUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: LoginUseCaseInput) {
    const user = await this.userRepository.getByEmail(input.email);
  }
}
