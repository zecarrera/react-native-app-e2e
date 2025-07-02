exports.config = {
  runner: 'local',
  specs: ['./e2e/**/*.spec.js'],
  maxInstances: 1,
  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': 'Pixel_9a',
      'appium:platformVersion': '16',
      'appium:automationName': 'UiAutomator2',
      'appium:app': 'android/app/build/outputs/apk/debug/app-debug.apk',
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
