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
                  - generic [ref=e156]: 09/09/2026 at 04:47 PM
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
                  - combobox "Shipper Name" [ref=e220]: ALBATROSS AMERICA, INC
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
                    - generic [ref=e240]: 8272 NW 21ST ST, DORAL, FL 33122 8272 NW 21ST ST DORAL FL 33122
              - generic [ref=e241]:
                - generic [ref=e244]:
                  - paragraph [ref=e245]:
                    - generic [ref=e246]: Address 2
                  - paragraph [ref=e247]:
                    - generic [ref=e248]: testo
                - generic [ref=e251]:
                  - paragraph [ref=e252]:
                    - generic [ref=e253]: City
                  - paragraph [ref=e254]:
                    - generic [ref=e255]: crud
                - generic [ref=e257]:
                  - generic [ref=e260]:
                    - paragraph [ref=e261]:
                      - generic [ref=e262]: State
                    - paragraph [ref=e263]:
                      - generic [ref=e264]: pi
                  - generic [ref=e267]:
                    - paragraph [ref=e268]:
                      - generic [ref=e269]: Zip Code
                    - paragraph [ref=e270]:
                      - generic [ref=e271]: "445"
              - generic [ref=e272]:
                - generic [ref=e275]:
                  - paragraph [ref=e276]:
                    - generic [ref=e277]: Country
                  - paragraph [ref=e278]:
                    - generic [ref=e279]: miami
                - generic [ref=e286] [cursor=pointer]:
                  - combobox "Point Of Contact" [expanded] [ref=e287]:
                    - listbox "Point Of Contact" [ref=e292]:
                      - generic [ref=e293]: Point Of Contact
                      - option [disabled] [ref=e294]:
                        - searchbox [disabled] [active] [ref=e298]
                      - button [ref=e299]:
                        - img [ref=e300]
                      - generic [ref=e303]:
                        - option
                        - button "Create New" [ref=e304]: Create New
                  - generic:
                    - generic: Point Of Contact
            - generic [ref=e306]:
              - heading "Consignee" [level=4] [ref=e307]
              - generic [ref=e308]:
                - generic [ref=e315] [cursor=pointer]:
                  - combobox "Consignee Name" [ref=e316]
                  - generic:
                    - generic:
                      - generic: Consignee Name
                - generic [ref=e323]:
                  - combobox "Location" [disabled] [ref=e324]
                  - generic:
                    - generic: Location
                - paragraph [ref=e332]:
                  - generic [ref=e333]: Address 1
              - generic [ref=e334]:
                - paragraph [ref=e338]:
                  - generic [ref=e339]: Address 2
                - paragraph [ref=e343]:
                  - generic [ref=e344]: City
                - generic [ref=e346]:
                  - paragraph [ref=e350]:
                    - generic [ref=e351]: State
                  - paragraph [ref=e355]:
                    - generic [ref=e356]: Zip Code
              - generic [ref=e357]:
                - paragraph [ref=e361]:
                  - generic [ref=e362]: Country
                - generic [ref=e369]:
                  - combobox "Point Of Contact" [disabled] [ref=e370]
                  - generic:
                    - generic: Point Of Contact
            - generic [ref=e376]:
              - heading "Agent" [level=4] [ref=e377]
              - generic [ref=e378]:
                - generic [ref=e385] [cursor=pointer]:
                  - combobox "Agent Name" [ref=e386]
                  - generic:
                    - generic:
                      - generic: Agent Name
                - generic [ref=e393]:
                  - combobox "Location" [disabled] [ref=e394]
                  - generic:
                    - generic: Location
                - paragraph [ref=e402]:
                  - generic [ref=e403]: Address 1
              - generic [ref=e404]:
                - paragraph [ref=e408]:
                  - generic [ref=e409]: Address 2
                - paragraph [ref=e413]:
                  - generic [ref=e414]: City
                - generic [ref=e416]:
                  - paragraph [ref=e420]:
                    - generic [ref=e421]: State
                  - paragraph [ref=e425]:
                    - generic [ref=e426]: Zip Code
              - generic [ref=e427]:
                - paragraph [ref=e431]:
                  - generic [ref=e432]: Country
                - generic [ref=e439]:
                  - combobox "Point Of Contact" [disabled] [ref=e440]
                  - generic:
                    - generic: Point Of Contact
            - generic [ref=e446]:
              - heading "Supplier" [level=4] [ref=e447]
              - generic [ref=e448]:
                - generic [ref=e455] [cursor=pointer]:
                  - combobox "Supplier Name" [ref=e456]
                  - generic:
                    - generic:
                      - generic: Supplier Name
                - generic [ref=e463]:
                  - combobox "Location" [disabled] [ref=e464]
                  - generic:
                    - generic: Location
                - paragraph [ref=e472]:
                  - generic [ref=e473]: Address 1
              - generic [ref=e474]:
                - paragraph [ref=e478]:
                  - generic [ref=e479]: Address 2
                - paragraph [ref=e483]:
                  - generic [ref=e484]: City
                - generic [ref=e486]:
                  - paragraph [ref=e490]:
                    - generic [ref=e491]: State
                  - paragraph [ref=e495]:
                    - generic [ref=e496]: Zip Code
              - generic [ref=e497]:
                - paragraph [ref=e501]:
                  - generic [ref=e502]: Country
                - generic [ref=e506]:
                  - paragraph [ref=e507]: Invoice No.
                  - textbox "Enter Invoice No." [ref=e513]
                - generic [ref=e518]:
                  - paragraph [ref=e519]: PO No.
                  - textbox "Enter PO No. or PO ID" [ref=e525]
            - generic [ref=e527]:
              - heading "Import Information" [level=4] [ref=e528]
              - generic [ref=e529]:
                - generic [ref=e536] [cursor=pointer]:
                  - combobox "Receiving Type" [ref=e537]
                  - generic:
                    - generic: Receiving Type
                - generic [ref=e546] [cursor=pointer]:
                  - textbox "Entry Number" [ref=e547]
                  - generic:
                    - generic: Entry Number
                - generic [ref=e551] [cursor=pointer]: Entry Date/Time
            - generic [ref=e552]:
              - heading "Bill To" [level=4] [ref=e553]
              - generic [ref=e554]:
                - generic [ref=e561] [cursor=pointer]:
                  - combobox "Client Name" [ref=e562]
                  - generic:
                    - generic: Client Name
                - generic [ref=e573] [cursor=pointer]:
                  - combobox "Point of Contact" [ref=e574]
                  - generic:
                    - generic: Point of Contact
            - generic [ref=e579]:
              - heading "Custom Fields" [level=4] [ref=e580]
              - generic [ref=e581]:
                - generic [ref=e590] [cursor=pointer]:
                  - combobox "WR Dropdown"
                  - generic [ref=e592]: WR Dropdown
                - generic [ref=e601] [cursor=pointer]:
                  - combobox "WR Checkbox"
                  - generic [ref=e603]: WR Checkbox
                - generic [ref=e611]:
                  - generic [ref=e612] [cursor=pointer]: WR Picker
                  - textbox
                - generic [ref=e620] [cursor=pointer]:
                  - textbox "WR SLT Edit" [ref=e621]
                  - generic [ref=e623]: WR SLT Edit
                - generic [ref=e632] [cursor=pointer]:
                  - combobox "WR DD Edit"
                  - generic [ref=e634]: WR DD Edit
                - generic [ref=e643] [cursor=pointer]:
                  - combobox "WR MC Edit"
                  - generic [ref=e645]: WR MC Edit
                - generic [ref=e653]:
                  - generic [ref=e654] [cursor=pointer]: WR DP Edit
                  - textbox
                - generic [ref=e662] [cursor=pointer]:
                  - textbox "TechOps Ref No." [ref=e663]
                  - generic [ref=e665]: TechOps Ref No.
                - generic [ref=e672] [cursor=pointer]:
                  - textbox "Reference No" [ref=e673]
                  - generic [ref=e675]: Reference No
                - generic [ref=e682] [cursor=pointer]:
                  - textbox "Warehouse X" [ref=e683]
                  - generic [ref=e685]: Warehouse X
                - generic [ref=e694] [cursor=pointer]:
                  - combobox "Instructions"
                  - generic [ref=e696]: Instructions
          - generic [ref=e698]:
            - generic [ref=e699]:
              - img [ref=e701]
              - paragraph [ref=e703]: Do you want to create a warehouse receipt?
            - generic [ref=e705]:
              - button "Create" [ref=e706] [cursor=pointer]: Create
              - button "Cancel" [ref=e707] [cursor=pointer]: Cancel
      - generic [ref=e708]:
        - heading "Package Summary" [level=4] [ref=e709]
        - generic [ref=e711]:
          - generic [ref=e714]:
            - img "Total Pieces" [ref=e716]
            - generic [ref=e717]:
              - paragraph [ref=e718]: Total Pieces
              - heading "0" [level=4] [ref=e719]
          - generic [ref=e722]:
            - img "Total Weight" [ref=e724]
            - generic [ref=e725]:
              - paragraph [ref=e726]: Total Weight
              - heading "0 lbs | 0 kg" [level=4] [ref=e727]
          - generic [ref=e730]:
            - img "Total Volume" [ref=e732]
            - generic [ref=e733]:
              - paragraph [ref=e734]: Total Volume
              - heading "0 ft³ | 0 m³" [level=4] [ref=e735]
          - generic [ref=e738]:
            - img "Total Volume Weight" [ref=e740]
            - generic [ref=e741]:
              - paragraph [ref=e742]: Total Volume Weight
              - heading "0 lbs | 0 kg" [level=4] [ref=e743]
          - generic [ref=e746]:
            - img "Total Value" [ref=e748]
            - generic [ref=e749]:
              - paragraph [ref=e750]: Total Value
              - heading "$0.00" [level=4] [ref=e751]
      - table [ref=e755]:
        - rowgroup [ref=e756]:
          - row "Package Type No. of Pieces No. of Units Volume (ft3) Volume (m3) Weight (Lbs) Weight (Kgs)" [ref=e757]:
            - columnheader "Package Type" [ref=e758]:
              - generic [ref=e760] [cursor=pointer]: Package Type
            - columnheader "No. of Pieces" [ref=e762]:
              - generic [ref=e764] [cursor=pointer]: No. of Pieces
            - columnheader "No. of Units" [ref=e766]:
              - generic [ref=e768] [cursor=pointer]: No. of Units
            - columnheader "Volume (ft3)" [ref=e770]:
              - generic [ref=e772] [cursor=pointer]:
                - text: Volume (ft
                - superscript [ref=e773]: "3"
                - text: )
            - columnheader "Volume (m3)" [ref=e775]:
              - generic [ref=e777] [cursor=pointer]:
                - text: Volume (m
                - superscript [ref=e778]: "3"
                - text: )
            - columnheader "Weight (Lbs)" [ref=e780]:
              - generic [ref=e782] [cursor=pointer]: Weight (Lbs)
            - columnheader "Weight (Kgs)" [ref=e784]:
              - generic [ref=e786] [cursor=pointer]: Weight (Kgs)
        - rowgroup
      - generic [ref=e789]:
        - generic "Create Driver Contact" [ref=e790]:
          - generic [ref=e791]:
            - heading "Create Driver Contact" [level=2] [ref=e792]
            - button [ref=e793] [cursor=pointer]
        - generic:
          - generic [ref=e796]:
            - generic [ref=e801] [cursor=pointer]:
              - textbox "First Name" [ref=e802]
              - generic:
                - generic: First Name
            - generic [ref=e807] [cursor=pointer]:
              - textbox "Last Name" [ref=e808]
              - generic:
                - generic: Last Name
            - generic [ref=e813]:
              - textbox "Roles" [disabled] [ref=e814]: Driver
              - generic:
                - generic: Roles
            - generic [ref=e819] [cursor=pointer]:
              - textbox "Driver License No." [ref=e820]
              - generic:
                - generic: Driver License No.
            - generic [ref=e825] [cursor=pointer]:
              - textbox "Email Address" [ref=e826]
              - generic:
                - generic: Email Address
            - generic [ref=e831] [cursor=pointer]:
              - textbox "Phone Number" [ref=e832]
              - generic:
                - generic: Phone Number
            - generic [ref=e837] [cursor=pointer]:
              - textbox "Extension" [ref=e838]
              - generic:
                - generic: Extension
            - generic [ref=e845] [cursor=pointer]:
              - combobox "Carrier Name" [ref=e846]
              - generic:
                - generic: Carrier Name
          - generic [ref=e851]:
            - button "Create" [disabled]: Create
            - button "Create & Add Another" [disabled]: Create & Add Another
            - button "Cancel" [ref=e852] [cursor=pointer]: Cancel
  - button "AI Assistant AI" [ref=e853] [cursor=pointer]:
    - img "AI Assistant" [ref=e854]
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