import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import * as dotenv from 'dotenv';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: `postgres`,
      host: `db`,
      port: 5432,
      username: `${process.env.POSTGRES_USERNAME}`,
      password: `${process.env.POSTGRES_PASSWORD}`,
      database: `${process.env.POSTGRES_DB}`,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    PostsModule,
    AuthModule,
    PassportModule.register({ session: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
