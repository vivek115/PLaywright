# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createWarehouseReceipts.spec.js >> Warehouse receipts >> Create warehouse receipt
- Location: tests\createWarehouseReceipts.spec.js:10:5

# Error details

```
Error: expect(page).not.toHaveURL(expected) failed

Expected pattern: not /\/auth\/login/
Received string: "https://app.warehouseorchestrator.com/auth/login?returnUrl=%2F"
Timeout: 60000ms

Call log:
  - Expect "not toHaveURL" with timeout 60000ms
    120 × unexpected value "https://app.warehouseorchestrator.com/auth/login?returnUrl=%2F"

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
- button "Sign In"
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
  38 |         const rememberMeCheckbox = this.locator('rememberMeCheckbox');
  39 |         if (!await rememberMeCheckbox.isChecked()) {
  40 |             await this.locator('rememberMeLabel').click();
  41 |         }
  42 |         await expect(rememberMeCheckbox).toBeChecked();
  43 |         const loginButton = this.locator('loginButton');
  44 |         await expect(loginButton).toBeEnabled({ timeout: 20000 });
  45 |         await loginButton.click();
> 46 |         await expect(this.page).not.toHaveURL(/\/auth\/login/, { timeout: 60000 });
     |                                     ^ Error: expect(page).not.toHaveURL(expected) failed
  47 |     }
  48 |     async verifyUserLandingToWarehouseOrchestratorPage() {
  49 |         const wrURL = this.page.url();
  50 |         console.log('Current URL after login:', wrURL);
  51 | 
  52 |         if (wrURL.includes(loginData.DataVerify.warehouseOrchestratorURL)) {
  53 |             console.log('User has successfully landed to Warehouse Orchestrator Page:', wrURL);
  54 |         }
  55 |         else {
  56 |             await expect(this.locator('navLink').first()).toBeVisible({ timeout: 15000 });
  57 |             await this.locator('navLink').first().click();
  58 |             const dropdownHeading = await utils.getDropdownValues(this.locator('dropdownHeadingSelector'));
  59 |             console.log(dropdownHeading);
  60 |             await this.locator('warehouseReceiptsTitle').click();
  61 | 
  62 |         }
  63 |         await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
  64 |         const itemsNavText = await this.locator('itemsNav').textContent();
  65 |         console.log('Items Nav Text Raw:', itemsNavText);
  66 |         const totalItems = Number(itemsNavText?.match(/of\s+(\d+)\s+items/i)?.[1]);
  67 |         console.log('Items Nav Text:', totalItems);
  68 |     
  69 | 
  70 |     }
  71 | 
  72 | }
  73 | 
  74 | 
  75 | module.exports = LoginPage;
  76 | 
  77 | 
  78 | 
```