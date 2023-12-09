import { Module } from '@nestjs/common';
import { ListAllUseCase } from './users/list-all-use-case/list-all-use-case';
import { InfraModule } from '../infra/infra.module';

@Module({
  providers: [ListAllUseCase],
  imports: [InfraModule],
  exports: [ListAllUseCase],
})
export class UsecaseModule {}
