import { Module } from '@nestjs/common';
import { ListAllController } from './users/list-all/list-all.controller';
import { UsecaseModule } from '../usecase/usecase.module';
import { CreateHashController } from './utils/create-hash/create-hash.controller';

@Module({
  controllers: [ListAllController, CreateHashController],
  imports: [UsecaseModule],
})
export class PresenterModule {}
