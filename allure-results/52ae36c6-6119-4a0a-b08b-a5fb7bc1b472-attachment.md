# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> Login Test >> Login with valid credentials
- Location: tests\loginTest.spec.js:6:5

# Error details

```
ReferenceError: loginPage is not defined
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { LoginPage } = require('../pages/loginPage.spec.js');
  3  | 
  4  | 
  5  | test.describe('Login Test', () => {
  6  |     test('Login with valid credentials', async ({ page }) => {  
> 7  |         await loginPage.login();
     |         ^ ReferenceError: loginPage is not defined
  8  | 
  9  |     });
  10 | });
  11 | 
  12 | 
```