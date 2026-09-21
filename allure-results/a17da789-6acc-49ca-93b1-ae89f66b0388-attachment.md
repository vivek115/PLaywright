# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> Login test
- Location: tests\loginTest.spec.js:3:1

# Error details

```
TypeError: apiUtil.getWRAPIResponse is not a function
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
        - row [ref=e144]:
          - columnheader "Select All Rows":
            - checkbox "Select All Rows" [ref=e145]: 
          - columnheader "WR ID Sortable" [ref=e146]:
            - generic [ref=e147]:
              - generic [ref=e148] [cursor=pointer]:
                - generic [ref=e149]: WR ID
                - note "Sortable" [ref=e150]
              - status
          - columnheader "Total Pckgs Sortable" [ref=e152]:
            - generic [ref=e153]:
              - generic [ref=e154] [cursor=pointer]:
                - generic [ref=e155]: Total Pckgs
                - note "Sortable" [ref=e156]
              - status
          - columnheader "Shipper Sortable" [ref=e158]:
            - generic [ref=e159]:
              - generic [ref=e160] [cursor=pointer]:
                - generic [ref=e161]: Shipper
                - note "Sortable" [ref=e162]
              - status
          - columnheader "Total Wght (lbs) Sortable" [ref=e164]:
            - generic [ref=e165]:
              - generic [ref=e166] [cursor=pointer]:
                - generic [ref=e167]: Total Wght (lbs)
                - note "Sortable" [ref=e168]
              - status
          - columnheader "Total Wght (kg) Sortable" [ref=e170]:
            - generic [ref=e171]:
              - generic [ref=e172] [cursor=pointer]:
                - generic [ref=e173]: Total Wght (kg)
                - note "Sortable" [ref=e174]
              - status
          - columnheader "Total Volume (ft³) Sortable" [ref=e176]:
            - generic [ref=e177]:
              - generic [ref=e178] [cursor=pointer]:
                - generic [ref=e179]: Total Volume (ft³)
                - note "Sortable" [ref=e180]
              - status
          - columnheader "Total Volume (m³) Sortable" [ref=e182]:
            - generic [ref=e183]:
              - generic [ref=e184] [cursor=pointer]:
                - generic [ref=e185]: Total Volume (m³)
                - note "Sortable" [ref=e186]
              - status
          - columnheader "Created Time Sortable" [ref=e188]:
            - generic [ref=e189]:
              - generic [ref=e190] [cursor=pointer]:
                - generic [ref=e191]: Created Time
                - note "Sortable" [ref=e192]
              - status
          - columnheader "Carrier Sortable" [ref=e194]:
            - generic [ref=e195]:
              - generic [ref=e196] [cursor=pointer]:
                - generic [ref=e197]: Carrier
                - note "Sortable" [ref=e198]
              - status
          - columnheader "PRO No. Sortable" [ref=e200]:
            - generic [ref=e201]:
              - generic [ref=e202] [cursor=pointer]:
                - generic [ref=e203]: PRO No.
                - note "Sortable" [ref=e204]
              - status
          - columnheader "Tracking No. Sortable" [ref=e206]:
            - generic [ref=e207]:
              - generic [ref=e208] [cursor=pointer]:
                - generic [ref=e209]: Tracking No.
                - note "Sortable" [ref=e210]
              - status
          - columnheader "Agent Sortable" [ref=e212]:
            - generic [ref=e213]:
              - generic [ref=e214] [cursor=pointer]:
                - generic [ref=e215]: Agent
                - note "Sortable" [ref=e216]
              - status
          - columnheader "Supplier Sortable" [ref=e218]:
            - generic [ref=e219]:
              - generic [ref=e220] [cursor=pointer]:
                - generic [ref=e221]: Supplier
                - note "Sortable" [ref=e222]
              - status
          - columnheader "Receiving Type Sortable" [ref=e224]:
            - generic [ref=e225]:
              - generic [ref=e226] [cursor=pointer]:
                - generic [ref=e227]: Receiving Type
                - note "Sortable" [ref=e228]
              - status
          - columnheader "Received By Sortable" [ref=e230]:
            - generic [ref=e231]:
              - generic [ref=e232] [cursor=pointer]:
                - generic [ref=e233]: Received By
                - note "Sortable" [ref=e234]
              - status
          - columnheader "Received Date Sortable" [ref=e236]:
            - generic [ref=e237]:
              - generic [ref=e238] [cursor=pointer]:
                - generic [ref=e239]: Received Date
                - note "Sortable" [ref=e240]
              - status
          - columnheader "Received Time Sortable" [ref=e242]:
            - generic [ref=e243]:
              - generic [ref=e244] [cursor=pointer]:
                - generic [ref=e245]: Received Time
                - note "Sortable" [ref=e246]
              - status
          - columnheader "Modified By Sortable" [ref=e248]:
            - generic [ref=e249]:
              - generic [ref=e250] [cursor=pointer]:
                - generic [ref=e251]: Modified By
                - note "Sortable" [ref=e252]
              - status
          - columnheader "Modified Date Sortable" [ref=e254]:
            - generic [ref=e255]:
              - generic [ref=e256] [cursor=pointer]:
                - generic [ref=e257]: Modified Date
                - note "Sortable" [ref=e258]
              - status
          - columnheader "Modified Time Sortable" [ref=e260]:
            - generic [ref=e261]:
              - generic [ref=e262] [cursor=pointer]:
                - generic [ref=e263]: Modified Time
                - note "Sortable" [ref=e264]
              - status
          - columnheader "T. Mode Sortable" [ref=e266]:
            - generic [ref=e267]:
              - generic [ref=e268] [cursor=pointer]:
                - generic [ref=e269]: T. Mode
                - note "Sortable" [ref=e270]
              - status
          - columnheader "Shipment ID Sortable" [ref=e272]:
            - generic [ref=e273]:
              - generic [ref=e274] [cursor=pointer]:
                - generic [ref=e275]: Shipment ID
                - note "Sortable" [ref=e276]
              - status
          - columnheader "Consolidation ID Sortable" [ref=e278]:
            - generic [ref=e279]:
              - generic [ref=e280] [cursor=pointer]:
                - generic [ref=e281]: Consolidation ID
                - note "Sortable" [ref=e282]
              - status
          - columnheader "House Bill No. Sortable" [ref=e284]:
            - generic [ref=e285]:
              - generic [ref=e286] [cursor=pointer]:
                - generic [ref=e287]: House Bill No.
                - note "Sortable" [ref=e288]
              - status
          - columnheader "Master Bill No. Sortable" [ref=e290]:
            - generic [ref=e291]:
              - generic [ref=e292] [cursor=pointer]:
                - generic [ref=e293]: Master Bill No.
                - note "Sortable" [ref=e294]
              - status
          - columnheader "Container No. Sortable" [ref=e296]:
            - generic [ref=e297]:
              - generic [ref=e298] [cursor=pointer]:
                - generic [ref=e299]: Container No.
                - note "Sortable" [ref=e300]
              - status
          - columnheader "Booking No. Sortable" [ref=e302]:
            - generic [ref=e303]:
              - generic [ref=e304] [cursor=pointer]:
                - generic [ref=e305]: Booking No.
                - note "Sortable" [ref=e306]
              - status
          - columnheader "Cargo Release ID Sortable" [ref=e308]:
            - generic [ref=e309]:
              - generic [ref=e310] [cursor=pointer]:
                - generic [ref=e311]: Cargo Release ID
                - note "Sortable" [ref=e312]
              - status
          - columnheader "Total Volume Wght (lbs) Sortable" [ref=e314]:
            - generic [ref=e315]:
              - generic [ref=e316] [cursor=pointer]:
                - generic [ref=e317]: Total Volume Wght (lbs)
                - note "Sortable" [ref=e318]
              - status
          - columnheader "Total Volume Wght (kg) Sortable" [ref=e320]:
            - generic [ref=e321]:
              - generic [ref=e322] [cursor=pointer]:
                - generic [ref=e323]: Total Volume Wght (kg)
                - note "Sortable" [ref=e324]
              - status
          - columnheader "Total Value Sortable" [ref=e326]:
            - generic [ref=e327]:
              - generic [ref=e328] [cursor=pointer]:
                - generic [ref=e329]: Total Value
                - note "Sortable" [ref=e330]
              - status
          - columnheader "Consignee Loc Sortable" [ref=e332]:
            - generic [ref=e333]:
              - generic [ref=e334] [cursor=pointer]:
                - generic [ref=e335]: Consignee Loc
                - note "Sortable" [ref=e336]
              - status
          - columnheader "Consignee City Sortable" [ref=e338]:
            - generic [ref=e339]:
              - generic [ref=e340] [cursor=pointer]:
                - generic [ref=e341]: Consignee City
                - note "Sortable" [ref=e342]
              - status
          - columnheader "Consignee Country Sortable" [ref=e344]:
            - generic [ref=e345]:
              - generic [ref=e346] [cursor=pointer]:
                - generic [ref=e347]: Consignee Country
                - note "Sortable" [ref=e348]
              - status
          - columnheader "Status Sortable" [ref=e350]:
            - generic [ref=e351]:
              - generic [ref=e352] [cursor=pointer]:
                - generic [ref=e353]: Status
                - note "Sortable" [ref=e354]
              - status
          - columnheader "Created Date Sortable" [ref=e356]:
            - generic [ref=e357]:
              - generic [ref=e358] [cursor=pointer]:
                - generic [ref=e359]: Created Date
                - note "Sortable" [ref=e360]
              - status
          - columnheader "Created By Sortable" [ref=e362]:
            - generic [ref=e363]:
              - generic [ref=e364] [cursor=pointer]:
                - generic [ref=e365]: Created By
                - note "Sortable" [ref=e366]
              - status
          - columnheader "Consignee Sortable" [ref=e368]:
            - generic [ref=e369]:
              - generic [ref=e370] [cursor=pointer]:
                - generic [ref=e371]: Consignee
                - note "Sortable" [ref=e372]
              - status
          - columnheader "Warehouse Sortable" [ref=e374]:
            - generic [ref=e375]:
              - generic [ref=e376] [cursor=pointer]:
                - generic [ref=e377]: Warehouse
                - note "Sortable" [ref=e378]
              - status
          - columnheader [ref=e380]
          - columnheader "PO No. Sortable" [ref=e381]:
            - generic [ref=e382]:
              - generic [ref=e383] [cursor=pointer]:
                - generic [ref=e384]: PO No.
                - note "Sortable" [ref=e385]
              - status
          - columnheader "Bill To Sortable" [ref=e387]:
            - generic [ref=e388]:
              - generic [ref=e389] [cursor=pointer]:
                - generic [ref=e390]: Bill To
                - note "Sortable" [ref=e391]
              - status
        - row "undefined Filter WR ID Filter Total Pckgs Filter Shipper Filter Total Wght (lbs) Filter Total Wght (kg) Filter Total Volume (ft³) Filter Total Volume (m³) Filter Created Time Filter Carrier Filter PRO No. Filter Tracking No. Filter Agent Filter Supplier Filter Receiving Type Filter Received By Filter Received Date Filter Received Time Filter Modified By Filter Modified Date Filter Modified Time Filter T. Mode Filter Shipment ID Filter Consolidation ID Filter House Bill No. Filter Master Bill No. Filter Container No. Filter Booking No. Filter Cargo Release ID Filter Total Volume Wght (lbs) Filter Total Volume Wght (kg) Filter Total Value Filter Consignee Loc Filter Consignee City Filter Consignee Country Filter Status Filter Created Date Filter Created By Filter Consignee Filter Warehouse Filter undefined Filter PO No. Filter Bill To Filter" [ref=e393]:
          - textbox "Search" [ref=e395]
          - generic [ref=e399] [cursor=pointer]: Filter
          - textbox "Search" [ref=e401]
          - generic [ref=e405] [cursor=pointer]: Filter
          - generic [ref=e409] [cursor=pointer]: Filter
          - generic [ref=e413] [cursor=pointer]: Filter
          - generic [ref=e417] [cursor=pointer]: Filter
          - generic [ref=e421] [cursor=pointer]: Filter
          - textbox "Search" [ref=e423]
          - textbox "Search" [ref=e425]
          - textbox "Search" [ref=e427]
          - textbox "Search" [ref=e429]
          - textbox "Search" [ref=e431]
          - generic [ref=e435] [cursor=pointer]: Filter
          - textbox "Search" [ref=e437]
          - generic [ref=e441] [cursor=pointer]: Filter
          - generic [ref=e445] [cursor=pointer]: Filter
          - textbox "Search" [ref=e447]
          - generic [ref=e451] [cursor=pointer]: Filter
          - generic [ref=e455] [cursor=pointer]: Filter
          - textbox "Search" [ref=e457]
          - textbox "Search" [ref=e459]
          - textbox "Search" [ref=e461]
          - textbox "Search" [ref=e463]
          - textbox "Search" [ref=e465]
          - textbox "Search" [ref=e467]
          - textbox "Search" [ref=e469]
          - textbox "Search" [ref=e471]
          - generic [ref=e475] [cursor=pointer]: Filter
          - generic [ref=e479] [cursor=pointer]: Filter
          - generic [ref=e483] [cursor=pointer]: Filter
          - textbox "Search" [ref=e485]
          - textbox "Search" [ref=e487]
          - textbox "Search" [ref=e489]
          - generic [ref=e493] [cursor=pointer]: Filter
          - generic [ref=e497] [cursor=pointer]: Filter
          - textbox "Search" [ref=e499]
          - textbox "Search" [ref=e501]
          - textbox "Search" [ref=e503]
          - textbox "Search" [ref=e505]
          - textbox "Search" [ref=e507]
        - generic [ref=e552]:
          - generic: Loading
      - generic [ref=e556]:
        - generic [ref=e557]: 0-0 of 0 items
        - button "25 per page" [ref=e559] [cursor=pointer]:
          - generic [ref=e560]: 25 per page
  - button "AI Assistant AI" [ref=e561] [cursor=pointer]:
    - img "AI Assistant" [ref=e562]
    - text: AI
```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | const utils = require('../../utils/CommonUtils');
  3  | const LocatorHelper = require('../../utils/LocatorHelper');
  4  | const LoginPageLocators = require('./loginPageLocators');
  5  | const loginData = require('../../data/loginData.json');
  6  | const env = require('../../config/env.prod.json');
  7  | const apiUtil = require('../../utils/apiUtil');
  8  | 
  9  | class LoginPage extends LocatorHelper {
  10 | 
  11 |     constructor(page) {
  12 |         super(page, LoginPageLocators);
  13 |     }
  14 | 
  15 |     async navigateToLoginPageURL() {
  16 |         // Avoid waiting for the full load event, which can be slow/flaky on this app.
  17 |         await this.page.goto('/', {
  18 |             waitUntil: 'domcontentloaded',
  19 |             timeout: 120000
  20 |         });
  21 |         await this.page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => { });
  22 |         await utils.waitForLoaderToDisappear(
  23 |             this.page.locator('loginLoader'),
  24 |             60000
  25 |         );
  26 | 
  27 |         // await this.page.pause();
  28 | 
  29 |     }
  30 |     async verfiyLoginPageTitle() {
  31 |         const logText = await this.locator('loginLogo').textContent();
  32 |         expect(logText).toContain(loginData.DataVerify.appTitle, "Login Page Title does not match expected value");
  33 |         console.log('Login Page Title verified successfully:', logText);
  34 | 
  35 |     }
  36 |     async validLogin() {
  37 |         await this.locator('usernameField').fill(env.username);
  38 |         await this.locator('passwordField').fill(env.password);
  39 |         await this.locator('rememberMeCheckbox').click();
  40 |         const loginButton = this.locator('loginButton');
  41 |         await this.locator('passwordField').press('Tab');
  42 |         await expect(loginButton).toBeEnabled({ timeout: 20000 });
  43 |         await loginButton.click();
  44 |     }
  45 |     async verifyUserLandingToWarehouseOrchestratorPage() {
  46 |         await utils.waitForLoaderToDisappear(this.page.locator('loginLoader'), 60000);
  47 | 
  48 |         await this.page.waitForURL(
  49 |             /warehouseorchestrator\.com\/(?!auth\/login).*/,
  50 |             { timeout: 60000 }
  51 |         ).catch(() => { });
  52 | 
  53 |         const wrURL = this.page.url();
  54 |         console.log('Current URL after login:', wrURL);
  55 | 
  56 |         if (wrURL.includes('/auth/login')) {
  57 |             throw new Error(`Login did not complete. Still on auth page: ${wrURL}`);
  58 |         }
  59 | 
  60 |         if (wrURL.includes(loginData.DataVerify.warehouseOrchestratorURL)) {
  61 |             console.log('User has successfully landed to Warehouse Orchestrator Page:', wrURL);
  62 |         }
  63 |         else {
  64 |             await expect(this.locator('navLink').first()).toBeVisible({ timeout: 15000 });
  65 |             await this.locator('navLink').first().click();
  66 |             const dropdownHeading = await utils.getDropdownValues(this.locator('dropdownHeadingSelector'));
  67 |             console.log(dropdownHeading);
  68 |             await this.locator('warehouseReceiptsTitle').click();
  69 |             await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
  70 | 
  71 |         }
  72 | 
  73 |     }
  74 |     async verfiyWarehouseReceiptsCount() {
> 75 |         const apiResponse = await apiUtil.getWRAPIResponse();
     |                                           ^ TypeError: apiUtil.getWRAPIResponse is not a function
  76 |         const apiCount = apiResponse.apiCount;
  77 |         console.log('API Count:', apiCount);
  78 |         await this.page.pause();
  79 |     }
  80 | }
  81 |      
  82 | 
  83 | module.exports = LoginPage;
  84 | 
  85 | 
  86 | 
```