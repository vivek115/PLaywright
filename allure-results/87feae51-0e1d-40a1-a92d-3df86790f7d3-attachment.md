# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createWarehouseReceipts.spec.js >> Warehouse receipts >> Create warehouse receipt
- Location: tests\createWarehouseReceipts.spec.js:10:5

# Error details

```
ReferenceError: env is not defined
```

# Test source

```ts
  15  |     async verifyWRForm() {
  16  |         await this.locator('createNewButton').click();
  17  |         await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
  18  |         const wrHeadingText = await this.locator('wrHeading').textContent();
  19  |         expect(wrHeadingText).toContain(wrData.wrGeneralFormURL.expectedHeading)
  20  |         console.log("WR Form is displaying on the screen");
  21  |     }
  22  | 
  23  |     async createWarehouseReceipts() {
  24  |         await this.locator('warehouseReceiptField').click();
  25  |         const warehouseOptions = this.locator('DropdownList');
  26  |         const warehouses = await utils.getDropdownValues(warehouseOptions, 'warehouse dropdown');
  27  |         await utils.selectRandomValue(warehouses, warehouseOptions, 'warehouse');
  28  |         await this.wrCommonFields.selectStatus();
  29  |         await this.wrCommonFields.selectShipper();
  30  |         await this.wrCommonFields.selectConsignee();
  31  |         await this.wrCommonFields.selectAgent();
  32  |         await this.wrCommonFields.selectSupplier();
  33  |         await this.page.mouse.wheel(0, 500);
  34  |         await this.locator('submitButton').first().click();
  35  |         await utils.waitForLoaderToDisappear(this.locator('loader'));
  36  |         expect(await this.locator('successMessage').textContent()).toContain(wrData.wrGeneralFormURL.expectedSuccessMessage);
  37  |         await this.locator('packageTab').click();
  38  |         await utils.waitForLoaderToDisappear(this.locator('loader'));
  39  |     }
  40  | 
  41  |     async createPackage() {
  42  |         await this.locator('packageTab').click();
  43  |         await utils.waitForLoaderToDisappear(this.locator('loadingImage'));
  44  |         await this.locator('inlineButton').first().click();
  45  |         const menuOptions = await this.locator('inlineOptions').allTextContents();
  46  |         console.log("Menu options available: ", menuOptions);
  47  |         const cardViewOption = menuOptions.find(option => option.trim().toLowerCase() === wrData.wrGeneralFormURL.switchToCardView.toLowerCase());
  48  |         if (cardViewOption) {
  49  |             await this.locator('inlineOptions').filter({ hasText: cardViewOption }).first().click();
  50  |         }
  51  |         else {
  52  |             console.log("Card view option not found in the menu options.");
  53  |             await this.page.mouse.click(100, 100);
  54  |         }
  55  |         await this.locator('createNewDropdownButton').click();
  56  |         const createNewOptions = await this.locator('createNewDropdownOption').allTextContents();
  57  |         await this.locator('createMultiple').click();
  58  |         const packageFormHeading = await this.locator('packageFormDialogBox').textContent();
  59  |         console.log("Package form heading: ", packageFormHeading);
  60  |         expect(packageFormHeading).toContain(wrData.wrGeneralFormURL.expectedPackageFormHeading);
  61  |         await this.locator('packageTypeField').click();
  62  |         const packageTypeOptions = this.locator('packageTypeDropdownList');
  63  |         const packageTypes = await utils.getDropdownValues(packageTypeOptions, 'package type dropdown');
  64  |         await utils.selectRandomValue(packageTypes, packageTypeOptions, 'package type');
  65  |         await this.locator('dimensionsField').waitFor({ state: 'visible' });
  66  |         await this.locator('dimensionsField').click();
  67  |         await this.locator('lengthField').fill(String(await utils.randomDimension()));
  68  |         await this.locator('widthField').fill(String(await utils.randomDimension()));
  69  |         await this.locator('heightField').fill(String(await utils.randomDimension()));
  70  |         await this.locator('weightField').fill(String(await utils.randomDimension()));
  71  |         await this.locator('noOfPiecesField').fill(String(wrData.wrGeneralFormURL.noOfPieces));
  72  |         await this.locator('createButton').click();
  73  |         await utils.waitForLoaderToDisappear(this.locator('loader'));
  74  |         const location = this.locator('locationField');
  75  |         await location.waitFor({ state: 'visible' });
  76  |         await location.hover();
  77  |         await this.locator('searchButton').click();
  78  |         await utils.waitForLoaderToDisappear(this.locator('loadingImage'));
  79  |         const grid = this.locator('kendoGrid');
  80  |         await grid.waitFor({ state: 'visible' });
  81  |         const rows = this.locator('row');
  82  |         let rowCount = await rows.count();
  83  |         while (rowCount === 0) {
  84  |             console.log("No rows found in the Kendo grid. Selecting warehouse.");
  85  |             await this.locator('warehouseField').click();
  86  |             const warehouseDropdownOptions = this.locator('warehouseDropdownList');
  87  |             const warehouseOptions = await utils.getDropdownValues(warehouseDropdownOptions, 'warehouse dropdown');
  88  |             await utils.selectRandomValue(warehouseOptions, warehouseDropdownOptions, 'warehouse');
  89  |             await utils.waitForLoaderToDisappear(this.locator('loadingImage'));
  90  | 
  91  |             try {
  92  |                 await rows.first().waitFor({ state: 'visible', timeout: 10000 });
  93  |             } catch (error) {
  94  |                 console.log("No rows appeared after warehouse selection.");
  95  |             }
  96  | 
  97  |             rowCount = await rows.count();
  98  |         }
  99  | 
  100 |         expect(rowCount).toBeGreaterThan(0);
  101 |         console.log("Rows found in the Kendo grid: ", rowCount);
  102 |         const rowRadioButtons = this.locator('rowRadioButton');
  103 |         const radioButtonCount = await rowRadioButtons.count();
  104 |         expect(radioButtonCount).toBeGreaterThan(0);
  105 |         await rowRadioButtons.nth(Math.floor(Math.random() * radioButtonCount)).click();
  106 | 
  107 | 
  108 |     }
  109 |     async logout() {
  110 |         await this.locator('userImage').click();
  111 |         await this.locator('logoutButton').click();
  112 |         //await utils.waitForLoaderToDisappear(this.locator('loader'));
  113 |         const currentUrl = this.page.url();
  114 |         console.log('Current URL after logout:', currentUrl);
> 115 |         expect(currentUrl).toBe(env.baseUrl, "User did not land on the expected login page after logout");
      |                                 ^ ReferenceError: env is not defined
  116 | 
  117 |     }
  118 | 
  119 | }
  120 | 
  121 | module.exports = WRPage;
```