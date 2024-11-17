import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { AssociationModule } from './association/association.module';
import { Association } from './association/association.entity';

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
      entities: [User, Association],
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsRun: true,
    }),
    UserModule,
    AssociationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
