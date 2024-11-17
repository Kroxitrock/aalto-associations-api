import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Event } from './event/event.entity';
import { EventModule } from './event/event.module';
import { AssociationModule } from './association/association.module';
import { Association } from './association/association.entity';
import { AssociationApplicationModule } from './association-application/association-application.module';
import { AssociationApplication } from './association-application/association-application.entity';
import { EventRequestModule } from './event-request/event-request.module';
import { EventRequest } from './event-request/event-request.entity';
import { AssociationMembersService } from './association-members/association-members.service';
import { AssociationMembersModule } from './association-members/association-members.module';
import { AssociationMembers } from './association-members/association-member.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number.parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl: process.env.DB_SSL === 'true',
      entities: [
        User,
        Association,
        Event,
        AssociationApplication,
        EventRequest,
        AssociationMembers,
      ],
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsRun: true,
    }),
    UserModule,
    AssociationModule,
    EventModule,
    AssociationApplicationModule,
    EventRequestModule,
    AssociationMembersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
