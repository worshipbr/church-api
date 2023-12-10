import { Injectable } from '@nestjs/common';
import { CreateHashUseCaseInput } from './input';
import { PasswordHash } from '../../../infra/utils/password-hash/password-hash';

@Injectable()
export class CreateHashUseCase {
  constructor(private readonly hash: PasswordHash) {}

  async execute({ password }: CreateHashUseCaseInput): Promise<string> {
    const passwordHash = await this.hash.generate(password);
    return passwordHash;
  }
}
