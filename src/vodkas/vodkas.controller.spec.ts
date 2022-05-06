import { Test, TestingModule } from '@nestjs/testing';
import { VodkasController } from './vodkas.controller';

describe('VodkasController', () => {
  let controller: VodkasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VodkasController],
    }).compile();

    controller = module.get<VodkasController>(VodkasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
