import { ConfirmPasswordMiddleware } from './confirm-password.middleware';

describe('ConfirmPasswordMiddleware', () => {
  it('should be defined', () => {
    expect(new ConfirmPasswordMiddleware()).toBeDefined();
  });
});
