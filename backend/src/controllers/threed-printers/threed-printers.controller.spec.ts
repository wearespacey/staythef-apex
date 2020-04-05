import { Test, TestingModule } from '@nestjs/testing';
import { ThreedPrintersController } from './threed-printers.controller';

describe('ThreedPrinters Controller', () => {
  let controller: ThreedPrintersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThreedPrintersController],
    }).compile();

    controller = module.get<ThreedPrintersController>(ThreedPrintersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
