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
  1  | const env = require('../../config/env.preprod.json');
  2  | 
  3  | 
  4  | class LoginPage {
  5  | 
  6  |     async navigateToLoginPageURL() {
> 7  |         await page.goto(env.baseUrl);
     |         ^ ReferenceError: page is not defined
  8  |         
  9  |     }
  10 | }
  11 | 
  12 | module.exports = LoginPage;
  13 | 
  14 | 
  15 | 
  16 | 
```