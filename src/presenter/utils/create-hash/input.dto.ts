import { IsString } from 'class-validator';

export class CreateHashInputDto {
  @IsString()
  password: string;
}
