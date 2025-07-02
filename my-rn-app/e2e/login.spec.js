const { expect } = require('chai');

describe('Login Form', () => {
  it('should log in successfully with valid credentials', async () => {
    const emailInput = await $('~emailInput');
    await emailInput.setValue('test@example.com');

    const passwordInput = await $('~passwordInput');
    await passwordInput.setValue('12345');

    const loginButton = await $('~loginButton');
    await loginButton.click();

    const successMsg = await $('~successMessage');
    expect(await successMsg.isDisplayed()).to.be.true;
  });
});
