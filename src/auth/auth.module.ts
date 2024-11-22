import { Module } from '@nestjs/common';
import { GoogleOauthGuard } from './google-oauth.guard';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtAuthGuard } from './jwt-auth.guard';
import { GoogleStrategy } from './strategies/google.strategies';
import { JwtStrategy } from './strategies/jwt.strategies';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OptionalJwtAuthGuard } from './optional-jwt-auth.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    GoogleOauthGuard,
    JwtAuthGuard,
    OptionalJwtAuthGuard,
    AuthService,
    GoogleStrategy,
    JwtStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
