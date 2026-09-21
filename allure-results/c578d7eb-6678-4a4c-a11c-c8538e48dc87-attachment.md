# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createWarehouseReceipts.spec.js >> Warehouse receipts >> Create warehouse receipt
- Location: tests\createWarehouseReceipts.spec.js:10:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://app.warehouseorchestrator.com/wms/warehouse/receipts"
Received: "https://app.warehouseorchestrator.com/auth/login"
Timeout:  10000ms

Call log:
  - Expect "toHaveURL" with timeout 10000ms
    23 × unexpected value "https://app.warehouseorchestrator.com/auth/login"

```

```yaml
- img "Warehouse Orchestrator"
- heading "Warehouse Orchestrator" [level=2]
- paragraph: Warehouse Orchestrator is an open ecosystem of software modules that allows warehouses and DCs to orchestrate their operations end to end without the need to migrate from their current software solutions. Our modules include Dimensioning, Supply Chain Portal, Workflows, and more.
- list:
  - listitem: "Connect with us on:"
  - listitem:
    - link "LinkedIn":
      - /url: https://www.linkedin.com/company/cyzerg/
      - img
      - text: LinkedIn
  - listitem:
    - link "Twitter":
      - /url: https://twitter.com/cyzergllc
      - img
      - text: Twitter
  - listitem:
    - link "Facebook":
      - /url: https://www.facebook.com/cyzerg
      - img
      - text: Facebook
- heading "Welcome" [level=3]
- paragraph: Sign in to Warehouse Orchestrator
- textbox "Email Address": demoifs@cyzerg.biz
- text: Email Address
- textbox "Password": "!nt3grateDem0"
- text: Password
- checkbox "Remember Me" [checked]
- text: Remember Me
- link "Forgot Password?":
  - /url: /auth/forgotpassword
- button "Sign In" [disabled]
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
  35 | 
> 36 |         await expect(this.page).toHaveURL(env.postLoginUrl);
     |                                 ^ Error: expect(page).toHaveURL(expected) failed
  37 | 
  38 |     }
  39 |     async verifyUserLandingToWarehouseOrchestratorPage() {
  40 | 
  41 |         const wrURL = this.page.url();
  42 |         console.log('Current URL after login:', wrURL);
  43 | 
  44 |         if (wrURL === env.postLoginUrl) {
  45 |             console.log('User has successfully landed to Warehouse Orchestrator Page:', wrURL);
  46 |         }
  47 |         else {
  48 |             await expect(this.locator('navLink').first()).toBeVisible({ timeout: 15000 });
  49 |             await this.locator('navLink').first().click();
  50 |             const dropdownHeading = await utils.getDropdownValues(this.locator('dropdownHeadingSelector'));
  51 |             console.log(dropdownHeading);
  52 |             await this.locator('warehouseReceiptsTitle').click();
  53 | 
  54 |         }
  55 |         await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
  56 |         const itemsNavText = await this.locator('itemsNav').textContent();
  57 |         console.log('Items Nav Text Raw:', itemsNavText);
  58 |         const totalItems = Number(itemsNavText?.match(/of\s+(\d+)\s+items/i)?.[1]);
  59 |         console.log('Items Nav Text:', totalItems);
  60 |         await this.page.pause();
  61 | 
  62 | 
  63 |     }
  64 | 
  65 | }
  66 | 
  67 | 
  68 | module.exports = LoginPage;
  69 | 
  70 | 
  71 | 
```