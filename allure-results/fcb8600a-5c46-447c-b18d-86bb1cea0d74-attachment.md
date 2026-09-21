# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createWarehouseReceipts.spec.js >> Warehouse receipts >> Create warehouse receipt
- Location: tests\createWarehouseReceipts.spec.js:10:5

# Error details

```
TypeError: this.selectMultiCheckboxDropdownContact is not a function
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
                  - generic [ref=e156]: 09/15/2026 at 11:03 AM
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
  1   | const { expect } = require('@playwright/test');
  2   | const utils = require('../../utils/CommonUtils');
  3   | const LocatorHelper = require("../../utils/LocatorHelper");
  4   | const wrData = require('../../data/warehouseReceiptData.json');
  5   | const warehouseReceiptLocators = require('./warehouseReceiptLocators');
  6   | 
  7   | class WRCommonFields extends LocatorHelper {
  8   | 
  9   |     constructor(page) {
  10  |         super(page, warehouseReceiptLocators);
  11  |     }
  12  | 
  13  |     async selectLocation(fieldKey) {
  14  |         const locationField = await this.locator(fieldKey).first();
  15  |         await expect(locationField).toBeVisible();
  16  | 
  17  |         let location = '';
  18  |         try {
  19  |             await expect.poll(
  20  |                 async () => (await locationField.textContent())?.trim() || '',
  21  |                 { timeout: 10000, message: 'Waiting for the location field to be populated' }
  22  |             ).not.toBe('');
  23  |             location = ((await locationField.textContent()) || '').trim();
  24  |         } catch {
  25  |             location = '';
  26  |         }
  27  | 
  28  |         console.log('Current location:', location);
  29  |         //? - it is optional chaining only call this if location is not null or undefined.
  30  |         if (location?.trim()) {
  31  |             console.log('Location is auto-populated:', location);
  32  |             return location.trim();
  33  |         }
  34  |         else {
  35  |             await this.locator(fieldKey).click();
  36  |             const locationOptions = this.locator('locationDropdownList');
  37  |             const locations = await utils.getDropdownValues(locationOptions, 'location dropdown');
  38  |             return utils.selectRandomValue(locations, locationOptions, 'location');
  39  |         }
  40  |     }
  41  | 
  42  | 
  43  |     async selectShipper() {
  44  |         const shipper = await this.locator('shipperNameField').textContent();
  45  |         console.log('Current shipper:', shipper);
  46  |         if (shipper == null || shipper === "") {
  47  |             console.log('Shipper is not specified. Clicking to select shipper.');
  48  |             await this.locator('shipperNameField').click();
  49  |             const shipperOptions = this.locator('formDropdownList');
  50  |             const shippers = await utils.getDropdownValues(shipperOptions, 'shipper dropdown');
  51  |             await utils.selectRandomValue(shippers, shipperOptions, 'shipper');
  52  |         }
  53  |         else {
  54  |             console.log('Shipper is specified:', shipper);
  55  |         }
  56  |         await this.selectLocation('shipperLocation');
> 57  |         await this.selectMultiCheckboxDropdownContact('shipperpointOfContact');
      |                    ^ TypeError: this.selectMultiCheckboxDropdownContact is not a function
  58  |     }
  59  |     async closeDropdown() {
  60  |         const closeButton = this.locator('upArrowBlue');
  61  | 
  62  |         if (await closeButton.isVisible().catch(() => false)) {
  63  |             await closeButton.click();
  64  |         } else {
  65  |             await this.page.keyboard.press('Escape');
  66  |         }
  67  |     }
  68  | 
  69  |     async pointOfContact(fieldKey) {
  70  |         const poc = this.locator(fieldKey).first();
  71  | 
  72  |         try {
  73  |             await poc.waitFor({ state: 'visible', timeout: 10000 });
  74  |         } catch (error) {
  75  |             if (error.name === 'TimeoutError') {
  76  |                 console.log(`Point of Contact '${fieldKey}' is not available; continuing.`);
  77  |                 return null;
  78  |             }
  79  |             throw error;
  80  |         }
  81  | 
  82  |         // Check if Point of Contact is already populated
  83  |         const contact = (await poc.textContent())?.trim() || '';
  84  | 
  85  |         if (contact) {
  86  |             console.log('Point of Contact is auto-populated:', contact);
  87  |             return contact;
  88  |         }
  89  | 
  90  |         // Check if field is disabled
  91  |         const isDisabled =
  92  |             (await poc.getAttribute('aria-disabled')) === 'true' ||
  93  |             !(await poc.isEnabled());
  94  | 
  95  |         if (isDisabled) {
  96  |             console.log(`Point of Contact '${fieldKey}' is disabled; continuing.`);
  97  |             return null;
  98  |         }
  99  | 
  100 |         // Open dropdown
  101 |         await poc.click();
  102 | 
  103 |         const pocOptions = this.locator('locationDropdownList');
  104 |         const pocs = await utils.getDropdownValues(
  105 |             pocOptions,
  106 |             'point of contact dropdown'
  107 |         );
  108 | 
  109 |         // No options → close dropdown and continue
  110 |         if (!pocs?.length) {
  111 |             console.log('Point of Contact dropdown is empty; closing dropdown.');
  112 |             await this.closeDropdown();
  113 |             return null;
  114 |         }
  115 | 
  116 |         // Select random Point of Contact
  117 |         const selectedContact = await utils.selectRandomValue(
  118 |             pocs,
  119 |             pocOptions,
  120 |             'point of contact'
  121 |         );
  122 | 
  123 |         // Close dropdown after selection
  124 |         await this.closeDropdown();
  125 | 
  126 |         return selectedContact;
  127 |     }
  128 | 
  129 |     async selectStatus() {
  130 |         const status = await this.locator('statusField').textContent();
  131 |         if (status == null || status === "") {
  132 |             console.log('Status is not specified. Clicking to select status.');
  133 |             await this.locator('statusField').click();
  134 |             const statusOptions = this.locator('DropdownList');
  135 |             const statuses = await utils.getDropdownValues(statusOptions, 'status dropdown');
  136 |             await utils.selectRandomValue(statuses, statusOptions, 'status');
  137 |         }
  138 |         else {
  139 |             console.log('Status is specified:', status);
  140 |         }
  141 |     }
  142 | 
  143 |     async selectConsigneeMultiCheckboxDropdownContact(fieldKey) {
  144 |         const poc = this.locator(fieldKey).first();
  145 | 
  146 |         try {
  147 |             await poc.waitFor({ state: 'visible', timeout: 30000 });
  148 |             await expect(poc).toBeEnabled({ timeout: 30000 });
  149 |         } catch (error) {
  150 |             throw new Error(`Point of Contact '${fieldKey}' did not become visible and enabled after selecting consignee/location.`);
  151 |         }
  152 | 
  153 |         const contact = (await poc.textContent())?.trim();
  154 | 
  155 |         if (contact) {
  156 |             console.log('Point of Contact already populated:', contact);
  157 |             return contact;
```