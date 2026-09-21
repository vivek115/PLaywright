# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createWarehouseReceipts.spec.js >> Warehouse receipts >> Create warehouse receipt
- Location: tests\createWarehouseReceipts.spec.js:10:5

# Error details

```
Error: locator.getAttribute: name: expected string, got undefined
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
                  - generic [ref=e156]: 09/09/2026 at 03:34 PM
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
                  - combobox "Shipper Name" [ref=e220]: Akkemer
                  - generic:
                    - generic:
                      - generic: Shipper Name
                - generic [ref=e227] [cursor=pointer]:
                  - combobox "Location Main" [ref=e228]:
                    - generic [ref=e232]: Main
                  - generic:
                    - generic: Location
                - paragraph [ref=e237]:
                  - generic [ref=e238]: Address 1
              - generic [ref=e239]:
                - paragraph [ref=e243]:
                  - generic [ref=e244]: Address 2
                - paragraph [ref=e248]:
                  - generic [ref=e249]: City
                - generic [ref=e251]:
                  - paragraph [ref=e255]:
                    - generic [ref=e256]: State
                  - paragraph [ref=e260]:
                    - generic [ref=e261]: Zip Code
              - generic [ref=e262]:
                - paragraph [ref=e266]:
                  - generic [ref=e267]: Country
                - generic [ref=e274] [cursor=pointer]:
                  - combobox "Point Of Contact" [ref=e275]
                  - generic:
                    - generic: Point Of Contact
            - generic [ref=e281]:
              - heading "Consignee" [level=4] [ref=e282]
              - generic [ref=e283]:
                - generic [ref=e290] [cursor=pointer]:
                  - combobox "Consignee Name" [ref=e291]
                  - generic:
                    - generic:
                      - generic: Consignee Name
                - generic [ref=e298]:
                  - combobox "Location" [disabled] [ref=e299]
                  - generic:
                    - generic: Location
                - paragraph [ref=e307]:
                  - generic [ref=e308]: Address 1
              - generic [ref=e309]:
                - paragraph [ref=e313]:
                  - generic [ref=e314]: Address 2
                - paragraph [ref=e318]:
                  - generic [ref=e319]: City
                - generic [ref=e321]:
                  - paragraph [ref=e325]:
                    - generic [ref=e326]: State
                  - paragraph [ref=e330]:
                    - generic [ref=e331]: Zip Code
              - generic [ref=e332]:
                - paragraph [ref=e336]:
                  - generic [ref=e337]: Country
                - generic [ref=e344]:
                  - combobox "Point Of Contact" [disabled] [ref=e345]
                  - generic:
                    - generic: Point Of Contact
            - generic [ref=e351]:
              - heading "Agent" [level=4] [ref=e352]
              - generic [ref=e353]:
                - generic [ref=e360] [cursor=pointer]:
                  - combobox "Agent Name" [ref=e361]
                  - generic:
                    - generic:
                      - generic: Agent Name
                - generic [ref=e368]:
                  - combobox "Location" [disabled] [ref=e369]
                  - generic:
                    - generic: Location
                - paragraph [ref=e377]:
                  - generic [ref=e378]: Address 1
              - generic [ref=e379]:
                - paragraph [ref=e383]:
                  - generic [ref=e384]: Address 2
                - paragraph [ref=e388]:
                  - generic [ref=e389]: City
                - generic [ref=e391]:
                  - paragraph [ref=e395]:
                    - generic [ref=e396]: State
                  - paragraph [ref=e400]:
                    - generic [ref=e401]: Zip Code
              - generic [ref=e402]:
                - paragraph [ref=e406]:
                  - generic [ref=e407]: Country
                - generic [ref=e414]:
                  - combobox "Point Of Contact" [disabled] [ref=e415]
                  - generic:
                    - generic: Point Of Contact
            - generic [ref=e421]:
              - heading "Supplier" [level=4] [ref=e422]
              - generic [ref=e423]:
                - generic [ref=e430] [cursor=pointer]:
                  - combobox "Supplier Name" [ref=e431]
                  - generic:
                    - generic:
                      - generic: Supplier Name
                - generic [ref=e438]:
                  - combobox "Location" [disabled] [ref=e439]
                  - generic:
                    - generic: Location
                - paragraph [ref=e447]:
                  - generic [ref=e448]: Address 1
              - generic [ref=e449]:
                - paragraph [ref=e453]:
                  - generic [ref=e454]: Address 2
                - paragraph [ref=e458]:
                  - generic [ref=e459]: City
                - generic [ref=e461]:
                  - paragraph [ref=e465]:
                    - generic [ref=e466]: State
                  - paragraph [ref=e470]:
                    - generic [ref=e471]: Zip Code
              - generic [ref=e472]:
                - paragraph [ref=e476]:
                  - generic [ref=e477]: Country
                - generic [ref=e481]:
                  - paragraph [ref=e482]: Invoice No.
                  - textbox "Enter Invoice No." [ref=e488]
                - generic [ref=e493]:
                  - paragraph [ref=e494]: PO No.
                  - textbox "Enter PO No. or PO ID" [ref=e500]
            - generic [ref=e502]:
              - heading "Import Information" [level=4] [ref=e503]
              - generic [ref=e504]:
                - generic [ref=e511] [cursor=pointer]:
                  - combobox "Receiving Type" [ref=e512]
                  - generic:
                    - generic: Receiving Type
                - generic [ref=e521] [cursor=pointer]:
                  - textbox "Entry Number" [ref=e522]
                  - generic:
                    - generic: Entry Number
                - generic [ref=e526] [cursor=pointer]: Entry Date/Time
            - generic [ref=e527]:
              - heading "Bill To" [level=4] [ref=e528]
              - generic [ref=e529]:
                - generic [ref=e536] [cursor=pointer]:
                  - combobox "Client Name" [ref=e537]
                  - generic:
                    - generic: Client Name
                - generic [ref=e548] [cursor=pointer]:
                  - combobox "Point of Contact" [ref=e549]
                  - generic:
                    - generic: Point of Contact
            - generic [ref=e554]:
              - heading "Custom Fields" [level=4] [ref=e555]
              - generic [ref=e556]:
                - generic [ref=e565] [cursor=pointer]:
                  - combobox "WR Dropdown"
                  - generic [ref=e567]: WR Dropdown
                - generic [ref=e576] [cursor=pointer]:
                  - combobox "WR Checkbox"
                  - generic [ref=e578]: WR Checkbox
                - generic [ref=e586]:
                  - generic [ref=e587] [cursor=pointer]: WR Picker
                  - textbox
                - generic [ref=e595] [cursor=pointer]:
                  - textbox "WR SLT Edit" [ref=e596]
                  - generic [ref=e598]: WR SLT Edit
                - generic [ref=e607] [cursor=pointer]:
                  - combobox "WR DD Edit"
                  - generic [ref=e609]: WR DD Edit
                - generic [ref=e618] [cursor=pointer]:
                  - combobox "WR MC Edit"
                  - generic [ref=e620]: WR MC Edit
                - generic [ref=e628]:
                  - generic [ref=e629] [cursor=pointer]: WR DP Edit
                  - textbox
                - generic [ref=e637] [cursor=pointer]:
                  - textbox "TechOps Ref No." [ref=e638]
                  - generic [ref=e640]: TechOps Ref No.
                - generic [ref=e647] [cursor=pointer]:
                  - textbox "Reference No" [ref=e648]
                  - generic [ref=e650]: Reference No
                - generic [ref=e657] [cursor=pointer]:
                  - textbox "Warehouse X" [ref=e658]
                  - generic [ref=e660]: Warehouse X
                - generic [ref=e669] [cursor=pointer]:
                  - combobox "Instructions"
                  - generic [ref=e671]: Instructions
          - generic [ref=e673]:
            - generic [ref=e674]:
              - img [ref=e676]
              - paragraph [ref=e678]: Do you want to create a warehouse receipt?
            - generic [ref=e680]:
              - button "Create" [ref=e681] [cursor=pointer]: Create
              - button "Cancel" [ref=e682] [cursor=pointer]: Cancel
      - generic [ref=e683]:
        - heading "Package Summary" [level=4] [ref=e684]
        - generic [ref=e686]:
          - generic [ref=e689]:
            - img "Total Pieces" [ref=e691]
            - generic [ref=e692]:
              - paragraph [ref=e693]: Total Pieces
              - heading "0" [level=4] [ref=e694]
          - generic [ref=e697]:
            - img "Total Weight" [ref=e699]
            - generic [ref=e700]:
              - paragraph [ref=e701]: Total Weight
              - heading "0 lbs | 0 kg" [level=4] [ref=e702]
          - generic [ref=e705]:
            - img "Total Volume" [ref=e707]
            - generic [ref=e708]:
              - paragraph [ref=e709]: Total Volume
              - heading "0 ft³ | 0 m³" [level=4] [ref=e710]
          - generic [ref=e713]:
            - img "Total Volume Weight" [ref=e715]
            - generic [ref=e716]:
              - paragraph [ref=e717]: Total Volume Weight
              - heading "0 lbs | 0 kg" [level=4] [ref=e718]
          - generic [ref=e721]:
            - img "Total Value" [ref=e723]
            - generic [ref=e724]:
              - paragraph [ref=e725]: Total Value
              - heading "$0.00" [level=4] [ref=e726]
      - table [ref=e730]:
        - rowgroup [ref=e731]:
          - row "Package Type No. of Pieces No. of Units Volume (ft3) Volume (m3) Weight (Lbs) Weight (Kgs)" [ref=e732]:
            - columnheader "Package Type" [ref=e733]:
              - generic [ref=e735] [cursor=pointer]: Package Type
            - columnheader "No. of Pieces" [ref=e737]:
              - generic [ref=e739] [cursor=pointer]: No. of Pieces
            - columnheader "No. of Units" [ref=e741]:
              - generic [ref=e743] [cursor=pointer]: No. of Units
            - columnheader "Volume (ft3)" [ref=e745]:
              - generic [ref=e747] [cursor=pointer]:
                - text: Volume (ft
                - superscript [ref=e748]: "3"
                - text: )
            - columnheader "Volume (m3)" [ref=e750]:
              - generic [ref=e752] [cursor=pointer]:
                - text: Volume (m
                - superscript [ref=e753]: "3"
                - text: )
            - columnheader "Weight (Lbs)" [ref=e755]:
              - generic [ref=e757] [cursor=pointer]: Weight (Lbs)
            - columnheader "Weight (Kgs)" [ref=e759]:
              - generic [ref=e761] [cursor=pointer]: Weight (Kgs)
        - rowgroup
      - generic [ref=e764]:
        - generic "Create Driver Contact" [ref=e765]:
          - generic [ref=e766]:
            - heading "Create Driver Contact" [level=2] [ref=e767]
            - button [ref=e768] [cursor=pointer]
        - generic:
          - generic [ref=e771]:
            - generic [ref=e776] [cursor=pointer]:
              - textbox "First Name" [ref=e777]
              - generic:
                - generic: First Name
            - generic [ref=e782] [cursor=pointer]:
              - textbox "Last Name" [ref=e783]
              - generic:
                - generic: Last Name
            - generic [ref=e788]:
              - textbox "Roles" [disabled] [ref=e789]: Driver
              - generic:
                - generic: Roles
            - generic [ref=e794] [cursor=pointer]:
              - textbox "Driver License No." [ref=e795]
              - generic:
                - generic: Driver License No.
            - generic [ref=e800] [cursor=pointer]:
              - textbox "Email Address" [ref=e801]
              - generic:
                - generic: Email Address
            - generic [ref=e806] [cursor=pointer]:
              - textbox "Phone Number" [ref=e807]
              - generic:
                - generic: Phone Number
            - generic [ref=e812] [cursor=pointer]:
              - textbox "Extension" [ref=e813]
              - generic:
                - generic: Extension
            - generic [ref=e820] [cursor=pointer]:
              - combobox "Carrier Name" [ref=e821]
              - generic:
                - generic: Carrier Name
          - generic [ref=e826]:
            - button "Create" [disabled]: Create
            - button "Create & Add Another" [disabled]: Create & Add Another
            - button "Cancel" [ref=e827] [cursor=pointer]: Cancel
  - button "AI Assistant AI" [ref=e828] [cursor=pointer]:
    - img "AI Assistant" [ref=e829]
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
  7  | class WRCommonFields extends LocatorHelper {
  8  | 
  9  |     constructor(page) {
  10 |         super(page, warehouseReceiptLocators);
  11 |     }
  12 | 
  13 |     async selectLocation() {
> 14 |         const location = await this.locator('shipperLocation').getAttribute();
     |                                                                ^ Error: locator.getAttribute: name: expected string, got undefined
  15 |         console.log('Current location:', location);
  16 |         // if (location == null || location === "") {
  17 |         //     console.log('Location is not specified. Clicking to select location.');
  18 |         //     await this.locator('shipperLocation').click();
  19 |         //     const locationOptions = this.locator('locationDropdownList');
  20 |         //     const locations = await utils.getDropdownValues(locationOptions, 'location dropdown');
  21 |         //     await utils.selectRandomValue(locations, locationOptions, 'location');
  22 |         // }
  23 |         // else {
  24 |         //     console.log('Location is specified:', location);
  25 |         // }
  26 |     }
  27 | 
  28 |     async pointOfContact() {
  29 |         const poc = await this.locator('shipperContact').textContent();
  30 |         if (poc == null || poc === "") {
  31 |             console.log('Point of Contact is not specified. Clicking to select point of contact.');
  32 |             await this.locator('shipperContact').click();
  33 |             const pocOptions = this.locator('locationDropdownList');
  34 |             const pocs = await utils.getDropdownValues(pocOptions, 'point of contact dropdown');
  35 |             await utils.selectRandomValue(pocs, pocOptions, 'point of contact');
  36 |         }
  37 |         else {
  38 |             console.log('Point of Contact is specified:', poc);
  39 |         }
  40 |     }
  41 | 
  42 |     async selectShipper() {
  43 |         const shipper = await this.locator('shipperNameField').textContent();
  44 |         if (shipper == null || shipper === "") {
  45 |             console.log('Shipper is not specified. Clicking to select shipper.');
  46 |             await this.locator('shipperNameField').click();
  47 |             const shipperOptions = this.locator('formDropdownList');
  48 |             const shippers = await utils.getDropdownValues(shipperOptions, 'shipper dropdown');
  49 |             await utils.selectRandomValue(shippers, shipperOptions, 'shipper');
  50 |         }
  51 |         else {
  52 |             console.log('Shipper is specified:', shipper);
  53 |         }
  54 |         await this.selectLocation();
  55 |         //await this.pointOfContact();
  56 |     }
  57 | 
  58 |     async selectStatus() {
  59 |         const status = await this.locator('statusField').textContent();
  60 |         if (status == null || status === "") {
  61 |             console.log('Status is not specified. Clicking to select status.');
  62 |             await this.locator('statusField').click();
  63 |             const statusOptions = this.locator('DropdownList');
  64 |             const statuses = await utils.getDropdownValues(statusOptions, 'status dropdown');
  65 |             await utils.selectRandomValue(statuses, statusOptions, 'status');
  66 |         }
  67 |         else {
  68 |             console.log('Status is specified:', status);
  69 |         }
  70 |     }
  71 | 
  72 |     async selectConsigneeMultiCheckboxDropdownContact() {
  73 |           await this.locator('consigneeContact')
  74 |     }
  75 |     async selectConsignee() {
  76 |         const consignee = await this.locator('consigneeNameField').textContent();
  77 |         if (consignee.empty()|| consignee === "") {
  78 |             console.log('Consignee is not specified. Clicking to select consignee.');
  79 |             await this.locator('consigneeNameField').click();
  80 |             const consigneeOptions = this.locator('formDropdownList');
  81 |             const consignees = await utils.getDropdownValues(consigneeOptions, 'consignee dropdown');
  82 |             await utils.selectRandomValue(consignees, consigneeOptions, 'consignee');
  83 |         }
  84 |         else {
  85 |             console.log('Consignee is specified:', consignee);
  86 |         }
  87 |         await this.selectLocation();
  88 | 
  89 |     }
  90 | }
  91 | 
  92 | 
  93 | 
  94 | module.exports = WRCommonFields;
```