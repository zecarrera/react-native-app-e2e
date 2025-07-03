/*
  Detox E2E test for Login scenario (Android)
  This test assumes your login screen uses testIDs:
    - emailInput
    - passwordInput
    - loginButton
    - successMessage
*/

describe('Login Form', () => {
  beforeAll(async () => {
    await device.launchApp({ delete: true });
  });

  it('should log in successfully with valid credentials', async () => {
    await element(by.id('emailInput')).typeText('test@example.com');
    await element(by.id('passwordInput')).typeText('12345');
    await element(by.id('loginButton')).tap();
    await expect(element(by.id('successMessage'))).toBeVisible();
  });
});
