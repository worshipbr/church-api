import { Test, TestingModule } from '@nestjs/testing';
import { CreateHashController } from './create-hash.controller';

describe('CreateHashController', () => {
  let controller: CreateHashController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateHashController],
    }).compile();

    controller = module.get<CreateHashController>(CreateHashController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
