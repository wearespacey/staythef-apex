import { Test, TestingModule } from '@nestjs/testing';
import { ThreedPrintersService } from './threed-printers.service';

describe('ThreedPrintersService', () => {
  let service: ThreedPrintersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThreedPrintersService],
    }).compile();

    service = module.get<ThreedPrintersService>(ThreedPrintersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
