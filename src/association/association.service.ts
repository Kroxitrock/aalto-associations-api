import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Association } from 'src/association/association.entity';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class AssociationService {
  constructor(
    @InjectRepository(Association)
    private associationRepository: Repository<Association>,
  ) {}

  findFiltered(nameSearch?: string): Promise<Association[]> {
    if (!nameSearch || nameSearch.trim().length === 0) {
      return this.findAll();
    }

    return this.associationRepository.find({
      where: {
        name: ILike(nameSearch.trim().toLowerCase()),
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
}
