# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createWarehouseReceipts.spec.js >> Warehouse receipts >> Create warehouse receipt
- Location: tests\createWarehouseReceipts.spec.js:10:5

# Error details

```
TimeoutError: locator.click: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('//kendo-grid[contains(@class,\'list-view-new\')]//tbody//tr[contains(@class,\'k-master-row\')]//input[@type=\'radio\']').nth(2)
    - locator resolved to <input type="radio" tabindex="0" id="mat-radio-3-input" class="mat-radio-input"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span class="mat-radio-inner-circle"></span> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span class="mat-radio-inner-circle"></span> intercepts pointer events
    - retrying click action
      - waiting 100ms
    112 × waiting for element to be visible, enabled and stable
        - element is visible, enabled and stable
        - scrolling into view if needed
        - done scrolling
        - <span class="mat-radio-inner-circle"></span> intercepts pointer events
      - retrying click action
        - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - banner [ref=e5]:
        - navigation [ref=e6]:
          - paragraph [ref=e10] [cursor=pointer]: WMS
          - generic [ref=e11]:
            - list [ref=e12]:
              - listitem [ref=e13]:
                - link [ref=e14] [cursor=pointer]:
                  - /url: /wms/dashboard
                  - text: Dashboard
              - listitem [ref=e15]:
                - link [ref=e16] [cursor=pointer]:
                  - /url: /wms/orders
                  - text: Orders
              - listitem [ref=e17]:
                - link [ref=e18] [cursor=pointer]:
                  - /url: /wms/warehouse
                  - text: Warehouse
              - listitem [ref=e19]:
                - link [ref=e20] [cursor=pointer]:
                  - /url: /wms/locations/list
                  - text: Locations
              - listitem [ref=e21]:
                - link [ref=e22] [cursor=pointer]:
                  - /url: /wms/shipments
                  - text: Shipments
              - listitem [ref=e23]:
                - link [ref=e24] [cursor=pointer]:
                  - /url: /wms/tasks
                  - text: Tasks
              - listitem [ref=e25]:
                - link [ref=e26] [cursor=pointer]:
                  - /url: /wms/reports
                  - text: Reports
              - listitem [ref=e27]:
                - link [ref=e28] [cursor=pointer]:
                  - /url: /wms/settings
                  - text: Settings
            - list [ref=e29]:
              - listitem [ref=e30]:
                - generic [ref=e31]:
                  - menuitem: Filter
                  - textbox [ref=e32]:
                    - /placeholder: Search...
              - listitem [ref=e33]:
                - list [ref=e34]:
                  - listitem [ref=e35]:
                    - generic [ref=e36] [cursor=pointer]: IFS Demo
                    - list:
                      - listitem:
                        - generic: My Profile
                      - listitem:
                        - link:
                          - /url: /logout
                          - text: Logout
      - generic [ref=e38]:
        - generic [ref=e42] [cursor=pointer]:
          - heading [level=4] [ref=e43]: SCRM
          - paragraph [ref=e44]: Manage Companies, Contacts & Quotes
        - link [ref=e46] [cursor=pointer]:
          - /url: /wms
          - img [ref=e48]
          - generic [ref=e49]:
            - heading [level=4] [ref=e50]: WMS
            - paragraph [ref=e51]: Manage Inventory, Packages & More
        - link [ref=e53] [cursor=pointer]:
          - /url: /dimensioner/capture
          - img [ref=e55]
          - generic [ref=e56]:
            - heading [level=4] [ref=e57]: Dimensioner
            - paragraph [ref=e58]: Capture Dimensions, Weight & Images
        - link [ref=e60] [cursor=pointer]:
          - /url: /workflows/list
          - img [ref=e62]
          - generic [ref=e63]:
            - heading [level=4] [ref=e64]: Workflows
            - paragraph [ref=e65]: Manage Automations & More
        - generic [ref=e69] [cursor=pointer]:
          - heading [level=4] [ref=e70]: Admin
          - paragraph [ref=e71]: Manage Users, Security, Modules and More
    - generic [ref=e72]:
      - generic [ref=e74]:
        - generic [ref=e75]:
          - img [ref=e77]
          - generic [ref=e78]:
            - heading [level=2] [ref=e79]: WRAA001008
            - paragraph [ref=e80]: "Status: On Hand"
        - generic [ref=e82]:
          - generic [ref=e84]:
            - generic [ref=e85]: "0"
            - generic [ref=e86]: Pre-Received
          - generic [ref=e88]:
            - generic [ref=e89]: "5"
            - generic [ref=e90]: On Hand
          - generic [ref=e92]:
            - generic [ref=e93]: "0"
            - generic [ref=e94]: In Process
          - generic [ref=e96]:
            - generic [ref=e97]: "0"
            - generic [ref=e98]: Loaded
          - generic [ref=e100]:
            - generic [ref=e101]: "0"
            - generic [ref=e102]: Shipped
          - generic [ref=e104]:
            - generic [ref=e105]: "0"
            - generic [ref=e106]: Delivered
      - generic [ref=e107]:
        - generic [ref=e111]:
          - navigation [ref=e114]:
            - generic [ref=e117]:
              - generic [ref=e118] [cursor=pointer]: General
              - generic [ref=e119]: Packages
              - generic [ref=e120] [cursor=pointer]: Items
              - generic [ref=e121] [cursor=pointer]: Charges & Expenses
              - generic [ref=e122] [cursor=pointer]: Notes
              - generic [ref=e123] [cursor=pointer]: Attachments
              - generic [ref=e124] [cursor=pointer]: Tasks
              - generic [ref=e125] [cursor=pointer]: Activities
              - generic [ref=e126]:
                - generic [ref=e134] [cursor=pointer]:
                  - textbox [ref=e135]:
                    - /placeholder: "Scan or type tracking #"
                  - generic:
                    - generic:
                      - generic: "Add Package from Tracking #"
                - generic [ref=e136]:
                  - button [ref=e137] [cursor=pointer]: Repack
                  - button [ref=e138] [cursor=pointer]: Create New
                - button [ref=e141] [cursor=pointer]: Menu
          - generic [ref=e150]:
            - grid [ref=e151]:
              - row [ref=e153]:
                - columnheader [ref=e154]:
                  - generic [ref=e157]:
                    - checkbox [ref=e158]: 
                    - generic [ref=e160] [cursor=pointer]: Select All
              - generic [ref=e161]:
                - row [ref=e163]:
                  - gridcell [ref=e164]:
                    - generic [ref=e165] [cursor=pointer]:
                      - heading [level=4] [ref=e167]: PIDAA001148-5
                      - generic [ref=e168]:
                        - checkbox [ref=e171]: 
                        - generic [ref=e177]:
                          - button [ref=e178]
                          - button [ref=e179]
                        - generic [ref=e185]:
                          - generic [ref=e186]:
                            - generic [ref=e195]:
                              - combobox [ref=e196]:
                                - generic [ref=e200]: On Hand
                              - generic:
                                - generic: Status
                            - generic [ref=e210]:
                              - combobox [ref=e211]
                              - generic:
                                - generic: Part Number
                            - paragraph [ref=e219]:
                              - generic [ref=e223]:
                                - textbox [ref=e224]:
                                  - /placeholder: Enter Model
                                - generic:
                                  - generic: Model
                            - paragraph [ref=e228]:
                              - generic [ref=e232]:
                                - textbox [ref=e233]:
                                  - /placeholder: Enter Pieces
                                  - text: "1"
                                - generic:
                                  - generic: Pieces
                            - paragraph [ref=e239]:
                              - generic [ref=e240]: Pieces By PO
                          - generic [ref=e241]:
                            - generic [ref=e242]:
                              - generic [ref=e243]:
                                - generic [ref=e252]:
                                  - combobox [ref=e253]:
                                    - generic [ref=e256]: Basket
                                  - generic:
                                    - generic: Package Type
                                - generic [ref=e261]:
                                  - paragraph [ref=e262]: Dimensions (L x W x H)
                                  - paragraph [ref=e263]:
                                    - textbox [ref=e264]:
                                      - /placeholder: L
                                      - text: "90"
                                    - text: x
                                    - textbox [ref=e265]:
                                      - /placeholder: W
                                      - text: "14"
                                    - text: x
                                    - textbox [ref=e266]:
                                      - /placeholder: H
                                      - text: "9"
                                    - text: in
                                - paragraph [ref=e270]:
                                  - generic [ref=e274]:
                                    - textbox [ref=e275]: 16.00 lbs
                                    - generic:
                                      - generic: Weight
                                - paragraph [ref=e279]:
                                  - generic [ref=e285]:
                                    - combobox [ref=e286]
                                    - generic:
                                      - generic:
                                        - generic: Location
                              - generic [ref=e287]:
                                - paragraph [ref=e291]:
                                  - generic [ref=e295]:
                                    - textbox [ref=e296]:
                                      - /placeholder: Enter Tracking No.
                                    - generic:
                                      - generic: Tracking No.
                                - paragraph [ref=e300]:
                                  - generic [ref=e304]:
                                    - textbox [ref=e305]:
                                      - /placeholder: Enter Pro No.
                                    - generic:
                                      - generic: Pro No.
                                - generic [ref=e314]:
                                  - combobox [ref=e315]:
                                    - generic [ref=e318]: IFS Demo
                                  - generic:
                                    - generic: Received By
                                - generic [ref=e325]:
                                  - generic: Received Date/Time
                                  - generic [ref=e326]: 09/16/2026 at 03:44 PM
                            - paragraph [ref=e332]:
                              - generic [ref=e336]:
                                - textbox [ref=e337]:
                                  - /placeholder: Enter Description
                                - generic [ref=e338]: 0/5000
                                - generic:
                                  - generic: Description
                        - button [ref=e341]:
                          - img [ref=e343]
                - row [ref=e344]:
                  - gridcell [ref=e345]:
                    - generic [ref=e346] [cursor=pointer]:
                      - heading [level=4] [ref=e348]: PIDAA001148-4
                      - generic [ref=e349]:
                        - checkbox [ref=e352]: 
                        - generic [ref=e358]:
                          - button [ref=e359]
                          - button [ref=e360]
                        - generic [ref=e366]:
                          - generic [ref=e367]:
                            - generic [ref=e376]:
                              - combobox [ref=e377]:
                                - generic [ref=e381]: On Hand
                              - generic:
                                - generic: Status
                            - generic [ref=e391]:
                              - combobox [ref=e392]
                              - generic:
                                - generic: Part Number
                            - paragraph [ref=e400]:
                              - generic [ref=e404]:
                                - textbox [ref=e405]:
                                  - /placeholder: Enter Model
                                - generic:
                                  - generic: Model
                            - paragraph [ref=e409]:
                              - generic [ref=e413]:
                                - textbox [ref=e414]:
                                  - /placeholder: Enter Pieces
                                  - text: "1"
                                - generic:
                                  - generic: Pieces
                            - paragraph [ref=e420]:
                              - generic [ref=e421]: Pieces By PO
                          - generic [ref=e422]:
                            - generic [ref=e423]:
                              - generic [ref=e424]:
                                - generic [ref=e433]:
                                  - combobox [ref=e434]:
                                    - generic [ref=e437]: Basket
                                  - generic:
                                    - generic: Package Type
                                - generic [ref=e442]:
                                  - paragraph [ref=e443]: Dimensions (L x W x H)
                                  - paragraph [ref=e444]:
                                    - textbox [ref=e445]:
                                      - /placeholder: L
                                      - text: "90"
                                    - text: x
                                    - textbox [ref=e446]:
                                      - /placeholder: W
                                      - text: "14"
                                    - text: x
                                    - textbox [ref=e447]:
                                      - /placeholder: H
                                      - text: "9"
                                    - text: in
                                - paragraph [ref=e451]:
                                  - generic [ref=e455]:
                                    - textbox [ref=e456]: 16.00 lbs
                                    - generic:
                                      - generic: Weight
                                - paragraph [ref=e460]:
                                  - generic [ref=e466]:
                                    - combobox [ref=e467]
                                    - generic:
                                      - generic:
                                        - generic: Location
                              - generic [ref=e468]:
                                - paragraph [ref=e472]:
                                  - generic [ref=e476]:
                                    - textbox [ref=e477]:
                                      - /placeholder: Enter Tracking No.
                                    - generic:
                                      - generic: Tracking No.
                                - paragraph [ref=e481]:
                                  - generic [ref=e485]:
                                    - textbox [ref=e486]:
                                      - /placeholder: Enter Pro No.
                                    - generic:
                                      - generic: Pro No.
                                - generic [ref=e495]:
                                  - combobox [ref=e496]:
                                    - generic [ref=e499]: IFS Demo
                                  - generic:
                                    - generic: Received By
                                - generic [ref=e506]:
                                  - generic: Received Date/Time
                                  - generic [ref=e507]: 09/16/2026 at 03:44 PM
                            - paragraph [ref=e513]:
                              - generic [ref=e517]:
                                - textbox [ref=e518]:
                                  - /placeholder: Enter Description
                                - generic [ref=e519]: 0/5000
                                - generic:
                                  - generic: Description
                        - button [ref=e522]:
                          - img [ref=e524]
                - row [ref=e525]:
                  - gridcell [ref=e526]:
                    - generic [ref=e527] [cursor=pointer]:
                      - heading [level=4] [ref=e529]: PIDAA001148-3
                      - generic [ref=e530]:
                        - checkbox [ref=e533]: 
                        - generic [ref=e539]:
                          - button [ref=e540]
                          - button [ref=e541]
                        - generic [ref=e547]:
                          - generic [ref=e548]:
                            - generic [ref=e557]:
                              - combobox [ref=e558]:
                                - generic [ref=e562]: On Hand
                              - generic:
                                - generic: Status
                            - generic [ref=e572]:
                              - combobox [ref=e573]
                              - generic:
                                - generic: Part Number
                            - paragraph [ref=e581]:
                              - generic [ref=e585]:
                                - textbox [ref=e586]:
                                  - /placeholder: Enter Model
                                - generic:
                                  - generic: Model
                            - paragraph [ref=e590]:
                              - generic [ref=e594]:
                                - textbox [ref=e595]:
                                  - /placeholder: Enter Pieces
                                  - text: "1"
                                - generic:
                                  - generic: Pieces
                            - paragraph [ref=e601]:
                              - generic [ref=e602]: Pieces By PO
                          - generic [ref=e603]:
                            - generic [ref=e604]:
                              - generic [ref=e605]:
                                - generic [ref=e614]:
                                  - combobox [ref=e615]:
                                    - generic [ref=e618]: Basket
                                  - generic:
                                    - generic: Package Type
                                - generic [ref=e623]:
                                  - paragraph [ref=e624]: Dimensions (L x W x H)
                                  - paragraph [ref=e625]:
                                    - textbox [ref=e626]:
                                      - /placeholder: L
                                      - text: "90"
                                    - text: x
                                    - textbox [ref=e627]:
                                      - /placeholder: W
                                      - text: "14"
                                    - text: x
                                    - textbox [ref=e628]:
                                      - /placeholder: H
                                      - text: "9"
                                    - text: in
                                - paragraph [ref=e632]:
                                  - generic [ref=e636]:
                                    - textbox [ref=e637]: 16.00 lbs
                                    - generic:
                                      - generic: Weight
                                - paragraph [ref=e641]:
                                  - generic [ref=e647]:
                                    - combobox [ref=e648]
                                    - generic:
                                      - generic:
                                        - generic: Location
                              - generic [ref=e649]:
                                - paragraph [ref=e653]:
                                  - generic [ref=e657]:
                                    - textbox [ref=e658]:
                                      - /placeholder: Enter Tracking No.
                                    - generic:
                                      - generic: Tracking No.
                                - paragraph [ref=e662]:
                                  - generic [ref=e666]:
                                    - textbox [ref=e667]:
                                      - /placeholder: Enter Pro No.
                                    - generic:
                                      - generic: Pro No.
                                - generic [ref=e676]:
                                  - combobox [ref=e677]:
                                    - generic [ref=e680]: IFS Demo
                                  - generic:
                                    - generic: Received By
                                - generic [ref=e687]:
                                  - generic: Received Date/Time
                                  - generic [ref=e688]: 09/16/2026 at 03:44 PM
                            - paragraph [ref=e694]:
                              - generic [ref=e698]:
                                - textbox [ref=e699]:
                                  - /placeholder: Enter Description
                                - generic [ref=e700]: 0/5000
                                - generic:
                                  - generic: Description
                        - button [ref=e703]:
                          - img [ref=e705]
                - row [ref=e706]:
                  - gridcell [ref=e707]:
                    - generic [ref=e708] [cursor=pointer]:
                      - heading [level=4] [ref=e710]: PIDAA001148-2
                      - generic [ref=e711]:
                        - checkbox [ref=e714]: 
                        - generic [ref=e720]:
                          - button [ref=e721]
                          - button [ref=e722]
                        - generic [ref=e728]:
                          - generic [ref=e729]:
                            - generic [ref=e738]:
                              - combobox [ref=e739]:
                                - generic [ref=e743]: On Hand
                              - generic:
                                - generic: Status
                            - generic [ref=e753]:
                              - combobox [ref=e754]
                              - generic:
                                - generic: Part Number
                            - paragraph [ref=e762]:
                              - generic [ref=e766]:
                                - textbox [ref=e767]:
                                  - /placeholder: Enter Model
                                - generic:
                                  - generic: Model
                            - paragraph [ref=e771]:
                              - generic [ref=e775]:
                                - textbox [ref=e776]:
                                  - /placeholder: Enter Pieces
                                  - text: "1"
                                - generic:
                                  - generic: Pieces
                            - paragraph [ref=e782]:
                              - generic [ref=e783]: Pieces By PO
                          - generic [ref=e784]:
                            - generic [ref=e785]:
                              - generic [ref=e786]:
                                - generic [ref=e795]:
                                  - combobox [ref=e796]:
                                    - generic [ref=e799]: Basket
                                  - generic:
                                    - generic: Package Type
                                - generic [ref=e804]:
                                  - paragraph [ref=e805]: Dimensions (L x W x H)
                                  - paragraph [ref=e806]:
                                    - textbox [ref=e807]:
                                      - /placeholder: L
                                      - text: "90"
                                    - text: x
                                    - textbox [ref=e808]:
                                      - /placeholder: W
                                      - text: "14"
                                    - text: x
                                    - textbox [ref=e809]:
                                      - /placeholder: H
                                      - text: "9"
                                    - text: in
                                - paragraph [ref=e813]:
                                  - generic [ref=e817]:
                                    - textbox [ref=e818]: 16.00 lbs
                                    - generic:
                                      - generic: Weight
                                - paragraph [ref=e822]:
                                  - generic [ref=e828]:
                                    - combobox [ref=e829]
                                    - generic:
                                      - generic:
                                        - generic: Location
                              - generic [ref=e830]:
                                - paragraph [ref=e834]:
                                  - generic [ref=e838]:
                                    - textbox [ref=e839]:
                                      - /placeholder: Enter Tracking No.
                                    - generic:
                                      - generic: Tracking No.
                                - paragraph [ref=e843]:
                                  - generic [ref=e847]:
                                    - textbox [ref=e848]:
                                      - /placeholder: Enter Pro No.
                                    - generic:
                                      - generic: Pro No.
                                - generic [ref=e857]:
                                  - combobox [ref=e858]:
                                    - generic [ref=e861]: IFS Demo
                                  - generic:
                                    - generic: Received By
                                - generic [ref=e868]:
                                  - generic: Received Date/Time
                                  - generic [ref=e869]: 09/16/2026 at 03:44 PM
                            - paragraph [ref=e875]:
                              - generic [ref=e879]:
                                - textbox [ref=e880]:
                                  - /placeholder: Enter Description
                                - generic [ref=e881]: 0/5000
                                - generic:
                                  - generic: Description
                        - button [ref=e884]:
                          - img [ref=e886]
                - row [ref=e887]:
                  - gridcell [ref=e888]:
                    - generic [ref=e889] [cursor=pointer]:
                      - heading [level=4] [ref=e891]: PIDAA001148-1
                      - generic [ref=e892]:
                        - checkbox [ref=e895]: 
                        - generic [ref=e901]:
                          - button [ref=e902]
                          - button [ref=e903]
                        - generic [ref=e909]:
                          - generic [ref=e910]:
                            - generic [ref=e919]:
                              - combobox [ref=e920]:
                                - generic [ref=e924]: On Hand
                              - generic:
                                - generic: Status
                            - generic [ref=e934]:
                              - combobox [ref=e935]
                              - generic:
                                - generic: Part Number
                            - paragraph [ref=e943]:
                              - generic [ref=e947]:
                                - textbox [ref=e948]:
                                  - /placeholder: Enter Model
                                - generic:
                                  - generic: Model
                            - paragraph [ref=e952]:
                              - generic [ref=e956]:
                                - textbox [ref=e957]:
                                  - /placeholder: Enter Pieces
                                  - text: "1"
                                - generic:
                                  - generic: Pieces
                            - paragraph [ref=e963]:
                              - generic [ref=e964]: Pieces By PO
                          - generic [ref=e965]:
                            - generic [ref=e966]:
                              - generic [ref=e967]:
                                - generic [ref=e976]:
                                  - combobox [ref=e977]:
                                    - generic [ref=e980]: Basket
                                  - generic:
                                    - generic: Package Type
                                - generic [ref=e985]:
                                  - paragraph [ref=e986]: Dimensions (L x W x H)
                                  - paragraph [ref=e987]:
                                    - textbox [ref=e988]:
                                      - /placeholder: L
                                      - text: "90"
                                    - text: x
                                    - textbox [ref=e989]:
                                      - /placeholder: W
                                      - text: "14"
                                    - text: x
                                    - textbox [ref=e990]:
                                      - /placeholder: H
                                      - text: "9"
                                    - text: in
                                - paragraph [ref=e994]:
                                  - generic [ref=e998]:
                                    - textbox [ref=e999]: 16.00 lbs
                                    - generic:
                                      - generic: Weight
                                - paragraph [ref=e1003]:
                                  - generic [ref=e1009]:
                                    - combobox [ref=e1010]
                                    - generic:
                                      - generic:
                                        - generic: Location
                              - generic [ref=e1011]:
                                - paragraph [ref=e1015]:
                                  - generic [ref=e1019]:
                                    - textbox [ref=e1020]:
                                      - /placeholder: Enter Tracking No.
                                    - generic:
                                      - generic: Tracking No.
                                - paragraph [ref=e1024]:
                                  - generic [ref=e1028]:
                                    - textbox [ref=e1029]:
                                      - /placeholder: Enter Pro No.
                                    - generic:
                                      - generic: Pro No.
                                - generic [ref=e1038]:
                                  - combobox [ref=e1039]:
                                    - generic [ref=e1042]: IFS Demo
                                  - generic:
                                    - generic: Received By
                                - generic [ref=e1049]:
                                  - generic: Received Date/Time
                                  - generic [ref=e1050]: 09/16/2026 at 03:44 PM
                            - paragraph [ref=e1056]:
                              - generic [ref=e1060]:
                                - textbox [ref=e1061]:
                                  - /placeholder: Enter Description
                                - generic [ref=e1062]: 0/5000
                                - generic:
                                  - generic: Description
                        - button [ref=e1065]:
                          - img [ref=e1067]
            - generic [ref=e1069]:
              - generic [ref=e1070]: 1-5 of 5 items
              - generic [ref=e1071]:
                - generic [ref=e1072]:
                  - button:
                    - note
                  - button:
                    - note
                - list [ref=e1074]:
                  - listitem [ref=e1075]:
                    - button [ref=e1076]: "1"
                - generic [ref=e1077]:
                  - button:
                    - note
                  - button:
                    - note
              - button [ref=e1079] [cursor=pointer]:
                - generic [ref=e1080]: 5 per page
        - text:    
    - button [ref=e1081] [cursor=pointer]:
      - img [ref=e1082]
      - text: AI
  - dialog [ref=e1087]:
    - generic [ref=e1090]:
      - generic [ref=e1091]:
        - button [active] [ref=e1092] [cursor=pointer]
        - heading "Select Package Location" [level=3] [ref=e1093]
      - generic [ref=e1097]:
        - heading "1. Select Warehouse, Area, and Row" [level=3] [ref=e1098]
        - generic [ref=e1102]:
          - generic [ref=e1110] [cursor=pointer]:
            - combobox "Warehouse Doral WH" [ref=e1111]:
              - generic [ref=e1115]: Doral WH
            - generic:
              - generic: Warehouse
          - generic [ref=e1124]:
            - combobox "Area All" [disabled] [ref=e1125]:
              - generic [ref=e1129]: All
            - generic:
              - generic: Area
          - generic [ref=e1138]:
            - combobox "Row All" [disabled] [ref=e1139]:
              - generic [ref=e1143]: All
            - generic:
              - generic: Row
        - heading "2. Select Position" [level=3] [ref=e1145]
        - grid "Data table" [ref=e1148]:
          - row "Type ID Name Status In Use Customer" [ref=e1155]:
            - columnheader "Type":
              - generic [ref=e1157] [cursor=pointer]: Type
            - columnheader "ID" [ref=e1158]:
              - generic [ref=e1161] [cursor=pointer]: ID
            - columnheader "Name" [ref=e1163]:
              - generic [ref=e1166] [cursor=pointer]: Name
            - columnheader "Status" [ref=e1168]:
              - generic [ref=e1171] [cursor=pointer]: Status
            - columnheader "In Use" [ref=e1173]:
              - generic [ref=e1176] [cursor=pointer]: In Use
            - columnheader "Customer" [ref=e1178]:
              - generic [ref=e1181] [cursor=pointer]: Customer
          - row "Type Filter ID Filter Name Filter Status Filter In Use Filter Customer Filter" [ref=e1183]:
            - generic [ref=e1185]:
              - generic:
                - generic:
                  - generic: Filter
            - textbox "Search" [ref=e1187]
            - textbox "Search" [ref=e1189]
            - generic [ref=e1193] [cursor=pointer]: Filter
            - generic [ref=e1197] [cursor=pointer]: Filter
            - textbox "Search" [ref=e1199]
          - generic [ref=e1200]:
            - row "+ Area A Cold Storage Active Yes 100 SM Brewing" [ref=e1207]:
              - gridcell "+ Area" [ref=e1208]:
                - generic [ref=e1209]:
                  - radio [ref=e1216] [cursor=pointer]
                  - button "+" [ref=e1218] [cursor=pointer]
                  - generic [ref=e1219]: Area
              - gridcell "A" [ref=e1220]:
                - generic [ref=e1221]: A
              - gridcell "Cold Storage" [ref=e1222]:
                - generic [ref=e1223]: Cold Storage
              - gridcell "Active" [ref=e1224]:
                - generic [ref=e1225]: Active
              - gridcell "Yes" [ref=e1226]:
                - generic [ref=e1227]: "Yes"
              - gridcell "100 SM Brewing" [ref=e1228]:
                - generic [ref=e1229]: 100 SM Brewing
            - row "+ Area B Active Yes" [ref=e1230]:
              - gridcell "+ Area" [ref=e1231]:
                - generic [ref=e1232]:
                  - radio [ref=e1239] [cursor=pointer]
                  - button "+" [ref=e1241] [cursor=pointer]
                  - generic [ref=e1242]: Area
              - gridcell "B" [ref=e1243]:
                - generic [ref=e1244]: B
              - gridcell [ref=e1245]
              - gridcell "Active" [ref=e1246]:
                - generic [ref=e1247]: Active
              - gridcell "Yes" [ref=e1248]:
                - generic [ref=e1249]: "Yes"
              - gridcell [ref=e1250]
            - row "+ Area C Receving Active Yes" [ref=e1251]:
              - gridcell "+ Area" [ref=e1252]:
                - generic [ref=e1253]:
                  - radio [ref=e1260] [cursor=pointer]
                  - button "+" [ref=e1262] [cursor=pointer]
                  - generic [ref=e1263]: Area
              - gridcell "C" [ref=e1264]:
                - generic [ref=e1265]: C
              - gridcell "Receving" [ref=e1266]:
                - generic [ref=e1267]: Receving
              - gridcell "Active" [ref=e1268]:
                - generic [ref=e1269]: Active
              - gridcell "Yes" [ref=e1270]:
                - generic [ref=e1271]: "Yes"
              - gridcell [ref=e1272]
            - row "Area D Hazmat Active No" [ref=e1273]:
              - gridcell "Area" [ref=e1274]:
                - generic [ref=e1275]:
                  - radio [ref=e1282] [cursor=pointer]
                  - generic [ref=e1283]: Area
              - gridcell "D" [ref=e1284]:
                - generic [ref=e1285]: D
              - gridcell "Hazmat" [ref=e1286]:
                - generic [ref=e1287]: Hazmat
              - gridcell "Active" [ref=e1288]:
                - generic [ref=e1289]: Active
              - gridcell "No" [ref=e1290]:
                - generic [ref=e1291]: "No"
              - gridcell [ref=e1292]
            - row "+ Area E Pallets Active Yes" [ref=e1293]:
              - gridcell "+ Area" [ref=e1294]:
                - generic [ref=e1295]:
                  - radio [ref=e1302] [cursor=pointer]
                  - button "+" [ref=e1304] [cursor=pointer]
                  - generic [ref=e1305]: Area
              - gridcell "E" [ref=e1306]:
                - generic [ref=e1307]: E
              - gridcell "Pallets" [ref=e1308]:
                - generic [ref=e1309]: Pallets
              - gridcell "Active" [ref=e1310]:
                - generic [ref=e1311]: Active
              - gridcell "Yes" [ref=e1312]:
                - generic [ref=e1313]: "Yes"
              - gridcell [ref=e1314]
            - row "Area G Active No" [ref=e1315]:
              - gridcell "Area" [ref=e1316]:
                - generic [ref=e1317]:
                  - radio [ref=e1324] [cursor=pointer]
                  - generic [ref=e1325]: Area
              - gridcell "G" [ref=e1326]:
                - generic [ref=e1327]: G
              - gridcell [ref=e1328]
              - gridcell "Active" [ref=e1329]:
                - generic [ref=e1330]: Active
              - gridcell "No" [ref=e1331]:
                - generic [ref=e1332]: "No"
              - gridcell [ref=e1333]
            - row "Area H Active No" [ref=e1334]:
              - gridcell "Area" [ref=e1335]:
                - generic [ref=e1336]:
                  - radio [ref=e1343] [cursor=pointer]
                  - generic [ref=e1344]: Area
              - gridcell "H" [ref=e1345]:
                - generic [ref=e1346]: H
              - gridcell [ref=e1347]
              - gridcell "Active" [ref=e1348]:
                - generic [ref=e1349]: Active
              - gridcell "No" [ref=e1350]:
                - generic [ref=e1351]: "No"
              - gridcell [ref=e1352]
            - row "Area I Active No" [ref=e1353]:
              - gridcell "Area" [ref=e1354]:
                - generic [ref=e1355]:
                  - radio [ref=e1362] [cursor=pointer]
                  - generic [ref=e1363]: Area
              - gridcell "I" [ref=e1364]:
                - generic [ref=e1365]: I
              - gridcell [ref=e1366]
              - gridcell "Active" [ref=e1367]:
                - generic [ref=e1368]: Active
              - gridcell "No" [ref=e1369]:
                - generic [ref=e1370]: "No"
              - gridcell [ref=e1371]
            - row "+ Area J Active No" [ref=e1372]:
              - gridcell "+ Area" [ref=e1373]:
                - generic [ref=e1374]:
                  - radio [ref=e1381] [cursor=pointer]
                  - button "+" [ref=e1383] [cursor=pointer]
                  - generic [ref=e1384]: Area
              - gridcell "J" [ref=e1385]:
                - generic [ref=e1386]: J
              - gridcell [ref=e1387]
              - gridcell "Active" [ref=e1388]:
                - generic [ref=e1389]: Active
              - gridcell "No" [ref=e1390]:
                - generic [ref=e1391]: "No"
              - gridcell [ref=e1392]
            - row "+ Row A Active No" [ref=e1393]:
              - gridcell "+ Row" [ref=e1394]:
                - generic [ref=e1395]:
                  - radio [ref=e1402] [cursor=pointer]
                  - button "+" [ref=e1404] [cursor=pointer]
                  - generic [ref=e1405]: Row
              - gridcell "A" [ref=e1406]:
                - generic [ref=e1407]: A
              - gridcell [ref=e1408]
              - gridcell "Active" [ref=e1409]:
                - generic [ref=e1410]: Active
              - gridcell "No" [ref=e1411]:
                - generic [ref=e1412]: "No"
              - gridcell [ref=e1413]
            - row "+ Row B Active Yes" [ref=e1414]:
              - gridcell "+ Row" [ref=e1415]:
                - generic [ref=e1416]:
                  - radio [ref=e1423] [cursor=pointer]
                  - button "+" [ref=e1425] [cursor=pointer]
                  - generic [ref=e1426]: Row
              - gridcell "B" [ref=e1427]:
                - generic [ref=e1428]: B
              - gridcell [ref=e1429]
              - gridcell "Active" [ref=e1430]:
                - generic [ref=e1431]: Active
              - gridcell "Yes" [ref=e1432]:
                - generic [ref=e1433]: "Yes"
              - gridcell [ref=e1434]
            - row "+ Row C Active Yes" [ref=e1435]:
              - gridcell "+ Row" [ref=e1436]:
                - generic [ref=e1437]:
                  - radio [ref=e1444] [cursor=pointer]
                  - button "+" [ref=e1446] [cursor=pointer]
                  - generic [ref=e1447]: Row
              - gridcell "C" [ref=e1448]:
                - generic [ref=e1449]: C
              - gridcell [ref=e1450]
              - gridcell "Active" [ref=e1451]:
                - generic [ref=e1452]: Active
              - gridcell "Yes" [ref=e1453]:
                - generic [ref=e1454]: "Yes"
              - gridcell [ref=e1455]
            - row "+ Row D Active No" [ref=e1456]:
              - gridcell "+ Row" [ref=e1457]:
                - generic [ref=e1458]:
                  - radio [ref=e1465] [cursor=pointer]
                  - button "+" [ref=e1467] [cursor=pointer]
                  - generic [ref=e1468]: Row
              - gridcell "D" [ref=e1469]:
                - generic [ref=e1470]: D
              - gridcell [ref=e1471]
              - gridcell "Active" [ref=e1472]:
                - generic [ref=e1473]: Active
              - gridcell "No" [ref=e1474]:
                - generic [ref=e1475]: "No"
              - gridcell [ref=e1476]
            - row "+ Row E Active No" [ref=e1477]:
              - gridcell "+ Row" [ref=e1478]:
                - generic [ref=e1479]:
                  - radio [ref=e1486] [cursor=pointer]
                  - button "+" [ref=e1488] [cursor=pointer]
                  - generic [ref=e1489]: Row
              - gridcell "E" [ref=e1490]:
                - generic [ref=e1491]: E
              - gridcell [ref=e1492]
              - gridcell "Active" [ref=e1493]:
                - generic [ref=e1494]: Active
              - gridcell "No" [ref=e1495]:
                - generic [ref=e1496]: "No"
              - gridcell [ref=e1497]
            - row "+ Row QCI Active Yes" [ref=e1498]:
              - gridcell "+ Row" [ref=e1499]:
                - generic [ref=e1500]:
                  - radio [ref=e1507] [cursor=pointer]
                  - button "+" [ref=e1509] [cursor=pointer]
                  - generic [ref=e1510]: Row
              - gridcell "QCI" [ref=e1511]:
                - generic [ref=e1512]: QCI
              - gridcell [ref=e1513]
              - gridcell "Active" [ref=e1514]:
                - generic [ref=e1515]: Active
              - gridcell "Yes" [ref=e1516]:
                - generic [ref=e1517]: "Yes"
              - gridcell [ref=e1518]
```

