# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createWarehouseReceipts.spec.js >> Warehouse receipts >> Create warehouse receipt
- Location: tests\createWarehouseReceipts.spec.js:10:5

# Error details

```
TypeError: location.first is not a function
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
                  - generic [ref=e156]: 09/09/2026 at 02:59 PM
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
                  - combobox "Shipper Name" [ref=e220]: 1234 Test Rd
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
                    - generic [ref=e240]: 1234 Test Rd
              - generic [ref=e241]:
                - paragraph [ref=e245]:
                  - generic [ref=e246]: Address 2
                - generic [ref=e249]:
                  - paragraph [ref=e250]:
                    - generic [ref=e251]: City
                  - paragraph [ref=e252]:
                    - generic [ref=e253]: Richmond
                - generic [ref=e255]:
                  - generic [ref=e258]:
                    - paragraph [ref=e259]:
                      - generic [ref=e260]: State
                    - paragraph [ref=e261]:
                      - generic [ref=e262]: Indiana
                  - generic [ref=e265]:
                    - paragraph [ref=e266]:
                      - generic [ref=e267]: Zip Code
                    - paragraph [ref=e268]:
                      - generic [ref=e269]: "47374"
              - generic [ref=e270]:
                - generic [ref=e273]:
                  - paragraph [ref=e274]:
                    - generic [ref=e275]: Country
                  - paragraph [ref=e276]:
                    - generic [ref=e277]: United States
                - generic [ref=e284] [cursor=pointer]:
                  - combobox "Point Of Contact test nat test nat" [ref=e285]:
                    - generic [ref=e289]: test nat test nat
                  - generic:
                    - generic: Point Of Contact
            - generic [ref=e292]:
              - heading "Consignee" [level=4] [ref=e293]
              - generic [ref=e294]:
                - generic [ref=e301] [cursor=pointer]:
                  - combobox "Consignee Name" [ref=e302]
                  - generic:
                    - generic:
                      - generic: Consignee Name
                - generic [ref=e309]:
                  - combobox "Location" [disabled] [ref=e310]
                  - generic:
                    - generic: Location
                - paragraph [ref=e318]:
                  - generic [ref=e319]: Address 1
              - generic [ref=e320]:
                - paragraph [ref=e324]:
                  - generic [ref=e325]: Address 2
                - paragraph [ref=e329]:
                  - generic [ref=e330]: City
                - generic [ref=e332]:
                  - paragraph [ref=e336]:
                    - generic [ref=e337]: State
                  - paragraph [ref=e341]:
                    - generic [ref=e342]: Zip Code
              - generic [ref=e343]:
                - paragraph [ref=e347]:
                  - generic [ref=e348]: Country
                - generic [ref=e355]:
                  - combobox "Point Of Contact" [disabled] [ref=e356]
                  - generic:
                    - generic: Point Of Contact
            - generic [ref=e362]:
              - heading "Agent" [level=4] [ref=e363]
              - generic [ref=e364]:
                - generic [ref=e371] [cursor=pointer]:
                  - combobox "Agent Name" [ref=e372]
                  - generic:
                    - generic:
                      - generic: Agent Name
                - generic [ref=e379]:
                  - combobox "Location" [disabled] [ref=e380]
                  - generic:
                    - generic: Location
                - paragraph [ref=e388]:
                  - generic [ref=e389]: Address 1
              - generic [ref=e390]:
                - paragraph [ref=e394]:
                  - generic [ref=e395]: Address 2
                - paragraph [ref=e399]:
                  - generic [ref=e400]: City
                - generic [ref=e402]:
                  - paragraph [ref=e406]:
                    - generic [ref=e407]: State
                  - paragraph [ref=e411]:
                    - generic [ref=e412]: Zip Code
              - generic [ref=e413]:
                - paragraph [ref=e417]:
                  - generic [ref=e418]: Country
                - generic [ref=e425]:
                  - combobox "Point Of Contact" [disabled] [ref=e426]
                  - generic:
                    - generic: Point Of Contact
            - generic [ref=e432]:
              - heading "Supplier" [level=4] [ref=e433]
              - generic [ref=e434]:
                - generic [ref=e441] [cursor=pointer]:
                  - combobox "Supplier Name" [ref=e442]
                  - generic:
                    - generic:
                      - generic: Supplier Name
                - generic [ref=e449]:
                  - combobox "Location" [disabled] [ref=e450]
                  - generic:
                    - generic: Location
                - paragraph [ref=e458]:
                  - generic [ref=e459]: Address 1
              - generic [ref=e460]:
                - paragraph [ref=e464]:
                  - generic [ref=e465]: Address 2
                - paragraph [ref=e469]:
                  - generic [ref=e470]: City
                - generic [ref=e472]:
                  - paragraph [ref=e476]:
                    - generic [ref=e477]: State
                  - paragraph [ref=e481]:
                    - generic [ref=e482]: Zip Code
              - generic [ref=e483]:
                - paragraph [ref=e487]:
                  - generic [ref=e488]: Country
                - generic [ref=e492]:
                  - paragraph [ref=e493]: Invoice No.
                  - textbox "Enter Invoice No." [ref=e499]
                - generic [ref=e504]:
                  - paragraph [ref=e505]: PO No.
                  - textbox "Enter PO No. or PO ID" [ref=e511]
            - generic [ref=e513]:
              - heading "Import Information" [level=4] [ref=e514]
              - generic [ref=e515]:
                - generic [ref=e522] [cursor=pointer]:
                  - combobox "Receiving Type" [ref=e523]
                  - generic:
                    - generic: Receiving Type
                - generic [ref=e532] [cursor=pointer]:
                  - textbox "Entry Number" [ref=e533]
                  - generic:
                    - generic: Entry Number
                - generic [ref=e537] [cursor=pointer]: Entry Date/Time
            - generic [ref=e538]:
              - heading "Bill To" [level=4] [ref=e539]
              - generic [ref=e540]:
                - generic [ref=e547] [cursor=pointer]:
                  - combobox "Client Name" [ref=e548]
                  - generic:
                    - generic: Client Name
                - generic [ref=e559] [cursor=pointer]:
                  - combobox "Point of Contact" [ref=e560]
                  - generic:
                    - generic: Point of Contact
            - generic [ref=e565]:
              - heading "Custom Fields" [level=4] [ref=e566]
              - generic [ref=e567]:
                - generic [ref=e576] [cursor=pointer]:
                  - combobox "WR Dropdown"
                  - generic [ref=e578]: WR Dropdown
                - generic [ref=e587] [cursor=pointer]:
                  - combobox "WR Checkbox"
                  - generic [ref=e589]: WR Checkbox
                - generic [ref=e597]:
                  - generic [ref=e598] [cursor=pointer]: WR Picker
                  - textbox
                - generic [ref=e606] [cursor=pointer]:
                  - textbox "WR SLT Edit" [ref=e607]
                  - generic [ref=e609]: WR SLT Edit
                - generic [ref=e618] [cursor=pointer]:
                  - combobox "WR DD Edit"
                  - generic [ref=e620]: WR DD Edit
                - generic [ref=e629] [cursor=pointer]:
                  - combobox "WR MC Edit"
                  - generic [ref=e631]: WR MC Edit
                - generic [ref=e639]:
                  - generic [ref=e640] [cursor=pointer]: WR DP Edit
                  - textbox
                - generic [ref=e648] [cursor=pointer]:
                  - textbox "TechOps Ref No." [ref=e649]
                  - generic [ref=e651]: TechOps Ref No.
                - generic [ref=e658] [cursor=pointer]:
                  - textbox "Reference No" [ref=e659]
                  - generic [ref=e661]: Reference No
                - generic [ref=e668] [cursor=pointer]:
                  - textbox "Warehouse X" [ref=e669]
                  - generic [ref=e671]: Warehouse X
                - generic [ref=e680] [cursor=pointer]:
                  - combobox "Instructions"
                  - generic [ref=e682]: Instructions
          - generic [ref=e684]:
            - generic [ref=e685]:
              - img [ref=e687]
              - paragraph [ref=e689]: Do you want to create a warehouse receipt?
            - generic [ref=e691]:
              - button "Create" [ref=e692] [cursor=pointer]: Create
              - button "Cancel" [ref=e693] [cursor=pointer]: Cancel
      - generic [ref=e694]:
        - heading "Package Summary" [level=4] [ref=e695]
        - generic [ref=e697]:
          - generic [ref=e700]:
            - img "Total Pieces" [ref=e702]
            - generic [ref=e703]:
              - paragraph [ref=e704]: Total Pieces
              - heading "0" [level=4] [ref=e705]
          - generic [ref=e708]:
            - img "Total Weight" [ref=e710]
            - generic [ref=e711]:
              - paragraph [ref=e712]: Total Weight
              - heading "0 lbs | 0 kg" [level=4] [ref=e713]
          - generic [ref=e716]:
            - img "Total Volume" [ref=e718]
            - generic [ref=e719]:
              - paragraph [ref=e720]: Total Volume
              - heading "0 ft³ | 0 m³" [level=4] [ref=e721]
          - generic [ref=e724]:
            - img "Total Volume Weight" [ref=e726]
            - generic [ref=e727]:
              - paragraph [ref=e728]: Total Volume Weight
              - heading "0 lbs | 0 kg" [level=4] [ref=e729]
          - generic [ref=e732]:
            - img "Total Value" [ref=e734]
            - generic [ref=e735]:
              - paragraph [ref=e736]: Total Value
              - heading "$0.00" [level=4] [ref=e737]
      - table [ref=e741]:
        - rowgroup [ref=e742]:
          - row "Package Type No. of Pieces No. of Units Volume (ft3) Volume (m3) Weight (Lbs) Weight (Kgs)" [ref=e743]:
            - columnheader "Package Type" [ref=e744]:
              - generic [ref=e746] [cursor=pointer]: Package Type
            - columnheader "No. of Pieces" [ref=e748]:
              - generic [ref=e750] [cursor=pointer]: No. of Pieces
            - columnheader "No. of Units" [ref=e752]:
              - generic [ref=e754] [cursor=pointer]: No. of Units
            - columnheader "Volume (ft3)" [ref=e756]:
              - generic [ref=e758] [cursor=pointer]:
                - text: Volume (ft
                - superscript [ref=e759]: "3"
                - text: )
            - columnheader "Volume (m3)" [ref=e761]:
              - generic [ref=e763] [cursor=pointer]:
                - text: Volume (m
                - superscript [ref=e764]: "3"
                - text: )
            - columnheader "Weight (Lbs)" [ref=e766]:
              - generic [ref=e768] [cursor=pointer]: Weight (Lbs)
            - columnheader "Weight (Kgs)" [ref=e770]:
              - generic [ref=e772] [cursor=pointer]: Weight (Kgs)
        - rowgroup
      - generic [ref=e775]:
        - generic "Create Driver Contact" [ref=e776]:
          - generic [ref=e777]:
            - heading "Create Driver Contact" [level=2] [ref=e778]
            - button [ref=e779] [cursor=pointer]
        - generic:
          - generic [ref=e782]:
            - generic [ref=e787] [cursor=pointer]:
              - textbox "First Name" [ref=e788]
              - generic:
                - generic: First Name
            - generic [ref=e793] [cursor=pointer]:
              - textbox "Last Name" [ref=e794]
              - generic:
                - generic: Last Name
            - generic [ref=e799]:
              - textbox "Roles" [disabled] [ref=e800]: Driver
              - generic:
                - generic: Roles
            - generic [ref=e805] [cursor=pointer]:
              - textbox "Driver License No." [ref=e806]
              - generic:
                - generic: Driver License No.
            - generic [ref=e811] [cursor=pointer]:
              - textbox "Email Address" [ref=e812]
              - generic:
                - generic: Email Address
            - generic [ref=e817] [cursor=pointer]:
              - textbox "Phone Number" [ref=e818]
              - generic:
                - generic: Phone Number
            - generic [ref=e823] [cursor=pointer]:
              - textbox "Extension" [ref=e824]
              - generic:
                - generic: Extension
            - generic [ref=e831] [cursor=pointer]:
              - combobox "Carrier Name" [ref=e832]
              - generic:
                - generic: Carrier Name
          - generic [ref=e837]:
            - button "Create" [disabled]: Create
            - button "Create & Add Another" [disabled]: Create & Add Another
            - button "Cancel" [ref=e838] [cursor=pointer]: Cancel
  - button "AI Assistant AI" [ref=e839] [cursor=pointer]:
    - img "AI Assistant" [ref=e840]
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
  13 |     async selectLocation(value) {
  14 |         const location = await this.locator(value).textContent();
> 15 |         expect(location.first()).visible().toBeTruthy();
     |                         ^ TypeError: location.first is not a function
  16 |         if (location == null || location === "") {
  17 |             console.log('Location is not specified. Clicking to select location.');
  18 |             await this.locator(value).click();
  19 |             const locationOptions = this.locator('locationDropdownList');
  20 |             const locations = await utils.getDropdownValues(locationOptions, 'location dropdown');
  21 |             await utils.selectRandomValue(locations, locationOptions, 'location');
  22 |         }
  23 |         else {
  24 |             console.log('Location is specified:', location);
  25 |         }
  26 |     }
  27 | 
  28 |     async pointOfContact(value) {
  29 |         const poc = await this.locator(value).textContent();
  30 |         expect(poc.first().visible()).toBeTruthy();
  31 |         if (poc == null || poc === "") {
  32 |             console.log('Point of Contact is not specified. Clicking to select point of contact.');
  33 |             await this.locator(value).click();
  34 |             const pocOptions = this.locator('locationDropdownList');
  35 |             const pocs = await utils.getDropdownValues(pocOptions, 'point of contact dropdown');
  36 |             await utils.selectRandomValue(pocs, pocOptions, 'point of contact');
  37 |         }
  38 |         else {
  39 |             console.log('Point of Contact is specified:', poc);
  40 |         }
  41 |     }
  42 | 
  43 |     async selectShipper() {
  44 |         const shipper = await this.locator('shipperNameField').textContent();
  45 |         if (shipper == null || shipper === "") {
  46 |             console.log('Shipper is not specified. Clicking to select shipper.');
  47 |             await this.locator('shipperNameField').click();
  48 |             const shipperOptions = this.locator('formDropdownList');
  49 |             const shippers = await utils.getDropdownValues(shipperOptions, 'shipper dropdown');
  50 |             await utils.selectRandomValue(shippers, shipperOptions, 'shipper');
  51 |         }
  52 |         else {
  53 |             console.log('Shipper is specified:', shipper);
  54 |         }
  55 |         await this.selectLocation('shipperLocation');
  56 |         await this.pointOfContact('shipperContact');
  57 |     }
  58 | 
  59 |     async selectStatus() {
  60 |         const status = await this.locator('statusField').textContent();
  61 |         if (status == null || status === "") {
  62 |             console.log('Status is not specified. Clicking to select status.');
  63 |             await this.locator('statusField').click();
  64 |             const statusOptions = this.locator('DropdownList');
  65 |             const statuses = await utils.getDropdownValues(statusOptions, 'status dropdown');
  66 |             await utils.selectRandomValue(statuses, statusOptions, 'status');
  67 |         }
  68 |         else {
  69 |             console.log('Status is specified:', status);
  70 |         }
  71 |     }
  72 | 
  73 |     async selectConsigneeMultiCheckboxDropdownContact() {
  74 |           await this.locator('consigneeContact').click();
  75 |           const contactOptions = this.locator('consigneeContactCheckboxDropdown');
  76 |           const contacts = await utils.getDropdownValues(contactOptions, 'consignee contact dropdown');
  77 |           await utils.selectRandomValue(contacts, contactOptions, 'consignee contact');
  78 |     }
  79 |     async selectConsignee() {
  80 |         const consignee = await this.locator('consigneeNameField').textContent();
  81 |         if (consignee == null || consignee === "") {
  82 |             console.log('Consignee is not specified. Clicking to select consignee.');
  83 |             await this.locator('consigneeNameField').click();
  84 |             const consigneeOptions = this.locator('formDropdownList');
  85 |             const consignees = await utils.getDropdownValues(consigneeOptions, 'consignee dropdown');
  86 |             await utils.selectRandomValue(consignees, consigneeOptions, 'consignee');
  87 |         }
  88 |         else {
  89 |             console.log('Consignee is specified:', consignee);
  90 |         }
  91 |         await this.selectLocation();
  92 | 
  93 |     }
  94 | }
  95 | 
  96 | 
  97 | 
  98 | module.exports = WRCommonFields;
```