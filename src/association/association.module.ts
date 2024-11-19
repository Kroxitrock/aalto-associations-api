import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Association } from './association.entity';
import { AssociationService } from './association.service';
import { AssociationController } from './association.controller';
import { EventModule } from 'src/event/event.module';

@Module({
  imports: [TypeOrmModule.forFeature([Association]), EventModule],
  providers: [AssociationService],
  controllers: [AssociationController],
})
export class AssociationModule {}
