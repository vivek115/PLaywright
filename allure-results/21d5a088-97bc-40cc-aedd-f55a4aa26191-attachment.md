# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createWarehouseReceipts.spec.js >> Warehouse receipts >> Create warehouse receipt
- Location: tests\createWarehouseReceipts.spec.js:10:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://app.warehouseorchestrator.com/auth/login"
Received: "https://app.warehouseorchestrator.com/wms/warehouse/receipt/ce736481-781e-493c-8400-bc04c13f6d3e/packages/card"
Timeout:  60000ms

Call log:
  - Expect "toHaveURL" with timeout 60000ms
    107 × unexpected value "https://app.warehouseorchestrator.com/wms/warehouse/receipt/ce736481-781e-493c-8400-bc04c13f6d3e/packages/card"

```

```yaml
- banner:
  - navigation:
    - paragraph: WMS
    - list:
      - listitem:
        - link "Dashboard":
          - /url: /wms/dashboard
      - listitem:
        - link "Orders":
          - /url: /wms/orders
      - listitem:
        - link "Warehouse":
          - /url: /wms/warehouse
      - listitem:
        - link "Locations":
          - /url: /wms/locations/list
      - listitem:
        - link "Shipments":
          - /url: /wms/shipments
      - listitem:
        - link "Tasks":
          - /url: /wms/tasks
      - listitem:
        - link "Reports":
          - /url: /wms/reports
      - listitem:
        - link "Settings":
          - /url: /wms/settings
    - list:
      - listitem:
        - menuitem "Filter" [disabled]
        - textbox "Search..."
      - listitem:
        - list:
          - listitem:
            - text: IFS Demo
            - list:
              - listitem: My Profile
              - listitem:
                - link "Logout":
                  - /url: /logout
- heading "SCRM" [level=4]
- paragraph: Manage Companies, Contacts & Quotes
- link "WMS WMS Manage Inventory, Packages & More":
  - /url: /wms
  - img "WMS"
  - heading "WMS" [level=4]
  - paragraph: Manage Inventory, Packages & More
- link "Dimensioner Dimensioner Capture Dimensions, Weight & Images":
  - /url: /dimensioner/capture
  - img "Dimensioner"
  - heading "Dimensioner" [level=4]
  - paragraph: Capture Dimensions, Weight & Images
- link "Workflows Workflows Manage Automations & More":
  - /url: /workflows/list
  - img "Workflows"
  - heading "Workflows" [level=4]
  - paragraph: Manage Automations & More
- heading "Admin" [level=4]
- paragraph: Manage Users, Security, Modules and More
- img
- heading "WRAA001024" [level=2]
- paragraph: "Status: On Hand"
- text: 0 Pre-Received 5 On Hand 0 In Process 0 Loaded 0 Shipped 0 Delivered
- navigation:
  - text: General Packages Items Charges & Expenses Notes Attachments Tasks Activities
  - 'textbox "Add Package from Tracking #" [disabled]':
    - /placeholder: "Scan or type tracking #"
  - text: "Add Package from Tracking #"
  - button "Repack"
  - button "Create New" [disabled]
  - button "Menu"
