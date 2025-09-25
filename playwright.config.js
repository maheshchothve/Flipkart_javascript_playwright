// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  retries: 1,
  use: {
    headless: false,
    screenshot: 'on', // Take screenshot for every test
    video: 'retain-on-failure',
    trace:'on-first-retry'
  },
});
