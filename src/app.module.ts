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
      ],
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsRun: true,
    }),
    UserModule,
    AssociationModule,
    EventModule,
    AssociationApplicationModule,
    EventRequestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
