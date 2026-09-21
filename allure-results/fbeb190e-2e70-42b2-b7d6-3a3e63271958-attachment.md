# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> Login Page Tests >> should navigate to login page
- Location: tests\loginTest.spec.js:5:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://app.warehouseorchestrator.com/auth/login", waiting until "domcontentloaded"

```

# Test source

```ts
  1  | 
  2  | const env = require('../../config/env.prod.json');
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
> 16 |         await this.page.goto(env.baseUrl, {
     |                         ^ Error: page.goto: Target page, context or browser has been closed
  17 |             waitUntil: 'domcontentloaded',
  18 |             timeout: 60000
  19 |         });
  20 |     
  21 |     }
  22 | }
  23 | 
  24 | module.exports = LoginPage;
  25 | 
  26 | 
  27 | 
```