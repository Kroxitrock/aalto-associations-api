import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  AssociationMembers,
  AssociationRole,
} from 'src/association-members/association-member.entity';
import { Association } from 'src/association/association.entity';
import { User } from 'src/user/user.entity';
import { ILike, Repository } from 'typeorm';
import AssociationWithRoleDto from './association-with-role.dto';

@Injectable()
export class AssociationService {
  constructor(
    @InjectRepository(Association)
    private associationRepository: Repository<Association>,

    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(AssociationMembers)
    private аssociationMembersRepository: Repository<AssociationMembers>,

    @InjectRepository(AssociationMembers)
    private associationMembersRepository: Repository<AssociationMembers>,
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

  async findOneWithRole(
    associationId: number,
    userId: number,
  ): Promise<AssociationWithRoleDto> {
    const association = await this.associationRepository.findOne({
      where: { id: associationId },
      relations: ['users'],
    });

    if (!association) {
      throw new NotFoundException(
        `Association with ID ${associationId} not found.`,
      );
    }

    const member = await this.associationMembersRepository.findOne({
      where: { association_id: associationId, user_id: userId },
    });

    const response: AssociationWithRoleDto = {
      id: association.id,
      name: association.name,
      logo: association.logo,
      description: association.description,
      telegram: association.telegram,
      phone: association.phone,
      email: association.email,
      membership_fee: association.membership_fee,
      users: association.users,
      role: member ? member.role : null,
    };

    return response;
  }

  create(association: Association, userId: number) {
    this.associationRepository.save(association).then((newAssociation) => {
      this.associationMembersRepository.save({
        association_id: newAssociation.id,
        user_id: userId,
        role: AssociationRole.LEADER,
      });
    });
  }

  async remove(id: number): Promise<void> {
    await this.associationRepository.delete(id);
  }

  async addMember(associationId: number, userId: number) {
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
      role: AssociationRole.MEMBER,
    };

    await this.аssociationMembersRepository.save(userAssociationEntry);
  }
}
