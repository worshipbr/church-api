import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../infra/db/prisma/user-repository/user-repository';
import { IUseCase } from '../../usecase.interface';
import { User } from '@prisma/client';
import { Result } from '../../result';
import { UseCaseError } from '../../error';

export type IListAllUserUseCase = IUseCase<undefined, User[], UseCaseError>;

@Injectable()
export class ListAllUseCase implements IListAllUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<Result<User[], UseCaseError>> {
    try {
      const users = await this.userRepository.getMany();
      return Result.ok<User[]>(users);
    } catch (error) {
      const usecaseError = new UseCaseError('Fail to list all users', error);
      console.log(JSON.stringify(usecaseError));
      return Result.fail<UseCaseError>(usecaseError);
    }
  }
}
