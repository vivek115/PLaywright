# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createWarehouseReceipts.spec.js >> Warehouse receipts >> Create warehouse receipt
- Location: tests\createWarehouseReceipts.spec.js:10:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#Shipper_contact').first()
Expected: visible
Timeout: 60000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 60000ms
  - waiting for locator('#Shipper_contact').first()

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
        - menuitem "Filter"
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
- heading "WR00000000" [level=2]
- paragraph: "Status: Pre-Received"
- navigation:
  - text: General Packages Items Charges & Expenses Notes Attachments Tasks Activities
  - button "Menu"
- heading "Basic Information" [level=4]
- combobox "Warehouse Doral WH": Doral WH
- text: Warehouse
- combobox "Status Pre-Received": Pre-Received
- text: Status
- paragraph: Created By
- paragraph: IFS Demo
- paragraph: Created Date/Time
- paragraph: 09/15/2026 at 09:28 AM
- heading "Carrier" [level=4]
- combobox "Carrier Name"
- text: Carrier Name
- combobox "Driver"
- text: Driver
- textbox "Driver License No." [disabled]
- text: Driver License No.
- textbox "No. of Pieces"
- text: No. of Pieces
- textbox "Pro No."
- text: Pro No.
- textbox "Tracking No."
- text: Tracking No.
- heading "Shipper" [level=4]
- combobox "Shipper Name": ALBATROSS AMERICA, INC
- text: Shipper Name
- combobox "Location Main": Main
- text: Location
- paragraph: Address 1
- paragraph: 8272 NW 21ST ST, DORAL, FL 33122 8272 NW 21ST ST DORAL FL 33122
- paragraph: Address 2
- paragraph: testo
- paragraph: City
- paragraph: crud
- paragraph: State
- paragraph: pi
- paragraph: Zip Code
- paragraph: "445"
- paragraph: Country
- paragraph: miami
- combobox "Point Of Contact"
- text: Point Of Contact
- heading "Consignee" [level=4]
- combobox "Consignee Name"
- text: Consignee Name
- combobox "Location" [disabled]
- text: Location
- paragraph: Address 1
- paragraph: Address 2
- paragraph: City
- paragraph: State
- paragraph: Zip Code
- paragraph: Country
- combobox "Point Of Contact" [disabled]
- text: Point Of Contact
- heading "Agent" [level=4]
- combobox "Agent Name"
- text: Agent Name
- combobox "Location" [disabled]
- text: Location
- paragraph: Address 1
- paragraph: Address 2
- paragraph: City
- paragraph: State
- paragraph: Zip Code
- paragraph: Country
- combobox "Point Of Contact" [disabled]
- text: Point Of Contact
- heading "Supplier" [level=4]
- combobox "Supplier Name"
- text: Supplier Name
- combobox "Location" [disabled]
- text: Location
- paragraph: Address 1
- paragraph: Address 2
- paragraph: City
- paragraph: State
- paragraph: Zip Code
- paragraph: Country
- paragraph: Invoice No.
- textbox "Enter Invoice No."
- paragraph: PO No.
- textbox "Enter PO No. or PO ID"
- heading "Import Information" [level=4]
- combobox "Receiving Type"
- text: Receiving Type
- textbox "Entry Number"
- text: Entry Number Entry Date/Time
- heading "Bill To" [level=4]
- combobox "Client Name"
- text: Client Name
- combobox "Point of Contact"
- text: Point of Contact
- heading "Custom Fields" [level=4]
- combobox "WR Dropdown"
- text: WR Dropdown
- combobox "WR Checkbox"
- text: WR Checkbox WR Picker
- textbox
- textbox "WR SLT Edit"
- text: WR SLT Edit
- combobox "WR DD Edit"
- text: WR DD Edit
- combobox "WR MC Edit"
- text: WR MC Edit WR DP Edit
- textbox
- textbox "TechOps Ref No."
- text: TechOps Ref No.
- textbox "Reference No"
- text: Reference No
- textbox "Warehouse X"
- text: Warehouse X
- combobox "Instructions"
- text: Instructions
- img
- paragraph: Do you want to create a warehouse receipt?
- button "Create"
- button "Cancel"
- heading "Package Summary" [level=4]
- img "Total Pieces"
- paragraph: Total Pieces
- heading "0" [level=4]
- img "Total Weight"
- paragraph: Total Weight
- heading "0 lbs | 0 kg" [level=4]
- img "Total Volume"
- paragraph: Total Volume
- heading "0 ft³ | 0 m³" [level=4]
- img "Total Volume Weight"
- paragraph: Total Volume Weight
- heading "0 lbs | 0 kg" [level=4]
- img "Total Value"
- paragraph: Total Value
- heading "$0.00" [level=4]
- table:
  - rowgroup:
    - row "Package Type No. of Pieces No. of Units Volume (ft3) Volume (m3) Weight (Lbs) Weight (Kgs)":
      - columnheader "Package Type"
      - columnheader "No. of Pieces"
      - columnheader "No. of Units"
      - columnheader "Volume (ft3)":
        - text: Volume (ft
        - superscript: "3"
        - text: )
      - columnheader "Volume (m3)":
        - text: Volume (m
        - superscript: "3"
        - text: )
      - columnheader "Weight (Lbs)"
      - columnheader "Weight (Kgs)"
  - rowgroup
