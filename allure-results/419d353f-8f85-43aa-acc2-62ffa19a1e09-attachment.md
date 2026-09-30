# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createWarehouseReceipts.spec.js >> Warehouse receipts >> Create warehouse receipt
- Location: tests\createWarehouseReceipts.spec.js:10:5

# Error details

```
TimeoutError: page.waitForURL: Timeout 60000ms exceeded.
=========================== logs ===========================
waiting for navigation to "https://app.warehouseorchestrator.com/auth/login" until "load"
============================================================
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
            - heading "WRAA001026" [level=2] [ref=e81]
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
                  - row "PIDAA001169-5 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bale Dimensions (L x W x H) 71 x 39 x 100 in 70.00 lbs Weight A Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/21/2026 at 12:44 PM 0/5000 Description" [ref=e165]:
                    - gridcell "PIDAA001169-5 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bale Dimensions (L x W x H) 71 x 39 x 100 in 70.00 lbs Weight A Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/21/2026 at 12:44 PM 0/5000 Description" [ref=e166]:
                      - generic [ref=e167] [cursor=pointer]:
                        - heading "PIDAA001169-5" [level=4] [ref=e169]
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
                                      - textbox "L" [ref=e266]: "71"
                                      - text: x
                                      - textbox "W" [ref=e267]: "39"
                                      - text: x
                                      - textbox "H" [ref=e268]: "100"
                                      - text: in
                                  - paragraph [ref=e272]:
                                    - generic [ref=e276]:
                                      - textbox "Weight" [ref=e277]: 70.00 lbs
                                      - generic:
                                        - generic: Weight
                                  - paragraph [ref=e281]:
                                    - generic [ref=e287]:
                                      - combobox "Location" [ref=e288]: A
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
                                    - generic [ref=e328]: 09/21/2026 at 12:44 PM
                              - paragraph [ref=e334]:
                                - generic [ref=e338]:
                                  - textbox "Description" [ref=e339]:
                                    - /placeholder: Enter Description
                                  - generic [ref=e340]: 0/5000
                                  - generic:
                                    - generic: Description
                          - button [ref=e343]:
                            - img [ref=e345]
                  - row "PIDAA001169-4 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bale Dimensions (L x W x H) 71 x 39 x 100 in 70.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/21/2026 at 12:44 PM 0/5000 Description" [ref=e346]:
                    - gridcell "PIDAA001169-4 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bale Dimensions (L x W x H) 71 x 39 x 100 in 70.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/21/2026 at 12:44 PM 0/5000 Description" [ref=e347]:
                      - generic [ref=e348] [cursor=pointer]:
                        - heading "PIDAA001169-4" [level=4] [ref=e350]
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
                                      - textbox "L" [ref=e447]: "71"
                                      - text: x
                                      - textbox "W" [ref=e448]: "39"
                                      - text: x
                                      - textbox "H" [ref=e449]: "100"
                                      - text: in
                                  - paragraph [ref=e453]:
                                    - generic [ref=e457]:
                                      - textbox "Weight" [ref=e458]: 70.00 lbs
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
                                    - generic [ref=e509]: 09/21/2026 at 12:44 PM
                              - paragraph [ref=e515]:
                                - generic [ref=e519]:
                                  - textbox "Description" [ref=e520]:
                                    - /placeholder: Enter Description
                                  - generic [ref=e521]: 0/5000
                                  - generic:
                                    - generic: Description
                          - button [ref=e524]:
                            - img [ref=e526]
                  - row "PIDAA001169-3 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bale Dimensions (L x W x H) 71 x 39 x 100 in 70.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/21/2026 at 12:44 PM 0/5000 Description" [ref=e527]:
                    - gridcell "PIDAA001169-3 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bale Dimensions (L x W x H) 71 x 39 x 100 in 70.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/21/2026 at 12:44 PM 0/5000 Description" [ref=e528]:
                      - generic [ref=e529] [cursor=pointer]:
                        - heading "PIDAA001169-3" [level=4] [ref=e531]
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
                                      - textbox "L" [ref=e628]: "71"
                                      - text: x
                                      - textbox "W" [ref=e629]: "39"
                                      - text: x
                                      - textbox "H" [ref=e630]: "100"
                                      - text: in
                                  - paragraph [ref=e634]:
                                    - generic [ref=e638]:
                                      - textbox "Weight" [ref=e639]: 70.00 lbs
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
                                    - generic [ref=e690]: 09/21/2026 at 12:44 PM
                              - paragraph [ref=e696]:
                                - generic [ref=e700]:
                                  - textbox "Description" [ref=e701]:
                                    - /placeholder: Enter Description
                                  - generic [ref=e702]: 0/5000
                                  - generic:
                                    - generic: Description
                          - button [ref=e705]:
                            - img [ref=e707]
                  - row "PIDAA001169-2 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bale Dimensions (L x W x H) 71 x 39 x 100 in 70.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/21/2026 at 12:44 PM 0/5000 Description" [ref=e708]:
                    - gridcell "PIDAA001169-2 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bale Dimensions (L x W x H) 71 x 39 x 100 in 70.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/21/2026 at 12:44 PM 0/5000 Description" [ref=e709]:
                      - generic [ref=e710] [cursor=pointer]:
                        - heading "PIDAA001169-2" [level=4] [ref=e712]
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
                                      - textbox "L" [ref=e809]: "71"
                                      - text: x
                                      - textbox "W" [ref=e810]: "39"
                                      - text: x
                                      - textbox "H" [ref=e811]: "100"
                                      - text: in
                                  - paragraph [ref=e815]:
                                    - generic [ref=e819]:
                                      - textbox "Weight" [ref=e820]: 70.00 lbs
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
                                    - generic [ref=e871]: 09/21/2026 at 12:44 PM
                              - paragraph [ref=e877]:
                                - generic [ref=e881]:
                                  - textbox "Description" [ref=e882]:
                                    - /placeholder: Enter Description
                                  - generic [ref=e883]: 0/5000
                                  - generic:
                                    - generic: Description
                          - button [ref=e886]:
                            - img [ref=e888]
                  - row "PIDAA001169-1 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bale Dimensions (L x W x H) 71 x 39 x 100 in 70.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/21/2026 at 12:44 PM 0/5000 Description" [ref=e889]:
                    - gridcell "PIDAA001169-1 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Bale Dimensions (L x W x H) 71 x 39 x 100 in 70.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/21/2026 at 12:44 PM 0/5000 Description" [ref=e890]:
                      - generic [ref=e891] [cursor=pointer]:
                        - heading "PIDAA001169-1" [level=4] [ref=e893]
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
                                      - textbox "L" [ref=e990]: "71"
                                      - text: x
                                      - textbox "W" [ref=e991]: "39"
                                      - text: x
                                      - textbox "H" [ref=e992]: "100"
                                      - text: in
                                  - paragraph [ref=e996]:
                                    - generic [ref=e1000]:
                                      - textbox "Weight" [ref=e1001]: 70.00 lbs
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
                                    - generic [ref=e1052]: 09/21/2026 at 12:44 PM
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
  16  |     async verifyWRForm() {
  17  |         await this.locator('createNewButton').click();
  18  |         await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
  19  |         const wrHeadingText = await this.locator('wrHeading').textContent();
  20  |         expect(wrHeadingText).toContain(wrData.wrGeneralFormURL.expectedHeading)
  21  |         console.log("WR Form is displaying on the screen");
  22  |     }
  23  | 
  24  |     async createWarehouseReceipts() {
  25  |         await this.locator('warehouseReceiptField').click();
  26  |         const warehouseOptions = this.locator('DropdownList');
  27  |         const warehouses = await utils.getDropdownValues(warehouseOptions, 'warehouse dropdown');
  28  |         await utils.selectRandomValue(warehouses, warehouseOptions, 'warehouse');
  29  |         await this.wrCommonFields.selectStatus();
  30  |         await this.wrCommonFields.selectShipper();
  31  |         await this.wrCommonFields.selectConsignee();
  32  |         await this.wrCommonFields.selectAgent();
  33  |         await this.wrCommonFields.selectSupplier();
  34  |         await this.page.mouse.wheel(0, 500);
  35  |         await this.locator('submitButton').first().click();
  36  |         await utils.waitForLoaderToDisappear(this.locator('loader'));
  37  |         expect(await this.locator('successMessage').textContent()).toContain(wrData.wrGeneralFormURL.expectedSuccessMessage);
  38  |         await this.locator('packageTab').click();
  39  |         await utils.waitForLoaderToDisappear(this.locator('loader'));
  40  |     }
  41  | 
  42  |     async createPackage() {
  43  |         await this.locator('packageTab').click();
  44  |         await utils.waitForLoaderToDisappear(this.locator('loadingImage'));
  45  |         await this.locator('inlineButton').first().click();
  46  |         const menuOptions = await this.locator('inlineOptions').allTextContents();
  47  |         console.log("Menu options available: ", menuOptions);
  48  |         const cardViewOption = menuOptions.find(option => option.trim().toLowerCase() === wrData.wrGeneralFormURL.switchToCardView.toLowerCase());
  49  |         if (cardViewOption) {
  50  |             await this.locator('inlineOptions').filter({ hasText: cardViewOption }).first().click();
  51  |         }
  52  |         else {
  53  |             console.log("Card view option not found in the menu options.");
  54  |             await this.page.mouse.click(100, 100);
  55  |         }
  56  |         await this.locator('createNewDropdownButton').click();
  57  |         const createNewOptions = await this.locator('createNewDropdownOption').allTextContents();
  58  |         await this.locator('createMultiple').click();
  59  |         const packageFormHeading = await this.locator('packageFormDialogBox').textContent();
  60  |         console.log("Package form heading: ", packageFormHeading);
  61  |         expect(packageFormHeading).toContain(wrData.wrGeneralFormURL.expectedPackageFormHeading);
  62  |         await this.locator('packageTypeField').click();
  63  |         const packageTypeOptions = this.locator('packageTypeDropdownList');
  64  |         const packageTypes = await utils.getDropdownValues(packageTypeOptions, 'package type dropdown');
  65  |         await utils.selectRandomValue(packageTypes, packageTypeOptions, 'package type');
  66  |         await this.locator('dimensionsField').waitFor({ state: 'visible' });
  67  |         await this.locator('dimensionsField').click();
  68  |         await this.locator('lengthField').fill(String(await utils.randomDimension()));
  69  |         await this.locator('widthField').fill(String(await utils.randomDimension()));
  70  |         await this.locator('heightField').fill(String(await utils.randomDimension()));
  71  |         await this.locator('weightField').fill(String(await utils.randomDimension()));
  72  |         await this.locator('noOfPiecesField').fill(String(wrData.wrGeneralFormURL.noOfPieces));
  73  |         await this.locator('createButton').click();
  74  |         await utils.waitForLoaderToDisappear(this.locator('loader'));
  75  |         const location = this.locator('locationField');
  76  |         await location.waitFor({ state: 'visible' });
  77  |         await location.hover();
  78  |         await this.locator('searchButton').click();
  79  |         await utils.waitForLoaderToDisappear(this.locator('loadingImage'));
  80  |         const grid = this.locator('kendoGrid');
  81  |         await grid.waitFor({ state: 'visible' });
  82  |         const rows = this.locator('row');
  83  |         let rowCount = await rows.count();
  84  |         while (rowCount === 0) {
  85  |             console.log("No rows found in the Kendo grid. Selecting warehouse.");
  86  |             await this.locator('warehouseField').click();
  87  |             const warehouseDropdownOptions = this.locator('warehouseDropdownList');
  88  |             const warehouseOptions = await utils.getDropdownValues(warehouseDropdownOptions, 'warehouse dropdown');
  89  |             await utils.selectRandomValue(warehouseOptions, warehouseDropdownOptions, 'warehouse');
  90  |             await utils.waitForLoaderToDisappear(this.locator('loadingImage'));
  91  | 
  92  |             try {
  93  |                 await rows.first().waitFor({ state: 'visible', timeout: 10000 });
  94  |             } catch (error) {
  95  |                 console.log("No rows appeared after warehouse selection.");
  96  |             }
  97  | 
  98  |             rowCount = await rows.count();
  99  |         }
  100 | 
  101 |         expect(rowCount).toBeGreaterThan(0);
  102 |         console.log("Rows found in the Kendo grid: ", rowCount);
  103 |         const rowRadioButtons = this.locator('rowRadioButton');
  104 |         const radioButtonCount = await rowRadioButtons.count();
  105 |         expect(radioButtonCount).toBeGreaterThan(0);
  106 |         await rowRadioButtons.nth(Math.floor(Math.random() * radioButtonCount)).click();
  107 | 
  108 | 
  109 |     }
  110 |     async logouts() {
  111 |         await this.locator('userImage').click();
  112 | 
  113 |         await this.locator('logoutButton').waitFor({ state: 'visible' });
  114 | 
  115 |         await Promise.all([
> 116 |             this.page.waitForURL(env.baseUrl, { timeout: 60000 }),
      |                       ^ TimeoutError: page.waitForURL: Timeout 60000ms exceeded.
  117 |             this.locator('logoutButton').click()
  118 |         ]);
  119 | 
  120 |         console.log('Current URL after logout:', this.page.url());
  121 |     }
  122 | 
  123 | 
  124 | }
  125 | 
  126 | module.exports = WRPage;
```