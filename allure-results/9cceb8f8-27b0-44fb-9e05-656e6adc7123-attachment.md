# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> Login test
- Location: tests\loginTest.spec.js:3:1

# Error details

```
ReferenceError: expect is not defined
```

# Test source

```ts
  1  | 
  2  | const utils = require('../../utils/CommonUtils');
  3  | const LoginPageLocators = require('./loginPageLocators');
  4  | 
  5  | class LoginPage {
  6  | 
  7  |     constructor(page) {
  8  |         this.page = page;
  9  |     }
  10 | 
  11 | 
  12 |     async navigateToLoginPageURL() {
  13 |         // Use Playwright baseURL from config and wait for initial DOM readiness.
  14 |         await this.page.goto('/', {
  15 |             waitUntil: 'domcontentloaded',
  16 |             timeout: 120000,
  17 |         });
  18 |        // await this.page.pause();
  19 |     
  20 |     }
  21 | 
  22 |     async  verfiyLoginPageTitle() {
  23 |         const title = await this.page.title();
  24 |         console.log('Login Page Title:', title);
> 25 |         expect(title).toBe(' Orchestrator');
     |         ^ ReferenceError: expect is not defined
  26 |         console.log('Login Page Title verified successfully');
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