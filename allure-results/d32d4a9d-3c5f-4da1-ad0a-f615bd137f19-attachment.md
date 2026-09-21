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
> 18 |         await this.page.goto('/')
     |                         ^ TimeoutError: page.goto: Timeout 60000ms exceeded.
  19 |         await utils.waitForLoaderToDisappear(
  20 |             this.page.locator('loginLoader'),
  21 |             60000
  22 |         );
  23 | 
  24 |         // await this.page.pause();
  25 | 
  26 |     }
  27 | 
  28 |     async verfiyLoginPageTitle() {
  29 |         const logText = await this.locator('loginLogo').textContent();
  30 |         expect(logText).toContain(loginData.DataVerify.appTitle, "Login Page Title does not match expected value");
  31 |         console.log('Login Page Title verified successfully:', logText);
  32 | 
  33 |     }
  34 | 
  35 |     async validLogin() {
  36 |         await this.locator('usernameField').fill(env.username);
  37 |         await this.locator('passwordField').fill(env.password);
  38 |         await this.locator('rememberMeCheckbox').click();
  39 |         await this.locator('loginButton').click();
  40 | 
  41 | 
  42 | 
  43 | 
  44 |         //await this.loginButton.click();
  45 |     }
  46 | 
  47 | 
  48 | 
  49 |     async verifyUserLandingToWarehouseOrchestratorPage() {
  50 |         await utils.waitForLoaderToDisappear(this.page.locator('loginLoader'), 60000);
  51 |         // await expect(this.page).toHaveURL(
  52 |         //     new RegExp(loginData.DataVerify.warehouseOrchestratorURL),
  53 |         //     { timeout: 60000 }
  54 |         // );
  55 |         const wrURL = this.page.url();
  56 |         console.log('Current URL after login:', wrURL);
  57 | 
  58 |         if (wrURL.includes(loginData.DataVerify.warehouseOrchestratorURL)) {
  59 |             console.log('User has successfully landed to Warehouse Orchestrator Page:', wrURL);
  60 |         }
  61 |         else {
  62 |             await expect(this.locator('navLink').first()).toBeVisible({ timeout: 15000 });
  63 |             await this.locator('navLink').first().click();
  64 |             const dropdownHeading = await utils.getDropdownValues(this.locator('dropdownHeadingSelector'));
  65 |             console.log(dropdownHeading);
  66 |             await this.locator('warehouseReceiptsTitle').click();
  67 |             await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
  68 | 
  69 |         }
  70 |     }
  71 | }
  72 | 
  73 | module.exports = LoginPage;
  74 | 
  75 | 
  76 | 
```