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
                  - generic [ref=e156]: 09/09/2026 at 03:27 PM
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
                  - combobox "Shipper Name" [ref=e220]: 146 Thomas Jefferson Terrace and ny state usa
                  - generic:
                    - generic:
                      - generic: Shipper Name
                - generic [ref=e227] [cursor=pointer]:
                  - combobox "Location Main" [expanded] [ref=e228]:
                    - generic [ref=e229]:
                      - generic [ref=e232]: Main
                      - listbox "Location" [ref=e234]:
                        - generic [ref=e235]: Location
                        - option [disabled] [ref=e236]:
                          - searchbox [disabled] [active] [ref=e240]
                        - button [ref=e241]:
                          - img [ref=e242]
                        - generic [ref=e244]:
                          - option [ref=e245]
                          - generic [ref=e247]:
                            - option
                            - button "Create New" [ref=e248]: Create New
                          - option "Main" [selected] [ref=e249]:
                            - generic [ref=e250]: Main
                  - generic:
                    - generic: Location
                - generic [ref=e253]:
                  - paragraph [ref=e254]:
                    - generic [ref=e255]: Address 1
                  - paragraph [ref=e256]:
                    - generic [ref=e257]: 146 Thomas Jefferson Terrace
              - generic [ref=e258]:
                - generic [ref=e261]:
                  - paragraph [ref=e262]:
                    - generic [ref=e263]: Address 2
                  - paragraph [ref=e264]:
                    - generic [ref=e265]: test lpng 132343234 address for profile creation and check format
                - generic [ref=e268]:
                  - paragraph [ref=e269]:
                    - generic [ref=e270]: City
                  - paragraph [ref=e271]:
                    - generic [ref=e272]: Elkton
                - generic [ref=e274]:
                  - generic [ref=e277]:
                    - paragraph [ref=e278]:
                      - generic [ref=e279]: State
                    - paragraph [ref=e280]:
                      - generic [ref=e281]: Maryland
                  - generic [ref=e284]:
                    - paragraph [ref=e285]:
                      - generic [ref=e286]: Zip Code
                    - paragraph [ref=e287]:
                      - generic [ref=e288]: "21921"
              - generic [ref=e289]:
                - generic [ref=e292]:
                  - paragraph [ref=e293]:
                    - generic [ref=e294]: Country
                  - paragraph [ref=e295]:
                    - generic [ref=e296]: United States
                - generic [ref=e303] [cursor=pointer]:
                  - combobox "Point Of Contact test ldsjf" [ref=e304]:
                    - generic [ref=e308]: test ldsjf
                  - generic:
                    - generic: Point Of Contact
            - generic [ref=e311]:
              - heading "Consignee" [level=4] [ref=e312]
              - generic [ref=e313]:
                - generic [ref=e320] [cursor=pointer]:
                  - combobox "Consignee Name" [ref=e321]
                  - generic:
                    - generic:
                      - generic: Consignee Name
                - generic [ref=e328]:
                  - combobox "Location" [disabled] [ref=e329]
                  - generic:
                    - generic: Location
                - paragraph [ref=e337]:
                  - generic [ref=e338]: Address 1
              - generic [ref=e339]:
                - paragraph [ref=e343]:
                  - generic [ref=e344]: Address 2
                - paragraph [ref=e348]:
                  - generic [ref=e349]: City
                - generic [ref=e351]:
                  - paragraph [ref=e355]:
                    - generic [ref=e356]: State
                  - paragraph [ref=e360]:
                    - generic [ref=e361]: Zip Code
              - generic [ref=e362]:
                - paragraph [ref=e366]:
                  - generic [ref=e367]: Country
                - generic [ref=e374]:
                  - combobox "Point Of Contact" [disabled] [ref=e375]
                  - generic:
                    - generic: Point Of Contact
            - generic [ref=e381]:
              - heading "Agent" [level=4] [ref=e382]
              - generic [ref=e383]:
                - generic [ref=e390] [cursor=pointer]:
                  - combobox "Agent Name" [ref=e391]
                  - generic:
                    - generic:
                      - generic: Agent Name
                - generic [ref=e398]:
                  - combobox "Location" [disabled] [ref=e399]
                  - generic:
                    - generic: Location
                - paragraph [ref=e407]:
                  - generic [ref=e408]: Address 1
              - generic [ref=e409]:
                - paragraph [ref=e413]:
                  - generic [ref=e414]: Address 2
                - paragraph [ref=e418]:
                  - generic [ref=e419]: City
                - generic [ref=e421]:
                  - paragraph [ref=e425]:
                    - generic [ref=e426]: State
                  - paragraph [ref=e430]:
                    - generic [ref=e431]: Zip Code
              - generic [ref=e432]:
                - paragraph [ref=e436]:
                  - generic [ref=e437]: Country
                - generic [ref=e444]:
                  - combobox "Point Of Contact" [disabled] [ref=e445]
                  - generic:
                    - generic: Point Of Contact
            - generic [ref=e451]:
              - heading "Supplier" [level=4] [ref=e452]
              - generic [ref=e453]:
                - generic [ref=e460] [cursor=pointer]:
                  - combobox "Supplier Name" [ref=e461]
                  - generic:
                    - generic:
                      - generic: Supplier Name
                - generic [ref=e468]:
                  - combobox "Location" [disabled] [ref=e469]
                  - generic:
                    - generic: Location
                - paragraph [ref=e477]:
                  - generic [ref=e478]: Address 1
              - generic [ref=e479]:
                - paragraph [ref=e483]:
                  - generic [ref=e484]: Address 2
                - paragraph [ref=e488]:
                  - generic [ref=e489]: City
                - generic [ref=e491]:
                  - paragraph [ref=e495]:
                    - generic [ref=e496]: State
                  - paragraph [ref=e500]:
                    - generic [ref=e501]: Zip Code
              - generic [ref=e502]:
                - paragraph [ref=e506]:
                  - generic [ref=e507]: Country
                - generic [ref=e511]:
                  - paragraph [ref=e512]: Invoice No.
                  - textbox "Enter Invoice No." [ref=e518]
                - generic [ref=e523]:
                  - paragraph [ref=e524]: PO No.
                  - textbox "Enter PO No. or PO ID" [ref=e530]
            - generic [ref=e532]:
              - heading "Import Information" [level=4] [ref=e533]
              - generic [ref=e534]:
                - generic [ref=e541] [cursor=pointer]:
                  - combobox "Receiving Type" [ref=e542]
                  - generic:
                    - generic: Receiving Type
                - generic [ref=e551] [cursor=pointer]:
                  - textbox "Entry Number" [ref=e552]
                  - generic:
                    - generic: Entry Number
                - generic [ref=e556] [cursor=pointer]: Entry Date/Time
            - generic [ref=e557]:
              - heading "Bill To" [level=4] [ref=e558]
              - generic [ref=e559]:
                - generic [ref=e566] [cursor=pointer]:
                  - combobox "Client Name" [ref=e567]
                  - generic:
                    - generic: Client Name
                - generic [ref=e578] [cursor=pointer]:
                  - combobox "Point of Contact" [ref=e579]
                  - generic:
                    - generic: Point of Contact
            - generic [ref=e584]:
              - heading "Custom Fields" [level=4] [ref=e585]
              - generic [ref=e586]:
                - generic [ref=e595] [cursor=pointer]:
                  - combobox "WR Dropdown"
                  - generic [ref=e597]: WR Dropdown
                - generic [ref=e606] [cursor=pointer]:
                  - combobox "WR Checkbox"
                  - generic [ref=e608]: WR Checkbox
                - generic [ref=e616]:
                  - generic [ref=e617] [cursor=pointer]: WR Picker
                  - textbox
                - generic [ref=e625] [cursor=pointer]:
                  - textbox "WR SLT Edit" [ref=e626]
                  - generic [ref=e628]: WR SLT Edit
                - generic [ref=e637] [cursor=pointer]:
                  - combobox "WR DD Edit"
                  - generic [ref=e639]: WR DD Edit
                - generic [ref=e648] [cursor=pointer]:
                  - combobox "WR MC Edit"
                  - generic [ref=e650]: WR MC Edit
                - generic [ref=e658]:
                  - generic [ref=e659] [cursor=pointer]: WR DP Edit
                  - textbox
                - generic [ref=e667] [cursor=pointer]:
                  - textbox "TechOps Ref No." [ref=e668]
                  - generic [ref=e670]: TechOps Ref No.
                - generic [ref=e677] [cursor=pointer]:
                  - textbox "Reference No" [ref=e678]
                  - generic [ref=e680]: Reference No
                - generic [ref=e687] [cursor=pointer]:
                  - textbox "Warehouse X" [ref=e688]
                  - generic [ref=e690]: Warehouse X
                - generic [ref=e699] [cursor=pointer]:
                  - combobox "Instructions"
                  - generic [ref=e701]: Instructions
          - generic [ref=e703]:
            - generic [ref=e704]:
              - img [ref=e706]
              - paragraph [ref=e708]: Do you want to create a warehouse receipt?
            - generic [ref=e710]:
              - button "Create" [ref=e711] [cursor=pointer]: Create
              - button "Cancel" [ref=e712] [cursor=pointer]: Cancel
      - generic [ref=e713]:
        - heading "Package Summary" [level=4] [ref=e714]
        - generic [ref=e716]:
          - generic [ref=e719]:
            - img "Total Pieces" [ref=e721]
            - generic [ref=e722]:
              - paragraph [ref=e723]: Total Pieces
              - heading "0" [level=4] [ref=e724]
          - generic [ref=e727]:
            - img "Total Weight" [ref=e729]
            - generic [ref=e730]:
              - paragraph [ref=e731]: Total Weight
              - heading "0 lbs | 0 kg" [level=4] [ref=e732]
          - generic [ref=e735]:
            - img "Total Volume" [ref=e737]
            - generic [ref=e738]:
              - paragraph [ref=e739]: Total Volume
              - heading "0 ft³ | 0 m³" [level=4] [ref=e740]
          - generic [ref=e743]:
            - img "Total Volume Weight" [ref=e745]
            - generic [ref=e746]:
              - paragraph [ref=e747]: Total Volume Weight
              - heading "0 lbs | 0 kg" [level=4] [ref=e748]
          - generic [ref=e751]:
            - img "Total Value" [ref=e753]
            - generic [ref=e754]:
              - paragraph [ref=e755]: Total Value
              - heading "$0.00" [level=4] [ref=e756]
      - table [ref=e760]:
        - rowgroup [ref=e761]:
          - row "Package Type No. of Pieces No. of Units Volume (ft3) Volume (m3) Weight (Lbs) Weight (Kgs)" [ref=e762]:
            - columnheader "Package Type" [ref=e763]:
              - generic [ref=e765] [cursor=pointer]: Package Type
            - columnheader "No. of Pieces" [ref=e767]:
              - generic [ref=e769] [cursor=pointer]: No. of Pieces
            - columnheader "No. of Units" [ref=e771]:
              - generic [ref=e773] [cursor=pointer]: No. of Units
            - columnheader "Volume (ft3)" [ref=e775]:
              - generic [ref=e777] [cursor=pointer]:
                - text: Volume (ft
                - superscript [ref=e778]: "3"
                - text: )
            - columnheader "Volume (m3)" [ref=e780]:
              - generic [ref=e782] [cursor=pointer]:
                - text: Volume (m
                - superscript [ref=e783]: "3"
                - text: )
            - columnheader "Weight (Lbs)" [ref=e785]:
              - generic [ref=e787] [cursor=pointer]: Weight (Lbs)
            - columnheader "Weight (Kgs)" [ref=e789]:
              - generic [ref=e791] [cursor=pointer]: Weight (Kgs)
        - rowgroup
      - generic [ref=e794]:
        - generic "Create Driver Contact" [ref=e795]:
          - generic [ref=e796]:
            - heading "Create Driver Contact" [level=2] [ref=e797]
            - button [ref=e798] [cursor=pointer]
        - generic:
          - generic [ref=e801]:
            - generic [ref=e806] [cursor=pointer]:
              - textbox "First Name" [ref=e807]
              - generic:
                - generic: First Name
            - generic [ref=e812] [cursor=pointer]:
              - textbox "Last Name" [ref=e813]
              - generic:
                - generic: Last Name
            - generic [ref=e818]:
              - textbox "Roles" [disabled] [ref=e819]: Driver
              - generic:
                - generic: Roles
            - generic [ref=e824] [cursor=pointer]:
              - textbox "Driver License No." [ref=e825]
              - generic:
                - generic: Driver License No.
            - generic [ref=e830] [cursor=pointer]:
              - textbox "Email Address" [ref=e831]
              - generic:
                - generic: Email Address
            - generic [ref=e836] [cursor=pointer]:
              - textbox "Phone Number" [ref=e837]
              - generic:
                - generic: Phone Number
            - generic [ref=e842] [cursor=pointer]:
              - textbox "Extension" [ref=e843]
              - generic:
                - generic: Extension
            - generic [ref=e850] [cursor=pointer]:
              - combobox "Carrier Name" [ref=e851]
              - generic:
                - generic: Carrier Name
          - generic [ref=e856]:
            - button "Create" [disabled]: Create
            - button "Create & Add Another" [disabled]: Create & Add Another
            - button "Cancel" [ref=e857] [cursor=pointer]: Cancel
  - button "AI Assistant AI" [ref=e858] [cursor=pointer]:
    - img "AI Assistant" [ref=e859]
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