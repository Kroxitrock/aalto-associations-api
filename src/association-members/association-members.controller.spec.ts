import { Test, TestingModule } from '@nestjs/testing';
import { AssociationMembersController } from './association-members.controller';

describe('AssociationMembersController', () => {
  let controller: AssociationMembersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssociationMembersController],
    }).compile();

    controller = module.get<AssociationMembersController>(
      AssociationMembersController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
