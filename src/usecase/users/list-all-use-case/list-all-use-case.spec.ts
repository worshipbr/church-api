import { Test, TestingModule } from '@nestjs/testing';
import { ListAllUseCase } from './list-all-use-case';

describe('ListAllUseCase', () => {
  let provider: ListAllUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListAllUseCase],
    }).compile();

    provider = module.get<ListAllUseCase>(ListAllUseCase);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
