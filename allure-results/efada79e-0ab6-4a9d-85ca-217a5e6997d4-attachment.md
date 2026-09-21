# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createWarehouseReceipts.spec.js >> Warehouse receipts >> Create warehouse receipt
- Location: tests\createWarehouseReceipts.spec.js:10:5

# Error details

```
ReferenceError: warehouseField is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - navigation [ref=e6]:
        - paragraph [ref=e10] [cursor=pointer]: WMS
        - generic [ref=e11]:
          - list [ref=e12]:
            - listitem [ref=e13]:
              - link "Dashboard" [ref=e14] [cursor=pointer]:
                - /url: /wms/dashboard
            - listitem [ref=e15]:
              - link "Orders" [ref=e16] [cursor=pointer]:
                - /url: /wms/orders
            - listitem [ref=e17]:
              - link "Warehouse" [ref=e18] [cursor=pointer]:
                - /url: /wms/warehouse
            - listitem [ref=e19]:
              - link "Locations" [ref=e20] [cursor=pointer]:
                - /url: /wms/locations/list
            - listitem [ref=e21]:
              - link "Shipments" [ref=e22] [cursor=pointer]:
                - /url: /wms/shipments
            - listitem [ref=e23]:
              - link "Tasks" [ref=e24] [cursor=pointer]:
                - /url: /wms/tasks
            - listitem [ref=e25]:
              - link "Reports" [ref=e26] [cursor=pointer]:
                - /url: /wms/reports
            - listitem [ref=e27]:
              - link "Settings" [ref=e28] [cursor=pointer]:
                - /url: /wms/settings
          - list [ref=e29]:
            - listitem [ref=e30]:
              - generic [ref=e31]:
                - menuitem "Filter": Filter
                - textbox "Search..." [ref=e32]
            - listitem [ref=e33]:
              - list [ref=e34]:
                - listitem [ref=e35]:
                  - generic [ref=e36] [cursor=pointer]: IFS Demo
                  - list:
                    - listitem:
                      - generic: My Profile
                    - listitem:
                      - link "Logout":
                        - /url: /logout
    - generic [ref=e38]:
      - generic [ref=e42] [cursor=pointer]:
        - heading "SCRM" [level=4] [ref=e43]
        - paragraph [ref=e44]: Manage Companies, Contacts & Quotes
      - link "WMS WMS Manage Inventory, Packages & More" [ref=e46] [cursor=pointer]:
        - /url: /wms
        - img "WMS" [ref=e48]
        - generic [ref=e49]:
          - heading "WMS" [level=4] [ref=e50]
          - paragraph [ref=e51]: Manage Inventory, Packages & More
      - link "Dimensioner Dimensioner Capture Dimensions, Weight & Images" [ref=e53] [cursor=pointer]:
        - /url: /dimensioner/capture
        - img "Dimensioner" [ref=e55]
        - generic [ref=e56]:
          - heading "Dimensioner" [level=4] [ref=e57]
          - paragraph [ref=e58]: Capture Dimensions, Weight & Images
      - link "Workflows Workflows Manage Automations & More" [ref=e60] [cursor=pointer]:
        - /url: /workflows/list
        - img "Workflows" [ref=e62]
        - generic [ref=e63]:
          - heading "Workflows" [level=4] [ref=e64]
          - paragraph [ref=e65]: Manage Automations & More
      - generic [ref=e69] [cursor=pointer]:
        - heading "Admin" [level=4] [ref=e70]
        - paragraph [ref=e71]: Manage Users, Security, Modules and More
  - generic [ref=e72]:
    - generic [ref=e77]:
      - heading "WR00000000" [level=2] [ref=e78]
      - paragraph [ref=e79]: "Status: Pre-Received"
    - generic [ref=e82]:
      - generic [ref=e86]:
        - navigation [ref=e89]:
          - generic [ref=e92]:
            - generic [ref=e93]: General
            - generic [ref=e94]: Packages
            - generic [ref=e95]: Items
            - generic [ref=e96]: Charges & Expenses
            - generic [ref=e97]: Notes
            - generic [ref=e98]: Attachments
            - generic [ref=e99]: Tasks
            - generic [ref=e100]: Activities
            - button "Menu" [ref=e104] [cursor=pointer]: Menu
        - generic [ref=e111]:
          - generic [ref=e112]:
            - generic [ref=e113]:
              - heading "Basic Information" [level=4] [ref=e114]
              - generic [ref=e115]:
                - generic [ref=e122] [cursor=pointer]:
                  - combobox "Warehouse Doral WH" [ref=e123]:
                    - generic [ref=e127]: Doral WH
                  - generic:
                    - generic: Warehouse
                - generic [ref=e135] [cursor=pointer]:
                  - combobox "Status Pre-Received" [ref=e136]:
                    - generic [ref=e140]: Pre-Received
                  - generic:
                    - generic: Status
                - generic [ref=e144]:
                  - paragraph [ref=e145]:
                    - generic [ref=e146]: Created By
                  - paragraph [ref=e147]:
                    - generic [ref=e148]: IFS Demo
              - generic [ref=e152]:
                - paragraph [ref=e153]:
                  - generic [ref=e154]: Created Date/Time
                - paragraph [ref=e155]:
                  - generic [ref=e156]: 09/07/2026 at 05:26 PM
            - generic [ref=e157]:
              - heading "Carrier" [level=4] [ref=e158]
              - generic [ref=e159]:
                - generic [ref=e166] [cursor=pointer]:
                  - combobox "Carrier Name" [ref=e167]
                  - generic:
                    - generic: Carrier Name
                - generic [ref=e178] [cursor=pointer]:
                  - combobox "Driver" [ref=e179]
                  - generic:
                    - generic: Driver
                - generic [ref=e188]:
                  - textbox "Driver License No." [disabled] [ref=e189]
                  - generic:
                    - generic: Driver License No.
              - generic [ref=e190]:
                - generic [ref=e195] [cursor=pointer]:
                  - textbox "No. of Pieces" [ref=e196]
                  - generic:
                    - generic: No. of Pieces
                - generic [ref=e201] [cursor=pointer]:
                  - textbox "Pro No." [ref=e202]
                  - generic:
                    - generic: Pro No.
                - generic [ref=e207] [cursor=pointer]:
                  - textbox "Tracking No." [ref=e208]
                  - generic:
                    - generic: Tracking No.
            - generic [ref=e210]:
              - heading "Shipper" [level=4] [ref=e211]
              - generic [ref=e212]:
                - generic [ref=e219] [cursor=pointer]:
                  - combobox "Shipper Name" [ref=e220]
                  - generic:
                    - generic:
                      - generic: Shipper Name
                - generic [ref=e227]:
                  - combobox "Location" [disabled] [ref=e228]
                  - generic:
                    - generic: Location
                - paragraph [ref=e236]:
                  - generic [ref=e237]: Address 1
              - generic [ref=e238]:
                - paragraph [ref=e242]:
                  - generic [ref=e243]: Address 2
                - paragraph [ref=e247]:
                  - generic [ref=e248]: City
                - generic [ref=e250]:
                  - paragraph [ref=e254]:
                    - generic [ref=e255]: State
                  - paragraph [ref=e259]:
                    - generic [ref=e260]: Zip Code
              - generic [ref=e261]:
                - paragraph [ref=e265]:
                  - generic [ref=e266]: Country
                - generic [ref=e273]:
                  - combobox "Point Of Contact" [disabled] [ref=e274]
                  - generic:
                    - generic: Point Of Contact
            - generic [ref=e280]:
              - heading "Consignee" [level=4] [ref=e281]
              - generic [ref=e282]:
                - generic [ref=e289] [cursor=pointer]:
                  - combobox "Consignee Name" [ref=e290]
                  - generic:
                    - generic:
                      - generic: Consignee Name
                - generic [ref=e297]:
                  - combobox "Location" [disabled] [ref=e298]
                  - generic:
                    - generic: Location
                - paragraph [ref=e306]:
                  - generic [ref=e307]: Address 1
              - generic [ref=e308]:
                - paragraph [ref=e312]:
                  - generic [ref=e313]: Address 2
                - paragraph [ref=e317]:
                  - generic [ref=e318]: City
                - generic [ref=e320]:
                  - paragraph [ref=e324]:
                    - generic [ref=e325]: State
                  - paragraph [ref=e329]:
                    - generic [ref=e330]: Zip Code
              - generic [ref=e331]:
                - paragraph [ref=e335]:
                  - generic [ref=e336]: Country
                - generic [ref=e343]:
                  - combobox "Point Of Contact" [disabled] [ref=e344]
                  - generic:
                    - generic: Point Of Contact
            - generic [ref=e350]:
              - heading "Agent" [level=4] [ref=e351]
              - generic [ref=e352]:
                - generic [ref=e359] [cursor=pointer]:
                  - combobox "Agent Name" [ref=e360]
                  - generic:
                    - generic:
                      - generic: Agent Name
                - generic [ref=e367]:
                  - combobox "Location" [disabled] [ref=e368]
                  - generic:
                    - generic: Location
                - paragraph [ref=e376]:
                  - generic [ref=e377]: Address 1
              - generic [ref=e378]:
                - paragraph [ref=e382]:
                  - generic [ref=e383]: Address 2
                - paragraph [ref=e387]:
                  - generic [ref=e388]: City
                - generic [ref=e390]:
                  - paragraph [ref=e394]:
                    - generic [ref=e395]: State
                  - paragraph [ref=e399]:
                    - generic [ref=e400]: Zip Code
              - generic [ref=e401]:
                - paragraph [ref=e405]:
                  - generic [ref=e406]: Country
                - generic [ref=e413]:
                  - combobox "Point Of Contact" [disabled] [ref=e414]
                  - generic:
                    - generic: Point Of Contact
            - generic [ref=e420]:
              - heading "Supplier" [level=4] [ref=e421]
              - generic [ref=e422]:
                - generic [ref=e429] [cursor=pointer]:
                  - combobox "Supplier Name" [ref=e430]
                  - generic:
                    - generic:
                      - generic: Supplier Name
                - generic [ref=e437]:
                  - combobox "Location" [disabled] [ref=e438]
                  - generic:
                    - generic: Location
                - paragraph [ref=e446]:
                  - generic [ref=e447]: Address 1
              - generic [ref=e448]:
                - paragraph [ref=e452]:
                  - generic [ref=e453]: Address 2
                - paragraph [ref=e457]:
                  - generic [ref=e458]: City
                - generic [ref=e460]:
                  - paragraph [ref=e464]:
                    - generic [ref=e465]: State
                  - paragraph [ref=e469]:
                    - generic [ref=e470]: Zip Code
              - generic [ref=e471]:
                - paragraph [ref=e475]:
                  - generic [ref=e476]: Country
                - generic [ref=e480]:
                  - paragraph [ref=e481]: Invoice No.
                  - textbox "Enter Invoice No." [ref=e487]
                - generic [ref=e492]:
                  - paragraph [ref=e493]: PO No.
                  - textbox "Enter PO No. or PO ID" [ref=e499]
            - generic [ref=e501]:
              - heading "Import Information" [level=4] [ref=e502]
              - generic [ref=e503]:
                - generic [ref=e510] [cursor=pointer]:
                  - combobox "Receiving Type" [ref=e511]
                  - generic:
                    - generic: Receiving Type
                - generic [ref=e520] [cursor=pointer]:
                  - textbox "Entry Number" [ref=e521]
                  - generic:
                    - generic: Entry Number
                - generic [ref=e525] [cursor=pointer]: Entry Date/Time
            - generic [ref=e526]:
              - heading "Bill To" [level=4] [ref=e527]
              - generic [ref=e528]:
                - generic [ref=e535] [cursor=pointer]:
                  - combobox "Client Name" [ref=e536]
                  - generic:
                    - generic: Client Name
                - generic [ref=e547] [cursor=pointer]:
                  - combobox "Point of Contact" [ref=e548]
                  - generic:
                    - generic: Point of Contact
            - generic [ref=e553]:
              - heading "Custom Fields" [level=4] [ref=e554]
              - generic [ref=e555]:
                - generic [ref=e564] [cursor=pointer]:
                  - combobox "WR Dropdown"
                  - generic [ref=e566]: WR Dropdown
                - generic [ref=e575] [cursor=pointer]:
                  - combobox "WR Checkbox"
                  - generic [ref=e577]: WR Checkbox
                - generic [ref=e585]:
                  - generic [ref=e586] [cursor=pointer]: WR Picker
                  - textbox
                - generic [ref=e594] [cursor=pointer]:
                  - textbox "WR SLT Edit" [ref=e595]
                  - generic [ref=e597]: WR SLT Edit
                - generic [ref=e606] [cursor=pointer]:
                  - combobox "WR DD Edit"
                  - generic [ref=e608]: WR DD Edit
                - generic [ref=e617] [cursor=pointer]:
                  - combobox "WR MC Edit"
                  - generic [ref=e619]: WR MC Edit
                - generic [ref=e627]:
                  - generic [ref=e628] [cursor=pointer]: WR DP Edit
                  - textbox
                - generic [ref=e636] [cursor=pointer]:
                  - textbox "TechOps Ref No." [ref=e637]
                  - generic [ref=e639]: TechOps Ref No.
                - generic [ref=e646] [cursor=pointer]:
                  - textbox "Reference No" [ref=e647]
                  - generic [ref=e649]: Reference No
                - generic [ref=e656] [cursor=pointer]:
                  - textbox "Warehouse X" [ref=e657]
                  - generic [ref=e659]: Warehouse X
                - generic [ref=e668] [cursor=pointer]:
                  - combobox "Instructions"
                  - generic [ref=e670]: Instructions
          - generic [ref=e672]:
            - generic [ref=e673]:
              - img [ref=e675]
              - paragraph [ref=e677]: Do you want to create a warehouse receipt?
            - generic [ref=e679]:
              - button "Create" [ref=e680] [cursor=pointer]: Create
              - button "Cancel" [ref=e681] [cursor=pointer]: Cancel
      - generic [ref=e682]:
        - heading "Package Summary" [level=4] [ref=e683]
        - generic [ref=e685]:
          - generic [ref=e688]:
            - img "Total Pieces" [ref=e690]
            - generic [ref=e691]:
              - paragraph [ref=e692]: Total Pieces
              - heading "0" [level=4] [ref=e693]
          - generic [ref=e696]:
            - img "Total Weight" [ref=e698]
            - generic [ref=e699]:
              - paragraph [ref=e700]: Total Weight
              - heading "0 lbs | 0 kg" [level=4] [ref=e701]
          - generic [ref=e704]:
            - img "Total Volume" [ref=e706]
            - generic [ref=e707]:
              - paragraph [ref=e708]: Total Volume
              - heading "0 ft³ | 0 m³" [level=4] [ref=e709]
          - generic [ref=e712]:
            - img "Total Volume Weight" [ref=e714]
            - generic [ref=e715]:
              - paragraph [ref=e716]: Total Volume Weight
              - heading "0 lbs | 0 kg" [level=4] [ref=e717]
          - generic [ref=e720]:
            - img "Total Value" [ref=e722]
            - generic [ref=e723]:
              - paragraph [ref=e724]: Total Value
              - heading "$0.00" [level=4] [ref=e725]
      - table [ref=e729]:
        - rowgroup [ref=e730]:
          - row "Package Type No. of Pieces No. of Units Volume (ft3) Volume (m3) Weight (Lbs) Weight (Kgs)" [ref=e731]:
            - columnheader "Package Type" [ref=e732]:
              - generic [ref=e734] [cursor=pointer]: Package Type
            - columnheader "No. of Pieces" [ref=e736]:
              - generic [ref=e738] [cursor=pointer]: No. of Pieces
            - columnheader "No. of Units" [ref=e740]:
              - generic [ref=e742] [cursor=pointer]: No. of Units
            - columnheader "Volume (ft3)" [ref=e744]:
              - generic [ref=e746] [cursor=pointer]:
                - text: Volume (ft
                - superscript [ref=e747]: "3"
                - text: )
            - columnheader "Volume (m3)" [ref=e749]:
              - generic [ref=e751] [cursor=pointer]:
                - text: Volume (m
                - superscript [ref=e752]: "3"
                - text: )
            - columnheader "Weight (Lbs)" [ref=e754]:
              - generic [ref=e756] [cursor=pointer]: Weight (Lbs)
            - columnheader "Weight (Kgs)" [ref=e758]:
              - generic [ref=e760] [cursor=pointer]: Weight (Kgs)
        - rowgroup
      - generic [ref=e763]:
        - generic "Create Driver Contact" [ref=e764]:
          - generic [ref=e765]:
            - heading "Create Driver Contact" [level=2] [ref=e766]
            - button [ref=e767] [cursor=pointer]
        - generic:
          - generic [ref=e770]:
            - generic [ref=e775] [cursor=pointer]:
              - textbox "First Name" [ref=e776]
              - generic:
                - generic: First Name
            - generic [ref=e781] [cursor=pointer]:
              - textbox "Last Name" [ref=e782]
              - generic:
                - generic: Last Name
            - generic [ref=e787]:
              - textbox "Roles" [disabled] [ref=e788]: Driver
              - generic:
                - generic: Roles
            - generic [ref=e793] [cursor=pointer]:
              - textbox "Driver License No." [ref=e794]
              - generic:
                - generic: Driver License No.
            - generic [ref=e799] [cursor=pointer]:
              - textbox "Email Address" [ref=e800]
              - generic:
                - generic: Email Address
            - generic [ref=e805] [cursor=pointer]:
              - textbox "Phone Number" [ref=e806]
              - generic:
                - generic: Phone Number
            - generic [ref=e811] [cursor=pointer]:
              - textbox "Extension" [ref=e812]
              - generic:
                - generic: Extension
            - generic [ref=e819] [cursor=pointer]:
              - combobox "Carrier Name" [ref=e820]
              - generic:
                - generic: Carrier Name
          - generic [ref=e825]:
            - button "Create" [disabled]: Create
            - button "Create & Add Another" [disabled]: Create & Add Another
            - button "Cancel" [ref=e826] [cursor=pointer]: Cancel
  - button "AI Assistant AI" [ref=e827] [cursor=pointer]:
    - img "AI Assistant" [ref=e828]
    - text: AI
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
  28 |         //Remove extra spaces and filter out empty strings
  29 |         const warehouses = warehouseList.map(warehouse => warehouse.trim()).
  30 |             filter(warehouse => warehouse.length > 0);
  31 |         console.log('clean warehouse List:', warehouses);
  32 |         //// Pick a random value from the array
  33 |         const randomIndex = Math.floor(Math.random() * warehouses.length);
  34 |         const randomWarehouse = warehouses[randomIndex];
  35 |         console.log('Randomly selected warehouse:', randomWarehouse);
  36 |         await warehouseOptions.nth(randomIndex).click();
> 37 |         await expect(warehouseField).toContainText(randomWarehouse);
     |                      ^ ReferenceError: warehouseField is not defined
  38 |         // Find the randomly selected warehouse in the dropdown
  39 |         //const randomOption = warehouseOptions.filter({ hasText: randomWarehouse }).first();
  40 |         //Scroll to it If needed and click on it
  41 |         //await randomOption.scrollIntoViewIfNeeded();
  42 | 
  43 |         //console.log('Selected Warehouse:', randomWarehouse);
  44 | 
  45 |         await this.page.pause();
  46 |     }
  47 | 
  48 | }
  49 | 
  50 | module.exports = WRPage;
```