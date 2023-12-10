import { Test, TestingModule } from '@nestjs/testing';
import { CreateHashUseCase } from './create-hash-use-case';

describe('CreateHashUseCase', () => {
  let provider: CreateHashUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateHashUseCase],
    }).compile();

    provider = module.get<CreateHashUseCase>(CreateHashUseCase);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
