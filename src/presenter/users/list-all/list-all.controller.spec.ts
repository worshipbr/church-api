import { Test, TestingModule } from '@nestjs/testing';
import { ListAllController } from './list-all.controller';

describe('ListAllController', () => {
  let controller: ListAllController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListAllController],
    }).compile();

    controller = module.get<ListAllController>(ListAllController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