# Test source

```ts
  5   | const warehouseReceiptLocators = require('./warehouseReceiptLocators');
  6   | const WRCommonFields = require('./wrCommonFields');
  7   | 
  8   | class WRPage extends LocatorHelper {
  9   | 
  10  |     constructor(page) {
  11  |         super(page, warehouseReceiptLocators);
  12  |         this.wrCommonFields = new WRCommonFields(page);
  13  |     }
  14  | 
  15  |     async verifyWRForm() {
  16  |         await this.locator('createNewButton').click();
  17  |         await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
  18  |         const wrHeadingText = await this.locator('wrHeading').textContent();
  19  |         expect(wrHeadingText).toContain(wrData.wrGeneralFormURL.expectedHeading)
  20  |         console.log("WR Form is displaying on the screen");
  21  |     }
  22  | 
  23  |     async createWarehouseReceipts() {
  24  |         await this.locator('warehouseReceiptField').click();
  25  |         const warehouseOptions = this.locator('DropdownList');
  26  |         const warehouses = await utils.getDropdownValues(warehouseOptions, 'warehouse dropdown');
  27  |         await utils.selectRandomValue(warehouses, warehouseOptions, 'warehouse');
  28  |         await this.wrCommonFields.selectStatus();
  29  |         await this.wrCommonFields.selectShipper();
  30  |         await this.wrCommonFields.selectConsignee();
  31  |         await this.wrCommonFields.selectAgent();
  32  |         await this.wrCommonFields.selectSupplier();
  33  |         await this.page.mouse.wheel(0, 500);
  34  |         await this.locator('submitButton').first().click();
  35  |         await utils.waitForLoaderToDisappear(this.locator('loader'));
  36  |         expect(await this.locator('successMessage').textContent()).toContain(wrData.wrGeneralFormURL.expectedSuccessMessage);
  37  |         await this.locator('packageTab').click();
  38  |         await utils.waitForLoaderToDisappear(this.locator('loader'));
  39  |     }
  40  | 
  41  |     async createPackage() {
  42  |         await this.locator('packageTab').click();
  43  |         await utils.waitForLoaderToDisappear(this.locator('loadingImage'));
  44  |         await this.locator('inlineButton').first().click();
  45  |         const menuOptions = await this.locator('inlineOptions').allTextContents();
  46  |         console.log("Menu options available: ", menuOptions);
  47  |         const cardViewOption = menuOptions.find(option => option.trim().toLowerCase() === wrData.wrGeneralFormURL.switchToCardView.toLowerCase());
  48  |         if (cardViewOption) {
  49  |             await this.locator('inlineOptions').filter({ hasText: cardViewOption }).first().click();
  50  |         }
  51  |         else {
  52  |             console.log("Card view option not found in the menu options.");
  53  |             await this.page.mouse.click(100, 100);
  54  |         }
  55  |         await this.locator('createNewDropdownButton').click();
  56  |         const createNewOptions = await this.locator('createNewDropdownOption').allTextContents();
  57  |         await this.locator('createMultiple').click();
  58  |         const packageFormHeading = await this.locator('packageFormDialogBox').textContent();
  59  |         console.log("Package form heading: ", packageFormHeading);
  60  |         expect(packageFormHeading).toContain(wrData.wrGeneralFormURL.expectedPackageFormHeading);
  61  |         await this.locator('packageTypeField').click();
  62  |         const packageTypeOptions = this.locator('packageTypeDropdownList');
  63  |         const packageTypes = await utils.getDropdownValues(packageTypeOptions, 'package type dropdown');
  64  |         await utils.selectRandomValue(packageTypes, packageTypeOptions, 'package type');
  65  |         await this.locator('dimensionsField').waitFor({ state: 'visible' });
  66  |         await this.locator('dimensionsField').click();
  67  |         await this.locator('lengthField').fill(String(await utils.randomDimension()));
  68  |         await this.locator('widthField').fill(String(await utils.randomDimension()));
  69  |         await this.locator('heightField').fill(String(await utils.randomDimension()));
  70  |         await this.locator('weightField').fill(String(await utils.randomDimension()));
  71  |         await this.locator('noOfPiecesField').fill(String(wrData.wrGeneralFormURL.noOfPieces));
  72  |         await this.locator('createButton').click();
  73  |         await utils.waitForLoaderToDisappear(this.locator('loader'));
  74  |         const location = this.locator('locationField');
  75  |         await location.waitFor({ state: 'visible' });
  76  |         await location.hover();
  77  |         await this.locator('searchButton').click();
  78  |         await utils.waitForLoaderToDisappear(this.locator('loadingImage'));
  79  |         const grid = this.locator('kendoGrid');
  80  |         await grid.waitFor({ state: 'visible' });
  81  |         const rows = this.locator('row');
  82  |         let rowCount = await rows.count();
  83  |         while (rowCount === 0) {
  84  |             console.log("No rows found in the Kendo grid. Selecting warehouse.");
  85  |             await this.locator('warehouseField').click();
  86  |             const warehouseDropdownOptions = this.locator('warehouseDropdownList');
  87  |             const warehouseOptions = await utils.getDropdownValues(warehouseDropdownOptions, 'warehouse dropdown');
  88  |             await utils.selectRandomValue(warehouseOptions, warehouseDropdownOptions, 'warehouse');
  89  |             await utils.waitForLoaderToDisappear(this.locator('loadingImage'));
  90  | 
  91  |             try {
  92  |                 await rows.first().waitFor({ state: 'visible', timeout: 10000 });
  93  |             } catch (error) {
  94  |                 console.log("No rows appeared after warehouse selection.");
  95  |             }
  96  | 
  97  |             rowCount = await rows.count();
  98  |         }
  99  | 
  100 |         expect(rowCount).toBeGreaterThan(0);
  101 |         console.log("Rows found in the Kendo grid: ", rowCount);
  102 |         const rowRadioButtons = this.locator('rowRadioButton');
  103 |         const radioButtonCount = await rowRadioButtons.count();
  104 |         expect(radioButtonCount).toBeGreaterThan(0);
> 105 |         await rowRadioButtons.nth(Math.floor(Math.random() * radioButtonCount)).click();
      |                                                                                 ^ TimeoutError: locator.click: Timeout 60000ms exceeded.
  106 |         await this.page.pause();
  107 | 
  108 |     }
  109 | 
  110 | }
  111 | 
  112 | module.exports = WRPage;
```