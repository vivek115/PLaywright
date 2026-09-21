# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> Login test
- Location: tests\loginTest.spec.js:3:1

# Error details

```
TimeoutError: page.goto: Timeout 60000ms exceeded.
Call log:
  - navigating to "https://app.warehouseorchestrator.com/", waiting until "load"

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
> 18 |         await this.page.goto('/', {
     |                         ^ TimeoutError: page.goto: Timeout 60000ms exceeded.
  19 |             timeout: 60000,
  20 |         });
  21 | 
  22 |         await utils.waitForLoaderToDisappear(
  23 |             this.page.locator('loginLoader'),
  24 |             60000
  25 |         );
  26 | 
  27 |         // await this.page.pause();
  28 | 
  29 |     }
  30 | 
  31 |     async verfiyLoginPageTitle() {
  32 |         const logText = await this.locator('loginLogo').textContent();
  33 |         expect(logText).toContain(loginData.DataVerify.appTitle, "Login Page Title does not match expected value");
  34 |         console.log('Login Page Title verified successfully:', logText);
  35 | 
  36 |     }
  37 | 
  38 |     async validLogin() {
  39 |         await this.locator('usernameField').fill(env.username);
  40 |         await this.locator('passwordField').fill(env.password);
  41 |         await this.locator('rememberMeCheckbox').click();
  42 |         await this.locator('loginButton').click();
  43 | 
  44 | 
  45 | 
  46 | 
  47 |         //await this.loginButton.click();
  48 |     }
  49 | 
  50 | 
  51 | 
  52 |     async verifyUserLandingToWarehouseOrchestratorPage() {
  53 |         await utils.waitForLoaderToDisappear(this.page.locator('loginLoader'), 60000);
  54 |         // await expect(this.page).toHaveURL(
  55 |         //     new RegExp(loginData.DataVerify.warehouseOrchestratorURL),
  56 |         //     { timeout: 60000 }
  57 |         // );
  58 |         const wrURL = this.page.url();
  59 |         console.log('Current URL after login:', wrURL);
  60 | 
  61 |         if (wrURL.includes(loginData.DataVerify.warehouseOrchestratorURL)) {
  62 |             console.log('User has successfully landed to Warehouse Orchestrator Page:', wrURL);
  63 |         }
  64 |         else {
  65 |             await expect(this.locator('navLink').first()).toBeVisible({ timeout: 15000 });
  66 |             await this.locator('navLink').first().click();
  67 |             const dropdownHeading = await utils.getDropdownValues(this.locator('dropdownHeadingSelector'));
  68 |             console.log(dropdownHeading);
  69 |             await this.locator('warehouseReceiptsTitle').click();
  70 |             await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
  71 | 
  72 |         }
  73 |     }
  74 | }
  75 | 
  76 | module.exports = LoginPage;
  77 | 
  78 | 
  79 | 
```