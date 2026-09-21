# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> Login test
- Location: tests\loginTest.spec.js:3:1

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "https://app.warehouseorchestrator.com/wms/warehouse/receipts"
Received string:    "https://app.warehouseorchestrator.com/auth/login?returnUrl=%2F"
```

# Page snapshot

```yaml
- generic [ref=e6]:
  - generic [ref=e10]:
    - generic [ref=e11]:
      - img "Warehouse Orchestrator" [ref=e13]
      - heading "Warehouse Orchestrator" [level=2] [ref=e14]
    - paragraph [ref=e15]: Warehouse Orchestrator is an open ecosystem of software modules that allows warehouses and DCs to orchestrate their operations end to end without the need to migrate from their current software solutions. Our modules include Dimensioning, Supply Chain Portal, Workflows, and more.
    - list [ref=e17]:
      - listitem [ref=e18]: "Connect with us on:"
      - listitem [ref=e19]:
        - link "LinkedIn" [ref=e20] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/cyzerg/
          - img [ref=e21]
          - text: LinkedIn
      - listitem [ref=e22]:
        - link "Twitter" [ref=e23] [cursor=pointer]:
          - /url: https://twitter.com/cyzergllc
          - img [ref=e24]
          - text: Twitter
      - listitem [ref=e25]:
        - link "Facebook" [ref=e26] [cursor=pointer]:
          - /url: https://www.facebook.com/cyzerg
          - img [ref=e27]
          - text: Facebook
  - generic [ref=e33]:
    - heading "Welcome" [level=3] [ref=e34]
    - paragraph [ref=e35]: Sign in to Warehouse Orchestrator
    - generic [ref=e36]:
      - generic [ref=e37]:
        - generic [ref=e42] [cursor=pointer]:
          - textbox "Email Address" [ref=e43]: demoifs@cyzerg.biz
          - generic:
            - generic: Email Address
        - generic [ref=e48] [cursor=pointer]:
          - textbox "Password" [ref=e49]: "!nt3grateDem0"
          - generic:
            - generic: Password
      - generic [ref=e51] [cursor=pointer]:
        - generic [ref=e52]:
          - checkbox "Remember Me" [checked] [ref=e53]
          - generic:
            - img
        - generic [ref=e54]: Remember Me
      - link "Forgot Password?" [ref=e55] [cursor=pointer]:
        - /url: /auth/forgotpassword
      - generic [ref=e56]:
        - button "Sign In" [disabled]: Sign In
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
  38 |         
  39 | 
  40 | 
  41 |     
  42 |         //await this.loginButton.click();
  43 |     }
  44 | 
  45 | 
  46 | 
  47 |     async verifyUserLandingToWarehouseOrchestratorPage() {
  48 |         await utils.waitForLoaderToDisappear(this.locator('loginLoader'));
  49 |         await this.page.waitForLoadState('domcontentloaded');
  50 |         const wrURL = this.page.url();
  51 |          console.log('Current URL after login:', wrURL);
> 52 |         await expect(wrURL).toContain(loginData.DataVerify.warehouseOrchestratorURL, "User has not landed to Warehouse Orchestrator Page");
     |                             ^ Error: expect(received).toContain(expected) // indexOf
  53 |        
  54 |         // if (wrURL.includes(loginData.DataVerify.warehouseOrchestratorURL)) {
  55 |         //     console.log('User has successfully landed to Warehouse Orchestrator Page:', wrURL);
  56 |         // }
  57 |         // else {
  58 |         //     await expect(this.locator('navLink').first()).toBeVisible({ timeout: 15000 });
  59 |         //     await this.locator('navLink').first().click();
  60 |         //     const dropdownHeading = await utils.getDropdownValues(this.locator('dropdownHeadingSelector'));
  61 |         //     console.log(dropdownHeading);
  62 |         //     await this.locator('warehouseReceiptsTitle').click();
  63 |         //     await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
  64 | 
  65 |         // }
  66 |     }
  67 | }
  68 | 
  69 | module.exports = LoginPage;
  70 | 
  71 | 
  72 | 
```