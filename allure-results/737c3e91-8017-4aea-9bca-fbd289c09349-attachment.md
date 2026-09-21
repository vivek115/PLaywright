# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> Login test
- Location: tests\loginTest.spec.js:3:1

# Error details

```
Error: locator.textContent: Test ended.
Call log:
  - waiting for locator('.login-logo')

```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | const utils = require('../../utils/CommonUtils');
  3  | const LocatorHelper = require('../../utils/LocatorHelper');
  4  | const LoginPageLocators = require('./loginPageLocators');
  5  | 
  6  | class LoginPage extends LocatorHelper {
  7  | 
  8  |     constructor(page) {
  9  |         super(page,LoginPageLocators);
  10 |     }
  11 | 
  12 | 
  13 |     async navigateToLoginPageURL() {
  14 |         // Use Playwright baseURL from config and wait for initial DOM readiness.
  15 |         await this.page.goto('/', {
  16 |             waitUntil: 'domcontentloaded',
  17 |             timeout: 120000,
  18 |         });
  19 |        // await this.page.pause();
  20 |     
  21 |     }
  22 | 
  23 |     async  verfiyLoginPageTitle() {
  24 |         const title = await this.page.title();
  25 |         console.log('Login Page Title:', title);
> 26 |         console.log(this.loginLogo.textContent());
     |                                    ^ Error: locator.textContent: Test ended.
  27 | 
  28 |     
  29 |     }
  30 | }
  31 | 
  32 | module.exports = LoginPage;
  33 | 
  34 | 
  35 | 
```