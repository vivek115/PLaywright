# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> Login test
- Location: tests\loginTest.spec.js:3:1

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.click: Test timeout of 90000ms exceeded.
Call log:
  - waiting for locator('navLink')

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
  - generic [ref=e74]:
    - generic [ref=e75]:
      - img [ref=e76]
      - img [ref=e77]
    - generic [ref=e81]:
      - generic [ref=e82]:
        - heading "Packages" [level=2]:
          - generic [ref=e85] [cursor=pointer]: Packages
      - list [ref=e87]:
        - listitem
        - listitem
        - listitem [ref=e88]:
          - button "Create New" [ref=e90] [cursor=pointer]: Create New
        - listitem [ref=e91]:
          - button [ref=e94] [cursor=pointer]
    - generic [ref=e98]:
      - grid "Data table" [ref=e99]:
        - row "Select All Rows Package ID Sortable Status Sortable Shipper Sortable Consignee Sortable Created By Sortable Created Date Sortable WR ID Sortable Package Type Sortable Length (in) Sortable Width (in) Sortable Height (in) Sortable Weight (lbs) Sortable Volume (ft³) Sortable Length (cm) Sortable Width (cm) Sortable Height (cm) Sortable Weight (kg) Sortable Volume (m³) Sortable Pro No. Sortable" [ref=e121]:
          - columnheader "Select All Rows":
            - checkbox "Select All Rows" [ref=e122]: 
          - columnheader "Package ID Sortable" [ref=e123]:
            - generic [ref=e124]:
              - generic [ref=e125] [cursor=pointer]:
                - generic [ref=e126]: Package ID
                - note "Sortable" [ref=e127]
              - status
          - columnheader "Status Sortable" [ref=e129]:
            - generic [ref=e130]:
              - generic [ref=e131] [cursor=pointer]:
                - generic [ref=e132]: Status
                - note "Sortable" [ref=e133]
              - status
          - columnheader "Shipper Sortable" [ref=e135]:
            - generic [ref=e136]:
              - generic [ref=e137] [cursor=pointer]:
                - generic [ref=e138]: Shipper
                - note "Sortable" [ref=e139]
              - status
          - columnheader "Consignee Sortable" [ref=e141]:
            - generic [ref=e142]:
              - generic [ref=e143] [cursor=pointer]:
                - generic [ref=e144]: Consignee
                - note "Sortable" [ref=e145]
              - status
          - columnheader "Created By Sortable" [ref=e147]:
            - generic [ref=e148]:
              - generic [ref=e149] [cursor=pointer]:
                - generic [ref=e150]: Created By
                - note "Sortable" [ref=e151]
              - status
          - columnheader "Created Date Sortable" [ref=e153]:
            - generic [ref=e154]:
              - generic [ref=e155] [cursor=pointer]:
                - generic [ref=e156]: Created Date
                - note "Sortable" [ref=e157]
              - status
          - columnheader "WR ID Sortable" [ref=e159]:
            - generic [ref=e160]:
              - generic [ref=e161] [cursor=pointer]:
                - generic [ref=e162]: WR ID
                - note "Sortable" [ref=e163]
              - status
          - columnheader "Package Type Sortable" [ref=e165]:
            - generic [ref=e166]:
              - generic [ref=e167] [cursor=pointer]:
                - generic [ref=e168]: Package Type
                - note "Sortable" [ref=e169]
              - status
          - columnheader "Length (in) Sortable" [ref=e171]:
            - generic [ref=e172]:
              - generic [ref=e173] [cursor=pointer]:
                - generic [ref=e174]: Length (in)
                - note "Sortable" [ref=e175]
              - status
          - columnheader "Width (in) Sortable" [ref=e177]:
            - generic [ref=e178]:
              - generic [ref=e179] [cursor=pointer]:
                - generic [ref=e180]: Width (in)
                - note "Sortable" [ref=e181]
              - status
          - columnheader "Height (in) Sortable" [ref=e183]:
            - generic [ref=e184]:
              - generic [ref=e185] [cursor=pointer]:
                - generic [ref=e186]: Height (in)
                - note "Sortable" [ref=e187]
              - status
          - columnheader "Weight (lbs) Sortable" [ref=e189]:
            - generic [ref=e190]:
              - generic [ref=e191] [cursor=pointer]:
                - generic [ref=e192]: Weight (lbs)
                - note "Sortable" [ref=e193]
              - status
          - columnheader "Volume (ft³) Sortable" [ref=e195]:
            - generic [ref=e196]:
              - generic [ref=e197] [cursor=pointer]:
                - generic [ref=e198]: Volume (ft³)
                - note "Sortable" [ref=e199]
              - status
          - columnheader "Length (cm) Sortable" [ref=e201]:
            - generic [ref=e202]:
              - generic [ref=e203] [cursor=pointer]:
                - generic [ref=e204]: Length (cm)
                - note "Sortable" [ref=e205]
              - status
          - columnheader "Width (cm) Sortable" [ref=e207]:
            - generic [ref=e208]:
              - generic [ref=e209] [cursor=pointer]:
                - generic [ref=e210]: Width (cm)
                - note "Sortable" [ref=e211]
              - status
          - columnheader "Height (cm) Sortable" [ref=e213]:
            - generic [ref=e214]:
              - generic [ref=e215] [cursor=pointer]:
                - generic [ref=e216]: Height (cm)
                - note "Sortable" [ref=e217]
              - status
          - columnheader "Weight (kg) Sortable" [ref=e219]:
            - generic [ref=e220]:
              - generic [ref=e221] [cursor=pointer]:
                - generic [ref=e222]: Weight (kg)
                - note "Sortable" [ref=e223]
              - status
          - columnheader "Volume (m³) Sortable" [ref=e225]:
            - generic [ref=e226]:
              - generic [ref=e227] [cursor=pointer]:
                - generic [ref=e228]: Volume (m³)
                - note "Sortable" [ref=e229]
              - status
          - columnheader "Pro No. Sortable" [ref=e231]:
            - generic [ref=e232]:
              - generic [ref=e233] [cursor=pointer]:
                - generic [ref=e234]: Pro No.
                - note "Sortable" [ref=e235]
              - status
          - columnheader [ref=e237]
        - row "undefined Filter Package ID Filter Status Filter Shipper Filter Consignee Filter Created By Filter Created Date Filter WR ID Filter Package Type Filter Length (in) Filter Width (in) Filter Height (in) Filter Weight (lbs) Filter Volume (ft³) Filter Length (cm) Filter Width (cm) Filter Height (cm) Filter Weight (kg) Filter Volume (m³) Filter Pro No. Filter undefined Filter" [ref=e238]:
          - textbox "Search" [ref=e240]
          - generic [ref=e244] [cursor=pointer]: Filter
          - textbox "Search" [ref=e246]
          - textbox "Search" [ref=e248]
          - textbox "Search" [ref=e250]
          - generic [ref=e254] [cursor=pointer]: Filter
          - textbox "Search" [ref=e256]
          - generic [ref=e260] [cursor=pointer]: Filter
          - generic [ref=e264] [cursor=pointer]: Filter
          - generic [ref=e268] [cursor=pointer]: Filter
          - generic [ref=e272] [cursor=pointer]: Filter
          - generic [ref=e276] [cursor=pointer]: Filter
          - generic [ref=e280] [cursor=pointer]: Filter
          - generic [ref=e284] [cursor=pointer]: Filter
          - generic [ref=e288] [cursor=pointer]: Filter
          - generic [ref=e292] [cursor=pointer]: Filter
          - generic [ref=e296] [cursor=pointer]: Filter
          - generic [ref=e300] [cursor=pointer]: Filter
          - textbox "Search" [ref=e302]
        - generic [ref=e325]:
          - generic: Loading
      - generic [ref=e329]:
        - generic [ref=e330]: 0-0 of 0 items
        - button "25 per page" [ref=e332] [cursor=pointer]:
          - generic [ref=e333]: 25 per page
  - button "AI Assistant AI" [ref=e334] [cursor=pointer]:
    - img "AI Assistant" [ref=e335]
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
  7  | 
  8  | class LoginPage extends LocatorHelper {
  9  | 
  10 |     constructor(page) {
  11 |         super(page,LoginPageLocators);
  12 |     }
  13 | 
  14 | 
  15 |     async navigateToLoginPageURL() {
  16 |         // Use Playwright baseURL from config and wait for initial DOM readiness.
  17 |         await this.page.goto('/', {
  18 |             waitUntil: 'domcontentloaded',
  19 |             timeout: 120000,
  20 |         });
  21 |        // await this.page.pause();
  22 |     
  23 |     }
  24 | 
  25 |     async  verfiyLoginPageTitle() {
  26 |         const logText = await this.locator('loginLogo').textContent();
  27 |         expect(logText).toContain(loginData.DataVerify.appTitle,"Login Page Title does not match expected value");
  28 |         console.log('Login Page Title verified successfully:', logText);
  29 |     
  30 |     }
  31 | 
  32 |     async validLogin() {
  33 |      await this.locator('usernameField').fill(env.username);
  34 |      await this.locator('passwordField').fill(env.password);
  35 |      await this.locator('rememberMeCheckbox').click();
  36 |      await this.locator('loginButton').click();
  37 |      await utils.waitForLoaderToDisappear(this.locator('loginLoader'));
  38 |         //await this.loginButton.click();
  39 |     }
  40 | 
  41 |     async verifyUserLandingToWarehouseOrchestratorPage(){
  42 |         const wrURL = this.page.url();
  43 |         if(wrURL.includes(loginData.DataVerify.warehouseOrchestratorURL)){
  44 |             console.log('User has successfully landed to Warehouse Orchestrator Page:', wrURL);
  45 |         }
  46 |         else{
> 47 |             await this.page.locator('navLink').click();
     |                                                ^ Error: locator.click: Test timeout of 90000ms exceeded.
  48 |             const dropdownHeading = await utils.getDropdownValues(this.locator('dropdownHeadingSelector'));
  49 |             console.log(dropdownHeading);
  50 |             await this.locator('warehouseReceiptsTitle').click();
  51 |             await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
  52 | 
  53 |         }
  54 |         await this.page.pause();
  55 |     }
  56 | }
  57 | 
  58 | module.exports = LoginPage;
  59 | 
  60 | 
  61 | 
```