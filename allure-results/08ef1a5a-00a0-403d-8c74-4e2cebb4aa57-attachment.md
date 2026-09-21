# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> Login test
- Location: tests\loginTest.spec.js:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//input[@formcontrolname=\'email\']')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('//input[@formcontrolname=\'email\']')

```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | const utils = require('../../utils/CommonUtils');
  3  | const LocatorHelper = require('../../utils/LocatorHelper');
  4  | const LoginPageLocators = require('./loginPageLocators');
  5  | const loginData = require('../../data/loginData.json');
  6  | const env = require('../../config/env.prod.json');
  7  | 
  8  | class LoginPage extends LocatorHelper {
  9  | 
  10 |     constructor(page) {
  11 |         super(page, LoginPageLocators);
  12 |     }
  13 | 
  14 |     async navigateToLoginPageURL() {
  15 |         await this.page.goto('/', { waitUntil: 'domcontentloaded' });
> 16 |         await expect(this.locator('usernameField')).toBeVisible();
     |                                                     ^ Error: expect(locator).toBeVisible() failed
  17 |     }
  18 |     async verfiyLoginPageTitle() {
  19 |         const logText = await this.locator('loginLogo').textContent();
  20 |         expect(logText).toContain(loginData.DataVerify.appTitle, "Login Page Title does not match expected value");
  21 |         console.log('Login Page Title verified successfully:', logText);
  22 | 
  23 |     }
  24 |     async validLogin() {
  25 |         await this.locator('usernameField').fill(env.username);
  26 |         await this.locator('passwordField').fill(env.password);
  27 |         const loginButton = this.locator('loginButton');
  28 |         await expect(loginButton).toBeEnabled();
  29 |         await loginButton.click();
  30 |         await expect(this.page).toHaveURL(env.postLoginUrl);
  31 |         
  32 |     }
  33 |     async verifyUserLandingToWarehouseOrchestratorPage() {
  34 |         const wrURL = this.page.url();
  35 |         console.log('Current URL after login:', wrURL);
  36 | 
  37 |         expect(wrURL).toBe(env.postLoginUrl);
  38 |         console.log('User has successfully landed to Warehouse Orchestrator Page:', wrURL);
  39 |     }
  40 | 
  41 | }
  42 | 
  43 | 
  44 | module.exports = LoginPage;
  45 | 
  46 | 
  47 | 
```