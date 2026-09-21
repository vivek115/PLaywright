# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createWarehouseReceipts.spec.js >> Warehouse receipts >> Create warehouse receipt
- Location: tests\createWarehouseReceipts.spec.js:10:5

# Error details

```
ReferenceError: env is not defined
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
                    - list [ref=e37]:
                      - listitem [ref=e38]:
                        - generic [ref=e39] [cursor=pointer]: My Profile
                      - listitem [ref=e40]:
                        - link "Logout" [active] [ref=e41] [cursor=pointer]:
                          - /url: /logout
      - generic [ref=e43]:
        - generic [ref=e47] [cursor=pointer]:
          - heading "SCRM" [level=4] [ref=e48]
          - paragraph [ref=e49]: Manage Companies, Contacts & Quotes
        - link "WMS WMS Manage Inventory, Packages & More" [ref=e51] [cursor=pointer]:
          - /url: /wms
          - img "WMS" [ref=e53]
          - generic [ref=e54]:
            - heading "WMS" [level=4] [ref=e55]
            - paragraph [ref=e56]: Manage Inventory, Packages & More
        - link "Dimensioner Dimensioner Capture Dimensions, Weight & Images" [ref=e58] [cursor=pointer]:
          - /url: /dimensioner/capture
          - img "Dimensioner" [ref=e60]
          - generic [ref=e61]:
            - heading "Dimensioner" [level=4] [ref=e62]
            - paragraph [ref=e63]: Capture Dimensions, Weight & Images
        - link "Workflows Workflows Manage Automations & More" [ref=e65] [cursor=pointer]:
          - /url: /workflows/list
          - img "Workflows" [ref=e67]
          - generic [ref=e68]:
            - heading "Workflows" [level=4] [ref=e69]
            - paragraph [ref=e70]: Manage Automations & More
        - generic [ref=e74] [cursor=pointer]:
          - heading "Admin" [level=4] [ref=e75]
          - paragraph [ref=e76]: Manage Users, Security, Modules and More
    - generic [ref=e79]:
      - generic [ref=e81]:
        - generic [ref=e82]:
          - img [ref=e84]
          - generic [ref=e85]:
            - heading "WRAA001021" [level=2] [ref=e86]
            - paragraph [ref=e87]: "Status: On Hand"
        - generic [ref=e89]:
          - generic [ref=e91]:
            - generic [ref=e92]: "0"
            - generic [ref=e93]: Pre-Received
          - generic [ref=e95]:
            - generic [ref=e96]: "5"
            - generic [ref=e97]: On Hand
          - generic [ref=e99]:
            - generic [ref=e100]: "0"
            - generic [ref=e101]: In Process
          - generic [ref=e103]:
            - generic [ref=e104]: "0"
            - generic [ref=e105]: Loaded
          - generic [ref=e107]:
            - generic [ref=e108]: "0"
            - generic [ref=e109]: Shipped
          - generic [ref=e111]:
            - generic [ref=e112]: "0"
            - generic [ref=e113]: Delivered
      - generic [ref=e114]:
        - generic [ref=e118]:
          - navigation [ref=e121]:
            - generic [ref=e124]:
              - generic [ref=e125] [cursor=pointer]: General
              - generic [ref=e126]: Packages
              - generic [ref=e127] [cursor=pointer]: Items
              - generic [ref=e128] [cursor=pointer]: Charges & Expenses
              - generic [ref=e129] [cursor=pointer]: Notes
              - generic [ref=e130] [cursor=pointer]: Attachments
              - generic [ref=e131] [cursor=pointer]: Tasks
              - generic [ref=e132] [cursor=pointer]: Activities
              - generic [ref=e133]:
                - generic [ref=e141]:
                  - 'textbox "Add Package from Tracking #" [disabled] [ref=e142]':
                    - /placeholder: "Scan or type tracking #"
                  - generic:
                    - generic:
                      - generic: "Add Package from Tracking #"
                - generic [ref=e143]:
                  - button "Repack" [ref=e144] [cursor=pointer]: Repack
                  - button "Create New" [disabled] [ref=e145]: Create New
                - button "Menu" [ref=e148] [cursor=pointer]: Menu
          - generic [ref=e156]:
            - generic [ref=e157]:
              - grid "Data table" [ref=e158]:
                - row "Select All" [ref=e160]:
                  - columnheader "Select All" [ref=e161]:
                    - generic [ref=e164]:
                      - checkbox "Select All" [ref=e165]: 
                      - generic [ref=e167] [cursor=pointer]: Select All
                - generic [ref=e168]:
                  - row "PIDAA001164-5 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Basket Dimensions (L x W x H) 52 x 4 x 51 in 94.00 lbs Weight D Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/18/2026 at 10:46 AM 0/5000 Description" [ref=e170]:
                    - gridcell "PIDAA001164-5 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Basket Dimensions (L x W x H) 52 x 4 x 51 in 94.00 lbs Weight D Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/18/2026 at 10:46 AM 0/5000 Description" [ref=e171]:
                      - generic [ref=e172] [cursor=pointer]:
                        - heading "PIDAA001164-5" [level=4] [ref=e174]
                        - generic [ref=e175]:
                          - checkbox [ref=e178]: 
                          - generic [ref=e184]:
                            - button [ref=e185]
                            - button [ref=e186]
                          - generic [ref=e192]:
                            - generic [ref=e193]:
                              - generic [ref=e202]:
                                - combobox "Status On Hand" [ref=e203]:
                                  - generic [ref=e207]: On Hand
                                - generic:
                                  - generic: Status
                              - generic [ref=e217]:
                                - combobox "Part Number" [ref=e218]
                                - generic:
                                  - generic: Part Number
                              - paragraph [ref=e226]:
                                - generic [ref=e230]:
                                  - textbox "Model" [ref=e231]:
                                    - /placeholder: Enter Model
                                  - generic:
                                    - generic: Model
                              - paragraph [ref=e235]:
                                - generic [ref=e239]:
                                  - textbox "Pieces" [ref=e240]:
                                    - /placeholder: Enter Pieces
                                    - text: "1"
                                  - generic:
                                    - generic: Pieces
                              - paragraph [ref=e246]:
                                - generic [ref=e247]: Pieces By PO
                            - generic [ref=e248]:
                              - generic [ref=e249]:
                                - generic [ref=e250]:
                                  - generic [ref=e259]:
                                    - combobox "Package Type Basket" [ref=e260]:
                                      - generic [ref=e263]: Basket
                                    - generic:
                                      - generic: Package Type
                                  - generic [ref=e268]:
                                    - paragraph [ref=e269]: Dimensions (L x W x H)
                                    - paragraph [ref=e270]:
                                      - textbox "L" [ref=e271]: "52"
                                      - text: x
                                      - textbox "W" [ref=e272]: "4"
                                      - text: x
                                      - textbox "H" [ref=e273]: "51"
                                      - text: in
                                  - paragraph [ref=e277]:
                                    - generic [ref=e281]:
                                      - textbox "Weight" [ref=e282]: 94.00 lbs
                                      - generic:
                                        - generic: Weight
                                  - paragraph [ref=e286]:
                                    - generic [ref=e292]:
                                      - combobox "Location" [ref=e293]: D
                                      - generic:
                                        - generic:
                                          - generic: Location
                                - generic [ref=e294]:
                                  - paragraph [ref=e298]:
                                    - generic [ref=e302]:
                                      - textbox "Tracking No." [ref=e303]:
                                        - /placeholder: Enter Tracking No.
                                      - generic:
                                        - generic: Tracking No.
                                  - paragraph [ref=e307]:
                                    - generic [ref=e311]:
                                      - textbox "Pro No." [ref=e312]:
                                        - /placeholder: Enter Pro No.
                                      - generic:
                                        - generic: Pro No.
                                  - generic [ref=e321]:
                                    - combobox "Received By IFS Demo" [ref=e322]:
                                      - generic [ref=e325]: IFS Demo
                                    - generic:
                                      - generic: Received By
                                  - generic [ref=e332]:
                                    - generic: Received Date/Time
                                    - generic [ref=e333]: 09/18/2026 at 10:46 AM
                              - paragraph [ref=e339]:
                                - generic [ref=e343]:
                                  - textbox "Description" [ref=e344]:
                                    - /placeholder: Enter Description
                                  - generic [ref=e345]: 0/5000
                                  - generic:
                                    - generic: Description
                          - button [ref=e348]:
                            - img [ref=e350]
                  - row "PIDAA001164-4 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Basket Dimensions (L x W x H) 52 x 4 x 51 in 94.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/18/2026 at 10:46 AM 0/5000 Description" [ref=e351]:
                    - gridcell "PIDAA001164-4 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Basket Dimensions (L x W x H) 52 x 4 x 51 in 94.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/18/2026 at 10:46 AM 0/5000 Description" [ref=e352]:
                      - generic [ref=e353] [cursor=pointer]:
                        - heading "PIDAA001164-4" [level=4] [ref=e355]
                        - generic [ref=e356]:
                          - checkbox [ref=e359]: 
                          - generic [ref=e365]:
                            - button [ref=e366]
                            - button [ref=e367]
                          - generic [ref=e373]:
                            - generic [ref=e374]:
                              - generic [ref=e383]:
                                - combobox "Status On Hand" [ref=e384]:
                                  - generic [ref=e388]: On Hand
                                - generic:
                                  - generic: Status
                              - generic [ref=e398]:
                                - combobox "Part Number" [ref=e399]
                                - generic:
                                  - generic: Part Number
                              - paragraph [ref=e407]:
                                - generic [ref=e411]:
                                  - textbox "Model" [ref=e412]:
                                    - /placeholder: Enter Model
                                  - generic:
                                    - generic: Model
                              - paragraph [ref=e416]:
                                - generic [ref=e420]:
                                  - textbox "Pieces" [ref=e421]:
                                    - /placeholder: Enter Pieces
                                    - text: "1"
                                  - generic:
                                    - generic: Pieces
                              - paragraph [ref=e427]:
                                - generic [ref=e428]: Pieces By PO
                            - generic [ref=e429]:
                              - generic [ref=e430]:
                                - generic [ref=e431]:
                                  - generic [ref=e440]:
                                    - combobox "Package Type Basket" [ref=e441]:
                                      - generic [ref=e444]: Basket
                                    - generic:
                                      - generic: Package Type
                                  - generic [ref=e449]:
                                    - paragraph [ref=e450]: Dimensions (L x W x H)
                                    - paragraph [ref=e451]:
                                      - textbox "L" [ref=e452]: "52"
                                      - text: x
                                      - textbox "W" [ref=e453]: "4"
                                      - text: x
                                      - textbox "H" [ref=e454]: "51"
                                      - text: in
                                  - paragraph [ref=e458]:
                                    - generic [ref=e462]:
                                      - textbox "Weight" [ref=e463]: 94.00 lbs
                                      - generic:
                                        - generic: Weight
                                  - paragraph [ref=e467]:
                                    - generic [ref=e473]:
                                      - combobox "Location" [ref=e474]
                                      - generic:
                                        - generic:
                                          - generic: Location
                                - generic [ref=e475]:
                                  - paragraph [ref=e479]:
                                    - generic [ref=e483]:
                                      - textbox "Tracking No." [ref=e484]:
                                        - /placeholder: Enter Tracking No.
                                      - generic:
                                        - generic: Tracking No.
                                  - paragraph [ref=e488]:
                                    - generic [ref=e492]:
                                      - textbox "Pro No." [ref=e493]:
                                        - /placeholder: Enter Pro No.
                                      - generic:
                                        - generic: Pro No.
                                  - generic [ref=e502]:
                                    - combobox "Received By IFS Demo" [ref=e503]:
                                      - generic [ref=e506]: IFS Demo
                                    - generic:
                                      - generic: Received By
                                  - generic [ref=e513]:
                                    - generic: Received Date/Time
                                    - generic [ref=e514]: 09/18/2026 at 10:46 AM
                              - paragraph [ref=e520]:
                                - generic [ref=e524]:
                                  - textbox "Description" [ref=e525]:
                                    - /placeholder: Enter Description
                                  - generic [ref=e526]: 0/5000
                                  - generic:
                                    - generic: Description
                          - button [ref=e529]:
                            - img [ref=e531]
                  - row "PIDAA001164-3 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Basket Dimensions (L x W x H) 52 x 4 x 51 in 94.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/18/2026 at 10:46 AM 0/5000 Description" [ref=e532]:
                    - gridcell "PIDAA001164-3 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Basket Dimensions (L x W x H) 52 x 4 x 51 in 94.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/18/2026 at 10:46 AM 0/5000 Description" [ref=e533]:
                      - generic [ref=e534] [cursor=pointer]:
                        - heading "PIDAA001164-3" [level=4] [ref=e536]
                        - generic [ref=e537]:
                          - checkbox [ref=e540]: 
                          - generic [ref=e546]:
                            - button [ref=e547]
                            - button [ref=e548]
                          - generic [ref=e554]:
                            - generic [ref=e555]:
                              - generic [ref=e564]:
                                - combobox "Status On Hand" [ref=e565]:
                                  - generic [ref=e569]: On Hand
                                - generic:
                                  - generic: Status
                              - generic [ref=e579]:
                                - combobox "Part Number" [ref=e580]
                                - generic:
                                  - generic: Part Number
                              - paragraph [ref=e588]:
                                - generic [ref=e592]:
                                  - textbox "Model" [ref=e593]:
                                    - /placeholder: Enter Model
                                  - generic:
                                    - generic: Model
                              - paragraph [ref=e597]:
                                - generic [ref=e601]:
                                  - textbox "Pieces" [ref=e602]:
                                    - /placeholder: Enter Pieces
                                    - text: "1"
                                  - generic:
                                    - generic: Pieces
                              - paragraph [ref=e608]:
                                - generic [ref=e609]: Pieces By PO
                            - generic [ref=e610]:
                              - generic [ref=e611]:
                                - generic [ref=e612]:
                                  - generic [ref=e621]:
                                    - combobox "Package Type Basket" [ref=e622]:
                                      - generic [ref=e625]: Basket
                                    - generic:
                                      - generic: Package Type
                                  - generic [ref=e630]:
                                    - paragraph [ref=e631]: Dimensions (L x W x H)
                                    - paragraph [ref=e632]:
                                      - textbox "L" [ref=e633]: "52"
                                      - text: x
                                      - textbox "W" [ref=e634]: "4"
                                      - text: x
                                      - textbox "H" [ref=e635]: "51"
                                      - text: in
                                  - paragraph [ref=e639]:
                                    - generic [ref=e643]:
                                      - textbox "Weight" [ref=e644]: 94.00 lbs
                                      - generic:
                                        - generic: Weight
                                  - paragraph [ref=e648]:
                                    - generic [ref=e654]:
                                      - combobox "Location" [ref=e655]
                                      - generic:
                                        - generic:
                                          - generic: Location
                                - generic [ref=e656]:
                                  - paragraph [ref=e660]:
                                    - generic [ref=e664]:
                                      - textbox "Tracking No." [ref=e665]:
                                        - /placeholder: Enter Tracking No.
                                      - generic:
                                        - generic: Tracking No.
                                  - paragraph [ref=e669]:
                                    - generic [ref=e673]:
                                      - textbox "Pro No." [ref=e674]:
                                        - /placeholder: Enter Pro No.
                                      - generic:
                                        - generic: Pro No.
                                  - generic [ref=e683]:
                                    - combobox "Received By IFS Demo" [ref=e684]:
                                      - generic [ref=e687]: IFS Demo
                                    - generic:
                                      - generic: Received By
                                  - generic [ref=e694]:
                                    - generic: Received Date/Time
                                    - generic [ref=e695]: 09/18/2026 at 10:46 AM
                              - paragraph [ref=e701]:
                                - generic [ref=e705]:
                                  - textbox "Description" [ref=e706]:
                                    - /placeholder: Enter Description
                                  - generic [ref=e707]: 0/5000
                                  - generic:
                                    - generic: Description
                          - button [ref=e710]:
                            - img [ref=e712]
                  - row "PIDAA001164-2 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Basket Dimensions (L x W x H) 52 x 4 x 51 in 94.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/18/2026 at 10:46 AM 0/5000 Description" [ref=e713]:
                    - gridcell "PIDAA001164-2 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Basket Dimensions (L x W x H) 52 x 4 x 51 in 94.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/18/2026 at 10:46 AM 0/5000 Description" [ref=e714]:
                      - generic [ref=e715] [cursor=pointer]:
                        - heading "PIDAA001164-2" [level=4] [ref=e717]
                        - generic [ref=e718]:
                          - checkbox [ref=e721]: 
                          - generic [ref=e727]:
                            - button [ref=e728]
                            - button [ref=e729]
                          - generic [ref=e735]:
                            - generic [ref=e736]:
                              - generic [ref=e745]:
                                - combobox "Status On Hand" [ref=e746]:
                                  - generic [ref=e750]: On Hand
                                - generic:
                                  - generic: Status
                              - generic [ref=e760]:
                                - combobox "Part Number" [ref=e761]
                                - generic:
                                  - generic: Part Number
                              - paragraph [ref=e769]:
                                - generic [ref=e773]:
                                  - textbox "Model" [ref=e774]:
                                    - /placeholder: Enter Model
                                  - generic:
                                    - generic: Model
                              - paragraph [ref=e778]:
                                - generic [ref=e782]:
                                  - textbox "Pieces" [ref=e783]:
                                    - /placeholder: Enter Pieces
                                    - text: "1"
                                  - generic:
                                    - generic: Pieces
                              - paragraph [ref=e789]:
                                - generic [ref=e790]: Pieces By PO
                            - generic [ref=e791]:
                              - generic [ref=e792]:
                                - generic [ref=e793]:
                                  - generic [ref=e802]:
                                    - combobox "Package Type Basket" [ref=e803]:
                                      - generic [ref=e806]: Basket
                                    - generic:
                                      - generic: Package Type
                                  - generic [ref=e811]:
                                    - paragraph [ref=e812]: Dimensions (L x W x H)
                                    - paragraph [ref=e813]:
                                      - textbox "L" [ref=e814]: "52"
                                      - text: x
                                      - textbox "W" [ref=e815]: "4"
                                      - text: x
                                      - textbox "H" [ref=e816]: "51"
                                      - text: in
                                  - paragraph [ref=e820]:
                                    - generic [ref=e824]:
                                      - textbox "Weight" [ref=e825]: 94.00 lbs
                                      - generic:
                                        - generic: Weight
                                  - paragraph [ref=e829]:
                                    - generic [ref=e835]:
                                      - combobox "Location" [ref=e836]
                                      - generic:
                                        - generic:
                                          - generic: Location
                                - generic [ref=e837]:
                                  - paragraph [ref=e841]:
                                    - generic [ref=e845]:
                                      - textbox "Tracking No." [ref=e846]:
                                        - /placeholder: Enter Tracking No.
                                      - generic:
                                        - generic: Tracking No.
                                  - paragraph [ref=e850]:
                                    - generic [ref=e854]:
                                      - textbox "Pro No." [ref=e855]:
                                        - /placeholder: Enter Pro No.
                                      - generic:
                                        - generic: Pro No.
                                  - generic [ref=e864]:
                                    - combobox "Received By IFS Demo" [ref=e865]:
                                      - generic [ref=e868]: IFS Demo
                                    - generic:
                                      - generic: Received By
                                  - generic [ref=e875]:
                                    - generic: Received Date/Time
                                    - generic [ref=e876]: 09/18/2026 at 10:46 AM
                              - paragraph [ref=e882]:
                                - generic [ref=e886]:
                                  - textbox "Description" [ref=e887]:
                                    - /placeholder: Enter Description
                                  - generic [ref=e888]: 0/5000
                                  - generic:
                                    - generic: Description
                          - button [ref=e891]:
                            - img [ref=e893]
                  - row "PIDAA001164-1 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Basket Dimensions (L x W x H) 52 x 4 x 51 in 94.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/18/2026 at 10:46 AM 0/5000 Description" [ref=e894]:
                    - gridcell "PIDAA001164-1 Status On Hand Part Number Model 1 Pieces Pieces By PO Package Type Basket Dimensions (L x W x H) 52 x 4 x 51 in 94.00 lbs Weight Location Tracking No. Pro No. Received By IFS Demo Received Date/Time 09/18/2026 at 10:46 AM 0/5000 Description" [ref=e895]:
                      - generic [ref=e896] [cursor=pointer]:
                        - heading "PIDAA001164-1" [level=4] [ref=e898]
                        - generic [ref=e899]:
                          - checkbox [ref=e902]: 
                          - generic [ref=e908]:
                            - button [ref=e909]
                            - button [ref=e910]
                          - generic [ref=e916]:
                            - generic [ref=e917]:
                              - generic [ref=e926]:
                                - combobox "Status On Hand" [ref=e927]:
                                  - generic [ref=e931]: On Hand
                                - generic:
                                  - generic: Status
                              - generic [ref=e941]:
                                - combobox "Part Number" [ref=e942]
                                - generic:
                                  - generic: Part Number
                              - paragraph [ref=e950]:
                                - generic [ref=e954]:
                                  - textbox "Model" [ref=e955]:
                                    - /placeholder: Enter Model
                                  - generic:
                                    - generic: Model
                              - paragraph [ref=e959]:
                                - generic [ref=e963]:
                                  - textbox "Pieces" [ref=e964]:
                                    - /placeholder: Enter Pieces
                                    - text: "1"
                                  - generic:
                                    - generic: Pieces
                              - paragraph [ref=e970]:
                                - generic [ref=e971]: Pieces By PO
                            - generic [ref=e972]:
                              - generic [ref=e973]:
                                - generic [ref=e974]:
                                  - generic [ref=e983]:
                                    - combobox "Package Type Basket" [ref=e984]:
                                      - generic [ref=e987]: Basket
                                    - generic:
                                      - generic: Package Type
                                  - generic [ref=e992]:
                                    - paragraph [ref=e993]: Dimensions (L x W x H)
                                    - paragraph [ref=e994]:
                                      - textbox "L" [ref=e995]: "52"
                                      - text: x
                                      - textbox "W" [ref=e996]: "4"
                                      - text: x
                                      - textbox "H" [ref=e997]: "51"
                                      - text: in
                                  - paragraph [ref=e1001]:
                                    - generic [ref=e1005]:
                                      - textbox "Weight" [ref=e1006]: 94.00 lbs
                                      - generic:
                                        - generic: Weight
                                  - paragraph [ref=e1010]:
                                    - generic [ref=e1016]:
                                      - combobox "Location" [ref=e1017]
                                      - generic:
                                        - generic:
                                          - generic: Location
                                - generic [ref=e1018]:
                                  - paragraph [ref=e1022]:
                                    - generic [ref=e1026]:
                                      - textbox "Tracking No." [ref=e1027]:
                                        - /placeholder: Enter Tracking No.
                                      - generic:
                                        - generic: Tracking No.
                                  - paragraph [ref=e1031]:
                                    - generic [ref=e1035]:
                                      - textbox "Pro No." [ref=e1036]:
                                        - /placeholder: Enter Pro No.
                                      - generic:
                                        - generic: Pro No.
                                  - generic [ref=e1045]:
                                    - combobox "Received By IFS Demo" [ref=e1046]:
                                      - generic [ref=e1049]: IFS Demo
                                    - generic:
                                      - generic: Received By
                                  - generic [ref=e1056]:
                                    - generic: Received Date/Time
                                    - generic [ref=e1057]: 09/18/2026 at 10:46 AM
                              - paragraph [ref=e1063]:
                                - generic [ref=e1067]:
                                  - textbox "Description" [ref=e1068]:
                                    - /placeholder: Enter Description
                                  - generic [ref=e1069]: 0/5000
                                  - generic:
                                    - generic: Description
                          - button [ref=e1072]:
                            - img [ref=e1074]
              - generic [ref=e1076]:
                - generic [ref=e1077]: 1-5 of 5 items
                - generic [ref=e1078]:
                  - generic [ref=e1079]:
                    - button "Go to the first page":
                      - note "Go to the first page"
                    - button "Go to the previous page":
                      - note "Go to the previous page"
                  - list [ref=e1081]:
                    - listitem [ref=e1082]:
                      - button "Page 1" [ref=e1083]: "1"
                  - generic [ref=e1084]:
                    - button "Go to the next page":
                      - note "Go to the next page"
                    - button "Go to the last page":
                      - note "Go to the last page"
                - button "5 per page" [ref=e1086] [cursor=pointer]:
                  - generic [ref=e1087]: 5 per page
            - generic [ref=e1089]:
              - generic [ref=e1090]:
                - img [ref=e1092]
                - paragraph [ref=e1094]: Are you sure you want to save changes?
              - generic [ref=e1096]:
                - button "Save" [ref=e1097] [cursor=pointer]: Save
                - button "Cancel" [ref=e1098] [cursor=pointer]: Cancel
        - text:    
    - button "AI Assistant AI" [ref=e1099] [cursor=pointer]:
      - img "AI Assistant" [ref=e1100]
      - text: AI
  - generic [ref=e1108]:
    - paragraph [ref=e1112]: Do you want to continue navigating away without saving changes?
    - generic [ref=e1115]:
      - button "Confirm" [ref=e1116] [cursor=pointer]: Confirm
      - button "Cancel" [ref=e1117] [cursor=pointer]: Cancel
```

# Test source

```ts
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
  105 |         await rowRadioButtons.nth(Math.floor(Math.random() * radioButtonCount)).click();
  106 | 
  107 | 
  108 |     }
  109 |     async logout() {
  110 |         await this.locator('userImage').click();
  111 |         await this.locator('logoutButton').click();
  112 |         //await utils.waitForLoaderToDisappear(this.locator('loader'));
  113 |         const currentUrl = this.page.url();
  114 |         console.log('Current URL after logout:', currentUrl);
> 115 |         expect(currentUrl).toBe(env.baseUrl, "User did not land on the expected login page after logout");
      |                                 ^ ReferenceError: env is not defined
  116 |     
  117 |     }
  118 | 
  119 | }
  120 | 
  121 | module.exports = WRPage;
```