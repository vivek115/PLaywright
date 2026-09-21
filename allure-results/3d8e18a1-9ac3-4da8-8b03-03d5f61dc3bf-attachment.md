# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> Login Page Tests >> should navigate to login page
- Location: tests\loginTest.spec.js:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://apppre.warehouseorchestrator.com/auth/login?returnUrl=%2F", waiting until "domcontentloaded"

```

# Test source

```ts
  1  | 
  2  | const env = require('../../config/env.preprod.json');
  3  | const utils = require('../../utils/CommonUtils');
  4  | const LoginPageLocators = require('./loginPageLocators');
  5  | 
  6  | class LoginPage {
  7  | 
  8  |     constructor(page) {
  9  |         this.page = page;
  10 |     }
  11 | 
  12 |     async navigateToLoginPageURL() {
> 13 |         await this.page.goto(env.baseUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
     |                         ^ Error: page.goto: Test timeout of 30000ms exceeded.
  14 |         await utils.waitForLoaderToDisappear(this.page, LoginPageLocators.loginLoader);
  15 |     }
  16 | }
  17 | 
  18 | module.exports = LoginPage;
  19 | 
  20 | 
  21 | 
```