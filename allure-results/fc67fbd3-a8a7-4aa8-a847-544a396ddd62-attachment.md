# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createWarehouseReceipts.spec.js >> Warehouse receipts >> Create warehouse receipt
- Location: tests\createWarehouseReceipts.spec.js:10:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('//div[@class=\'loader-new true\']').first() to be hidden
    63 × locator resolved to visible <div class="loader-new true"></div>

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
                  - menuitem "Filter" [disabled]: Filter
                  - textbox "Search..." [ref=e32]
              - listitem [ref=e33]:
                - list [ref=e34]:
                  - listitem [ref=e35]:
                    - generic [ref=e36] [cursor=pointer]: IFS Demo
                    - list:
                      - listitem:
                        - generic: My Profile
                      - listitem:
                        - link "Logout" [active]:
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
      - generic [ref=e76]:
        - generic [ref=e77]:
          - img [ref=e79]
          - generic [ref=e80]:
            - heading "WRAA001018" [level=2] [ref=e81]
            - paragraph [ref=e82]: "Status: On Hand"
        - generic [ref=e84]:
          - generic [ref=e86]:
            - generic [ref=e87]: "0"
            - generic [ref=e88]: Pre-Received
          - generic [ref=e90]:
            - generic [ref=e91]: "5"
            - generic [ref=e92]: On Hand
          - generic [ref=e94]:
            - generic [ref=e95]: "0"
            - generic [ref=e96]: In Process
          - generic [ref=e98]:
            - generic [ref=e99]: "0"
            - generic [ref=e100]: Loaded
          - generic [ref=e102]:
            - generic [ref=e103]: "0"
            - generic [ref=e104]: Shipped
          - generic [ref=e106]:
            - generic [ref=e107]: "0"
            - generic [ref=e108]: Delivered
      - generic [ref=e109]:
        - generic [ref=e113]:
          - navigation [ref=e116]:
            - generic [ref=e119]:
              - generic [ref=e120] [cursor=pointer]: General
              - generic [ref=e121]: Packages
              - generic [ref=e122] [cursor=pointer]: Items
              - generic [ref=e123] [cursor=pointer]: Charges & Expenses
              - generic [ref=e124] [cursor=pointer]: Notes
              - generic [ref=e125] [cursor=pointer]: Attachments
              - generic [ref=e126] [cursor=pointer]: Tasks
              - generic [ref=e127] [cursor=pointer]: Activities
              - generic [ref=e128]:
                - generic [ref=e136]:
                  - 'textbox "Add Package from Tracking #" [disabled] [ref=e137]':
                    - /placeholder: "Scan or type tracking #"
                  - generic:
                    - generic:
                      - generic: "Add Package from Tracking #"
                - generic [ref=e138]:
                  - button "Repack" [ref=e139] [cursor=pointer]: Repack
                  - button "Create New" [disabled] [ref=e140]: Create New
                - button "Menu" [ref=e143] [cursor=pointer]: Menu
          - generic [ref=e151]:
            - generic [ref=e152]:
              - grid "Data table" [ref=e153]:
                - row "Select All" [ref=e155]:
                  - columnheader "Select All" [ref=e156]:
                    - generic [ref=e159]:
                      - checkbox "Select All" [ref=e160]: 
                      - generic [ref=e162] [cursor=pointer]: Select All
                - generic [ref=e163]:
                  - row "PIDAA001161-5 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bale Dimensions (L x W x H) 64 x 20 x 65 in 73.00 lbs Weight B Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/18/2026 at 10:30 AM 0/5000 Description" [ref=e165]:
                    - gridcell "PIDAA001161-5 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bale Dimensions (L x W x H) 64 x 20 x 65 in 73.00 lbs Weight B Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/18/2026 at 10:30 AM 0/5000 Description" [ref=e166]:
                      - generic [ref=e167] [cursor=pointer]:
                        - heading "PIDAA001161-5" [level=4] [ref=e169]
                        - generic [ref=e170]:
                          - checkbox [ref=e173]: 
                          - generic [ref=e179]:
                            - button [ref=e180]
                            - button [ref=e181]
                          - generic [ref=e187]:
                            - generic [ref=e188]:
                              - generic [ref=e197]:
                                - combobox "Status On Hand" [ref=e198]:
                                  - generic [ref=e202]: On Hand
                                - generic:
                                  - generic: Status
                              - generic [ref=e212]:
                                - combobox "Part Number" [ref=e213]
                                - generic:
                                  - generic: Part Number
                              - paragraph [ref=e221]:
                                - generic [ref=e225]:
                                  - textbox "Model" [ref=e226]:
                                    - /placeholder: Enter Model
                                  - generic:
                                    - generic: Model
                              - paragraph [ref=e230]:
                                - generic [ref=e234]:
                                  - textbox "Pieces" [ref=e235]:
                                    - /placeholder: Enter Pieces
                                    - text: "1"
                                  - generic:
                                    - generic: Pieces
                              - paragraph [ref=e241]:
                                - generic [ref=e242]: Pieces By PO
                            - generic [ref=e243]:
                              - generic [ref=e244]:
                                - generic [ref=e245]:
                                  - generic [ref=e254]:
                                    - combobox "Package Type Bale" [ref=e255]:
                                      - generic [ref=e258]: Bale
                                    - generic:
                                      - generic: Package Type
                                  - generic [ref=e263]:
                                    - paragraph [ref=e264]: Dimensions (L x W x H)
                                    - paragraph [ref=e265]:
                                      - textbox "L" [ref=e266]: "64"
                                      - text: x
                                      - textbox "W" [ref=e267]: "20"
                                      - text: x
                                      - textbox "H" [ref=e268]: "65"
                                      - text: in
                                  - paragraph [ref=e272]:
                                    - generic [ref=e276]:
                                      - textbox "Weight" [ref=e277]: 73.00 lbs
                                      - generic:
                                        - generic: Weight
                                  - paragraph [ref=e281]:
                                    - generic [ref=e287]:
                                      - combobox "Location" [ref=e288]: B
                                      - generic:
                                        - generic:
                                          - generic: Location
                                - generic [ref=e289]:
                                  - paragraph [ref=e293]:
                                    - generic [ref=e297]:
                                      - textbox "Tracking No." [ref=e298]:
                                        - /placeholder: Enter Tracking No.
                                      - generic:
                                        - generic: Tracking No.
                                  - paragraph [ref=e302]:
                                    - generic [ref=e306]:
                                      - textbox "Pro No." [ref=e307]:
                                        - /placeholder: Enter Pro No.
                                      - generic:
                                        - generic: Pro No.
                                  - generic [ref=e316]:
                                    - combobox "Received By IFS Demo" [ref=e317]:
                                      - generic [ref=e320]: IFS Demo
                                    - generic:
                                      - generic: Received By
                                  - generic [ref=e327]:
                                    - generic: Received Date/Time
                                    - generic [ref=e328]: 09/18/2026 at 10:30 AM
                              - paragraph [ref=e334]:
                                - generic [ref=e338]:
                                  - textbox "Description" [ref=e339]:
                                    - /placeholder: Enter Description
                                  - generic [ref=e340]: 0/5000
                                  - generic:
                                    - generic: Description
                          - button [ref=e343]:
                            - img [ref=e345]
                  - row "PIDAA001161-4 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bale Dimensions (L x W x H) 64 x 20 x 65 in 73.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/18/2026 at 10:30 AM 0/5000 Description" [ref=e346]:
                    - gridcell "PIDAA001161-4 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bale Dimensions (L x W x H) 64 x 20 x 65 in 73.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/18/2026 at 10:30 AM 0/5000 Description" [ref=e347]:
                      - generic [ref=e348] [cursor=pointer]:
                        - heading "PIDAA001161-4" [level=4] [ref=e350]
                        - generic [ref=e351]:
                          - checkbox [ref=e354]: 
                          - generic [ref=e360]:
                            - button [ref=e361]
                            - button [ref=e362]
                          - generic [ref=e368]:
                            - generic [ref=e369]:
                              - generic [ref=e378]:
                                - combobox "Status On Hand" [ref=e379]:
                                  - generic [ref=e383]: On Hand
                                - generic:
                                  - generic: Status
                              - generic [ref=e393]:
                                - combobox "Part Number" [ref=e394]
                                - generic:
                                  - generic: Part Number
                              - paragraph [ref=e402]:
                                - generic [ref=e406]:
                                  - textbox "Model" [ref=e407]:
                                    - /placeholder: Enter Model
                                  - generic:
                                    - generic: Model
                              - paragraph [ref=e411]:
                                - generic [ref=e415]:
                                  - textbox "Pieces" [ref=e416]:
                                    - /placeholder: Enter Pieces
                                    - text: "1"
                                  - generic:
                                    - generic: Pieces
                              - paragraph [ref=e422]:
                                - generic [ref=e423]: Pieces By PO
                            - generic [ref=e424]:
                              - generic [ref=e425]:
                                - generic [ref=e426]:
                                  - generic [ref=e435]:
                                    - combobox "Package Type Bale" [ref=e436]:
                                      - generic [ref=e439]: Bale
                                    - generic:
                                      - generic: Package Type
                                  - generic [ref=e444]:
                                    - paragraph [ref=e445]: Dimensions (L x W x H)
                                    - paragraph [ref=e446]:
                                      - textbox "L" [ref=e447]: "64"
                                      - text: x
                                      - textbox "W" [ref=e448]: "20"
                                      - text: x
                                      - textbox "H" [ref=e449]: "65"
                                      - text: in
                                  - paragraph [ref=e453]:
                                    - generic [ref=e457]:
                                      - textbox "Weight" [ref=e458]: 73.00 lbs
                                      - generic:
                                        - generic: Weight
                                  - paragraph [ref=e462]:
                                    - generic [ref=e468]:
                                      - combobox "Location" [ref=e469]
                                      - generic:
                                        - generic:
                                          - generic: Location
                                - generic [ref=e470]:
                                  - paragraph [ref=e474]:
                                    - generic [ref=e478]:
                                      - textbox "Tracking No." [ref=e479]:
                                        - /placeholder: Enter Tracking No.
                                      - generic:
                                        - generic: Tracking No.
                                  - paragraph [ref=e483]:
                                    - generic [ref=e487]:
                                      - textbox "Pro No." [ref=e488]:
                                        - /placeholder: Enter Pro No.
                                      - generic:
                                        - generic: Pro No.
                                  - generic [ref=e497]:
                                    - combobox "Received By IFS Demo" [ref=e498]:
                                      - generic [ref=e501]: IFS Demo
                                    - generic:
                                      - generic: Received By
                                  - generic [ref=e508]:
                                    - generic: Received Date/Time
                                    - generic [ref=e509]: 09/18/2026 at 10:30 AM
                              - paragraph [ref=e515]:
                                - generic [ref=e519]:
                                  - textbox "Description" [ref=e520]:
                                    - /placeholder: Enter Description
                                  - generic [ref=e521]: 0/5000
                                  - generic:
                                    - generic: Description
                          - button [ref=e524]:
                            - img [ref=e526]
                  - row "PIDAA001161-3 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bale Dimensions (L x W x H) 64 x 20 x 65 in 73.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/18/2026 at 10:30 AM 0/5000 Description" [ref=e527]:
                    - gridcell "PIDAA001161-3 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bale Dimensions (L x W x H) 64 x 20 x 65 in 73.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/18/2026 at 10:30 AM 0/5000 Description" [ref=e528]:
                      - generic [ref=e529] [cursor=pointer]:
                        - heading "PIDAA001161-3" [level=4] [ref=e531]
                        - generic [ref=e532]:
                          - checkbox [ref=e535]: 
                          - generic [ref=e541]:
                            - button [ref=e542]
                            - button [ref=e543]
                          - generic [ref=e549]:
                            - generic [ref=e550]:
                              - generic [ref=e559]:
                                - combobox "Status On Hand" [ref=e560]:
                                  - generic [ref=e564]: On Hand
                                - generic:
                                  - generic: Status
                              - generic [ref=e574]:
                                - combobox "Part Number" [ref=e575]
                                - generic:
                                  - generic: Part Number
                              - paragraph [ref=e583]:
                                - generic [ref=e587]:
                                  - textbox "Model" [ref=e588]:
                                    - /placeholder: Enter Model
                                  - generic:
                                    - generic: Model
                              - paragraph [ref=e592]:
                                - generic [ref=e596]:
                                  - textbox "Pieces" [ref=e597]:
                                    - /placeholder: Enter Pieces
                                    - text: "1"
                                  - generic:
                                    - generic: Pieces
                              - paragraph [ref=e603]:
                                - generic [ref=e604]: Pieces By PO
                            - generic [ref=e605]:
                              - generic [ref=e606]:
                                - generic [ref=e607]:
                                  - generic [ref=e616]:
                                    - combobox "Package Type Bale" [ref=e617]:
                                      - generic [ref=e620]: Bale
                                    - generic:
                                      - generic: Package Type
                                  - generic [ref=e625]:
                                    - paragraph [ref=e626]: Dimensions (L x W x H)
                                    - paragraph [ref=e627]:
                                      - textbox "L" [ref=e628]: "64"
                                      - text: x
                                      - textbox "W" [ref=e629]: "20"
                                      - text: x
                                      - textbox "H" [ref=e630]: "65"
                                      - text: in
                                  - paragraph [ref=e634]:
                                    - generic [ref=e638]:
                                      - textbox "Weight" [ref=e639]: 73.00 lbs
                                      - generic:
                                        - generic: Weight
                                  - paragraph [ref=e643]:
                                    - generic [ref=e649]:
                                      - combobox "Location" [ref=e650]
                                      - generic:
                                        - generic:
                                          - generic: Location
                                - generic [ref=e651]:
                                  - paragraph [ref=e655]:
                                    - generic [ref=e659]:
                                      - textbox "Tracking No." [ref=e660]:
                                        - /placeholder: Enter Tracking No.
                                      - generic:
                                        - generic: Tracking No.
                                  - paragraph [ref=e664]:
                                    - generic [ref=e668]:
                                      - textbox "Pro No." [ref=e669]:
                                        - /placeholder: Enter Pro No.
                                      - generic:
                                        - generic: Pro No.
                                  - generic [ref=e678]:
                                    - combobox "Received By IFS Demo" [ref=e679]:
                                      - generic [ref=e682]: IFS Demo
                                    - generic:
                                      - generic: Received By
                                  - generic [ref=e689]:
                                    - generic: Received Date/Time
                                    - generic [ref=e690]: 09/18/2026 at 10:30 AM
                              - paragraph [ref=e696]:
                                - generic [ref=e700]:
                                  - textbox "Description" [ref=e701]:
                                    - /placeholder: Enter Description
                                  - generic [ref=e702]: 0/5000
                                  - generic:
                                    - generic: Description
                          - button [ref=e705]:
                            - img [ref=e707]
                  - row "PIDAA001161-2 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bale Dimensions (L x W x H) 64 x 20 x 65 in 73.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/18/2026 at 10:30 AM 0/5000 Description" [ref=e708]:
                    - gridcell "PIDAA001161-2 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bale Dimensions (L x W x H) 64 x 20 x 65 in 73.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/18/2026 at 10:30 AM 0/5000 Description" [ref=e709]:
                      - generic [ref=e710] [cursor=pointer]:
                        - heading "PIDAA001161-2" [level=4] [ref=e712]
                        - generic [ref=e713]:
                          - checkbox [ref=e716]: 
                          - generic [ref=e722]:
                            - button [ref=e723]
                            - button [ref=e724]
                          - generic [ref=e730]:
                            - generic [ref=e731]:
                              - generic [ref=e740]:
                                - combobox "Status On Hand" [ref=e741]:
                                  - generic [ref=e745]: On Hand
                                - generic:
                                  - generic: Status
                              - generic [ref=e755]:
                                - combobox "Part Number" [ref=e756]
                                - generic:
                                  - generic: Part Number
                              - paragraph [ref=e764]:
                                - generic [ref=e768]:
                                  - textbox "Model" [ref=e769]:
                                    - /placeholder: Enter Model
                                  - generic:
                                    - generic: Model
                              - paragraph [ref=e773]:
                                - generic [ref=e777]:
                                  - textbox "Pieces" [ref=e778]:
                                    - /placeholder: Enter Pieces
                                    - text: "1"
                                  - generic:
                                    - generic: Pieces
                              - paragraph [ref=e784]:
                                - generic [ref=e785]: Pieces By PO
                            - generic [ref=e786]:
                              - generic [ref=e787]:
                                - generic [ref=e788]:
                                  - generic [ref=e797]:
                                    - combobox "Package Type Bale" [ref=e798]:
                                      - generic [ref=e801]: Bale
                                    - generic:
                                      - generic: Package Type
                                  - generic [ref=e806]:
                                    - paragraph [ref=e807]: Dimensions (L x W x H)
                                    - paragraph [ref=e808]:
                                      - textbox "L" [ref=e809]: "64"
                                      - text: x
                                      - textbox "W" [ref=e810]: "20"
                                      - text: x
                                      - textbox "H" [ref=e811]: "65"
                                      - text: in
                                  - paragraph [ref=e815]:
                                    - generic [ref=e819]:
                                      - textbox "Weight" [ref=e820]: 73.00 lbs
                                      - generic:
                                        - generic: Weight
                                  - paragraph [ref=e824]:
                                    - generic [ref=e830]:
                                      - combobox "Location" [ref=e831]
                                      - generic:
                                        - generic:
                                          - generic: Location
                                - generic [ref=e832]:
                                  - paragraph [ref=e836]:
                                    - generic [ref=e840]:
                                      - textbox "Tracking No." [ref=e841]:
                                        - /placeholder: Enter Tracking No.
                                      - generic:
                                        - generic: Tracking No.
                                  - paragraph [ref=e845]:
                                    - generic [ref=e849]:
                                      - textbox "Pro No." [ref=e850]:
                                        - /placeholder: Enter Pro No.
                                      - generic:
                                        - generic: Pro No.
                                  - generic [ref=e859]:
                                    - combobox "Received By IFS Demo" [ref=e860]:
                                      - generic [ref=e863]: IFS Demo
                                    - generic:
                                      - generic: Received By
                                  - generic [ref=e870]:
                                    - generic: Received Date/Time
                                    - generic [ref=e871]: 09/18/2026 at 10:30 AM
                              - paragraph [ref=e877]:
                                - generic [ref=e881]:
                                  - textbox "Description" [ref=e882]:
                                    - /placeholder: Enter Description
                                  - generic [ref=e883]: 0/5000
                                  - generic:
                                    - generic: Description
                          - button [ref=e886]:
                            - img [ref=e888]
                  - row "PIDAA001161-1 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bale Dimensions (L x W x H) 64 x 20 x 65 in 73.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/18/2026 at 10:30 AM 0/5000 Description" [ref=e889]:
                    - gridcell "PIDAA001161-1 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bale Dimensions (L x W x H) 64 x 20 x 65 in 73.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/18/2026 at 10:30 AM 0/5000 Description" [ref=e890]:
                      - generic [ref=e891] [cursor=pointer]:
                        - heading "PIDAA001161-1" [level=4] [ref=e893]
                        - generic [ref=e894]:
                          - checkbox [ref=e897]: 
                          - generic [ref=e903]:
                            - button [ref=e904]
                            - button [ref=e905]
                          - generic [ref=e911]:
                            - generic [ref=e912]:
                              - generic [ref=e921]:
                                - combobox "Status On Hand" [ref=e922]:
                                  - generic [ref=e926]: On Hand
                                - generic:
                                  - generic: Status
                              - generic [ref=e936]:
                                - combobox "Part Number" [ref=e937]
                                - generic:
                                  - generic: Part Number
                              - paragraph [ref=e945]:
                                - generic [ref=e949]:
                                  - textbox "Model" [ref=e950]:
                                    - /placeholder: Enter Model
                                  - generic:
                                    - generic: Model
                              - paragraph [ref=e954]:
                                - generic [ref=e958]:
                                  - textbox "Pieces" [ref=e959]:
                                    - /placeholder: Enter Pieces
                                    - text: "1"
                                  - generic:
                                    - generic: Pieces
                              - paragraph [ref=e965]:
                                - generic [ref=e966]: Pieces By PO
                            - generic [ref=e967]:
                              - generic [ref=e968]:
                                - generic [ref=e969]:
                                  - generic [ref=e978]:
                                    - combobox "Package Type Bale" [ref=e979]:
                                      - generic [ref=e982]: Bale
                                    - generic:
                                      - generic: Package Type
                                  - generic [ref=e987]:
                                    - paragraph [ref=e988]: Dimensions (L x W x H)
                                    - paragraph [ref=e989]:
                                      - textbox "L" [ref=e990]: "64"
                                      - text: x
                                      - textbox "W" [ref=e991]: "20"
                                      - text: x
                                      - textbox "H" [ref=e992]: "65"
                                      - text: in
                                  - paragraph [ref=e996]:
                                    - generic [ref=e1000]:
                                      - textbox "Weight" [ref=e1001]: 73.00 lbs
                                      - generic:
                                        - generic: Weight
                                  - paragraph [ref=e1005]:
                                    - generic [ref=e1011]:
                                      - combobox "Location" [ref=e1012]
                                      - generic:
                                        - generic:
                                          - generic: Location
                                - generic [ref=e1013]:
                                  - paragraph [ref=e1017]:
                                    - generic [ref=e1021]:
                                      - textbox "Tracking No." [ref=e1022]:
                                        - /placeholder: Enter Tracking No.
                                      - generic:
                                        - generic: Tracking No.
                                  - paragraph [ref=e1026]:
                                    - generic [ref=e1030]:
                                      - textbox "Pro No." [ref=e1031]:
                                        - /placeholder: Enter Pro No.
                                      - generic:
                                        - generic: Pro No.
                                  - generic [ref=e1040]:
                                    - combobox "Received By IFS Demo" [ref=e1041]:
                                      - generic [ref=e1044]: IFS Demo
                                    - generic:
                                      - generic: Received By
                                  - generic [ref=e1051]:
                                    - generic: Received Date/Time
                                    - generic [ref=e1052]: 09/18/2026 at 10:30 AM
                              - paragraph [ref=e1058]:
                                - generic [ref=e1062]:
                                  - textbox "Description" [ref=e1063]:
                                    - /placeholder: Enter Description
                                  - generic [ref=e1064]: 0/5000
                                  - generic:
                                    - generic: Description
                          - button [ref=e1067]:
                            - img [ref=e1069]
              - generic [ref=e1071]:
                - generic [ref=e1072]: 1-5 of 5 items
                - generic [ref=e1073]:
                  - generic [ref=e1074]:
                    - button "Go to the first page":
                      - note "Go to the first page"
                    - button "Go to the previous page":
                      - note "Go to the previous page"
                  - list [ref=e1076]:
                    - listitem [ref=e1077]:
                      - button "Page 1" [ref=e1078]: "1"
                  - generic [ref=e1079]:
                    - button "Go to the next page":
                      - note "Go to the next page"
                    - button "Go to the last page":
                      - note "Go to the last page"
                - button "5 per page" [ref=e1081] [cursor=pointer]:
                  - generic [ref=e1082]: 5 per page
            - generic [ref=e1084]:
              - generic [ref=e1085]:
                - img [ref=e1087]
                - paragraph [ref=e1089]: Are you sure you want to save changes?
              - generic [ref=e1091]:
                - button "Save" [ref=e1092] [cursor=pointer]: Save
                - button "Cancel" [ref=e1093] [cursor=pointer]: Cancel
        - text:    
    - button "AI Assistant AI" [ref=e1094] [cursor=pointer]:
      - img "AI Assistant" [ref=e1095]
      - text: AI
  - generic [ref=e1103]:
    - paragraph [ref=e1107]: Do you want to continue navigating away without saving changes?
    - generic [ref=e1110]:
      - button "Confirm" [ref=e1111] [cursor=pointer]: Confirm
      - button "Cancel" [ref=e1112] [cursor=pointer]: Cancel
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
> 28 |         await locator.first().waitFor({
     |                               ^ TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
  29 |             state: 'hidden',
  30 |             timeout: Math.min(timeout, 30000)
  31 |         });
  32 |     }
  33 | 
  34 | 
  35 |     static async getDropdownValues(locator, dropdownName = 'dropdown') {
  36 |         if (!locator) {
  37 |             throw new Error(`${dropdownName} locator is null or undefined.`);
  38 |         }
  39 | 
  40 |         try {
  41 |             await locator.first().waitFor({ state: 'visible', timeout: 10000 });
  42 |         } catch (error) {
  43 |             if (error.name === 'TimeoutError') {
  44 |                 console.log(`No options appeared in the ${dropdownName}; continuing.`);
  45 |                 return [];
  46 |             }
  47 |             throw error;
  48 |         }
  49 |         const values = await locator.allTextContents();
  50 | 
  51 |         const dropdownValues = values
  52 |             .map(value => value.trim())
  53 |             .filter(value => value !== '');
  54 | 
  55 |         return dropdownValues;
  56 |     }
  57 |     static async randomFunction(value) {
  58 |         const randomvalue = Math.floor(Math.random() * value.length);
  59 |         return value[randomvalue];
  60 |     }
  61 |     static async selectRandomValue(values, options, valueName = 'dropdown value') {
  62 |         if (!Array.isArray(values) || values.length === 0) {
  63 |             console.log(`No ${valueName} is available; continuing.`);
  64 |             return null;
  65 |         }
  66 |         if (!options) {
  67 |             throw new Error(`Cannot select a random ${valueName}: dropdown locator is null or undefined.`);
  68 |         }
  69 | 
  70 |         const randomIndex = Math.floor(Math.random() * values.length);
  71 |         const randomValue = values[randomIndex];
  72 | 
  73 |         console.log('Randomly selected value:', randomValue);
  74 | 
  75 |         const randomOption = options
  76 |             .filter({ hasText: randomValue })
  77 |             .first();
  78 | 
  79 |         await randomOption.waitFor({ state: 'visible' });
  80 |         await randomOption.scrollIntoViewIfNeeded();
  81 |         await randomOption.click();
  82 | 
  83 |         console.log('Selected value:', randomValue);
  84 | 
  85 |         return randomValue;
  86 |     }
  87 | 
  88 |     static async randomDimension(min = 1, max = 100) {
  89 |         return Math.floor(Math.random() * (max - min + 1)) + min;
  90 |     }
  91 | 
  92 | 
  93 | 
  94 | }
  95 | 
  96 | module.exports = CommonUtils;
  97 | 
  98 | 
  99 | 
```