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
  7  | 
  8  | class LoginPage extends LocatorHelper {
  9  | 
  10 |     constructor(page) {
  11 |         super(page, LoginPageLocators);
  12 |     }
  13 | 
  14 |     async navigateToLoginPageURL() {
  15 |         // Avoid waiting for the full load event, which can be slow/flaky on this app.
  16 |         await this.page.goto('/', {
  17 |             waitUntil: 'domcontentloaded',
  18 |             timeout: 120000
  19 |         });
  20 |         await this.page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => { });
  21 |         await utils.waitForLoaderToDisappear(
  22 |             this.page.locator('loginLoader'),
  23 |             60000
  24 |         );
  25 | 
  26 |         // await this.page.pause();
  27 | 
  28 |     }
  29 |     async verfiyLoginPageTitle() {
  30 |         const logText = await this.locator('loginLogo').textContent();
  31 |         expect(logText).toContain(loginData.DataVerify.appTitle, "Login Page Title does not match expected value");
  32 |         console.log('Login Page Title verified successfully:', logText);
  33 | 
  34 |     }
  35 |     async validLogin() {
  36 |         await this.locator('usernameField').fill(env.username);
  37 |         await this.locator('passwordField').fill(env.password);
  38 |         await this.locator('rememberMeCheckbox').click();
  39 |         const loginButton = this.locator('loginButton');
  40 |         await this.locator('passwordField').press('Tab');
  41 |         await expect(loginButton).toBeEnabled({ timeout: 20000 });
  42 |         await loginButton.click();
  43 |     }
  44 |     async verifyUserLandingToWarehouseOrchestratorPage() {
  45 |         await utils.waitForLoaderToDisappear(this.page.locator('loginLoader'), 60000);
  46 | 
  47 |         await this.page.waitForURL(
  48 |             /warehouseorchestrator\.com\/(?!auth\/login).*/,
  49 |             { timeout: 60000 }
  50 |         ).catch(() => { });
  51 | 
  52 |         const wrURL = this.page.url();
  53 |         console.log('Current URL after login:', wrURL);
  54 | 
  55 |         if (wrURL.includes('/auth/login')) {
> 56 |             throw new Error(`Login did not complete. Still on auth page: ${wrURL}`);
     |                   ^ Error: Login did not complete. Still on auth page: https://app.warehouseorchestrator.com/auth/login?returnUrl=%2F
  57 |         }
  58 | 
  59 |         if (wrURL.includes(loginData.DataVerify.warehouseOrchestratorURL)) {
  60 |             console.log('User has successfully landed to Warehouse Orchestrator Page:', wrURL);
  61 |         }
  62 |         else {
  63 |             await expect(this.locator('navLink').first()).toBeVisible({ timeout: 15000 });
  64 |             await this.locator('navLink').first().click();
  65 |             const dropdownHeading = await utils.getDropdownValues(this.locator('dropdownHeadingSelector'));
  66 |             console.log(dropdownHeading);
  67 |             await this.locator('warehouseReceiptsTitle').click();
  68 |             await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
  69 | 
  70 |         }
  71 | 
  72 | 
  73 |         const itemsNavText = await this.locator('itemsNav').textContent();
  74 |         const totalItems = Number(itemsNavText?.match(/of\s+(\d+)\s+items/i)?.[1]);
  75 |         console.log('Items Nav Text:', totalItems);
  76 |         await this.page.pause();
  77 | 
  78 |     }
  79 | }
  80 | 
  81 | 
  82 | module.exports = LoginPage;
  83 | 
  84 | 
  85 | 
```