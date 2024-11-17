import { Injectable } from '@nestjs/common';
import { AssociationMembers } from './association-member.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AssociationMembersService {
  constructor(
    @InjectRepository(AssociationMembers)
    private associationMembersRepository: Repository<AssociationMembers>,
  ) {}

  findAll(): Promise<AssociationMembers[]> {
    return this.associationMembersRepository.find({
      relations: ['user', 'association'],
    });
  }

  findOneByUserAndAssociation(
    user_id: number,
    association_id: number,
  ): Promise<AssociationMembers | null> {
    return this.associationMembersRepository.findOneBy({
      user_id,
      association_id,
    });
  }

  async remove(id: number): Promise<void> {
    await this.associationMembersRepository.delete(id);
  }
}
