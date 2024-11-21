import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventModule } from './event/event.module';
import { AssociationModule } from './association/association.module';
import { AssociationApplicationModule } from './association-application/association-application.module';
import { EventRequestModule } from './event-request/event-request.module';
import { AssociationMembersModule } from './association-members/association-members.module';

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
      autoLoadEntities: true,
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
