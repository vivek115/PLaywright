# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> Login test
- Location: tests\loginTest.spec.js:3:1

# Error details

```
Error: response(request, apiurl, token) requires a non-empty token
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
  1  | 
  2  | async function getToken(page) {
  3  |     if (!page) {
  4  |         throw new Error('getToken(page) requires a Playwright page instance');
  5  |     }
  6  | 
  7  |     const token = await page.evaluate(() => {
  8  |         const tokenKeys = [
  9  |             'token',
  10 |             'access_token',
  11 |             'accessToken',
  12 |             'id_token',
  13 |             'idToken',
  14 |             'jwt',
  15 |             'authToken',
  16 |             'bearerToken'
  17 |         ];
  18 | 
  19 |         for (const key of tokenKeys) {
  20 |             const fromLocal = localStorage.getItem(key);
  21 |             if (fromLocal) {
  22 |                 return fromLocal;
  23 |             }
  24 | 
  25 |             const fromSession = sessionStorage.getItem(key);
  26 |             if (fromSession) {
  27 |                 return fromSession;
  28 |             }
  29 |         }
  30 | 
  31 |         return null;
  32 |     });
  33 | 
  34 |     console.log('Token found:', !!token);
  35 |     return token;
  36 | }
  37 | 
  38 | async function response(request, apiurl, token) {
  39 |     if (!request) {
  40 |         throw new Error('response(request, apiurl, token) requires a Playwright request context');
  41 |     }
  42 | 
  43 |     if (!apiurl) {
  44 |         throw new Error('response(request, apiurl, token) requires apiurl');
  45 |     }
  46 | 
  47 |     if (!token) {
> 48 |         throw new Error('response(request, apiurl, token) requires a non-empty token');
     |               ^ Error: response(request, apiurl, token) requires a non-empty token
  49 |     }
  50 | 
  51 |     const apiResponse = await request.get(apiurl, {
  52 |         headers: {
  53 |             Authorization: `Bearer ${token}`,
  54 |             Accept: 'application/json'
  55 |         }
  56 |     });
  57 | 
  58 |     console.log('API status:', apiResponse.status());
  59 |     console.log('API body:', await apiResponse.text());
  60 |     return apiResponse;
  61 | }
  62 | 
  63 | module.exports = { getToken, response };
  64 | 
```