# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> Login test
- Location: tests\loginTest.spec.js:3:1

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://apppre.warehouseorchestrator.com/
Call log:
  - navigating to "https://apppre.warehouseorchestrator.com/", waiting until "domcontentloaded"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: apppre.warehouseorchestrator.com
      - text: ’s DNS address could not be found. Diagnosing the problem.
    - generic [ref=e10]:
      - paragraph
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "Try running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
          - text: .
    - generic [ref=e14]: DNS_PROBE_STARTED
  - button "Reload" [ref=e17] [cursor=pointer]
```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | const utils = require('../../utils/CommonUtils');
  3  | const LocatorHelper = require('../../utils/LocatorHelper');
  4  | const LoginPageLocators = require('./loginPageLocators');
  5  | const loginData = require('../../data/loginData.json');
  6  | const env = require('../../config/env.preprod.json');
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
> 18 |         await this.page.goto('/', {
     |                         ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://apppre.warehouseorchestrator.com/
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
  39 |         //await this.loginButton.click();
  40 |     }
  41 | 
  42 |     async verifyUserLandingToWarehouseOrchestratorPage() {
  43 |         const wrURL = this.page.url();
  44 |         console.log('Current URL after login:', wrURL);
  45 |         if (wrURL.includes(loginData.DataVerify.warehouseOrchestratorURL)) {
  46 |             console.log('User has successfully landed to Warehouse Orchestrator Page:', wrURL);
  47 |         }
  48 |         else {
  49 |             await expect(this.locator('navLink')).toBeVisible();
  50 |             await this.locator('navLink').click();
  51 |             const dropdownHeading = await utils.getDropdownValues(this.locator('dropdownHeadingSelector'));
  52 |             console.log(dropdownHeading);
  53 |             await this.locator('warehouseReceiptsTitle').click();
  54 |             await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
  55 | 
  56 |         }
  57 |         const apiResponse = await apiUtil.getAPIResponse(this.page.request, env.apiUrl);
  58 |         console.log('API Response:', apiResponse);
  59 |         await this.page.pause();
  60 | 
  61 |     }
  62 | }
  63 | 
  64 | module.exports = LoginPage;
  65 | 
  66 | 
  67 | 
```