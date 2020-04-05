import { Test, TestingModule } from '@nestjs/testing';
import { ThreedModelsController } from './threed-models.controller';

describe('ThreedModels Controller', () => {
  let controller: ThreedModelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThreedModelsController],
    }).compile();

    controller = module.get<ThreedModelsController>(ThreedModelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
