import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfraModule } from './infra/infra.module';
import { UsecaseModule } from './usecase/usecase.module';
import { PresenterModule } from './presenter/presenter.module';

@Module({
  imports: [InfraModule, UsecaseModule, PresenterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
