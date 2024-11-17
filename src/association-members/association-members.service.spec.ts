import { Test, TestingModule } from '@nestjs/testing';
import { AssociationMembersService } from './association-members.service';

describe('AssociationMembersService', () => {
  let service: AssociationMembersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssociationMembersService],
    }).compile();

    service = module.get<AssociationMembersService>(AssociationMembersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
