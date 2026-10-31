exports.config = {
  seleniumAddress: process.env.SELENIUM_ADDRESS || 'http://127.0.0.1:9515',
  specs: ['binding.spec.js'],
  baseUrl: process.env.BASE_URL || 'http://127.0.0.1:4200',
  capabilities: {
    browserName: 'chrome',
    'goog:chromeOptions': {
      binary: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
      args: ['--headless=new', '--no-sandbox', '--disable-dev-shm-usage'],
    },
  },
  framework: 'jasmine',
  SELENIUM_PROMISE_MANAGER: false,
};
