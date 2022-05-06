import { Test, TestingModule } from '@nestjs/testing';
import { VodkasService } from './vodkas.service';

describe('VodkasService', () => {
  let service: VodkasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VodkasService],
    }).compile();

    service = module.get<VodkasService>(VodkasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
