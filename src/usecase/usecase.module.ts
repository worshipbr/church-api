import { Module } from '@nestjs/common';
import { ListAllUseCase } from './users/list-all-use-case/list-all-use-case';
import { InfraModule } from '../infra/infra.module';
import { CreateChurchUseCase } from './churchs/create-church-use-case/create-church-use-case';
import { CreateHashUseCase } from './utils/create-hash-use-case/create-hash-use-case';

@Module({
  providers: [ListAllUseCase, CreateChurchUseCase, CreateHashUseCase],
  imports: [InfraModule],
  exports: [ListAllUseCase, CreateHashUseCase],
})
export class UsecaseModule {}
