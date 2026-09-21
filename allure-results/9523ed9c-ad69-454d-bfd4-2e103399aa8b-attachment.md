# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> Login test
- Location: tests\loginTest.spec.js:3:1

# Error details

```
TimeoutError: locator.click: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('//input[@id=\'username\']')

```

# Page snapshot

```yaml
- generic [ref=e6]:
  - generic [ref=e10]:
    - generic [ref=e11]:
      - img "Warehouse Orchestrator" [ref=e13]
      - heading "Warehouse Orchestrator" [level=2] [ref=e14]
    - paragraph [ref=e15]: Warehouse Orchestrator is an open ecosystem of software modules that allows warehouses and DCs to orchestrate their operations end to end without the need to migrate from their current software solutions. Our modules include Dimensioning, Supply Chain Portal, Workflows, and more.
    - list [ref=e17]:
      - listitem [ref=e18]: "Connect with us on:"
      - listitem [ref=e19]:
        - link "LinkedIn" [ref=e20] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/cyzerg/
          - img [ref=e21]
          - text: LinkedIn
      - listitem [ref=e22]:
        - link "Twitter" [ref=e23] [cursor=pointer]:
          - /url: https://twitter.com/cyzergllc
          - img [ref=e24]
          - text: Twitter
      - listitem [ref=e25]:
        - link "Facebook" [ref=e26] [cursor=pointer]:
          - /url: https://www.facebook.com/cyzerg
          - img [ref=e27]
          - text: Facebook
  - generic [ref=e31]:
    - heading "Welcome" [level=3] [ref=e32]
    - paragraph [ref=e33]: Sign in to Warehouse Orchestrator
    - generic [ref=e34]:
      - generic [ref=e35]:
        - generic [ref=e40] [cursor=pointer]:
          - textbox "Email Address" [active] [ref=e41]
          - generic:
            - generic: Email Address
        - generic [ref=e46] [cursor=pointer]:
          - textbox "Password" [ref=e47]
          - generic:
            - generic: Password
      - generic [ref=e49] [cursor=pointer]:
        - generic [ref=e50]:
          - checkbox "Remember Me" [ref=e51]
          - generic:
            - img
        - generic [ref=e52]: Remember Me
      - link "Forgot Password?" [ref=e53] [cursor=pointer]:
        - /url: /auth/forgotpassword
      - generic [ref=e54]:
        - button "Sign In" [disabled]: Sign In
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
  11 |         super(page,LoginPageLocators);
  12 |     }
  13 | 
  14 | 
  15 |     async navigateToLoginPageURL() {
  16 |         // Use Playwright baseURL from config and wait for initial DOM readiness.
  17 |         await this.page.goto('/', {
  18 |             waitUntil: 'domcontentloaded',
  19 |             timeout: 120000,
  20 |         });
  21 |        // await this.page.pause();
  22 |     
  23 |     }
  24 | 
  25 |     async  verfiyLoginPageTitle() {
  26 |         const logText = await this.loginLogo.textContent();
  27 |         expect(logText).toContain(loginData.DataVerify.appTitle,"Login Page Title does not match expected value");
  28 |         console.log('Login Page Title verified successfully:', logText);
  29 |     
  30 |     }
  31 | 
  32 |     async validLogin() {
> 33 |         await this.usernameField.click();
     |                                  ^ TimeoutError: locator.click: Timeout 30000ms exceeded.
  34 |         await this.usernameField.fill(env.username);
  35 |         await this.passwordField.click();
  36 |         await this.passwordField.fill(env.password);
  37 |         await this.page.pause();
  38 |         //await this.loginButton.click();
  39 |     }
  40 | }
  41 | 
  42 | module.exports = LoginPage;
  43 | 
  44 | 
  45 | 
```