import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  AssociationMembers,
  AssociationRole,
} from 'src/association-members/association-member.entity';
import { Association } from 'src/association/association.entity';
import { User } from 'src/user/user.entity';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class AssociationService {
  constructor(
    @InjectRepository(Association)
    private associationRepository: Repository<Association>,

    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(AssociationMembers)
    private аssociationMembersRepository: Repository<AssociationMembers>,
  ) {}

  findFiltered(nameSearch?: string): Promise<Association[]> {
    if (!nameSearch || nameSearch.trim().length === 0) {
      return this.findAll();
    }

    return this.associationRepository.find({
      where: {
        name: ILike(`%${nameSearch.trim().toLowerCase()}%`),
      },
    });
  }

  findAll(): Promise<Association[]> {
    return this.associationRepository.find();
  }

  findOne(id: number): Promise<Association | null> {
    return this.associationRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.associationRepository.delete(id);
  }

  async addMember(
    associationId: number,
    userId: number,
    associationMemberRole: AssociationRole,
  ) {
    const association = await this.associationRepository.findOneBy({
      id: associationId,
    });
    if (!association) {
      throw new NotFoundException(`Event with ID ${associationId} not found.`);
    }

    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new NotFoundException(`Event with ID ${userId} not found.`);
    }

    const userAssociationEntry = {
      association_id: associationId,
      user_id: userId,
      role: associationMemberRole,
    };

    await this.аssociationMembersRepository.save(userAssociationEntry);
  }
}
