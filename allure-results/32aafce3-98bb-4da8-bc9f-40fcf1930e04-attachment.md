# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createWarehouseReceipts.spec.js >> Warehouse receipts >> Create warehouse receipt
- Location: tests\createWarehouseReceipts.spec.js:10:5

# Error details

```
Error: page.waitForLoadState: Target page, context or browser has been closed
```

# Test source

```ts
  13  |         this.wrCommonFields = new WRCommonFields(page);
  14  |     }
  15  | 
  16  |     async verifyWRForm() {
  17  |         await this.locator('createNewButton').click();
  18  |         await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
  19  |         const wrHeadingText = await this.locator('wrHeading').textContent();
  20  |         expect(wrHeadingText).toContain(wrData.wrGeneralFormURL.expectedHeading)
  21  |         console.log("WR Form is displaying on the screen");
  22  |     }
  23  | 
  24  |     async createWarehouseReceipts() {
  25  |         await this.locator('warehouseReceiptField').click();
  26  |         const warehouseOptions = this.locator('DropdownList');
  27  |         const warehouses = await utils.getDropdownValues(warehouseOptions, 'warehouse dropdown');
  28  |         await utils.selectRandomValue(warehouses, warehouseOptions, 'warehouse');
  29  |         await this.wrCommonFields.selectStatus();
  30  |         await this.wrCommonFields.selectShipper();
  31  |         await this.wrCommonFields.selectConsignee();
  32  |         await this.wrCommonFields.selectAgent();
  33  |         await this.wrCommonFields.selectSupplier();
  34  |         await this.page.mouse.wheel(0, 500);
  35  |         await this.locator('submitButton').first().click();
  36  |         await utils.waitForLoaderToDisappear(this.locator('loader'));
  37  |         expect(await this.locator('successMessage').textContent()).toContain(wrData.wrGeneralFormURL.expectedSuccessMessage);
  38  |         await this.locator('packageTab').click();
  39  |         await utils.waitForLoaderToDisappear(this.locator('loader'));
  40  |     }
  41  | 
  42  |     async createPackage() {
  43  |         await this.locator('packageTab').click();
  44  |         await utils.waitForLoaderToDisappear(this.locator('loadingImage'));
  45  |         await this.locator('inlineButton').first().click();
  46  |         const menuOptions = await this.locator('inlineOptions').allTextContents();
  47  |         console.log("Menu options available: ", menuOptions);
  48  |         const cardViewOption = menuOptions.find(option => option.trim().toLowerCase() === wrData.wrGeneralFormURL.switchToCardView.toLowerCase());
  49  |         if (cardViewOption) {
  50  |             await this.locator('inlineOptions').filter({ hasText: cardViewOption }).first().click();
  51  |         }
  52  |         else {
  53  |             console.log("Card view option not found in the menu options.");
  54  |             await this.page.mouse.click(100, 100);
  55  |         }
  56  |         await this.locator('createNewDropdownButton').click();
  57  |         const createNewOptions = await this.locator('createNewDropdownOption').allTextContents();
  58  |         await this.locator('createMultiple').click();
  59  |         const packageFormHeading = await this.locator('packageFormDialogBox').textContent();
  60  |         console.log("Package form heading: ", packageFormHeading);
  61  |         expect(packageFormHeading).toContain(wrData.wrGeneralFormURL.expectedPackageFormHeading);
  62  |         await this.locator('packageTypeField').click();
  63  |         const packageTypeOptions = this.locator('packageTypeDropdownList');
  64  |         const packageTypes = await utils.getDropdownValues(packageTypeOptions, 'package type dropdown');
  65  |         await utils.selectRandomValue(packageTypes, packageTypeOptions, 'package type');
  66  |         await this.locator('dimensionsField').waitFor({ state: 'visible' });
  67  |         await this.locator('dimensionsField').click();
  68  |         await this.locator('lengthField').fill(String(await utils.randomDimension()));
  69  |         await this.locator('widthField').fill(String(await utils.randomDimension()));
  70  |         await this.locator('heightField').fill(String(await utils.randomDimension()));
  71  |         await this.locator('weightField').fill(String(await utils.randomDimension()));
  72  |         await this.locator('noOfPiecesField').fill(String(wrData.wrGeneralFormURL.noOfPieces));
  73  |         await this.locator('createButton').click();
  74  |         await utils.waitForLoaderToDisappear(this.locator('loader'));
  75  |         const location = this.locator('locationField');
  76  |         await location.waitFor({ state: 'visible' });
  77  |         await location.hover();
  78  |         await this.locator('searchButton').click();
  79  |         await utils.waitForLoaderToDisappear(this.locator('loadingImage'));
  80  |         const grid = this.locator('kendoGrid');
  81  |         await grid.waitFor({ state: 'visible' });
  82  |         const rows = this.locator('row');
  83  |         let rowCount = await rows.count();
  84  |         while (rowCount === 0) {
  85  |             console.log("No rows found in the Kendo grid. Selecting warehouse.");
  86  |             await this.locator('warehouseField').click();
  87  |             const warehouseDropdownOptions = this.locator('warehouseDropdownList');
  88  |             const warehouseOptions = await utils.getDropdownValues(warehouseDropdownOptions, 'warehouse dropdown');
  89  |             await utils.selectRandomValue(warehouseOptions, warehouseDropdownOptions, 'warehouse');
  90  |             await utils.waitForLoaderToDisappear(this.locator('loadingImage'));
  91  | 
  92  |             try {
  93  |                 await rows.first().waitFor({ state: 'visible', timeout: 10000 });
  94  |             } catch (error) {
  95  |                 console.log("No rows appeared after warehouse selection.");
  96  |             }
  97  | 
  98  |             rowCount = await rows.count();
  99  |         }
  100 | 
  101 |         expect(rowCount).toBeGreaterThan(0);
  102 |         console.log("Rows found in the Kendo grid: ", rowCount);
  103 |         const rowRadioButtons = this.locator('rowRadioButton');
  104 |         const radioButtonCount = await rowRadioButtons.count();
  105 |         expect(radioButtonCount).toBeGreaterThan(0);
  106 |         await rowRadioButtons.nth(Math.floor(Math.random() * radioButtonCount)).click();
  107 | 
  108 | 
  109 |     }
  110 |     async logout() {
  111 |         await this.locator('userImage').click();
  112 |         await this.locator('logoutButton').click();
> 113 |         await this.page.waitForLoadState('networkidle');
      |                         ^ Error: page.waitForLoadState: Target page, context or browser has been closed
  114 |         await this.page.waitForLoaderToDisappear(this.locator('loader'));
  115 |         const currentUrl = this.page.url();
  116 |         console.log('Current URL after logout:', currentUrl);
  117 |         await this.page.pause()
  118 |         // console.log('Current URL after logout:', currentUrl);
  119 |         // await expect(this.page).toHaveURL(env.baseUrl);
  120 | 
  121 |     }
  122 | 
  123 | }
  124 | 
  125 | module.exports = WRPage;
```