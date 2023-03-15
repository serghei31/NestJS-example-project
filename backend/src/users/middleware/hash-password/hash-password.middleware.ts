import { Injectable, NestMiddleware } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashPasswordMiddleware implements NestMiddleware {
  async use(req: any, res: any, next: () => void) {
    const salt = await bcrypt.genSalt();
    const password = req.body.password;
    const hash = await bcrypt.hash(password, salt);
    req.body.password = hash;
    next();
  }
}
