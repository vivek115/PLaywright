# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createWarehouseReceipts.spec.js >> Warehouse receipts >> Create warehouse receipt
- Location: tests\createWarehouseReceipts.spec.js:10:5

# Error details

```
Error: expect(locator).toBeHidden() failed

Locator:  locator('.loader-new.mainloadingicon')
Expected: hidden
Received: visible
Timeout:  10000ms

Call log:
  - Expect "toBeHidden" with timeout 10000ms
  - waiting for locator('.loader-new.mainloadingicon')
    23 × locator resolved to <div class="loader-new mainloadingicon"></div>
       - unexpected value "visible"

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
  15 |         await this.page.goto(env.baseUrl, { waitUntil: 'domcontentloaded' });
> 16 |         await expect(this.locator('initialPageLoader')).toBeHidden();
     |                                                         ^ Error: expect(locator).toBeHidden() failed
  17 |         await expect(this.locator('usernameField')).toBeVisible();
  18 |     }
  19 |     async verfiyLoginPageTitle() {
  20 |         const logText = await this.locator('loginLogo').textContent();
  21 |         expect(logText).toContain(loginData.DataVerify.appTitle, "Login Page Title does not match expected value");
  22 |         console.log('Login Page Title verified successfully:', logText);
  23 | 
  24 |     }
  25 |     async validLogin() {
  26 |         await this.locator('usernameField').fill(env.username);
  27 |         await this.locator('passwordField').fill(env.password);
  28 |         const rememberMeCheckbox = this.locator('rememberMeCheckbox');
  29 |         if (!await rememberMeCheckbox.isChecked()) {
  30 |             await this.locator('rememberMeLabel').click();
  31 |         }
  32 |         await expect(rememberMeCheckbox).toBeChecked();
  33 |         const loginButton = this.locator('loginButton');
  34 |         await expect(loginButton).toBeEnabled();
  35 |         await loginButton.click();
  36 |         await utils.waitForLoaderToDisappear(this.locator('loginLoader'));
  37 |     }
  38 |     async verifyUserLandingToWarehouseOrchestratorPage() {
  39 |         const currentUrl = this.page.url();
  40 |         console.log('Current URL after login:', currentUrl);
  41 | 
  42 |         if (currentUrl == env.postLoginUrl) {
  43 | 
  44 |             console.log('User has successfully landed on the Warehouse Orchestrator page:', currentUrl);
  45 | 
  46 |         }
  47 | 
  48 |         else {
  49 |             await this.locator('navLink').click();
  50 |             await this.locator('warehouseReceiptsTitle').click();
  51 |             await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
  52 |             const currentUrl = this.page.url();
  53 |             console.log('Current URL after navigation:', currentUrl);
  54 |             expect(currentUrl).toBe(env.postLoginUrl, "User did not land on the expected Warehouse Orchestrator page");
  55 |             console.log('User has successfully landed on the Warehouse Orchestrator page:', currentUrl);
  56 |         }
  57 | 
  58 |     }
  59 | 
  60 | }
  61 | module.exports = LoginPage;
  62 | 
  63 | 
  64 | 
```