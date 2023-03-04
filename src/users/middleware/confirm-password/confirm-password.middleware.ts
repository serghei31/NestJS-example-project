import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class ConfirmPasswordMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const password = req.body.password;
    const passwordConfirm = req.body.passwordConfirm;
    if (!passwordConfirm)
      throw new HttpException(
        'passwordsConfirm is a required field',
        HttpStatus.BAD_REQUEST,
      );
    if (password !== passwordConfirm)
      throw new HttpException('passwords do not match', HttpStatus.BAD_REQUEST);
    next();
  }
}
