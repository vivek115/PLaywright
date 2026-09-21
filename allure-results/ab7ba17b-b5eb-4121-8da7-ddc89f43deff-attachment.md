# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> Login Page Tests >> should navigate to login page
- Location: tests\loginTest.spec.js:5:5

# Error details

```
TimeoutError: page.goto: Timeout 20000ms exceeded.
Call log:
  - navigating to "https://apppre.warehouseorchestrator.com/", waiting until "load"

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
  10 |     
  11 |     }
  12 | 
  13 | 
  14 |     async navigateToLoginPageURL() {
  15 | 
> 16 |         await this.page.goto(env.baseUrl);
     |                         ^ TimeoutError: page.goto: Timeout 20000ms exceeded.
  17 |     
  18 |     }
  19 | }
  20 | 
  21 | module.exports = LoginPage;
  22 | 
  23 | 
  24 | 
```