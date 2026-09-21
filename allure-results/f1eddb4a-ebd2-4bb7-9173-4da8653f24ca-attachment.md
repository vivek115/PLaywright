# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> Login Page Tests >> should navigate to login page
- Location: tests\loginTest.spec.js:5:5

# Error details

```
ReferenceError: page is not defined
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
  8  |     constructor() {
  9  |     
  10 |     }
  11 | 
  12 |     async navigateToLoginPageURL() {
  13 |         await new Promise(resolve => setTimeout(resolve, 6000));
> 14 |         await page.goto(env.baseUrl);
     |         ^ ReferenceError: page is not defined
  15 |     }
  16 | }
  17 | 
  18 | module.exports = LoginPage;
  19 | 
  20 | 
  21 | 
```