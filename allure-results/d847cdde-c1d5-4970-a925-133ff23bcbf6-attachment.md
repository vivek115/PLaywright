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

Locator: locator('//div[@class=\'dropdown-heading ng-star-inserted\']')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//div[@class=\'dropdown-heading ng-star-inserted\']')

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
  17 |         // Use Playwright baseURL from config and wait for initial DOM readiness.
  18 |         await this.page.goto('/', {
  19 |             waitUntil: 'domcontentloaded',
  20 |             timeout: 120000,
  21 |         });
  22 |         // await this.page.pause();
  23 | 
  24 |     }
  25 | 
  26 |     async verfiyLoginPageTitle() {
  27 |         const logText = await this.locator('loginLogo').textContent();
  28 |         expect(logText).toContain(loginData.DataVerify.appTitle, "Login Page Title does not match expected value");
  29 |         console.log('Login Page Title verified successfully:', logText);
  30 | 
  31 |     }
  32 | 
  33 |     async validLogin() {
  34 |         await this.locator('usernameField').fill(env.username);
  35 |         await this.locator('passwordField').fill(env.password);
  36 |         await this.locator('rememberMeCheckbox').click();
  37 |         await this.locator('loginButton').click();
  38 |         await utils.waitForLoaderToDisappear(this.locator('loginLoader'));
  39 | 
  40 | 
  41 |     
  42 |         //await this.loginButton.click();
  43 |     }
  44 | 
  45 | 
  46 | 
  47 |     async verifyUserLandingToWarehouseOrchestratorPage() {
  48 |         const wrURL = this.page.url();
  49 |         console.log('Current URL after login:', wrURL);
  50 |         if (wrURL.includes(loginData.DataVerify.warehouseOrchestratorURL)) {
  51 |             console.log('User has successfully landed to Warehouse Orchestrator Page:', wrURL);
  52 |         }
  53 |         else {
> 54 |             await expect(this.locator('navLink')).toBeVisible();
     |                                                   ^ Error: expect(locator).toBeVisible() failed
  55 |             await this.locator('navLink').click();
  56 |             const dropdownHeading = await utils.getDropdownValues(this.locator('dropdownHeadingSelector'));
  57 |             console.log(dropdownHeading);
  58 |             await this.locator('warehouseReceiptsTitle').click();
  59 |             await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
  60 | 
  61 |         }
  62 | 
  63 |         await this.page.pause();
  64 | 
  65 |     }
  66 | }
  67 | 
  68 | module.exports = LoginPage;
  69 | 
  70 | 
  71 | 
```