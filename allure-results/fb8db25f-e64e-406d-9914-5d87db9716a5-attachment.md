# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> Login test
- Location: tests\loginTest.spec.js:3:1

# Error details

```
TimeoutError: locator.setChecked: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('input[type=\'checkbox\']')
    - locator resolved to <input tabindex="0" type="checkbox" id="mat-checkbox-1-input" class="mat-checkbox-input cdk-visually-hidden"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <label for="mat-checkbox-1-input" class="mat-checkbox-layout">…</label> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <label for="mat-checkbox-1-input" class="mat-checkbox-layout">…</label> intercepts pointer events
    - retrying click action
      - waiting 100ms
    55 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <label for="mat-checkbox-1-input" class="mat-checkbox-layout">…</label> intercepts pointer events
     - retrying click action
       - waiting 500ms

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
          - textbox "Email Address" [ref=e41]: demoifs@cyzerg.biz
          - generic:
            - generic: Email Address
        - generic [ref=e46] [cursor=pointer]:
          - textbox "Password" [active] [ref=e47]: "!nt3grateDem0"
          - img [ref=e49]
          - generic:
            - generic: Password
      - generic [ref=e51] [cursor=pointer]:
        - generic [ref=e52]:
          - checkbox "Remember Me" [ref=e53]
          - generic:
            - img
        - generic [ref=e54]: Remember Me
      - link "Forgot Password?" [ref=e55] [cursor=pointer]:
        - /url: /auth/forgotpassword
      - button "Sign In" [ref=e57] [cursor=pointer]
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
  15 |         // Avoid waiting for the full load event, which can be slow/flaky on this app.
  16 |         await this.page.goto('/', {
  17 |             waitUntil: 'domcontentloaded',
  18 |             timeout: 120000
  19 |         });
  20 |         await this.page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => { });
  21 |         await utils.waitForLoaderToDisappear(
  22 |             this.page.locator('loginLoader'),
  23 |             60000
  24 |         );
  25 | 
  26 |         // await this.page.pause();
  27 | 
  28 |     }
  29 |     async verfiyLoginPageTitle() {
  30 |         const logText = await this.locator('loginLogo').textContent();
  31 |         expect(logText).toContain(loginData.DataVerify.appTitle, "Login Page Title does not match expected value");
  32 |         console.log('Login Page Title verified successfully:', logText);
  33 | 
  34 |     }
  35 |     async validLogin() {
  36 |         await this.locator('usernameField').fill(env.username);
  37 |         await this.locator('passwordField').fill(env.password);
> 38 |         await this.locator('rememberMeCheckbox').setChecked(true);
     |                                                  ^ TimeoutError: locator.setChecked: Timeout 30000ms exceeded.
  39 |         const loginButton = this.locator('loginButton');
  40 |         await expect(loginButton).toBeEnabled({ timeout: 20000 });
  41 |         await loginButton.click();
  42 |         await expect(this.page).not.toHaveURL(/\/auth\/login/, { timeout: 60000 });
  43 |     }
  44 |     async verifyUserLandingToWarehouseOrchestratorPage() {
  45 |         const wrURL = this.page.url();
  46 |         console.log('Current URL after login:', wrURL);
  47 | 
  48 |         if (wrURL.includes(loginData.DataVerify.warehouseOrchestratorURL)) {
  49 |             console.log('User has successfully landed to Warehouse Orchestrator Page:', wrURL);
  50 |         }
  51 |         else {
  52 |             await expect(this.locator('navLink').first()).toBeVisible({ timeout: 15000 });
  53 |             await this.locator('navLink').first().click();
  54 |             const dropdownHeading = await utils.getDropdownValues(this.locator('dropdownHeadingSelector'));
  55 |             console.log(dropdownHeading);
  56 |             await this.locator('warehouseReceiptsTitle').click();
  57 | 
  58 |         }
  59 |         await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
  60 |         const itemsNavText = await this.locator('itemsNav').textContent();
  61 |         console.log('Items Nav Text Raw:', itemsNavText);
  62 |         const totalItems = Number(itemsNavText?.match(/of\s+(\d+)\s+items/i)?.[1]);
  63 |         console.log('Items Nav Text:', totalItems);
  64 |     
  65 | 
  66 |     }
  67 | 
  68 | }
  69 | 
  70 | 
  71 | module.exports = LoginPage;
  72 | 
  73 | 
  74 | 
```