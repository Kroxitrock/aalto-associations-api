import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Association } from './association.entity';
import { AssociationService } from './association.service';
import { AssociationController } from './association.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Association])],
  providers: [AssociationService],
  controllers: [AssociationController],
})
export class AssociationModule {}
