import { Test, TestingModule } from '@nestjs/testing';
import { ThreedModelsService } from './threed-models.service';

describe('ThreedModelsService', () => {
  let service: ThreedModelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThreedModelsService],
    }).compile();

    service = module.get<ThreedModelsService>(ThreedModelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
