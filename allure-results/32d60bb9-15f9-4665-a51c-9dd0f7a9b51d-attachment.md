# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createWarehouseReceipts.spec.js >> Warehouse receipts >> Create warehouse receipt
- Location: tests\createWarehouseReceipts.spec.js:10:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://app.warehouseorchestrator.com/auth/login
Call log:
  - navigating to "https://app.warehouseorchestrator.com/auth/login", waiting until "domcontentloaded"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e5]:
    - heading "Press space to play" [level=1] [ref=e6]
    - generic [ref=e7]:
      - paragraph [ref=e8]: "Try:"
      - list [ref=e9]:
        - listitem [ref=e10]: Checking the network cables, modem, and router
        - listitem [ref=e11]: Reconnecting to Wi-Fi
        - listitem [ref=e12]:
          - link "Running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e14]: ERR_INTERNET_DISCONNECTED
  - application "Dino game, press space to play" [ref=e16]
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
> 15 |         await this.page.goto(env.baseUrl, { waitUntil: 'domcontentloaded' });
     |                         ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://app.warehouseorchestrator.com/auth/login
  16 |         await expect(this.locator('usernameField')).toBeVisible();
  17 |     }
  18 |     async verfiyLoginPageTitle() {
  19 |         const logText = await this.locator('loginLogo').textContent();
  20 |         expect(logText).toContain(loginData.DataVerify.appTitle, "Login Page Title does not match expected value");
  21 |         console.log('Login Page Title verified successfully:', logText);
  22 | 
  23 |     }
  24 |     async validLogin() {
  25 |         await this.locator('usernameField').fill(env.username);
  26 |         await this.locator('passwordField').fill(env.password);
  27 |         const rememberMeCheckbox = this.locator('rememberMeCheckbox');
  28 |         if (!await rememberMeCheckbox.isChecked()) {
  29 |             await this.locator('rememberMeLabel').click();
  30 |         }
  31 |         await expect(rememberMeCheckbox).toBeChecked();
  32 |         const loginButton = this.locator('loginButton');
  33 |         await expect(loginButton).toBeEnabled();
  34 |         await loginButton.click();
  35 |         await utils.waitForLoaderToDisappear(this.locator('loginLoader'));
  36 |     }
  37 |     async verifyUserLandingToWarehouseOrchestratorPage() {
  38 |         const currentUrl = this.page.url();
  39 |         console.log('Current URL after login:', currentUrl);
  40 | 
  41 |         if (currentUrl == env.postLoginUrl) {
  42 | 
  43 |             console.log('User has successfully landed on the Warehouse Orchestrator page:', currentUrl);
  44 | 
  45 |         }
  46 | 
  47 |         else {
  48 |             await this.locator('navLink').click();
  49 |             await this.locator('warehouseReceiptsTitle').click();
  50 |             await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
  51 |             const currentUrl = this.page.url();
  52 |             console.log('Current URL after navigation:', currentUrl);
  53 |             expect(currentUrl).toBe(env.postLoginUrl, "User did not land on the expected Warehouse Orchestrator page");
  54 |             console.log('User has successfully landed on the Warehouse Orchestrator page:', currentUrl);
  55 |         }
  56 | 
  57 |     }
  58 | 
  59 | }
  60 | module.exports = LoginPage;
  61 | 
  62 | 
  63 | 
```