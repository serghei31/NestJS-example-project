import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { HashPasswordMiddleware } from './middleware/hash-password/hash-password.middleware';
import { ConfirmPasswordMiddleware } from './middleware/confirm-password/confirm-password.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Implements the custom middleware for hashing the User password on save and update
    consumer.apply(ConfirmPasswordMiddleware, HashPasswordMiddleware).forRoutes(
      {
        path: 'users',
        method: RequestMethod.POST,
      },
      {
        path: 'users/admin',
        method: RequestMethod.POST,
      },
      {
        path: 'users/:id',
        method: RequestMethod.PATCH,
      },
    );
  }
}
