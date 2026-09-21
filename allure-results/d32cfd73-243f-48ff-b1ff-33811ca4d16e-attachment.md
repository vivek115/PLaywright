# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createWarehouseReceipts.spec.js >> Warehouse receipts >> Create warehouse receipt
- Location: tests\createWarehouseReceipts.spec.js:10:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.dropdown-heading').first()
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('.dropdown-heading').first()

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
- checkbox "Remember Me"
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
  15 |         await this.page.goto('/', { waitUntil: 'domcontentloaded' });
  16 |         await expect(this.locator('loginLoader')).toBeHidden();
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
  28 |         const loginButton = this.locator('loginButton');
  29 |         await expect(loginButton).toBeEnabled();
  30 |         await loginButton.click();
  31 |         
  32 |     }
  33 |     async verifyUserLandingToWarehouseOrchestratorPage() {
  34 |         const wrURL = this.page.url();
  35 |         console.log('Current URL after login:', wrURL);
  36 | 
  37 |         if (wrURL === env.postLoginUrl) {
  38 |             console.log('User has successfully landed to Warehouse Orchestrator Page:', wrURL);
  39 |         }
  40 |         else {
> 41 |             await expect(this.locator('navLink').first()).toBeVisible({ timeout: 15000 });
     |                                                           ^ Error: expect(locator).toBeVisible() failed
  42 |             await this.locator('navLink').first().click();
  43 |             const dropdownHeading = await utils.getDropdownValues(this.locator('dropdownHeadingSelector'));
  44 |             console.log(dropdownHeading);
  45 |             await this.locator('warehouseReceiptsTitle').click();
  46 | 
  47 |         }
  48 |         await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
  49 |         const itemsNavText = await this.locator('itemsNav').textContent();
  50 |         console.log('Items Nav Text Raw:', itemsNavText);
  51 |         const totalItems = Number(itemsNavText?.match(/of\s+(\d+)\s+items/i)?.[1]);
  52 |         console.log('Items Nav Text:', totalItems);
  53 |     
  54 | 
  55 |     }
  56 | 
  57 | }
  58 | 
  59 | 
  60 | module.exports = LoginPage;
  61 | 
  62 | 
  63 | 
```