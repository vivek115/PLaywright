# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createWarehouseReceipts.spec.js >> Warehouse receipts >> Create warehouse receipt
- Location: tests\createWarehouseReceipts.spec.js:10:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('#point-of-contact') resolved to 3 elements:
    1) <mat-select multiple tabindex="0" role="combobox" name="dataItem" showiftruncated="" aria-haspopup="true" aria-invalid="false" id="point-of-contact" aria-expanded="false" aria-required="false" aria-disabled="false" _ngcontent-xjq-c210="" aria-autocomplete="none" disableoptioncentering="" formcontrolname="dataItem" aria-labelledby="mat-form-field-label-49 mat-select-value-19" class="mat-select mat-tooltip-trigger edit-dropdown ng-tns-c163-61 ng-tns-c138-60 mat-select-empty mat-select-multiple ng-untouched …>…</mat-select> aka locator('receipt-contact-type').filter({ hasText: 'ShipperShipper' }).getByLabel('Point Of Contact')
    2) <mat-select multiple tabindex="0" role="combobox" name="dataItem" showiftruncated="" aria-haspopup="true" aria-invalid="false" id="point-of-contact" aria-expanded="false" aria-required="false" aria-disabled="false" _ngcontent-xjq-c210="" aria-autocomplete="none" disableoptioncentering="" formcontrolname="dataItem" aria-labelledby="mat-form-field-label-55 mat-select-value-23" class="mat-select mat-tooltip-trigger edit-dropdown ng-tns-c163-66 ng-tns-c138-65 mat-select-empty mat-select-multiple ng-untouched …>…</mat-select> aka locator('receipt-contact-type').filter({ hasText: 'ConsigneeConsignee NameSta.' }).getByLabel('Point Of Contact')
    3) <mat-select multiple tabindex="-1" role="combobox" name="dataItem" showiftruncated="" aria-haspopup="true" aria-disabled="true" aria-invalid="false" id="point-of-contact" aria-expanded="false" aria-required="false" _ngcontent-xjq-c210="" aria-autocomplete="none" disableoptioncentering="" formcontrolname="dataItem" aria-labelledby="mat-form-field-label-61 mat-select-value-27" class="mat-select mat-tooltip-trigger edit-dropdown ng-tns-c163-71 ng-tns-c138-70 mat-select-disabled mat-select-empty mat-select-mu…>…</mat-select> aka locator('receipt-contact-type').filter({ hasText: 'AgentAgent' }).getByLabel('Point Of Contact')

