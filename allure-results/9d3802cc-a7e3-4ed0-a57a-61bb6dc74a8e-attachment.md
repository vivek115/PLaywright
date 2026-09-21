# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> Login test
- Location: tests\loginTest.spec.js:3:1

# Error details

```
ReferenceError: page is not defined
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
          - textbox "Password" [ref=e47]: "!nt3grateDem0"
          - generic:
            - generic: Password
      - generic [ref=e49] [cursor=pointer]:
        - generic [ref=e50]:
          - checkbox "Remember Me" [checked] [ref=e51]
          - generic:
            - img
        - generic [ref=e52]: Remember Me
      - link "Forgot Password?" [ref=e53] [cursor=pointer]:
        - /url: /auth/forgotpassword
      - button "Sign In" [ref=e55] [cursor=pointer]
```

# Test source

```ts
  1  | 
  2  | const { expect } = require('@playwright/test');
  3  | 
  4  | async function getToken(){
> 5  |  const token = await page.evaluate(() => {
     |                ^ ReferenceError: page is not defined
  6  |     return localStorage.getItem('YOUR_AUTH_TOKEN_KEY');
  7  | });
  8  | 
  9  | console.log('Token found:', !!token);
  10 | }
  11 | 
  12 | async function response(){
  13 |     const response = await request.get(apiurl, {
  14 |     headers: {
  15 |         Authorization: `Bearer ${token}`,
  16 |         Accept: 'application/json'
  17 |     }
  18 | });
  19 | 
  20 | console.log(response.status());
  21 | console.log(await response.text());
  22 | }
  23 | 
  24 | module.exports = { getToken, response };
  25 | 
```