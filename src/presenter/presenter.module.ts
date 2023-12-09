import { Module } from '@nestjs/common';
import { ListAllController } from './users/list-all/list-all.controller';
import { UsecaseModule } from '../usecase/usecase.module';

@Module({
  controllers: [ListAllController],
  imports: [UsecaseModule],
})
export class PresenterModule {}