Call log:
  - waiting for locator('#point-of-contact')

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
                  - generic [ref=e156]: 09/15/2026 at 09:32 AM
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
                  - combobox "Consignee Name" [ref=e301]: 200 Carats
                  - generic:
                    - generic:
                      - generic: Consignee Name
                - generic [ref=e308] [cursor=pointer]:
                  - combobox "Location Sta. Ana Branch" [ref=e309]:
                    - generic [ref=e313]: Sta. Ana Branch
                  - generic:
                    - generic: Location
                - generic [ref=e317]:
                  - paragraph [ref=e318]:
                    - generic [ref=e319]: Address 1
                  - paragraph [ref=e320]:
                    - generic [ref=e321]: Santa Ana Ave
              - generic [ref=e322]:
                - paragraph [ref=e326]:
                  - generic [ref=e327]: Address 2
                - generic [ref=e330]:
                  - paragraph [ref=e331]:
                    - generic [ref=e332]: City
                  - paragraph [ref=e333]:
                    - generic [ref=e334]: Bloomington
                - generic [ref=e336]:
                  - generic [ref=e339]:
                    - paragraph [ref=e340]:
                      - generic [ref=e341]: State
                    - paragraph [ref=e342]:
                      - generic [ref=e343]: California
                  - generic [ref=e346]:
                    - paragraph [ref=e347]:
                      - generic [ref=e348]: Zip Code
                    - paragraph [ref=e349]:
                      - generic [ref=e350]: "92316"
              - generic [ref=e351]:
                - generic [ref=e354]:
                  - paragraph [ref=e355]:
                    - generic [ref=e356]: Country
                  - paragraph [ref=e357]:
                    - generic [ref=e358]: United States
                - generic [ref=e365] [cursor=pointer]:
                  - combobox "Point Of Contact" [ref=e366]
                  - generic:
                    - generic: Point Of Contact
            - generic [ref=e372]:
              - heading "Agent" [level=4] [ref=e373]
              - generic [ref=e374]:
                - generic [ref=e381] [cursor=pointer]:
                  - combobox "Agent Name" [ref=e382]
                  - generic:
                    - generic:
                      - generic: Agent Name
                - generic [ref=e389]:
                  - combobox "Location" [disabled] [ref=e390]
                  - generic:
                    - generic: Location
                - paragraph [ref=e398]:
                  - generic [ref=e399]: Address 1
              - generic [ref=e400]:
                - paragraph [ref=e404]:
                  - generic [ref=e405]: Address 2
                - paragraph [ref=e409]:
                  - generic [ref=e410]: City
                - generic [ref=e412]:
                  - paragraph [ref=e416]:
                    - generic [ref=e417]: State
                  - paragraph [ref=e421]:
                    - generic [ref=e422]: Zip Code
              - generic [ref=e423]:
                - paragraph [ref=e427]:
                  - generic [ref=e428]: Country
                - generic [ref=e435]:
                  - combobox "Point Of Contact" [disabled] [ref=e436]
                  - generic:
                    - generic: Point Of Contact
            - generic [ref=e442]:
              - heading "Supplier" [level=4] [ref=e443]
              - generic [ref=e444]:
                - generic [ref=e451] [cursor=pointer]:
                  - combobox "Supplier Name" [ref=e452]
                  - generic:
                    - generic:
                      - generic: Supplier Name
                - generic [ref=e459]:
                  - combobox "Location" [disabled] [ref=e460]
                  - generic:
                    - generic: Location
                - paragraph [ref=e468]:
                  - generic [ref=e469]: Address 1
              - generic [ref=e470]:
                - paragraph [ref=e474]:
                  - generic [ref=e475]: Address 2
                - paragraph [ref=e479]:
                  - generic [ref=e480]: City
                - generic [ref=e482]:
                  - paragraph [ref=e486]:
                    - generic [ref=e487]: State
                  - paragraph [ref=e491]:
                    - generic [ref=e492]: Zip Code
              - generic [ref=e493]:
                - paragraph [ref=e497]:
                  - generic [ref=e498]: Country
                - generic [ref=e502]:
                  - paragraph [ref=e503]: Invoice No.
                  - textbox "Enter Invoice No." [ref=e509]
                - generic [ref=e514]:
                  - paragraph [ref=e515]: PO No.
                  - textbox "Enter PO No. or PO ID" [ref=e521]
            - generic [ref=e523]:
              - heading "Import Information" [level=4] [ref=e524]
              - generic [ref=e525]:
                - generic [ref=e532] [cursor=pointer]:
                  - combobox "Receiving Type" [ref=e533]
                  - generic:
                    - generic: Receiving Type
                - generic [ref=e542] [cursor=pointer]:
                  - textbox "Entry Number" [ref=e543]
                  - generic:
                    - generic: Entry Number
                - generic [ref=e547] [cursor=pointer]: Entry Date/Time
            - generic [ref=e548]:
              - heading "Bill To" [level=4] [ref=e549]
              - generic [ref=e550]:
                - generic [ref=e557] [cursor=pointer]:
                  - combobox "Client Name" [ref=e558]
                  - generic:
                    - generic: Client Name
                - generic [ref=e569] [cursor=pointer]:
                  - combobox "Point of Contact" [ref=e570]
                  - generic:
                    - generic: Point of Contact
            - generic [ref=e575]:
              - heading "Custom Fields" [level=4] [ref=e576]
              - generic [ref=e577]:
                - generic [ref=e586] [cursor=pointer]:
                  - combobox "WR Dropdown"
                  - generic [ref=e588]: WR Dropdown
                - generic [ref=e597] [cursor=pointer]:
                  - combobox "WR Checkbox"
                  - generic [ref=e599]: WR Checkbox
                - generic [ref=e607]:
                  - generic [ref=e608] [cursor=pointer]: WR Picker
                  - textbox
                - generic [ref=e616] [cursor=pointer]:
                  - textbox "WR SLT Edit" [ref=e617]
                  - generic [ref=e619]: WR SLT Edit
                - generic [ref=e628] [cursor=pointer]:
                  - combobox "WR DD Edit"
                  - generic [ref=e630]: WR DD Edit
                - generic [ref=e639] [cursor=pointer]:
                  - combobox "WR MC Edit"
                  - generic [ref=e641]: WR MC Edit
                - generic [ref=e649]:
                  - generic [ref=e650] [cursor=pointer]: WR DP Edit
                  - textbox
                - generic [ref=e658] [cursor=pointer]:
                  - textbox "TechOps Ref No." [ref=e659]
                  - generic [ref=e661]: TechOps Ref No.
                - generic [ref=e668] [cursor=pointer]:
                  - textbox "Reference No" [ref=e669]
                  - generic [ref=e671]: Reference No
                - generic [ref=e678] [cursor=pointer]:
                  - textbox "Warehouse X" [ref=e679]
                  - generic [ref=e681]: Warehouse X
                - generic [ref=e690] [cursor=pointer]:
                  - combobox "Instructions"
                  - generic [ref=e692]: Instructions
          - generic [ref=e694]:
            - generic [ref=e695]:
              - img [ref=e697]
              - paragraph [ref=e699]: Do you want to create a warehouse receipt?
            - generic [ref=e701]:
              - button "Create" [ref=e702] [cursor=pointer]: Create
              - button "Cancel" [ref=e703] [cursor=pointer]: Cancel
      - generic [ref=e704]:
        - heading "Package Summary" [level=4] [ref=e705]
        - generic [ref=e707]:
          - generic [ref=e710]:
            - img "Total Pieces" [ref=e712]
            - generic [ref=e713]:
              - paragraph [ref=e714]: Total Pieces
              - heading "0" [level=4] [ref=e715]
          - generic [ref=e718]:
            - img "Total Weight" [ref=e720]
            - generic [ref=e721]:
              - paragraph [ref=e722]: Total Weight
              - heading "0 lbs | 0 kg" [level=4] [ref=e723]
          - generic [ref=e726]:
            - img "Total Volume" [ref=e728]
            - generic [ref=e729]:
              - paragraph [ref=e730]: Total Volume
              - heading "0 ft³ | 0 m³" [level=4] [ref=e731]
          - generic [ref=e734]:
            - img "Total Volume Weight" [ref=e736]
            - generic [ref=e737]:
              - paragraph [ref=e738]: Total Volume Weight
              - heading "0 lbs | 0 kg" [level=4] [ref=e739]
          - generic [ref=e742]:
            - img "Total Value" [ref=e744]
            - generic [ref=e745]:
              - paragraph [ref=e746]: Total Value
              - heading "$0.00" [level=4] [ref=e747]
      - table [ref=e751]:
        - rowgroup [ref=e752]:
          - row "Package Type No. of Pieces No. of Units Volume (ft3) Volume (m3) Weight (Lbs) Weight (Kgs)" [ref=e753]:
            - columnheader "Package Type" [ref=e754]:
              - generic [ref=e756] [cursor=pointer]: Package Type
            - columnheader "No. of Pieces" [ref=e758]:
              - generic [ref=e760] [cursor=pointer]: No. of Pieces
            - columnheader "No. of Units" [ref=e762]:
              - generic [ref=e764] [cursor=pointer]: No. of Units
            - columnheader "Volume (ft3)" [ref=e766]:
              - generic [ref=e768] [cursor=pointer]:
                - text: Volume (ft
                - superscript [ref=e769]: "3"
                - text: )
            - columnheader "Volume (m3)" [ref=e771]:
              - generic [ref=e773] [cursor=pointer]:
                - text: Volume (m
                - superscript [ref=e774]: "3"
                - text: )
            - columnheader "Weight (Lbs)" [ref=e776]:
              - generic [ref=e778] [cursor=pointer]: Weight (Lbs)
            - columnheader "Weight (Kgs)" [ref=e780]:
              - generic [ref=e782] [cursor=pointer]: Weight (Kgs)
        - rowgroup
      - generic [ref=e785]:
        - generic "Create Driver Contact" [ref=e786]:
          - generic [ref=e787]:
            - heading "Create Driver Contact" [level=2] [ref=e788]
            - button [ref=e789] [cursor=pointer]
        - generic:
          - generic [ref=e792]:
            - generic [ref=e797] [cursor=pointer]:
              - textbox "First Name" [ref=e798]
              - generic:
                - generic: First Name
            - generic [ref=e803] [cursor=pointer]:
              - textbox "Last Name" [ref=e804]
              - generic:
                - generic: Last Name
            - generic [ref=e809]:
              - textbox "Roles" [disabled] [ref=e810]: Driver
              - generic:
                - generic: Roles
            - generic [ref=e815] [cursor=pointer]:
              - textbox "Driver License No." [ref=e816]
              - generic:
                - generic: Driver License No.
            - generic [ref=e821] [cursor=pointer]:
              - textbox "Email Address" [ref=e822]
              - generic:
                - generic: Email Address
            - generic [ref=e827] [cursor=pointer]:
              - textbox "Phone Number" [ref=e828]
              - generic:
                - generic: Phone Number
            - generic [ref=e833] [cursor=pointer]:
              - textbox "Extension" [ref=e834]
              - generic:
                - generic: Extension
            - generic [ref=e841] [cursor=pointer]:
              - combobox "Carrier Name" [ref=e842]
              - generic:
                - generic: Carrier Name
          - generic [ref=e847]:
            - button "Create" [disabled]: Create
            - button "Create & Add Another" [disabled]: Create & Add Another
            - button "Cancel" [ref=e848] [cursor=pointer]: Cancel
  - button "AI Assistant AI" [ref=e849] [cursor=pointer]:
    - img "AI Assistant" [ref=e850]
    - text: AI
