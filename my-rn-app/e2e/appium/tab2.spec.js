const { remote } = require('webdriverio');
const assert = require('assert');

describe('Tab Two Screen', () => {
  beforeEach(async () => {
    // Switch to Tab Two before each test
    const tabTwoButton = await $('~Tab Two');
    await tabTwoButton.click();
  });

  it('should open and close the modal, and show success message', async () => {
    const modalButton = await $('~Modal');
    await modalButton.click();
    const emailInput = await $('//android.widget.EditText | //XCUIElementTypeTextField');
    await emailInput.setValue('test@example.com');
    const saveButton = await $('~Save');
    await saveButton.click();
    const successMsg = await $('//*[contains(@text, "Saved successfully") or contains(@label, "Saved successfully")]');
    assert(await successMsg.isDisplayed(), 'Success message should be visible');
  });

  it('should open external link in browser', async () => {
    const externalLinkButton = await $('~expoExternalWebBrowserCall');
    await externalLinkButton.click();
  });

  it('should open and close the fake auth webview', async () => {
    const webviewButton = await $('~Fake Auth WebView');
    await webviewButton.click();
    // Wait for WebView to appear
    const webview = await $('//android.webkit.WebView | //XCUIElementTypeWebView');
    assert(await webview.isDisplayed(), 'WebView should be visible');
  });
});
