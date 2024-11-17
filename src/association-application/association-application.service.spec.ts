import { Test, TestingModule } from '@nestjs/testing';
import { AssociationApplicationService } from './association-application.service';

describe('AssociationApplicationService', () => {
  let service: AssociationApplicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssociationApplicationService],
    }).compile();

    service = module.get<AssociationApplicationService>(
      AssociationApplicationService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
