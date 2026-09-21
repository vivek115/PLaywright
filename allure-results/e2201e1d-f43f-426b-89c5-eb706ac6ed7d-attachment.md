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
  - navigating to "https://apppre.warehouseorchestrator.com/login", waiting until "load"

```

# Test source

```ts
  1  | const env = require('../config/env.preprod.json');
  2  | 
  3  | class LoginPage {
  4  |     constructor(page) {
  5  |         this.page = page;
  6  |         this.baseUrl = env.baseUrl;
  7  |     }
  8  | 
  9  |     async navigateToLoginPageURL() {
> 10 |         await this.page.goto(this.baseUrl);
     |                         ^ Error: page.goto: Target page, context or browser has been closed
  11 |     }
  12 | }
  13 | 
  14 | module.exports = LoginPage;
  15 | 
```