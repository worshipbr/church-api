import { Test, TestingModule } from '@nestjs/testing';
import { PasswordHash } from './password-hash';

describe('PasswordHash', () => {
  let provider: PasswordHash;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasswordHash],
    }).compile();

    provider = module.get<PasswordHash>(PasswordHash);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
