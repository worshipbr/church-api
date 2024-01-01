import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { DatabaseModule } from './database/database.module';
import { InfraModule } from './infra/infra.module';

@Module({
  imports: [ApiModule, DatabaseModule, InfraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
