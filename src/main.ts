import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Use Global Prefix for the whole application
  app.setGlobalPrefix('/api/v1');
  //Register the Session
  app.use(
    session({
      name: 'ALBINE_SESSION_ID',
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60 * 60 * 24,
        //secure: true  !!! ACTIVATE this on server when HTTPS is enabled
      },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}
bootstrap();
