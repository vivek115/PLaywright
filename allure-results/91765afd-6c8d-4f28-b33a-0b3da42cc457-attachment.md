# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createWarehouseReceipts.spec.js >> Warehouse receipts >> Create warehouse receipt
- Location: tests\createWarehouseReceipts.spec.js:10:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | const utils = require('../../utils/CommonUtils');
  3  | const LocatorHelper = require("../../utils/LocatorHelper");
  4  | const wrData = require('../../data/warehouseReceiptData.json');
  5  | const warehouseReceiptLocators = require('./warehouseReceiptLocators');
  6  | 
  7  | class WRPage extends LocatorHelper {
  8  | 
  9  |     constructor(page) {
  10 |         super(page, warehouseReceiptLocators);
  11 |     }
  12 | 
  13 |     async verifyWRForm() {
> 14 |         await this.locator('createNewButton').click();
     |                                               ^ Error: locator.click: Target page, context or browser has been closed
  15 |         await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
  16 |         const wrHeadingText = await this.locator('wrHeading').textContent();
  17 |         await expect(wrHeadingText).toContain(wrData.wrGeneralFormURL.expectedHeading)
  18 |         console.log("WR Form is displaying on the screen");
  19 |     }
  20 | 
  21 |     async createWarehouseReceipts() {
  22 |         await this.locator('warehouseReceiptField').click();
  23 |         const warehouseOptions = this.locator('warehouseDropdownList');
  24 |         await expect(warehouseOptions.first()).toBeVisible();
  25 |         const warehouseDropdownlist = await utils.getDropdownValues(warehouseOptions);
  26 |         console.log(warehouseDropdownlist);
  27 |         await utils.selectRandomValue(warehouseDropdownlist);
  28 |         await this.page.pause();
  29 |     }
  30 | 
  31 | }
  32 | 
  33 | module.exports = WRPage;
```