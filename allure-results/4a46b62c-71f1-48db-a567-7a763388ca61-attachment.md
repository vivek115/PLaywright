# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> Login test
- Location: tests\loginTest.spec.js:3:1

# Error details

```
TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('//div[@class=\'loader-new ng-star-inserted\']') to be hidden
    63 × locator resolved to visible <div class="loader-new ng-star-inserted"></div>

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
  - generic [ref=e33]:
    - heading "Welcome" [level=3] [ref=e34]
    - paragraph [ref=e35]: Sign in to Warehouse Orchestrator
    - generic [ref=e36]:
      - generic [ref=e37]:
        - generic [ref=e42] [cursor=pointer]:
          - textbox "Email Address" [ref=e43]: demoifs@cyzerg.biz
          - generic:
            - generic: Email Address
        - generic [ref=e48] [cursor=pointer]:
          - textbox "Password" [ref=e49]: "!nt3grateDem0"
          - generic:
            - generic: Password
      - generic [ref=e51] [cursor=pointer]:
        - generic [ref=e52]:
          - checkbox "Remember Me" [checked] [ref=e53]
          - generic:
            - img
        - generic [ref=e54]: Remember Me
      - link "Forgot Password?" [ref=e55] [cursor=pointer]:
        - /url: /auth/forgotpassword
      - generic [ref=e56]:
        - button "Sign In" [disabled]: Sign In
```

# Test source

```ts
  1  | class CommonUtils {
  2  | 
  3  | 
  4  |     static async wait(seconds) {
  5  | 
  6  |         await new Promise(resolve =>
  7  |             //I promise I will complete this task in the future
  8  |             setTimeout(resolve, seconds * 1000)
  9  |             //Run something after a certain amount of time
  10 |             //resolve - The waiting time is finished. Continue the next step.
  11 |         );
  12 | 
  13 |     };
  14 | 
  15 |     static getTimeStamp() {
  16 | 
  17 |         return Date.now();
  18 | 
  19 |     }
  20 | 
  21 |     static isEmpty(value) {
  22 | 
  23 |         return value === null || value === undefined || value === "";
  24 | 
  25 |     }
  26 | 
  27 |     static async waitForLoaderToDisappear(locator) {
> 28 |     await locator.waitFor({ state: 'hidden' });
     |                   ^ TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
  29 | }
  30 | 
  31 | static async getDropdownValues(locator) {
  32 | const values = await locator.allTextContents();
  33 | console.log('Dropdown values:', values);
  34 | values.forEach((value, index) => {
  35 |     console.log(`${index + 1}: ${value.trim}`);
  36 | });
  37 | 
  38 | return values.map(value => value.trim());
  39 | }
  40 | 
  41 | }
  42 | 
  43 | module.exports = CommonUtils;
```