# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> Login test
- Location: tests\loginTest.spec.js:3:1

# Error details

```
TimeoutError: locator.textContent: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('//div//h2[contains(text(),\'Warehouse Orchestrator\')]')

```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | const utils = require('../../utils/CommonUtils');
  3  | const LocatorHelper = require('../../utils/LocatorHelper');
  4  | const LoginPageLocators = require('./loginPageLocators');
  5  | const loginData = require('../../data/loginData.json');
  6  | const env = require('../../config/env.prod.json');
  7  | const apiUtil = require('../../utils/apiUtil');
  8  | 
  9  | class LoginPage extends LocatorHelper {
  10 | 
  11 |     constructor(page) {
  12 |         super(page, LoginPageLocators);
  13 |     }
  14 | 
  15 | 
  16 |     async navigateToLoginPageURL() {
  17 |         // Use Playwright baseURL from config and wait for initial DOM readiness.
  18 |         await this.page.goto('/', {
  19 |             waitUntil: 'domcontentloaded',
  20 |             timeout: 120000,
  21 |         });
  22 |         // await this.page.pause();
  23 | 
  24 |     }
  25 | 
  26 |     async verfiyLoginPageTitle() {
> 27 |         const logText = await this.locator('loginLogo').textContent();
     |                                                         ^ TimeoutError: locator.textContent: Timeout 30000ms exceeded.
  28 |         expect(logText).toContain(loginData.DataVerify.appTitle, "Login Page Title does not match expected value");
  29 |         console.log('Login Page Title verified successfully:', logText);
  30 | 
  31 |     }
  32 | 
  33 |     async validLogin() {
  34 |         await this.locator('usernameField').fill(env.username);
  35 |         await this.locator('passwordField').fill(env.password);
  36 |         await this.locator('rememberMeCheckbox').click();
  37 |         await this.locator('loginButton').click();
  38 |         await utils.waitForLoaderToDisappear(this.locator('loginLoader'));
  39 | 
  40 | 
  41 |     
  42 |         //await this.loginButton.click();
  43 |     }
  44 | 
  45 | 
  46 | 
  47 |     async verifyUserLandingToWarehouseOrchestratorPage() {
  48 |         this.page.setDefaultTimeout(60000);
  49 |         await this.page.waitForLoadState('domcontentloaded');
  50 |         const wrURL = this.page.url();
  51 |         console.log('Current URL after login:', wrURL);
  52 |         if (wrURL.includes(loginData.DataVerify.warehouseOrchestratorURL)) {
  53 |             console.log('User has successfully landed to Warehouse Orchestrator Page:', wrURL);
  54 |         }
  55 |         else {
  56 |             await expect(this.locator('navLink').first()).toBeVisible({ timeout: 15000 });
  57 |             await this.locator('navLink').first().click();
  58 |             const dropdownHeading = await utils.getDropdownValues(this.locator('dropdownHeadingSelector'));
  59 |             console.log(dropdownHeading);
  60 |             await this.locator('warehouseReceiptsTitle').click();
  61 |             await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
  62 | 
  63 |         }
  64 |     }
  65 | }
  66 | 
  67 | module.exports = LoginPage;
  68 | 
  69 | 
  70 | 
```