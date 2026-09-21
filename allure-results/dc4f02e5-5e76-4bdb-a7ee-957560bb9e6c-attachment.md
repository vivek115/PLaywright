# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> Login test
- Location: tests\loginTest.spec.js:3:1

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
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
  27 |    static async waitForLoaderToDisappear(locator, timeout = 60000) {
> 28 |     await locator.waitFor({
     |                   ^ Error: locator.waitFor: Target page, context or browser has been closed
  29 |         state: 'hidden',
  30 |         timeout
  31 |     });
  32 | }
  33 | 
  34 | 
  35 |     static async getDropdownValues(locator) {
  36 |         const values = await locator.allTextContents();
  37 |         console.log('Dropdown values:', values);
  38 |         values.forEach((value, index) => {
  39 |             console.log(`${index + 1}: ${value.trim()}`);
  40 |         });
  41 | 
  42 |         return values.map(value => value.trim());
  43 |     }
  44 | 
  45 | }
  46 | 
  47 | module.exports = CommonUtils;
```