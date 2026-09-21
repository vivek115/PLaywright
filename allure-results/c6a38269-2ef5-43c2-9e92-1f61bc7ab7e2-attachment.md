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
  1  | 
  2  | const env = require('../../config/env.preprod.json');
  3  | 
  4  | class LoginPage {
  5  | 
  6  |     constructor(page) {
  7  |         this.page = page;
  8  |     }
  9  | 
  10 |     async navigateToLoginPageURL() {
> 11 |         await this.page.goto(env.baseUrl);
     |                         ^ TimeoutError: page.goto: Timeout 15000ms exceeded.
  12 |     }
  13 | }
  14 | 
  15 | module.exports = LoginPage;
  16 | 
  17 | 
  18 | 
```