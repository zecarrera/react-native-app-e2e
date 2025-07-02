exports.config = {
  runner: 'local',
  specs: ['./e2e/**/*.spec.js'],
  maxInstances: 1,
  capabilities: [
    {
      platformName: 'iOS',
      'appium:deviceName': 'iPhone 16 Pro',
      'appium:platformVersion': '18.5',
      'appium:automationName': 'XCUITest',
      'appium:app': 'ios/build/Build/Products/Debug-iphonesimulator/myrnapp.app',
      'appium:autoGrantPermissions': true,
    }
  ],
  logLevel: 'info',
  framework: 'mocha',
  reporters: ['spec'],
  services: ['appium'],
  mochaOpts: {
    timeout: 60000
  },
};
