# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> Login test
- Location: tests\loginTest.spec.js:3:1

# Error details

```
Error: Login did not complete. Still on auth page: https://app.warehouseorchestrator.com/auth/login?returnUrl=%2F
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
  15 |     async navigateToLoginPageURL() {
  16 |         // Avoid waiting for the full load event, which can be slow/flaky on this app.
  17 |         await this.page.goto('/', {
  18 |             waitUntil: 'domcontentloaded',
  19 |             timeout: 120000
  20 |         });
  21 |         await this.page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => { });
  22 |         await utils.waitForLoaderToDisappear(
  23 |             this.page.locator('loginLoader'),
  24 |             60000
  25 |         );
  26 | 
  27 |         // await this.page.pause();
  28 | 
  29 |     }
  30 |     async verfiyLoginPageTitle() {
  31 |         const logText = await this.locator('loginLogo').textContent();
  32 |         expect(logText).toContain(loginData.DataVerify.appTitle, "Login Page Title does not match expected value");
  33 |         console.log('Login Page Title verified successfully:', logText);
  34 | 
  35 |     }
  36 |     async validLogin() {
  37 |         await this.locator('usernameField').fill(env.username);
  38 |         await this.locator('passwordField').fill(env.password);
  39 |         await this.locator('rememberMeCheckbox').click();
  40 |         const loginButton = this.locator('loginButton');
  41 |         await this.locator('passwordField').press('Tab');
  42 |         await expect(loginButton).toBeEnabled({ timeout: 20000 });
  43 |         await loginButton.click();
  44 |     }
  45 |     async verifyUserLandingToWarehouseOrchestratorPage() {
  46 |         await utils.waitForLoaderToDisappear(this.page.locator('loginLoader'), 60000);
  47 | 
  48 |         await this.page.waitForURL(
  49 |             /warehouseorchestrator\.com\/(?!auth\/login).*/,
  50 |             { timeout: 60000 }
  51 |         ).catch(() => { });
  52 | 
  53 |         const wrURL = this.page.url();
  54 |         console.log('Current URL after login:', wrURL);
  55 | 
  56 |         if (wrURL.includes('/auth/login')) {
> 57 |             throw new Error(`Login did not complete. Still on auth page: ${wrURL}`);
     |                   ^ Error: Login did not complete. Still on auth page: https://app.warehouseorchestrator.com/auth/login?returnUrl=%2F
  58 |         }
  59 | 
  60 |         if (wrURL.includes(loginData.DataVerify.warehouseOrchestratorURL)) {
  61 |             console.log('User has successfully landed to Warehouse Orchestrator Page:', wrURL);
  62 |         }
  63 |         else {
  64 |             await expect(this.locator('navLink').first()).toBeVisible({ timeout: 15000 });
  65 |             await this.locator('navLink').first().click();
  66 |             const dropdownHeading = await utils.getDropdownValues(this.locator('dropdownHeadingSelector'));
  67 |             console.log(dropdownHeading);
  68 |             await this.locator('warehouseReceiptsTitle').click();
  69 |             await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
  70 | 
  71 |         }
  72 | 
  73 |     }
  74 |     async verfiyWarehouseReceiptsCount() {
  75 |         const apiResponse = await apiUtil.getWRAPIResponse();
  76 |         const apiCount = apiResponse.apiCount;
  77 |         console.log('API Count:', apiCount);
  78 |         await this.page.pause();
  79 |     }
  80 | }
  81 |      
  82 | 
  83 | module.exports = LoginPage;
  84 | 
  85 | 
  86 | 
```