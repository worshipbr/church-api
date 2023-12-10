import {
  Body,
  Controller,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { CreateHashInputDto } from './input.dto';
import { CreateHashUseCase } from '../../../usecase/utils/create-hash-use-case/create-hash-use-case';

@Controller('utils')
export class CreateHashController {
  constructor(private readonly usecase: CreateHashUseCase) {}

  @Post('create-hash')
  async handle(@Body() { password }: CreateHashInputDto) {
    try {
      const hash = await this.usecase.execute({ password });
      return { data: { hash } };
    } catch (error) {
      console.log(error);
      return 'teste';
    }
  }
}
