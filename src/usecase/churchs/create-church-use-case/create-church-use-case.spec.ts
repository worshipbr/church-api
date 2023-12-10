import { Test, TestingModule } from '@nestjs/testing';
import { CreateChurchUseCase } from './create-church-use-case';

describe('CreateChurchUseCase', () => {
  let provider: CreateChurchUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateChurchUseCase],
    }).compile();

    provider = module.get<CreateChurchUseCase>(CreateChurchUseCase);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
