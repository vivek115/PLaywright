# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createWarehouseReceipts.spec.js >> Warehouse receipts >> Create warehouse receipt
- Location: tests\createWarehouseReceipts.spec.js:10:5

# Error details

```
Error: expect(locator).toHaveAttribute(expected) failed

Locator:  getByRole('option', { name: 'Packages', exact: true })
Expected: "true"
Received: "false"
Timeout:  60000ms

Call log:
  - Expect "toHaveAttribute" with timeout 60000ms
  - waiting for getByRole('option', { name: 'Packages', exact: true })
    2 × locator resolved to <mat-option tabindex="0" role="option" showiftruncated="" id="mat-option-88" aria-selected="false" aria-disabled="false" _ngcontent-icj-c220="" cdk-describedby-host="icj-1" aria-describedby="cdk-describedby-message-icj-1-70" class="mat-option mat-focus-indicator mat-tooltip-trigger ng-star-inserted cdk-focused cdk-mouse-focused">…</mat-option>
      - unexpected value "false"
    89 × locator resolved to <mat-option tabindex="0" role="option" showiftruncated="" id="mat-option-88" aria-selected="false" aria-disabled="false" _ngcontent-icj-c220="" cdk-describedby-host="icj-1" aria-describedby="cdk-describedby-message-icj-1-70" class="mat-option mat-focus-indicator mat-tooltip-trigger ng-star-inserted">…</mat-option>
       - unexpected value "false"

```

```yaml
- option "Packages"
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
  14 |         await this.locator('createNewButton').click();
  15 |         await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
  16 |         const wrHeadingText = await this.locator('wrHeading').textContent();
  17 |         expect(wrHeadingText).toContain(wrData.wrGeneralFormURL.expectedHeading)
  18 |         console.log("WR Form is displaying on the screen");
  19 |     }
  20 | 
  21 |     async createWarehouseReceipts() {
  22 |         await this.locator('warehouseReceiptField').click();
  23 |         const warehouseOptions = this.locator('warehouseDropdownList');
  24 |         await expect(warehouseOptions.first()).toBeVisible();
  25 |         // Get all warehouse names and store them in an array
  26 |         const warehouseList = await warehouseOptions.allTextContents();
  27 |         console.log('Warehouse List:', warehouseList);
  28 |         await this.page.pause();
  29 |         //Remove extra spaces and filter out empty strings
  30 |         const warehouses = warehouseList.map(warehouse=> warehouse.trim()).
  31 |         filter(warehouse => warehouse.length>0);
  32 |         console.log('clean warehouse List:', warehouses);
  33 |         //// Pick a random value from the array
  34 |         const randomIndex = Math.floor(Math.random() * warehouses.length);
  35 |         const randomWarehouse = warehouses[randomIndex];
  36 |         console.log('Randomly selected warehouse:', randomWarehouse);
  37 |         // Find the randomly selected warehouse in the dropdown
  38 |         const randomOption = warehouseOptions.filter({ hasText: randomWarehouse }).first();
  39 |         //Scroll to it If needed and click on it
  40 |         await randomOption.scrollIntoViewIfNeeded();
  41 |         await randomOption.click();
  42 |         console.log('Selected Warehouse:', randomWarehouse);
> 43 |     }
     |                                    ^ Error: expect(locator).toHaveAttribute(expected) failed
  44 | 
  45 | }
  46 | 
  47 | module.exports = WRPage;
```