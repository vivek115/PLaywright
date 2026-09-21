# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createWarehouseReceipts.spec.js >> Warehouse receipts >> Create warehouse receipt
- Location: tests\createWarehouseReceipts.spec.js:10:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByRole('combobox', { name: /^Warehouse\b/ })
Expected substring: "Demo WH"
Received string:    "Doral WH"
Timeout: 60000ms

Call log:
  - Expect "toContainText" with timeout 60000ms
  - waiting for getByRole('combobox', { name: /^Warehouse\b/ })
    121 × locator resolved to <mat-select tabindex="0" role="combobox" name="dataItem" aria-haspopup="true" aria-invalid="false" aria-expanded="false" aria-required="false" aria-disabled="false" _ngcontent-bvo-c220="" id="WarehouseId-field" aria-autocomplete="none" disableoptioncentering="" formcontrolname="dataItem" aria-labelledby="mat-form-field-label-31 mat-select-value-3" class="mat-select edit-dropdown ng-tns-c163-224 ng-tns-c138-223 ng-valid ng-star-inserted ng-touched ng-dirty">…</mat-select>
        - unexpected value "Doral WH"

```

```yaml
- combobox "Warehouse Doral WH": Doral WH
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
  25 |         const optionCount = await warehouseOptions.count();
  26 |         const randomOption = warehouseOptions.nth(Math.floor(Math.random() * optionCount));
  27 |         const randomWarehouse = (await randomOption.textContent()).trim();
  28 |         console.log('Random Warehouse:', randomWarehouse);
  29 |         await randomOption.scrollIntoViewIfNeeded();
  30 |         await randomOption.click();
  31 | 
  32 |         // const warehouseDropdownlist = await utils.getDropdownValues(warehouseOptions);
  33 |         // console.log(warehouseDropdownlist);
  34 |         // await utils.selectRandomValue(warehouseOptions);
  35 |         // 
  36 |     }
  37 | 
  38 | }
> 39 | 
     |                                      ^ Error: expect(locator).toContainText(expected) failed
  40 | module.exports = WRPage;
```