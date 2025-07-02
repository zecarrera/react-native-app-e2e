const { expect } = require('chai');

describe('Login Form', () => {
  it('should log in successfully with valid credentials', async () => {
    // Wait for the Email input
    const emailInput = await $('~emailInput');
    await emailInput.setValue('test@example.com');

    // Wait for the Password input
    const passwordInput = await $('~passwordInput');
    await passwordInput.setValue('12345');

    // Tap the Login button
    const loginButton = await $('~loginButton');
    await loginButton.click();

    // Wait for the success message
    const successMsg = await $('~successMessage');
    expect(await successMsg.isDisplayed()).to.be.true;
  });
});
