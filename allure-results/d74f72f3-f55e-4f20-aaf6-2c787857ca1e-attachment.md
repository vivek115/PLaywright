# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> Login Page Tests >> should navigate to login page
- Location: tests\loginTest.spec.js:5:5

# Error details

```
TimeoutError: page.goto: Timeout 15000ms exceeded.
Call log:
  - navigating to "https://apppre.warehouseorchestrator.com/login", waiting until "load"

```

# Test source

```ts
  1  | const env = require('../../config/env.preprod.json');
  2  | 
  3  | class LoginPage {
  4  |     constructor(page) {
  5  |         this.page = page;
  6  |     }
  7  | 
  8  |     async navigateToLoginPageURL() {
> 9  |         await this.page.goto(env.baseUrl);
     |                         ^ TimeoutError: page.goto: Timeout 15000ms exceeded.
  10 |     }
  11 | }
  12 | 
  13 | module.exports = LoginPage;
  14 | 
  15 | 
  16 | 
  17 | 
```