# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> Login test
- Location: tests\loginTest.spec.js:3:1

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
  17 |         // Avoid waiting for the full load event, which can be slow/flaky on this app.
  18 |         await this.page.goto('/', {
  19 |             waitUntil: 'domcontentloaded',
  20 |             timeout: 120000
  21 |         });
  22 |         await this.page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => { });
  23 |         await utils.waitForLoaderToDisappear(
  24 |             this.page.locator('loginLoader'),
  25 |             60000
  26 |         );
  27 | 
  28 |         // await this.page.pause();
  29 | 
  30 |     }
  31 | 
  32 |     async verfiyLoginPageTitle() {
  33 |         const logText = await this.locator('loginLogo').textContent();
  34 |         expect(logText).toContain(loginData.DataVerify.appTitle, "Login Page Title does not match expected value");
  35 |         console.log('Login Page Title verified successfully:', logText);
  36 | 
  37 |     }
  38 | 
  39 |     async validLogin() {
  40 |         await this.locator('usernameField').fill(env.username);
  41 |         await this.locator('passwordField').fill(env.password);
  42 |         await this.locator('rememberMeCheckbox').click();
  43 |         await this.locator('loginButton').click();
  44 | 
  45 | 
  46 | 
  47 | 
  48 |         //await this.loginButton.click();
  49 |     }
  50 | 
  51 | 
  52 | 
  53 |     async verifyUserLandingToWarehouseOrchestratorPage() {
  54 |         await utils.waitForLoaderToDisappear(this.page.locator('loginLoader'), 60000);
  55 | 
  56 |         const wrURL = this.page.url();
  57 |         console.log('Current URL after login:', wrURL);
  58 | 
  59 |         if (wrURL.includes(loginData.DataVerify.warehouseOrchestratorURL)) {
  60 |             console.log('User has successfully landed to Warehouse Orchestrator Page:', wrURL);
  61 |         }
  62 |         else {
> 63 |             await expect(this.locator('navLink').first()).toBeVisible({ timeout: 15000 });
     |                                                           ^ Error: expect(locator).toBeVisible() failed
  64 |             await this.locator('navLink').first().click();
  65 |             const dropdownHeading = await utils.getDropdownValues(this.locator('dropdownHeadingSelector'));
  66 |             console.log(dropdownHeading);
  67 |             await this.locator('warehouseReceiptsTitle').click();
  68 |             await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
  69 | 
  70 |         }
  71 |     }
  72 | }
  73 | 
  74 | module.exports = LoginPage;
  75 | 
  76 | 
  77 | 
```