import { Test, TestingModule } from '@nestjs/testing';
import { CharitiesController } from './charities.controller';

describe('Charities Controller', () => {
  let controller: CharitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharitiesController],
    }).compile();

    controller = module.get<CharitiesController>(CharitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