- grid "Data table":
  - row "Select All":
    - columnheader "Select All":
      - checkbox "Select All": 
      - text: Select All
  - row "PIDAA001167-5 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bulkhead Dimensions (L x W x H) 100 x 1 x 57 in 37.00 lbs Weight QCI Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/21/2026 at 12:30 PM 0/5000 Description":
    - gridcell "PIDAA001167-5 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bulkhead Dimensions (L x W x H) 100 x 1 x 57 in 37.00 lbs Weight QCI Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/21/2026 at 12:30 PM 0/5000 Description":
      - heading "PIDAA001167-5" [level=4]
      - checkbox: 
      - button
      - button
      - combobox "Status On Hand": On Hand
      - text: Status
      - combobox "Part Number"
      - text: Part Number
      - paragraph:
        - textbox "Model":
          - /placeholder: Enter Model
        - text: Model
      - paragraph:
        - textbox "Pieces":
          - /placeholder: Enter Pieces
          - text: "1"
        - text: Pieces
      - paragraph: Pieces By PO
      - combobox "Package Type Bulkhead": Bulkhead
      - text: Package Type
      - paragraph: Dimensions (L x W x H)
      - paragraph:
        - textbox "L": "100"
        - text: x
        - textbox "W": "1"
        - text: x
        - textbox "H": "57"
        - text: in
      - paragraph:
        - textbox "Weight": 37.00 lbs
        - text: Weight
      - paragraph:
        - combobox "Location": QCI
        - text: Location
      - paragraph:
        - textbox "Tracking No.":
          - /placeholder: Enter Tracking No.
        - text: Tracking No.
      - paragraph:
        - textbox "Pro No.":
          - /placeholder: Enter Pro No.
        - text: Pro No.
      - combobox "Received By IFS Demo": IFS Demo
      - text: Received By Received Date/Time 09/21/2026 at 12:30 PM
      - paragraph:
        - textbox "Description":
          - /placeholder: Enter Description
        - text: 0/5000 Description
      - button:
        - img
  - row "PIDAA001167-4 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bulkhead Dimensions (L x W x H) 100 x 1 x 57 in 37.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/21/2026 at 12:30 PM 0/5000 Description":
    - gridcell "PIDAA001167-4 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bulkhead Dimensions (L x W x H) 100 x 1 x 57 in 37.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/21/2026 at 12:30 PM 0/5000 Description":
      - heading "PIDAA001167-4" [level=4]
      - checkbox: 
      - button
      - button
      - combobox "Status On Hand": On Hand
      - text: Status
      - combobox "Part Number"
      - text: Part Number
      - paragraph:
        - textbox "Model":
          - /placeholder: Enter Model
        - text: Model
      - paragraph:
        - textbox "Pieces":
          - /placeholder: Enter Pieces
          - text: "1"
        - text: Pieces
      - paragraph: Pieces By PO
      - combobox "Package Type Bulkhead": Bulkhead
      - text: Package Type
      - paragraph: Dimensions (L x W x H)
      - paragraph:
        - textbox "L": "100"
        - text: x
        - textbox "W": "1"
        - text: x
        - textbox "H": "57"
        - text: in
      - paragraph:
        - textbox "Weight": 37.00 lbs
        - text: Weight
      - paragraph:
        - combobox "Location"
        - text: Location
      - paragraph:
        - textbox "Tracking No.":
          - /placeholder: Enter Tracking No.
        - text: Tracking No.
      - paragraph:
        - textbox "Pro No.":
          - /placeholder: Enter Pro No.
        - text: Pro No.
      - combobox "Received By IFS Demo": IFS Demo
      - text: Received By Received Date/Time 09/21/2026 at 12:30 PM
      - paragraph:
        - textbox "Description":
          - /placeholder: Enter Description
        - text: 0/5000 Description
      - button:
        - img
  - row "PIDAA001167-3 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bulkhead Dimensions (L x W x H) 100 x 1 x 57 in 37.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/21/2026 at 12:30 PM 0/5000 Description":
    - gridcell "PIDAA001167-3 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bulkhead Dimensions (L x W x H) 100 x 1 x 57 in 37.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/21/2026 at 12:30 PM 0/5000 Description":
      - heading "PIDAA001167-3" [level=4]
      - checkbox: 
      - button
      - button
      - combobox "Status On Hand": On Hand
      - text: Status
      - combobox "Part Number"
      - text: Part Number
      - paragraph:
        - textbox "Model":
          - /placeholder: Enter Model
        - text: Model
      - paragraph:
        - textbox "Pieces":
          - /placeholder: Enter Pieces
          - text: "1"
        - text: Pieces
      - paragraph: Pieces By PO
      - combobox "Package Type Bulkhead": Bulkhead
      - text: Package Type
      - paragraph: Dimensions (L x W x H)
      - paragraph:
        - textbox "L": "100"
        - text: x
        - textbox "W": "1"
        - text: x
        - textbox "H": "57"
        - text: in
      - paragraph:
        - textbox "Weight": 37.00 lbs
        - text: Weight
      - paragraph:
        - combobox "Location"
        - text: Location
      - paragraph:
        - textbox "Tracking No.":
          - /placeholder: Enter Tracking No.
        - text: Tracking No.
      - paragraph:
        - textbox "Pro No.":
          - /placeholder: Enter Pro No.
        - text: Pro No.
      - combobox "Received By IFS Demo": IFS Demo
      - text: Received By Received Date/Time 09/21/2026 at 12:30 PM
      - paragraph:
        - textbox "Description":
          - /placeholder: Enter Description
        - text: 0/5000 Description
      - button:
        - img
  - row "PIDAA001167-2 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bulkhead Dimensions (L x W x H) 100 x 1 x 57 in 37.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/21/2026 at 12:30 PM 0/5000 Description":
    - gridcell "PIDAA001167-2 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bulkhead Dimensions (L x W x H) 100 x 1 x 57 in 37.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/21/2026 at 12:30 PM 0/5000 Description":
      - heading "PIDAA001167-2" [level=4]
      - checkbox: 
      - button
      - button
      - combobox "Status On Hand": On Hand
      - text: Status
      - combobox "Part Number"
      - text: Part Number
      - paragraph:
        - textbox "Model":
          - /placeholder: Enter Model
        - text: Model
      - paragraph:
        - textbox "Pieces":
          - /placeholder: Enter Pieces
          - text: "1"
        - text: Pieces
      - paragraph: Pieces By PO
      - combobox "Package Type Bulkhead": Bulkhead
      - text: Package Type
      - paragraph: Dimensions (L x W x H)
      - paragraph:
        - textbox "L": "100"
        - text: x
        - textbox "W": "1"
        - text: x
        - textbox "H": "57"
        - text: in
      - paragraph:
        - textbox "Weight": 37.00 lbs
        - text: Weight
      - paragraph:
        - combobox "Location"
        - text: Location
      - paragraph:
        - textbox "Tracking No.":
          - /placeholder: Enter Tracking No.
        - text: Tracking No.
      - paragraph:
        - textbox "Pro No.":
          - /placeholder: Enter Pro No.
        - text: Pro No.
      - combobox "Received By IFS Demo": IFS Demo
      - text: Received By Received Date/Time 09/21/2026 at 12:30 PM
      - paragraph:
        - textbox "Description":
          - /placeholder: Enter Description
        - text: 0/5000 Description
      - button:
        - img
  - row "PIDAA001167-1 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bulkhead Dimensions (L x W x H) 100 x 1 x 57 in 37.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/21/2026 at 12:30 PM 0/5000 Description":
    - gridcell "PIDAA001167-1 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bulkhead Dimensions (L x W x H) 100 x 1 x 57 in 37.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/21/2026 at 12:30 PM 0/5000 Description":
      - heading "PIDAA001167-1" [level=4]
      - checkbox: 
      - button
      - button
      - combobox "Status On Hand": On Hand
      - text: Status
      - combobox "Part Number"
      - text: Part Number
      - paragraph:
        - textbox "Model":
          - /placeholder: Enter Model
        - text: Model
      - paragraph:
        - textbox "Pieces":
          - /placeholder: Enter Pieces
          - text: "1"
        - text: Pieces
      - paragraph: Pieces By PO
      - combobox "Package Type Bulkhead": Bulkhead
      - text: Package Type
      - paragraph: Dimensions (L x W x H)
      - paragraph:
        - textbox "L": "100"
        - text: x
        - textbox "W": "1"
        - text: x
        - textbox "H": "57"
        - text: in
      - paragraph:
        - textbox "Weight": 37.00 lbs
        - text: Weight
      - paragraph:
        - combobox "Location"
        - text: Location
      - paragraph:
        - textbox "Tracking No.":
          - /placeholder: Enter Tracking No.
        - text: Tracking No.
      - paragraph:
        - textbox "Pro No.":
          - /placeholder: Enter Pro No.
        - text: Pro No.
      - combobox "Received By IFS Demo": IFS Demo
      - text: Received By Received Date/Time 09/21/2026 at 12:30 PM
      - paragraph:
        - textbox "Description":
          - /placeholder: Enter Description
        - text: 0/5000 Description
      - button:
        - img
- text: 1-5 of 5 items
- button "Go to the first page":
  - note "Go to the first page"
- button "Go to the previous page":
  - note "Go to the previous page"
- list:
  - listitem:
    - button "Page 1": "1"
- button "Go to the next page":
  - note "Go to the next page"
- button "Go to the last page":
  - note "Go to the last page"
- button "5 per page"
- img
- paragraph: Are you sure you want to save changes?
- button "Save"
- button "Cancel"
- button "AI Assistant AI":
  - img "AI Assistant"
  - text: AI
- paragraph: Do you want to continue navigating away without saving changes?
- button "Confirm"
- button "Cancel"
```

# Test source

```ts
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
  112 |         await this.locator('logoutButton').waitFor({ state: 'visible' });
  113 |         await this.locator('logoutButton').click();
> 114 |         await expect(this.page).toHaveURL(env.baseUrl, { timeout: 60000 });
      |                                 ^ Error: expect(page).toHaveURL(expected) failed
  115 |         console.log('Current URL after logout:', this.page.url());
  116 | 
  117 |     }
  118 | 
  119 | }
  120 | 
  121 | module.exports = WRPage;
```