```

# Test source

```ts
  49  |                 return null;
  50  |             }
  51  |             throw error;
  52  |         }
  53  |         let contact = '';
  54  |         try {
  55  |             //expect.poll() repeatedly runs your 
  56  |             // function until the expected condition becomes true or the timeout is reached.
  57  |             // In this case, it waits for the point of contact field to be populated.
  58  |             await expect.poll(
  59  |                 async () => (await poc.textContent())?.trim() || '',
  60  |                 { timeout: 10000, message: "waiting for contact to be populated" }
  61  |             ).not.toBe("");
  62  |             contact = (await poc.textContent())?.trim() || '';
  63  |         } catch {
  64  |             contact = '';
  65  |         }
  66  |         console.log('Current contact:', contact);
  67  | 
  68  |         if (contact?.trim()) {
  69  |             console.log('Point of Contact is auto-populated:', contact);
  70  |             return contact.trim();
  71  |         }
  72  |         else {
  73  |             const isDisabled = await poc.getAttribute('aria-disabled') === 'true' || !(await poc.isEnabled());
  74  |             if (isDisabled) {
  75  |                 console.log(`Point of Contact field '${fieldKey}' is disabled and not populated; continuing.`);
  76  |                 return null;
  77  |             }
  78  |             await this.locator(fieldKey).click();
  79  |             const pocOptions = this.locator('locationDropdownList');
  80  |             const pocs = await utils.getDropdownValues(pocOptions, 'point of contact dropdown');
  81  |             return utils.selectRandomValue(pocs, pocOptions, 'point of contact');
  82  |         }
  83  |     }
  84  | 
  85  |     async selectShipper() {
  86  |         const shipper = await this.locator('shipperNameField').textContent();
  87  |         console.log('Current shipper:', shipper);
  88  |         if (shipper == null || shipper === "") {
  89  |             console.log('Shipper is not specified. Clicking to select shipper.');
  90  |             await this.locator('shipperNameField').click();
  91  |             const shipperOptions = this.locator('formDropdownList');
  92  |             const shippers = await utils.getDropdownValues(shipperOptions, 'shipper dropdown');
  93  |             await utils.selectRandomValue(shippers, shipperOptions, 'shipper');
  94  |         }
  95  |         else {
  96  |             console.log('Shipper is specified:', shipper);
  97  |         }
  98  |         await this.selectLocation('shipperLocation');
  99  |         await this.pointOfContact('shipperContact');
  100 |     }
  101 | 
  102 |     async selectStatus() {
  103 |         const status = await this.locator('statusField').textContent();
  104 |         if (status == null || status === "") {
  105 |             console.log('Status is not specified. Clicking to select status.');
  106 |             await this.locator('statusField').click();
  107 |             const statusOptions = this.locator('DropdownList');
  108 |             const statuses = await utils.getDropdownValues(statusOptions, 'status dropdown');
  109 |             await utils.selectRandomValue(statuses, statusOptions, 'status');
  110 |         }
  111 |         else {
  112 |             console.log('Status is specified:', status);
  113 |         }
  114 |     }
  115 | 
  116 |     async selectConsigneeMultiCheckboxDropdownContact(fieldKey) {
  117 |         const poc = await this.locator(fieldKey).first();
  118 |         try {
  119 |             await poc.waitFor({ state: 'visible', timeout: 10000 });
  120 |         } catch (error) {
  121 |             if (error.name === 'TimeoutError') {
  122 |                 console.log(`Point of Contact field '${fieldKey}' is not available; continuing.`);
  123 |                 return null;
  124 |             }
  125 |             throw error;
  126 |         }
  127 |         let contact = '';
  128 |         try {
  129 |             await expect.poll(
  130 |                 async () => (await poc.textContent())?.trim() || '',
  131 |                 { timeout: 10000, message: "waiting for contact to be populated" }
  132 |             ).not.toBe("");
  133 |             contact = (await poc.textContent())?.trim() || '';
  134 |         } catch {
  135 |             contact = '';
  136 |         }
  137 |         console.log('Current contact:', contact);
  138 | 
  139 |         if (contact?.trim()) {
  140 |             console.log('Point of Contact is auto-populated:', contact);
  141 |             return contact.trim();
  142 |         }
  143 |         else {
  144 |             const isDisabled = await poc.getAttribute('aria-disabled') === 'true' || !(await poc.isEnabled());
  145 |             if (isDisabled) {
  146 |                 console.log(`Point of Contact field '${fieldKey}' is disabled and not populated; continuing.`);
  147 |                 return null;
  148 |             }
> 149 |             await this.locator(fieldKey).click();
      |                                          ^ Error: locator.click: Error: strict mode violation: locator('#point-of-contact') resolved to 3 elements:
  150 |             const pocOptions = this.locator('consigneeContactCheckboxDropdown');
  151 |             const pocs = await utils.getDropdownValues(pocOptions, 'point of contact dropdown');
  152 |             await utils.selectRandomValue(pocs, pocOptions, 'point of contact');
  153 |             await this.locator('upArrowBlue').click();
  154 | 
  155 |         }
  156 |     }
  157 |     async selectConsignee() {
  158 |         const consignee = await this.locator('consigneeNameField').textContent();
  159 |         if (!consignee || consignee === "") {
  160 |             console.log('Consignee is not specified. Clicking to select consignee.');
  161 |             await this.locator('consigneeNameField').click();
  162 |             const consigneeOptions = this.locator('formDropdownList');
  163 |             const consignees = await utils.getDropdownValues(consigneeOptions, 'consignee dropdown');
  164 |             await utils.selectRandomValue(consignees, consigneeOptions, 'consignee');
  165 |         }
  166 |         else {
  167 |             console.log('Consignee is specified:', consignee);
  168 |         }
  169 |         await this.selectLocation('consigneeLocation');
  170 |         await this.selectConsigneeMultiCheckboxDropdownContact('consigneeContact');
  171 | 
  172 |     }
  173 | }
  174 | 
  175 | 
  176 | 
  177 | module.exports = WRCommonFields;
```