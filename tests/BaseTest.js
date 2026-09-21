const { test: base, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPages/loginPage');
const WRPage = require('../pages/warehouseReceipts/wrPage.js');

const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  wrPage: async ({ page }, use) => {
    await use(new WRPage(page));
  },
  testConfig: async ({}, use) => {
    const env = require('../config/env.prod.json');
    const config = {
      environment: 'prod',
      baseURL: env.baseUrl,
      postLoginUrl: env.postLoginUrl,
      username: env.username,
      password: env.password,
    };
    await use(config);
  },

});



module.exports = { test, expect };