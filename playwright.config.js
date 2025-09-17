// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  retries: 1,
  use: {
    headless: false,
    //screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
});
