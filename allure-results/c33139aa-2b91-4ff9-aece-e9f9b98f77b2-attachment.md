# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createWarehouseReceipts.spec.js >> Warehouse receipts >> Create warehouse receipt
- Location: tests\createWarehouseReceipts.spec.js:10:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('//cyz-infinite-scroll//mat-option[@class=\'mat-option mat-focus-indicator mat-tooltip-trigger ng-star-inserted\']').first() to be visible

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
                  - generic [ref=e156]: 09/09/2026 at 03:18 PM
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
                  - combobox "Shipper Name" [ref=e220]: All Type Fence Co
                  - generic:
                    - generic:
                      - generic: Shipper Name
                - generic [ref=e227] [cursor=pointer]:
                  - combobox "Location Main" [ref=e228]:
                    - generic [ref=e232]: Main
                  - generic:
                    - generic: Location
                - generic [ref=e236]:
                  - paragraph [ref=e237]:
                    - generic [ref=e238]: Address 1
                  - paragraph [ref=e239]:
                    - generic [ref=e240]: 1600 Schuylkill Rd
              - generic [ref=e241]:
                - paragraph [ref=e245]:
                  - generic [ref=e246]: Address 2
                - generic [ref=e249]:
                  - paragraph [ref=e250]:
                    - generic [ref=e251]: City
                  - paragraph [ref=e252]:
                    - generic [ref=e253]: Douglassville
                - generic [ref=e255]:
                  - generic [ref=e258]:
                    - paragraph [ref=e259]:
                      - generic [ref=e260]: State
                    - paragraph [ref=e261]:
                      - generic [ref=e262]: Pennsylvania
                  - generic [ref=e265]:
                    - paragraph [ref=e266]:
                      - generic [ref=e267]: Zip Code
                    - paragraph [ref=e268]:
                      - generic [ref=e269]: "19518"
              - generic [ref=e270]:
                - generic [ref=e273]:
                  - paragraph [ref=e274]:
                    - generic [ref=e275]: Country
                  - paragraph [ref=e276]:
                    - generic [ref=e277]: United States
                - generic [ref=e284] [cursor=pointer]:
                  - combobox "Point Of Contact" [ref=e285]
                  - generic:
                    - generic: Point Of Contact
            - generic [ref=e291]:
              - heading "Consignee" [level=4] [ref=e292]
              - generic [ref=e293]:
                - generic [ref=e300] [cursor=pointer]:
                  - combobox "Consignee Name" [ref=e301]
                  - generic:
                    - generic:
                      - generic: Consignee Name
                - generic [ref=e308]:
                  - combobox "Location" [disabled] [ref=e309]
                  - generic:
                    - generic: Location
                - paragraph [ref=e317]:
                  - generic [ref=e318]: Address 1
              - generic [ref=e319]:
                - paragraph [ref=e323]:
                  - generic [ref=e324]: Address 2
                - paragraph [ref=e328]:
                  - generic [ref=e329]: City
                - generic [ref=e331]:
                  - paragraph [ref=e335]:
                    - generic [ref=e336]: State
                  - paragraph [ref=e340]:
                    - generic [ref=e341]: Zip Code
              - generic [ref=e342]:
                - paragraph [ref=e346]:
                  - generic [ref=e347]: Country
                - generic [ref=e354]:
                  - combobox "Point Of Contact" [disabled] [ref=e355]
                  - generic:
                    - generic: Point Of Contact
            - generic [ref=e361]:
              - heading "Agent" [level=4] [ref=e362]
              - generic [ref=e363]:
                - generic [ref=e370] [cursor=pointer]:
                  - combobox "Agent Name" [ref=e371]
                  - generic:
                    - generic:
                      - generic: Agent Name
                - generic [ref=e378]:
                  - combobox "Location" [disabled] [ref=e379]
                  - generic:
                    - generic: Location
                - paragraph [ref=e387]:
                  - generic [ref=e388]: Address 1
              - generic [ref=e389]:
                - paragraph [ref=e393]:
                  - generic [ref=e394]: Address 2
                - paragraph [ref=e398]:
                  - generic [ref=e399]: City
                - generic [ref=e401]:
                  - paragraph [ref=e405]:
                    - generic [ref=e406]: State
                  - paragraph [ref=e410]:
                    - generic [ref=e411]: Zip Code
              - generic [ref=e412]:
                - paragraph [ref=e416]:
                  - generic [ref=e417]: Country
                - generic [ref=e424]:
                  - combobox "Point Of Contact" [disabled] [ref=e425]
                  - generic:
                    - generic: Point Of Contact
            - generic [ref=e431]:
              - heading "Supplier" [level=4] [ref=e432]
              - generic [ref=e433]:
                - generic [ref=e440] [cursor=pointer]:
                  - combobox "Supplier Name" [ref=e441]
                  - generic:
                    - generic:
                      - generic: Supplier Name
                - generic [ref=e448]:
                  - combobox "Location" [disabled] [ref=e449]
                  - generic:
                    - generic: Location
                - paragraph [ref=e457]:
                  - generic [ref=e458]: Address 1
              - generic [ref=e459]:
                - paragraph [ref=e463]:
                  - generic [ref=e464]: Address 2
                - paragraph [ref=e468]:
                  - generic [ref=e469]: City
                - generic [ref=e471]:
                  - paragraph [ref=e475]:
                    - generic [ref=e476]: State
                  - paragraph [ref=e480]:
                    - generic [ref=e481]: Zip Code
              - generic [ref=e482]:
                - paragraph [ref=e486]:
                  - generic [ref=e487]: Country
                - generic [ref=e491]:
                  - paragraph [ref=e492]: Invoice No.
                  - textbox "Enter Invoice No." [ref=e498]
                - generic [ref=e503]:
                  - paragraph [ref=e504]: PO No.
                  - textbox "Enter PO No. or PO ID" [ref=e510]
            - generic [ref=e512]:
              - heading "Import Information" [level=4] [ref=e513]
              - generic [ref=e514]:
                - generic [ref=e521] [cursor=pointer]:
                  - combobox "Receiving Type" [ref=e522]
                  - generic:
                    - generic: Receiving Type
                - generic [ref=e531] [cursor=pointer]:
                  - textbox "Entry Number" [ref=e532]
                  - generic:
                    - generic: Entry Number
                - generic [ref=e536] [cursor=pointer]: Entry Date/Time
            - generic [ref=e537]:
              - heading "Bill To" [level=4] [ref=e538]
              - generic [ref=e539]:
                - generic [ref=e546] [cursor=pointer]:
                  - combobox "Client Name" [ref=e547]
                  - generic:
                    - generic: Client Name
                - generic [ref=e558] [cursor=pointer]:
                  - combobox "Point of Contact" [ref=e559]
                  - generic:
                    - generic: Point of Contact
            - generic [ref=e564]:
              - heading "Custom Fields" [level=4] [ref=e565]
              - generic [ref=e566]:
                - generic [ref=e575] [cursor=pointer]:
                  - combobox "WR Dropdown"
                  - generic [ref=e577]: WR Dropdown
                - generic [ref=e586] [cursor=pointer]:
                  - combobox "WR Checkbox"
                  - generic [ref=e588]: WR Checkbox
                - generic [ref=e596]:
                  - generic [ref=e597] [cursor=pointer]: WR Picker
                  - textbox
                - generic [ref=e605] [cursor=pointer]:
                  - textbox "WR SLT Edit" [ref=e606]
                  - generic [ref=e608]: WR SLT Edit
                - generic [ref=e617] [cursor=pointer]:
                  - combobox "WR DD Edit"
                  - generic [ref=e619]: WR DD Edit
                - generic [ref=e628] [cursor=pointer]:
                  - combobox "WR MC Edit"
                  - generic [ref=e630]: WR MC Edit
                - generic [ref=e638]:
                  - generic [ref=e639] [cursor=pointer]: WR DP Edit
                  - textbox
                - generic [ref=e647] [cursor=pointer]:
                  - textbox "TechOps Ref No." [ref=e648]
                  - generic [ref=e650]: TechOps Ref No.
                - generic [ref=e657] [cursor=pointer]:
                  - textbox "Reference No" [ref=e658]
                  - generic [ref=e660]: Reference No
                - generic [ref=e667] [cursor=pointer]:
                  - textbox "Warehouse X" [ref=e668]
                  - generic [ref=e670]: Warehouse X
                - generic [ref=e679] [cursor=pointer]:
                  - combobox "Instructions"
                  - generic [ref=e681]: Instructions
          - generic [ref=e683]:
            - generic [ref=e684]:
              - img [ref=e686]
              - paragraph [ref=e688]: Do you want to create a warehouse receipt?
            - generic [ref=e690]:
              - button "Create" [ref=e691] [cursor=pointer]: Create
              - button "Cancel" [ref=e692] [cursor=pointer]: Cancel
      - generic [ref=e693]:
        - heading "Package Summary" [level=4] [ref=e694]
        - generic [ref=e696]:
          - generic [ref=e699]:
            - img "Total Pieces" [ref=e701]
            - generic [ref=e702]:
              - paragraph [ref=e703]: Total Pieces
              - heading "0" [level=4] [ref=e704]
          - generic [ref=e707]:
            - img "Total Weight" [ref=e709]
            - generic [ref=e710]:
              - paragraph [ref=e711]: Total Weight
              - heading "0 lbs | 0 kg" [level=4] [ref=e712]
          - generic [ref=e715]:
            - img "Total Volume" [ref=e717]
            - generic [ref=e718]:
              - paragraph [ref=e719]: Total Volume
              - heading "0 ft³ | 0 m³" [level=4] [ref=e720]
          - generic [ref=e723]:
            - img "Total Volume Weight" [ref=e725]
            - generic [ref=e726]:
              - paragraph [ref=e727]: Total Volume Weight
              - heading "0 lbs | 0 kg" [level=4] [ref=e728]
          - generic [ref=e731]:
            - img "Total Value" [ref=e733]
            - generic [ref=e734]:
              - paragraph [ref=e735]: Total Value
              - heading "$0.00" [level=4] [ref=e736]
      - table [ref=e740]:
        - rowgroup [ref=e741]:
          - row "Package Type No. of Pieces No. of Units Volume (ft3) Volume (m3) Weight (Lbs) Weight (Kgs)" [ref=e742]:
            - columnheader "Package Type" [ref=e743]:
              - generic [ref=e745] [cursor=pointer]: Package Type
            - columnheader "No. of Pieces" [ref=e747]:
              - generic [ref=e749] [cursor=pointer]: No. of Pieces
            - columnheader "No. of Units" [ref=e751]:
              - generic [ref=e753] [cursor=pointer]: No. of Units
            - columnheader "Volume (ft3)" [ref=e755]:
              - generic [ref=e757] [cursor=pointer]:
                - text: Volume (ft
                - superscript [ref=e758]: "3"
                - text: )
            - columnheader "Volume (m3)" [ref=e760]:
              - generic [ref=e762] [cursor=pointer]:
                - text: Volume (m
                - superscript [ref=e763]: "3"
                - text: )
            - columnheader "Weight (Lbs)" [ref=e765]:
              - generic [ref=e767] [cursor=pointer]: Weight (Lbs)
            - columnheader "Weight (Kgs)" [ref=e769]:
              - generic [ref=e771] [cursor=pointer]: Weight (Kgs)
        - rowgroup
      - generic [ref=e774]:
        - generic "Create Driver Contact" [ref=e775]:
          - generic [ref=e776]:
            - heading "Create Driver Contact" [level=2] [ref=e777]
            - button [ref=e778] [cursor=pointer]
        - generic:
          - generic [ref=e781]:
            - generic [ref=e786] [cursor=pointer]:
              - textbox "First Name" [ref=e787]
              - generic:
                - generic: First Name
            - generic [ref=e792] [cursor=pointer]:
              - textbox "Last Name" [ref=e793]
              - generic:
                - generic: Last Name
            - generic [ref=e798]:
              - textbox "Roles" [disabled] [ref=e799]: Driver
              - generic:
                - generic: Roles
            - generic [ref=e804] [cursor=pointer]:
              - textbox "Driver License No." [ref=e805]
              - generic:
                - generic: Driver License No.
            - generic [ref=e810] [cursor=pointer]:
              - textbox "Email Address" [ref=e811]
              - generic:
                - generic: Email Address
            - generic [ref=e816] [cursor=pointer]:
              - textbox "Phone Number" [ref=e817]
              - generic:
                - generic: Phone Number
            - generic [ref=e822] [cursor=pointer]:
              - textbox "Extension" [ref=e823]
              - generic:
                - generic: Extension
            - generic [ref=e830] [cursor=pointer]:
              - combobox "Carrier Name" [ref=e831]
              - generic:
                - generic: Carrier Name
          - generic [ref=e836]:
            - button "Create" [disabled]: Create
            - button "Create & Add Another" [disabled]: Create & Add Another
            - button "Cancel" [ref=e837] [cursor=pointer]: Cancel
  - button "AI Assistant AI" [ref=e838] [cursor=pointer]:
    - img "AI Assistant" [ref=e839]
    - text: AI
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
     |                               ^ TimeoutError: locator.waitFor: Timeout 60000ms exceeded.
  41 |         const values = await locator.allTextContents();
  42 | 
  43 |         const dropdownValues = values
  44 |             .map(value => value.trim())
  45 |             .filter(value => value !== '');
  46 | 
  47 |         if (dropdownValues.length === 0) {
  48 |             throw new Error(`No options found in the ${dropdownName}.`);
  49 |         }
  50 | 
  51 |         return dropdownValues;
  52 |     }
  53 |     static async randomFunction(value) {
  54 |         const randomvalue = Math.floor(Math.random() * value.length);
  55 |         return value[randomvalue];
  56 |     }
  57 |     static async selectRandomValue(values, options, valueName = 'dropdown value') {
  58 |         if (!Array.isArray(values) || values.length === 0) {
  59 |             throw new Error(`Cannot select a random ${valueName}: no values are available.`);
  60 |         }
  61 |         if (!options) {
  62 |             throw new Error(`Cannot select a random ${valueName}: dropdown locator is null or undefined.`);
  63 |         }
  64 | 
  65 |         const randomIndex = Math.floor(Math.random() * values.length);
  66 |         const randomValue = values[randomIndex];
  67 | 
  68 |         console.log('Randomly selected value:', randomValue);
  69 | 
  70 |         const randomOption = options
  71 |             .filter({ hasText: randomValue })
  72 |             .first();
  73 | 
  74 |         await randomOption.waitFor({ state: 'visible' });
  75 |         await randomOption.scrollIntoViewIfNeeded();
  76 |         await randomOption.click();
  77 | 
  78 |         console.log('Selected value:', randomValue);
  79 | 
  80 |         return randomValue;
  81 |     }
  82 | 
  83 | }
  84 | 
  85 | module.exports = CommonUtils;
  86 | 
  87 | 
  88 | 
```