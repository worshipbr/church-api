import { Controller, Get } from '@nestjs/common';
import { ListAllUseCase } from '../../../usecase/users/list-all-use-case/list-all-use-case';

@Controller('users')
export class ListAllController {
  constructor(private readonly usecase: ListAllUseCase) {}

  @Get()
  handle() {
    return this.usecase.execute();
  }
}
