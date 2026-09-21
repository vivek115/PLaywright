# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createWarehouseReceipts.spec.js >> Warehouse receipts >> Create warehouse receipt
- Location: tests\createWarehouseReceipts.spec.js:10:5

# Error details

```
Error: locator.waitFor: Test ended.
Call log:
  - waiting for locator('//cyz-infinite-scroll//mat-option[@class=\'mat-option mat-focus-indicator mat-tooltip-trigger ng-star-inserted\']').first() to be visible

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
  27 |     static async waitForLoaderToDisappear(locator, timeout = 100000) {
  28 |         await locator.waitFor({
  29 |             state: 'hidden',
  30 |             timeout
  31 |         });
  32 |     }
  33 | 
  34 | 
  35 |     static async getDropdownValues(locator, dropdownName = 'dropdown') {
  36 |         if (!locator) {
  37 |             throw new Error(`${dropdownName} locator is null or undefined.`);
  38 |         }
  39 | 
> 40 |         await locator.first().waitFor({ state: 'visible' });
     |                               ^ Error: locator.waitFor: Test ended.
  41 |         const values = await locator.allTextContents();
  42 | 
  43 |         const dropdownValues = values
  44 |             .map(value => value.trim())
  45 |             .filter(value => value !== '');
  46 |         return dropdownValues;
  47 |     }
  48 |     static async randomFunction(value) {
  49 |         const randomvalue = Math.floor(Math.random() * value.length);
  50 |         return value[randomvalue];
  51 |     }
  52 |     static async selectRandomValue(values, options, valueName = 'dropdown value') {
  53 |         if (!Array.isArray(values) || values.length === 0) {
  54 |             throw new Error(`Cannot select a random ${valueName}: no values are available.`);
  55 |         }
  56 |         if (!options) {
  57 |             throw new Error(`Cannot select a random ${valueName}: dropdown locator is null or undefined.`);
  58 |         }
  59 | 
  60 |         const randomIndex = Math.floor(Math.random() * values.length);
  61 |         const randomValue = values[randomIndex];
  62 | 
  63 |         console.log('Randomly selected value:', randomValue);
  64 | 
  65 |         const randomOption = options
  66 |             .filter({ hasText: randomValue })
  67 |             .first();
  68 | 
  69 |         await randomOption.waitFor({ state: 'visible' });
  70 |         await randomOption.scrollIntoViewIfNeeded();
  71 |         await randomOption.click();
  72 | 
  73 |         console.log('Selected value:', randomValue);
  74 | 
  75 |         return randomValue;
  76 |     }
  77 | 
  78 | }
  79 | 
  80 | module.exports = CommonUtils;
  81 | 
  82 | 
  83 | 
```