import { Test, TestingModule } from '@nestjs/testing';
import { AssociationApplicationController } from './association-application.controller';

describe('AssociationApplicationController', () => {
  let controller: AssociationApplicationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssociationApplicationController],
    }).compile();

    controller = module.get<AssociationApplicationController>(
      AssociationApplicationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
