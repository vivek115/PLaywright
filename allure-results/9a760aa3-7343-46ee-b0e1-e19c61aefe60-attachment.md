# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> Login test
- Location: tests\loginTest.spec.js:3:1

# Error details

```
TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('//div[@class=\'loader-new ng-star-inserted\']') to be hidden
    62 × locator resolved to visible <div class="loader-new ng-star-inserted"></div>

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
  - generic [ref=e75]:
    - generic [ref=e76]:
      - img [ref=e77]
      - img [ref=e78]
    - generic [ref=e82]:
      - generic [ref=e83]:
        - heading "Warehouse Receipts" [level=2]:
          - generic [ref=e86] [cursor=pointer]: Warehouse Receipts
      - list [ref=e88]:
        - listitem
        - listitem
        - listitem [ref=e89]:
          - button "Create New" [ref=e91] [cursor=pointer]: Create New
        - listitem [ref=e92]:
          - button [ref=e95] [cursor=pointer]
    - generic [ref=e99]:
      - grid "Data table" [ref=e100]:
        - row [ref=e151]:
          - columnheader "Select All Rows":
            - checkbox "Select All Rows" [ref=e152]: 
          - columnheader "WR ID Sortable" [ref=e153]:
            - generic [ref=e154]:
              - generic [ref=e155] [cursor=pointer]:
                - generic [ref=e156]: WR ID
                - note "Sortable" [ref=e157]
              - status
          - columnheader "WR Dropdown Sortable" [ref=e159]:
            - generic [ref=e160]:
              - generic [ref=e161] [cursor=pointer]:
                - generic [ref=e162]: WR Dropdown
                - note "Sortable" [ref=e163]
              - status
          - columnheader "WR Checkbox Sortable" [ref=e165]:
            - generic [ref=e166]:
              - generic [ref=e167] [cursor=pointer]:
                - generic [ref=e168]: WR Checkbox
                - note "Sortable" [ref=e169]
              - status
          - columnheader "WR Picker Sortable" [ref=e171]:
            - generic [ref=e172]:
              - generic [ref=e173] [cursor=pointer]:
                - generic [ref=e174]: WR Picker
                - note "Sortable" [ref=e175]
              - status
          - columnheader "WR SLT Edit Sortable" [ref=e177]:
            - generic [ref=e178]:
              - generic [ref=e179] [cursor=pointer]:
                - generic [ref=e180]: WR SLT Edit
                - note "Sortable" [ref=e181]
              - status
          - columnheader "WR DD Edit Sortable" [ref=e183]:
            - generic [ref=e184]:
              - generic [ref=e185] [cursor=pointer]:
                - generic [ref=e186]: WR DD Edit
                - note "Sortable" [ref=e187]
              - status
          - columnheader "WR MC Edit Sortable" [ref=e189]:
            - generic [ref=e190]:
              - generic [ref=e191] [cursor=pointer]:
                - generic [ref=e192]: WR MC Edit
                - note "Sortable" [ref=e193]
              - status
          - columnheader "WR DP Edit Sortable" [ref=e195]:
            - generic [ref=e196]:
              - generic [ref=e197] [cursor=pointer]:
                - generic [ref=e198]: WR DP Edit
                - note "Sortable" [ref=e199]
              - status
          - columnheader "Total Pckgs Sortable" [ref=e201]:
            - generic [ref=e202]:
              - generic [ref=e203] [cursor=pointer]:
                - generic [ref=e204]: Total Pckgs
                - note "Sortable" [ref=e205]
              - status
          - columnheader "Shipper Sortable" [ref=e207]:
            - generic [ref=e208]:
              - generic [ref=e209] [cursor=pointer]:
                - generic [ref=e210]: Shipper
                - note "Sortable" [ref=e211]
              - status
          - columnheader "Total Wght (lbs) Sortable" [ref=e213]:
            - generic [ref=e214]:
              - generic [ref=e215] [cursor=pointer]:
                - generic [ref=e216]: Total Wght (lbs)
                - note "Sortable" [ref=e217]
              - status
          - columnheader "Total Wght (kg) Sortable" [ref=e219]:
            - generic [ref=e220]:
              - generic [ref=e221] [cursor=pointer]:
                - generic [ref=e222]: Total Wght (kg)
                - note "Sortable" [ref=e223]
              - status
          - columnheader "Total Volume (ft³) Sortable" [ref=e225]:
            - generic [ref=e226]:
              - generic [ref=e227] [cursor=pointer]:
                - generic [ref=e228]: Total Volume (ft³)
                - note "Sortable" [ref=e229]
              - status
          - columnheader "Total Volume (m³) Sortable" [ref=e231]:
            - generic [ref=e232]:
              - generic [ref=e233] [cursor=pointer]:
                - generic [ref=e234]: Total Volume (m³)
                - note "Sortable" [ref=e235]
              - status
          - columnheader "Created Time Sortable" [ref=e237]:
            - generic [ref=e238]:
              - generic [ref=e239] [cursor=pointer]:
                - generic [ref=e240]: Created Time
                - note "Sortable" [ref=e241]
              - status
          - columnheader "Carrier Sortable" [ref=e243]:
            - generic [ref=e244]:
              - generic [ref=e245] [cursor=pointer]:
                - generic [ref=e246]: Carrier
                - note "Sortable" [ref=e247]
              - status
          - columnheader "PRO No. Sortable" [ref=e249]:
            - generic [ref=e250]:
              - generic [ref=e251] [cursor=pointer]:
                - generic [ref=e252]: PRO No.
                - note "Sortable" [ref=e253]
              - status
          - columnheader "Tracking No. Sortable" [ref=e255]:
            - generic [ref=e256]:
              - generic [ref=e257] [cursor=pointer]:
                - generic [ref=e258]: Tracking No.
                - note "Sortable" [ref=e259]
              - status
          - columnheader "Agent Sortable" [ref=e261]:
            - generic [ref=e262]:
              - generic [ref=e263] [cursor=pointer]:
                - generic [ref=e264]: Agent
                - note "Sortable" [ref=e265]
              - status
          - columnheader "Supplier Sortable" [ref=e267]:
            - generic [ref=e268]:
              - generic [ref=e269] [cursor=pointer]:
                - generic [ref=e270]: Supplier
                - note "Sortable" [ref=e271]
              - status
          - columnheader "Receiving Type Sortable" [ref=e273]:
            - generic [ref=e274]:
              - generic [ref=e275] [cursor=pointer]:
                - generic [ref=e276]: Receiving Type
                - note "Sortable" [ref=e277]
              - status
          - columnheader "Received By Sortable" [ref=e279]:
            - generic [ref=e280]:
              - generic [ref=e281] [cursor=pointer]:
                - generic [ref=e282]: Received By
                - note "Sortable" [ref=e283]
              - status
          - columnheader "Received Date Sortable" [ref=e285]:
            - generic [ref=e286]:
              - generic [ref=e287] [cursor=pointer]:
                - generic [ref=e288]: Received Date
                - note "Sortable" [ref=e289]
              - status
          - columnheader "Received Time Sortable" [ref=e291]:
            - generic [ref=e292]:
              - generic [ref=e293] [cursor=pointer]:
                - generic [ref=e294]: Received Time
                - note "Sortable" [ref=e295]
              - status
          - columnheader "Modified By Sortable" [ref=e297]:
            - generic [ref=e298]:
              - generic [ref=e299] [cursor=pointer]:
                - generic [ref=e300]: Modified By
                - note "Sortable" [ref=e301]
              - status
          - columnheader "Modified Date Sortable" [ref=e303]:
            - generic [ref=e304]:
              - generic [ref=e305] [cursor=pointer]:
                - generic [ref=e306]: Modified Date
                - note "Sortable" [ref=e307]
              - status
          - columnheader "Modified Time Sortable" [ref=e309]:
            - generic [ref=e310]:
              - generic [ref=e311] [cursor=pointer]:
                - generic [ref=e312]: Modified Time
                - note "Sortable" [ref=e313]
              - status
          - columnheader "T. Mode Sortable" [ref=e315]:
            - generic [ref=e316]:
              - generic [ref=e317] [cursor=pointer]:
                - generic [ref=e318]: T. Mode
                - note "Sortable" [ref=e319]
              - status
          - columnheader "Shipment ID Sortable" [ref=e321]:
            - generic [ref=e322]:
              - generic [ref=e323] [cursor=pointer]:
                - generic [ref=e324]: Shipment ID
                - note "Sortable" [ref=e325]
              - status
          - columnheader "Consolidation ID Sortable" [ref=e327]:
            - generic [ref=e328]:
              - generic [ref=e329] [cursor=pointer]:
                - generic [ref=e330]: Consolidation ID
                - note "Sortable" [ref=e331]
              - status
          - columnheader "House Bill No. Sortable" [ref=e333]:
            - generic [ref=e334]:
              - generic [ref=e335] [cursor=pointer]:
                - generic [ref=e336]: House Bill No.
                - note "Sortable" [ref=e337]
              - status
          - columnheader "Master Bill No. Sortable" [ref=e339]:
            - generic [ref=e340]:
              - generic [ref=e341] [cursor=pointer]:
                - generic [ref=e342]: Master Bill No.
                - note "Sortable" [ref=e343]
              - status
          - columnheader "Container No. Sortable" [ref=e345]:
            - generic [ref=e346]:
              - generic [ref=e347] [cursor=pointer]:
                - generic [ref=e348]: Container No.
                - note "Sortable" [ref=e349]
              - status
          - columnheader "Booking No. Sortable" [ref=e351]:
            - generic [ref=e352]:
              - generic [ref=e353] [cursor=pointer]:
                - generic [ref=e354]: Booking No.
                - note "Sortable" [ref=e355]
              - status
          - columnheader "Cargo Release ID Sortable" [ref=e357]:
            - generic [ref=e358]:
              - generic [ref=e359] [cursor=pointer]:
                - generic [ref=e360]: Cargo Release ID
                - note "Sortable" [ref=e361]
              - status
          - columnheader "Total Volume Wght (lbs) Sortable" [ref=e363]:
            - generic [ref=e364]:
              - generic [ref=e365] [cursor=pointer]:
                - generic [ref=e366]: Total Volume Wght (lbs)
                - note "Sortable" [ref=e367]
              - status
          - columnheader "Total Volume Wght (kg) Sortable" [ref=e369]:
            - generic [ref=e370]:
              - generic [ref=e371] [cursor=pointer]:
                - generic [ref=e372]: Total Volume Wght (kg)
                - note "Sortable" [ref=e373]
              - status
          - columnheader "Total Value Sortable" [ref=e375]:
            - generic [ref=e376]:
              - generic [ref=e377] [cursor=pointer]:
                - generic [ref=e378]: Total Value
                - note "Sortable" [ref=e379]
              - status
          - columnheader "Consignee Loc Sortable" [ref=e381]:
            - generic [ref=e382]:
              - generic [ref=e383] [cursor=pointer]:
                - generic [ref=e384]: Consignee Loc
                - note "Sortable" [ref=e385]
              - status
          - columnheader "Consignee City Sortable" [ref=e387]:
            - generic [ref=e388]:
              - generic [ref=e389] [cursor=pointer]:
                - generic [ref=e390]: Consignee City
                - note "Sortable" [ref=e391]
              - status
          - columnheader "Consignee Country Sortable" [ref=e393]:
            - generic [ref=e394]:
              - generic [ref=e395] [cursor=pointer]:
                - generic [ref=e396]: Consignee Country
                - note "Sortable" [ref=e397]
              - status
          - columnheader "Status Sortable" [ref=e399]:
            - generic [ref=e400]:
              - generic [ref=e401] [cursor=pointer]:
                - generic [ref=e402]: Status
                - note "Sortable" [ref=e403]
              - status
          - columnheader "Created Date Sortable" [ref=e405]:
            - generic [ref=e406]:
              - generic [ref=e407] [cursor=pointer]:
                - generic [ref=e408]: Created Date
                - note "Sortable" [ref=e409]
              - status
          - columnheader "Created By Sortable" [ref=e411]:
            - generic [ref=e412]:
              - generic [ref=e413] [cursor=pointer]:
                - generic [ref=e414]: Created By
                - note "Sortable" [ref=e415]
              - status
          - columnheader "Consignee Sortable" [ref=e417]:
            - generic [ref=e418]:
              - generic [ref=e419] [cursor=pointer]:
                - generic [ref=e420]: Consignee
                - note "Sortable" [ref=e421]
              - status
          - columnheader "Warehouse Sortable" [ref=e423]:
            - generic [ref=e424]:
              - generic [ref=e425] [cursor=pointer]:
                - generic [ref=e426]: Warehouse
                - note "Sortable" [ref=e427]
              - status
          - columnheader [ref=e429]
          - columnheader "PO No. Sortable" [ref=e430]:
            - generic [ref=e431]:
              - generic [ref=e432] [cursor=pointer]:
                - generic [ref=e433]: PO No.
                - note "Sortable" [ref=e434]
              - status
          - columnheader "Bill To Sortable" [ref=e436]:
            - generic [ref=e437]:
              - generic [ref=e438] [cursor=pointer]:
                - generic [ref=e439]: Bill To
                - note "Sortable" [ref=e440]
              - status
        - row [ref=e442]:
          - textbox "Search" [ref=e444]
          - generic [ref=e448] [cursor=pointer]: Filter
          - generic [ref=e452] [cursor=pointer]: Filter
          - generic [ref=e456] [cursor=pointer]: Filter
          - textbox "Search" [ref=e458]
          - generic [ref=e462] [cursor=pointer]: Filter
          - generic [ref=e466] [cursor=pointer]: Filter
          - generic [ref=e470] [cursor=pointer]: Filter
          - generic [ref=e474] [cursor=pointer]: Filter
          - textbox "Search" [ref=e476]
          - generic [ref=e480] [cursor=pointer]: Filter
          - generic [ref=e484] [cursor=pointer]: Filter
          - generic [ref=e488] [cursor=pointer]: Filter
          - generic [ref=e492] [cursor=pointer]: Filter
          - generic [ref=e496] [cursor=pointer]: Filter
          - textbox "Search" [ref=e498]
          - textbox "Search" [ref=e500]
          - textbox "Search" [ref=e502]
          - textbox "Search" [ref=e504]
          - textbox "Search" [ref=e506]
          - generic [ref=e510] [cursor=pointer]: Filter
          - textbox "Search" [ref=e512]
          - generic [ref=e516] [cursor=pointer]: Filter
          - generic [ref=e520] [cursor=pointer]: Filter
          - textbox "Search" [ref=e522]
          - generic [ref=e526] [cursor=pointer]: Filter
          - generic [ref=e530] [cursor=pointer]: Filter
          - textbox "Search" [ref=e532]
          - textbox "Search" [ref=e534]
          - textbox "Search" [ref=e536]
          - textbox "Search" [ref=e538]
          - textbox "Search" [ref=e540]
          - textbox "Search" [ref=e542]
          - textbox "Search" [ref=e544]
          - textbox "Search" [ref=e546]
          - generic [ref=e550] [cursor=pointer]: Filter
          - generic [ref=e554] [cursor=pointer]: Filter
          - generic [ref=e558] [cursor=pointer]: Filter
          - textbox "Search" [ref=e560]
          - textbox "Search" [ref=e562]
          - textbox "Search" [ref=e564]
          - generic [ref=e568] [cursor=pointer]: Filter
          - generic [ref=e572] [cursor=pointer]: Filter
          - textbox "Search" [ref=e574]
          - textbox "Search" [ref=e576]
          - textbox "Search" [ref=e578]
          - textbox "Search" [ref=e580]
          - textbox "Search" [ref=e582]
        - generic [ref=e634]:
          - generic: Loading
      - generic [ref=e638]:
        - generic [ref=e639]: 0-0 of 0 items
        - button "25 per page" [ref=e641] [cursor=pointer]:
          - generic [ref=e642]: 25 per page
  - button "AI Assistant AI" [ref=e643] [cursor=pointer]:
    - img "AI Assistant" [ref=e644]
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
  27 |     static async waitForLoaderToDisappear(locator) {
> 28 |     await locator.waitFor({ state: 'hidden' });
     |                   ^ TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
  29 | }
  30 | 
  31 | static async getDropdownValues(locator) {
  32 | const values = await locator.allTextContents();
  33 | console.log('Dropdown values:', values);
  34 | values.forEach((value, index) => {
  35 |     console.log(`${index + 1}: ${value.trim}`);
  36 | });
  37 | 
  38 | return values.map(value => value.trim());
  39 | }
  40 | 
  41 | }
  42 | 
  43 | module.exports = CommonUtils;
```