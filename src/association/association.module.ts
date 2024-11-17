import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Association } from './association.entity';
import { AssociationService } from './association.service';

@Module({
  imports: [TypeOrmModule.forFeature([Association])],
  providers: [AssociationService],
})
export class AssociationModule {}
