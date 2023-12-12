import { Test, TestingModule } from '@nestjs/testing';
import { LoginUseCase } from './login-use-case';

describe('LoginUseCase', () => {
  let provider: LoginUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginUseCase],
    }).compile();

    provider = module.get<LoginUseCase>(LoginUseCase);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