- heading "Create Driver Contact" [level=2]
- button
- textbox "First Name"
- text: First Name
- textbox "Last Name"
- text: Last Name
- textbox "Roles" [disabled]: Driver
- text: Roles
- textbox "Driver License No."
- text: Driver License No.
- textbox "Email Address"
- text: Email Address
- textbox "Phone Number"
- text: Phone Number
- textbox "Extension"
- text: Extension
- combobox "Carrier Name"
- text: Carrier Name
- button "Create" [disabled]
- button "Create & Add Another" [disabled]
- button "Cancel"
- button "AI Assistant AI":
  - img "AI Assistant"
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
  42  |     async pointOfContact(fieldKey) {
  43  |         const poc = await this.locator(fieldKey).first();
> 44  |         await expect(poc).toBeVisible();
      |                           ^ Error: expect(locator).toBeVisible() failed
  45  |         let contact = '';
  46  |         try {
  47  |             //expect.poll() repeatedly runs your 
  48  |             // function until the expected condition becomes true or the timeout is reached.
  49  |             // In this case, it waits for the point of contact field to be populated.
  50  |             await expect.poll(
  51  |                 async () => (await poc.textContent())?.trim() || '',
  52  |                 { timeout: 10000, message: "waiting for contact to be populated" }
  53  |             ).not.toBe("");
  54  |             contact = (await poc.textContent())?.trim() || '';
  55  |         } catch {
  56  |             contact = '';
  57  |         }
  58  |         console.log('Current contact:', contact);
  59  | 
  60  |         if (contact?.trim()) {
  61  |             console.log('Point of Contact is auto-populated:', contact);
  62  |             return contact.trim();
  63  |         }
  64  |         else {
  65  |             await this.locator(fieldKey).click();
  66  |             const pocOptions = this.locator('locationDropdownList');
  67  |             const pocs = await utils.getDropdownValues(pocOptions, 'point of contact dropdown');
  68  |             return utils.selectRandomValue(pocs, pocOptions, 'point of contact');
  69  |         }
  70  |     }
  71  | 
  72  |     async selectShipper() {
  73  |         const shipper = await this.locator('shipperNameField').textContent();
  74  |         console.log('Current shipper:', shipper);
  75  |         if (shipper == null || shipper === "") {
  76  |             console.log('Shipper is not specified. Clicking to select shipper.');
  77  |             await this.locator('shipperNameField').click();
  78  |             const shipperOptions = this.locator('formDropdownList');
  79  |             const shippers = await utils.getDropdownValues(shipperOptions, 'shipper dropdown');
  80  |             await utils.selectRandomValue(shippers, shipperOptions, 'shipper');
  81  |         }
  82  |         else {
  83  |             console.log('Shipper is specified:', shipper);
  84  |         }
  85  |         await this.selectLocation('shipperLocation');
  86  |         await this.pointOfContact('shipperContact');
  87  |     }
  88  | 
  89  |     async selectStatus() {
  90  |         const status = await this.locator('statusField').textContent();
  91  |         if (status == null || status === "") {
  92  |             console.log('Status is not specified. Clicking to select status.');
  93  |             await this.locator('statusField').click();
  94  |             const statusOptions = this.locator('DropdownList');
  95  |             const statuses = await utils.getDropdownValues(statusOptions, 'status dropdown');
  96  |             await utils.selectRandomValue(statuses, statusOptions, 'status');
  97  |         }
  98  |         else {
  99  |             console.log('Status is specified:', status);
  100 |         }
  101 |     }
  102 | 
  103 |     async selectConsigneeMultiCheckboxDropdownContact(fieldKey) {
  104 |         const poc = await this.locator(fieldKey).first();
  105 |         await expect(poc).toBeVisible();
  106 |         let contact = '';
  107 |         try {
  108 |             await expect.poll(
  109 |                 async () => (await poc.textContent())?.trim() || '',
  110 |                 { timeout: 10000, message: "waiting for contact to be populated" }
  111 |             ).not.toBe("");
  112 |             contact = (await poc.textContent())?.trim() || '';
  113 |         } catch {
  114 |             contact = '';
  115 |         }
  116 |         console.log('Current contact:', contact);
  117 | 
  118 |         if (contact?.trim()) {
  119 |             console.log('Point of Contact is auto-populated:', contact);
  120 |             return contact.trim();
  121 |         }
  122 |         else {
  123 |             await this.locator(fieldKey).click();
  124 |             const pocOptions = this.locator('consigneeContactCheckboxDropdown');
  125 |             const pocs = await utils.getDropdownValues(pocOptions, 'point of contact dropdown');
  126 |             await utils.selectRandomValue(pocs, pocOptions, 'point of contact');
  127 |             await this.locator('upArrowBlue').click();
  128 | 
  129 |         }
  130 |     }
  131 |     async selectConsignee() {
  132 |         const consignee = await this.locator('consigneeNameField').textContent();
  133 |         if (!consignee || consignee === "") {
  134 |             console.log('Consignee is not specified. Clicking to select consignee.');
  135 |             await this.locator('consigneeNameField').click();
  136 |             const consigneeOptions = this.locator('formDropdownList');
  137 |             const consignees = await utils.getDropdownValues(consigneeOptions, 'consignee dropdown');
  138 |             await utils.selectRandomValue(consignees, consigneeOptions, 'consignee');
  139 |         }
  140 |         else {
  141 |             console.log('Consignee is specified:', consignee);
  142 |         }
  143 |         await this.selectLocation('consigneeLocation');
  144 |         await this.selectConsigneeMultiCheckboxDropdownContact('consigneeContact');
```