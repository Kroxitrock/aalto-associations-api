import { Injectable } from '@nestjs/common';
import { AssociationApplication } from './association-application.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AssociationApplicationService {
  constructor(
    @InjectRepository(AssociationApplication)
    private associationApplicationRepository: Repository<AssociationApplication>,
  ) {}

  findAll(): Promise<AssociationApplication[]> {
    return this.associationApplicationRepository.find({
      relations: ['user', 'association'],
    });
  }

  findOne(id: number): Promise<AssociationApplication | null> {
    return this.associationApplicationRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.associationApplicationRepository.delete(id);
  }
}
