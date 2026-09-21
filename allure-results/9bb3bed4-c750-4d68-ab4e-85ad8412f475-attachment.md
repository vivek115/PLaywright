# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> Login test
- Location: tests\loginTest.spec.js:3:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /https:\/\/app.warehouseorchestrator.com\/wms\/warehouse\/receipts/
Received string:  "https://app.warehouseorchestrator.com/wms/warehouse/packages"
Timeout: 60000ms

Call log:
  - Expect "toHaveURL" with timeout 60000ms
    76 × unexpected value "https://app.warehouseorchestrator.com/auth/login?returnUrl=%2F"
    41 × unexpected value "https://app.warehouseorchestrator.com/wms/warehouse/packages"

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
- img
- img
- heading "Packages" [level=2]
- list:
  - listitem
  - listitem
  - listitem:
    - button "Create New"
  - listitem:
    - button
- grid "Data table":
  - row "Select All Rows Package ID Sortable Shipment ID Sortable Status Sortable Shipper Sortable Consignee Sortable Created By Sortable Created Date Sortable WR ID Sortable Package Type Sortable Length (in) Sortable Width (in) Sortable Height (in) Sortable Weight (lbs) Sortable Volume (ft³) Sortable Length (cm) Sortable Width (cm) Sortable Height (cm) Sortable Weight (kg) Sortable Volume (m³) Sortable Pro No. Sortable":
    - columnheader "Select All Rows":
      - checkbox "Select All Rows": 
    - columnheader "Package ID Sortable":
      - text: Package ID
      - note "Sortable"
      - status
    - columnheader "Shipment ID Sortable":
      - text: Shipment ID
      - note "Sortable"
      - status
    - columnheader "Status Sortable":
      - text: Status
      - note "Sortable"
      - status
    - columnheader "Shipper Sortable":
      - text: Shipper
      - note "Sortable"
      - status
    - columnheader "Consignee Sortable":
      - text: Consignee
      - note "Sortable"
      - status
    - columnheader "Created By Sortable":
      - text: Created By
      - note "Sortable"
      - status
    - columnheader "Created Date Sortable":
      - text: Created Date
      - note "Sortable"
      - status
    - columnheader "WR ID Sortable":
      - text: WR ID
      - note "Sortable"
      - status
    - columnheader "Package Type Sortable":
      - text: Package Type
      - note "Sortable"
      - status
    - columnheader "Length (in) Sortable":
      - text: Length (in)
      - note "Sortable"
      - status
    - columnheader "Width (in) Sortable":
      - text: Width (in)
      - note "Sortable"
      - status
    - columnheader "Height (in) Sortable":
      - text: Height (in)
      - note "Sortable"
      - status
    - columnheader "Weight (lbs) Sortable":
      - text: Weight (lbs)
      - note "Sortable"
      - status
    - columnheader "Volume (ft³) Sortable":
      - text: Volume (ft³)
      - note "Sortable"
      - status
    - columnheader "Length (cm) Sortable":
      - text: Length (cm)
      - note "Sortable"
      - status
    - columnheader "Width (cm) Sortable":
      - text: Width (cm)
      - note "Sortable"
      - status
    - columnheader "Height (cm) Sortable":
      - text: Height (cm)
      - note "Sortable"
      - status
    - columnheader "Weight (kg) Sortable":
      - text: Weight (kg)
      - note "Sortable"
      - status
    - columnheader "Volume (m³) Sortable":
      - text: Volume (m³)
      - note "Sortable"
      - status
    - columnheader "Pro No. Sortable":
      - text: Pro No.
      - note "Sortable"
      - status
    - columnheader
  - row "undefined Filter Package ID Filter Shipment ID Filter Status Filter Shipper Filter Consignee Filter Created By Filter Created Date Filter WR ID Filter Package Type Filter Length (in) Filter Width (in) Filter Height (in) Filter Weight (lbs) Filter Volume (ft³) Filter Length (cm) Filter Width (cm) Filter Height (cm) Filter Weight (kg) Filter Volume (m³) Filter Pro No. Filter undefined Filter":
    - textbox "Search"
    - textbox "Search"
    - text: Filter
    - textbox "Search"
    - textbox "Search"
    - textbox "Search"
    - text: Filter
    - textbox "Search"
    - text: Filter Filter Filter Filter Filter Filter Filter Filter Filter Filter Filter
    - textbox "Search"
  - row "Select Row RPIDAA000184-1 In Process IFS Demo 08/19/2026 20 Ft. Dry Freight 0":
    - gridcell "Select Row":
      - checkbox "Select Row": 
    - gridcell "RPIDAA000184-1"
    - gridcell
    - gridcell "In Process"
    - gridcell
    - gridcell
    - gridcell "IFS Demo"
    - gridcell "08/19/2026"
    - gridcell
    - gridcell "20 Ft. Dry Freight"
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell "0"
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
  - row "Select Row RPIDAA000183-1 In Process Andres Puerta 08/18/2026 Pallet 0":
    - gridcell "Select Row":
      - checkbox "Select Row": 
    - gridcell "RPIDAA000183-1"
    - gridcell
    - gridcell "In Process"
    - gridcell
    - gridcell
    - gridcell "Andres Puerta"
    - gridcell "08/18/2026"
    - gridcell
    - gridcell "Pallet"
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell "0"
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
  - row "Select Row RPIDAA000182-1 SAA000213 Loaded IFS Demo 08/18/2026 20 Ft. Flat Rack 0":
    - gridcell "Select Row":
      - checkbox "Select Row": 
    - gridcell "RPIDAA000182-1"
    - gridcell "SAA000213":
      - link "SAA000213":
        - /url: /wms/shipments/dae37efa-6f9a-450c-95a6-930daf3fd809/general
    - gridcell "Loaded"
    - gridcell
    - gridcell
    - gridcell "IFS Demo"
    - gridcell "08/18/2026"
    - gridcell
    - gridcell "20 Ft. Flat Rack"
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell "0"
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
  - row "Select Row RPIDAA000181-4 On Hand 100 SM Brewing Jionni Pizza Plus IFS Demo 08/17/2026 WRAA000939 45 Ft. High Cube (102\") 37.5 23 36.5 949 18.22 95.25 58.42 92.71 430.46 0.52":
    - gridcell "Select Row":
      - checkbox "Select Row": 
    - gridcell "RPIDAA000181-4"
    - gridcell
    - gridcell "On Hand"
    - gridcell "100 SM Brewing"
    - gridcell "Jionni Pizza Plus"
    - gridcell "IFS Demo"
    - gridcell "08/17/2026"
    - gridcell "WRAA000939":
      - link "WRAA000939":
        - /url: /wms/warehouse/receipt/4546ee1b-1ba8-4bc5-b76b-dad51dbafcb6/general
    - gridcell "45 Ft. High Cube (102\")"
    - gridcell "37.5"
    - gridcell "23"
    - gridcell "36.5"
    - gridcell "949"
    - gridcell "18.22"
    - gridcell "95.25"
    - gridcell "58.42"
    - gridcell "92.71"
    - gridcell "430.46"
    - gridcell "0.52"
    - gridcell
    - gridcell
  - row "Select Row RPIDAA000181-3 On Hand 100 SM Brewing Jionni Pizza Plus IFS Demo 08/17/2026 WRAA000939 40 Ft. Refrigerated (Aluminium) 37.5 23 36.5 949 18.22 95.25 58.42 92.71 430.46 0.52":
    - gridcell "Select Row":
      - checkbox "Select Row": 
    - gridcell "RPIDAA000181-3"
    - gridcell
    - gridcell "On Hand"
    - gridcell "100 SM Brewing"
    - gridcell "Jionni Pizza Plus"
    - gridcell "IFS Demo"
    - gridcell "08/17/2026"
    - gridcell "WRAA000939":
      - link "WRAA000939":
        - /url: /wms/warehouse/receipt/4546ee1b-1ba8-4bc5-b76b-dad51dbafcb6/general
    - gridcell "40 Ft. Refrigerated (Aluminium)"
    - gridcell "37.5"
    - gridcell "23"
    - gridcell "36.5"
    - gridcell "949"
    - gridcell "18.22"
    - gridcell "95.25"
    - gridcell "58.42"
    - gridcell "92.71"
    - gridcell "430.46"
    - gridcell "0.52"
    - gridcell
    - gridcell
  - row "Select Row PIDAA001090-7 On Hand 100 SM Brewing Jionni Pizza Plus IFS Demo 08/17/2026 WRAA000939 Barrel 37.5 23 36.5 18.22 95.25 58.42 92.71 0.52":
    - gridcell "Select Row":
      - checkbox "Select Row": 
    - gridcell "PIDAA001090-7":
      - link "PIDAA001090-7":
        - /url: /wms/warehouse/receipt/4546ee1b-1ba8-4bc5-b76b-dad51dbafcb6/package/83b7fa2d-9588-4f08-9919-b5c1e60006c5/general
    - gridcell
    - gridcell "On Hand"
    - gridcell "100 SM Brewing"
    - gridcell "Jionni Pizza Plus"
    - gridcell "IFS Demo"
    - gridcell "08/17/2026"
    - gridcell "WRAA000939":
      - link "WRAA000939":
        - /url: /wms/warehouse/receipt/4546ee1b-1ba8-4bc5-b76b-dad51dbafcb6/general
    - gridcell "Barrel"
    - gridcell "37.5"
    - gridcell "23"
    - gridcell "36.5"
    - gridcell
    - gridcell "18.22"
    - gridcell "95.25"
    - gridcell "58.42"
    - gridcell "92.71"
    - gridcell
    - gridcell "0.52"
    - gridcell
    - gridcell
  - row "Select Row PIDAA001090-6 On Hand 100 SM Brewing Jionni Pizza Plus IFS Demo 08/17/2026 WRAA000939 Barrel 37.5 23 36.5 18.22 95.25 58.42 92.71 0.52":
    - gridcell "Select Row":
      - checkbox "Select Row": 
    - gridcell "PIDAA001090-6":
      - link "PIDAA001090-6":
        - /url: /wms/warehouse/receipt/4546ee1b-1ba8-4bc5-b76b-dad51dbafcb6/package/818b67a2-540c-4f9f-9726-833aa9798bc0/general
    - gridcell
    - gridcell "On Hand"
    - gridcell "100 SM Brewing"
    - gridcell "Jionni Pizza Plus"
    - gridcell "IFS Demo"
    - gridcell "08/17/2026"
    - gridcell "WRAA000939":
      - link "WRAA000939":
        - /url: /wms/warehouse/receipt/4546ee1b-1ba8-4bc5-b76b-dad51dbafcb6/general
    - gridcell "Barrel"
    - gridcell "37.5"
    - gridcell "23"
    - gridcell "36.5"
    - gridcell
    - gridcell "18.22"
    - gridcell "95.25"
    - gridcell "58.42"
    - gridcell "92.71"
    - gridcell
    - gridcell "0.52"
    - gridcell
    - gridcell
  - row "Select Row RPIDAA000181-2 On Hand 100 SM Brewing Jionni Pizza Plus IFS Demo 08/17/2026 WRAA000939 Bale 37.5 23 36.5 949 18.22 95.25 58.42 92.71 430.46 0.52":
    - gridcell "Select Row":
      - checkbox "Select Row": 
    - gridcell "RPIDAA000181-2"
    - gridcell
    - gridcell "On Hand"
    - gridcell "100 SM Brewing"
    - gridcell "Jionni Pizza Plus"
    - gridcell "IFS Demo"
    - gridcell "08/17/2026"
    - gridcell "WRAA000939":
      - link "WRAA000939":
        - /url: /wms/warehouse/receipt/4546ee1b-1ba8-4bc5-b76b-dad51dbafcb6/general
    - gridcell "Bale"
    - gridcell "37.5"
    - gridcell "23"
    - gridcell "36.5"
    - gridcell "949"
    - gridcell "18.22"
    - gridcell "95.25"
    - gridcell "58.42"
    - gridcell "92.71"
    - gridcell "430.46"
    - gridcell "0.52"
    - gridcell
    - gridcell
  - row "Select Row RPIDAA000181-1 On Hand 100 SM Brewing Jionni Pizza Plus IFS Demo 08/17/2026 New Tab WRAA000939 40 Ft. Open Top 37.5 23 36.5 949 18.22 95.25 58.42 92.71 430.46 0.52":
    - gridcell "Select Row":
      - checkbox "Select Row": 
    - gridcell "RPIDAA000181-1"
    - gridcell
    - gridcell "On Hand"
    - gridcell "100 SM Brewing"
    - gridcell "Jionni Pizza Plus"
    - gridcell "IFS Demo"
    - gridcell "08/17/2026"
    - gridcell "New Tab WRAA000939":
      - link "New Tab":
        - /url: /wms/warehouse/receipt/4546ee1b-1ba8-4bc5-b76b-dad51dbafcb6/general
        - img "New Tab"
      - link "WRAA000939":
        - /url: /wms/warehouse/receipt/4546ee1b-1ba8-4bc5-b76b-dad51dbafcb6/general
    - gridcell "40 Ft. Open Top"
    - gridcell "37.5"
    - gridcell "23"
    - gridcell "36.5"
    - gridcell "949"
    - gridcell "18.22"
    - gridcell "95.25"
    - gridcell "58.42"
    - gridcell "92.71"
    - gridcell "430.46"
    - gridcell "0.52"
    - gridcell
    - gridcell:
      - button:
        - img
  - row "Select Row PIDAA001090-5 On Hand 100 SM Brewing Jionni Pizza Plus IFS Demo 08/17/2026 WRAA000939 Bulkhead 37.5 55 65 544 77.58 95.25 139.7 165.1 246.75 2.2":
    - gridcell "Select Row":
      - checkbox "Select Row": 
    - gridcell "PIDAA001090-5":
      - link "PIDAA001090-5":
        - /url: /wms/warehouse/receipt/4546ee1b-1ba8-4bc5-b76b-dad51dbafcb6/package/53cb6a4d-ba0d-48f9-a8de-4c0aec952679/general
    - gridcell
    - gridcell "On Hand"
    - gridcell "100 SM Brewing"
    - gridcell "Jionni Pizza Plus"
    - gridcell "IFS Demo"
    - gridcell "08/17/2026"
    - gridcell "WRAA000939":
      - link "WRAA000939":
        - /url: /wms/warehouse/receipt/4546ee1b-1ba8-4bc5-b76b-dad51dbafcb6/general
    - gridcell "Bulkhead"
    - gridcell "37.5"
    - gridcell "55"
    - gridcell "65"
    - gridcell "544"
    - gridcell "77.58"
    - gridcell "95.25"
    - gridcell "139.7"
    - gridcell "165.1"
    - gridcell "246.75"
    - gridcell "2.2"
    - gridcell
    - gridcell
  - row "Select Row PIDAA001090-4 On Hand 100 SM Brewing Jionni Pizza Plus IFS Demo 08/17/2026 WRAA000939 Bulkhead 37.5 55 65 544 77.58 95.25 139.7 165.1 246.75 2.2":
    - gridcell "Select Row":
      - checkbox "Select Row": 
    - gridcell "PIDAA001090-4":
      - link "PIDAA001090-4":
        - /url: /wms/warehouse/receipt/4546ee1b-1ba8-4bc5-b76b-dad51dbafcb6/package/773eb6fa-2706-4edd-ba75-60ace77c4ad4/general
    - gridcell
    - gridcell "On Hand"
    - gridcell "100 SM Brewing"
    - gridcell "Jionni Pizza Plus"
    - gridcell "IFS Demo"
    - gridcell "08/17/2026"
    - gridcell "WRAA000939":
      - link "WRAA000939":
        - /url: /wms/warehouse/receipt/4546ee1b-1ba8-4bc5-b76b-dad51dbafcb6/general
    - gridcell "Bulkhead"
    - gridcell "37.5"
    - gridcell "55"
    - gridcell "65"
    - gridcell "544"
    - gridcell "77.58"
    - gridcell "95.25"
    - gridcell "139.7"
    - gridcell "165.1"
    - gridcell "246.75"
    - gridcell "2.2"
    - gridcell
    - gridcell
  - row "Select Row PIDAA001090-3 In Process 100 SM Brewing Jionni Pizza Plus IFS Demo 08/17/2026 WRAA000939 Bulkhead 37.5 55 65 544 77.58 95.25 139.7 165.1 246.75 2.2":
    - gridcell "Select Row":
      - checkbox "Select Row": 
    - gridcell "PIDAA001090-3":
      - link "PIDAA001090-3":
        - /url: /wms/warehouse/receipt/4546ee1b-1ba8-4bc5-b76b-dad51dbafcb6/package/6b448816-34c7-4163-91f8-552ffa0265c0/general
    - gridcell
    - gridcell "In Process"
    - gridcell "100 SM Brewing"
    - gridcell "Jionni Pizza Plus"
    - gridcell "IFS Demo"
    - gridcell "08/17/2026"
    - gridcell "WRAA000939":
      - link "WRAA000939":
        - /url: /wms/warehouse/receipt/4546ee1b-1ba8-4bc5-b76b-dad51dbafcb6/general
    - gridcell "Bulkhead"
    - gridcell "37.5"
    - gridcell "55"
    - gridcell "65"
    - gridcell "544"
    - gridcell "77.58"
    - gridcell "95.25"
    - gridcell "139.7"
    - gridcell "165.1"
    - gridcell "246.75"
    - gridcell "2.2"
    - gridcell
    - gridcell
  - row "Select Row PIDAA001090-2 In Process 100 SM Brewing Jionni Pizza Plus IFS Demo 08/17/2026 WRAA000939 Bulkhead 37.5 55 65 544 77.58 95.25 139.7 165.1 246.75 2.2":
    - gridcell "Select Row":
      - checkbox "Select Row": 
    - gridcell "PIDAA001090-2":
      - link "PIDAA001090-2":
        - /url: /wms/warehouse/receipt/4546ee1b-1ba8-4bc5-b76b-dad51dbafcb6/package/f7aa1362-b0e2-4deb-b798-8285971c6bbf/general
    - gridcell
    - gridcell "In Process"
    - gridcell "100 SM Brewing"
    - gridcell "Jionni Pizza Plus"
    - gridcell "IFS Demo"
    - gridcell "08/17/2026"
    - gridcell "WRAA000939":
      - link "WRAA000939":
        - /url: /wms/warehouse/receipt/4546ee1b-1ba8-4bc5-b76b-dad51dbafcb6/general
    - gridcell "Bulkhead"
    - gridcell "37.5"
    - gridcell "55"
    - gridcell "65"
    - gridcell "544"
    - gridcell "77.58"
    - gridcell "95.25"
    - gridcell "139.7"
    - gridcell "165.1"
    - gridcell "246.75"
    - gridcell "2.2"
    - gridcell
    - gridcell
  - row "Select Row PIDAA001090-1 In Process 100 SM Brewing Jionni Pizza Plus IFS Demo 08/17/2026 WRAA000939 Bulkhead 37.5 55 65 544 77.58 95.25 139.7 165.1 246.75 2.2":
    - gridcell "Select Row":
      - checkbox "Select Row": 
    - gridcell "PIDAA001090-1":
      - link "PIDAA001090-1":
        - /url: /wms/warehouse/receipt/4546ee1b-1ba8-4bc5-b76b-dad51dbafcb6/package/215d4199-2a58-43e0-b4f8-ab8d8bc62907/general
    - gridcell
    - gridcell "In Process"
    - gridcell "100 SM Brewing"
    - gridcell "Jionni Pizza Plus"
    - gridcell "IFS Demo"
    - gridcell "08/17/2026"
    - gridcell "WRAA000939":
      - link "WRAA000939":
        - /url: /wms/warehouse/receipt/4546ee1b-1ba8-4bc5-b76b-dad51dbafcb6/general
    - gridcell "Bulkhead"
    - gridcell "37.5"
    - gridcell "55"
    - gridcell "65"
    - gridcell "544"
    - gridcell "77.58"
    - gridcell "95.25"
    - gridcell "139.7"
    - gridcell "165.1"
    - gridcell "246.75"
    - gridcell "2.2"
    - gridcell
    - gridcell
  - row "Select Row PIDAA001089 SAA000215 In Process IFS Demo 08/17/2026 Bulkhead 37.5 23 36.5 949 18.22 95.25 58.42 92.71 430.46 0.52":
    - gridcell "Select Row":
      - checkbox "Select Row": 
    - gridcell "PIDAA001089":
      - link "PIDAA001089":
        - /url: /wms/warehouse/receipt/0/package/418cfb66-cb70-4150-bcc0-e5580354d392/general
    - gridcell "SAA000215":
      - link "SAA000215":
        - /url: /wms/shipments/f91e4ea7-1e0b-44e6-ad84-7624c8fc995a/general
    - gridcell "In Process"
    - gridcell
    - gridcell
    - gridcell "IFS Demo"
    - gridcell "08/17/2026"
    - gridcell
    - gridcell "Bulkhead"
    - gridcell "37.5"
    - gridcell "23"
    - gridcell "36.5"
    - gridcell "949"
    - gridcell "18.22"
    - gridcell "95.25"
    - gridcell "58.42"
    - gridcell "92.71"
    - gridcell "430.46"
    - gridcell "0.52"
    - gridcell
    - gridcell
  - row "Select Row PIDAA001088 Pre-Received IFS Demo 08/17/2026 Bulkhead 0":
    - gridcell "Select Row":
      - checkbox "Select Row": 
    - gridcell "PIDAA001088":
      - link "PIDAA001088":
        - /url: /wms/warehouse/receipt/0/package/7feec46c-f4c0-4e7f-a866-3c829648a57a/general
    - gridcell
    - gridcell "Pre-Received"
    - gridcell
    - gridcell
    - gridcell "IFS Demo"
    - gridcell "08/17/2026"
    - gridcell
    - gridcell "Bulkhead"
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell "0"
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
  - row "Select Row PIDAA001087 Pre-Received IFS Demo 08/17/2026 0":
    - gridcell "Select Row":
      - checkbox "Select Row": 
    - gridcell "PIDAA001087":
      - link "PIDAA001087":
        - /url: /wms/warehouse/receipt/0/package/73dc3c5a-14fa-466d-8a9a-54c47649be64/general
    - gridcell
    - gridcell "Pre-Received"
    - gridcell
    - gridcell
    - gridcell "IFS Demo"
    - gridcell "08/17/2026"
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell "0"
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
  - row "Select Row PIDAA001086 Pre-Received IFS Demo 08/17/2026 0":
    - gridcell "Select Row":
      - checkbox "Select Row": 
    - gridcell "PIDAA001086":
      - link "PIDAA001086":
        - /url: /wms/warehouse/receipt/0/package/decc2e3e-0901-4d02-b032-e6e2307d2c3d/general
    - gridcell
    - gridcell "Pre-Received"
    - gridcell
    - gridcell
    - gridcell "IFS Demo"
    - gridcell "08/17/2026"
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell "0"
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
  - row "Select Row PIDAA001084-9 On Hand mikosddra Jionni Pizza Plus IFS Demo 08/17/2026 WRAA000936 Barreling 37.5 23 36.5 3222 18.22 95.25 58.42 92.71 1461.47 0.52 PLO789979":
    - gridcell "Select Row":
      - checkbox "Select Row": 
    - gridcell "PIDAA001084-9":
      - link "PIDAA001084-9":
        - /url: /wms/warehouse/receipt/cdbe44d4-3861-470a-9c57-9eb27fe28235/package/528c2055-5417-497c-a933-45edee04d081/general
    - gridcell
    - gridcell "On Hand"
    - gridcell "mikosddra"
    - gridcell "Jionni Pizza Plus"
    - gridcell "IFS Demo"
    - gridcell "08/17/2026"
    - gridcell "WRAA000936":
      - link "WRAA000936":
        - /url: /wms/warehouse/receipt/cdbe44d4-3861-470a-9c57-9eb27fe28235/general
    - gridcell "Barreling"
    - gridcell "37.5"
    - gridcell "23"
    - gridcell "36.5"
    - gridcell "3222"
    - gridcell "18.22"
    - gridcell "95.25"
    - gridcell "58.42"
    - gridcell "92.71"
    - gridcell "1461.47"
    - gridcell "0.52"
    - gridcell "PLO789979"
    - gridcell
  - row "Select Row PIDAA001084-8 Pre-Received mikosddra Jionni Pizza Plus IFS Demo 08/17/2026 WRAA000936 Barrel 0":
    - gridcell "Select Row":
      - checkbox "Select Row": 
    - gridcell "PIDAA001084-8":
      - link "PIDAA001084-8":
        - /url: /wms/warehouse/receipt/cdbe44d4-3861-470a-9c57-9eb27fe28235/package/bc875987-336d-4b65-852f-d8bdf6f67bbd/general
    - gridcell
    - gridcell "Pre-Received"
    - gridcell "mikosddra"
    - gridcell "Jionni Pizza Plus"
    - gridcell "IFS Demo"
    - gridcell "08/17/2026"
    - gridcell "WRAA000936":
      - link "WRAA000936":
        - /url: /wms/warehouse/receipt/cdbe44d4-3861-470a-9c57-9eb27fe28235/general
    - gridcell "Barrel"
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell "0"
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
  - row "Select Row PIDAA001084-7 Pre-Received mikosddra Jionni Pizza Plus IFS Demo 08/17/2026 WRAA000936 Barrel 0":
    - gridcell "Select Row":
      - checkbox "Select Row": 
    - gridcell "PIDAA001084-7":
      - link "PIDAA001084-7":
        - /url: /wms/warehouse/receipt/cdbe44d4-3861-470a-9c57-9eb27fe28235/package/00558e91-54d5-4aec-a8dc-20affe005378/general
    - gridcell
    - gridcell "Pre-Received"
    - gridcell "mikosddra"
    - gridcell "Jionni Pizza Plus"
    - gridcell "IFS Demo"
    - gridcell "08/17/2026"
    - gridcell "WRAA000936":
      - link "WRAA000936":
        - /url: /wms/warehouse/receipt/cdbe44d4-3861-470a-9c57-9eb27fe28235/general
    - gridcell "Barrel"
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell "0"
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
  - row "Select Row PIDAA001084-6 Pre-Received mikosddra Jionni Pizza Plus IFS Demo 08/17/2026 WRAA000936 0":
    - gridcell "Select Row":
      - checkbox "Select Row": 
    - gridcell "PIDAA001084-6":
      - link "PIDAA001084-6":
        - /url: /wms/warehouse/receipt/cdbe44d4-3861-470a-9c57-9eb27fe28235/package/449bdfb3-bcae-4c02-a671-3a93243b07c0/general
    - gridcell
    - gridcell "Pre-Received"
    - gridcell "mikosddra"
    - gridcell "Jionni Pizza Plus"
    - gridcell "IFS Demo"
    - gridcell "08/17/2026"
    - gridcell "WRAA000936":
      - link "WRAA000936":
        - /url: /wms/warehouse/receipt/cdbe44d4-3861-470a-9c57-9eb27fe28235/general
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell "0"
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
  - row "Select Row RPIDAA000180-2 On Hand mikosddra Jionni Pizza Plus IFS Demo 08/17/2026 WRAA000936 40 Ft. HC Refrigerated (Aluminium) 37.5 23 36.5 949 18.22 95.25 58.42 92.71 430.46 0.52":
    - gridcell "Select Row":
      - checkbox "Select Row": 
    - gridcell "RPIDAA000180-2"
    - gridcell
    - gridcell "On Hand"
    - gridcell "mikosddra"
    - gridcell "Jionni Pizza Plus"
    - gridcell "IFS Demo"
    - gridcell "08/17/2026"
    - gridcell "WRAA000936":
      - link "WRAA000936":
        - /url: /wms/warehouse/receipt/cdbe44d4-3861-470a-9c57-9eb27fe28235/general
    - gridcell "40 Ft. HC Refrigerated (Aluminium)"
    - gridcell "37.5"
    - gridcell "23"
    - gridcell "36.5"
    - gridcell "949"
    - gridcell "18.22"
    - gridcell "95.25"
    - gridcell "58.42"
    - gridcell "92.71"
    - gridcell "430.46"
    - gridcell "0.52"
    - gridcell
    - gridcell
  - row "Select Row PIDAA001084-5 Pre-Received mikosddra Jionni Pizza Plus IFS Demo 08/13/2026 WRAA000936 0":
    - gridcell "Select Row":
      - checkbox "Select Row": 
    - gridcell "PIDAA001084-5":
      - link "PIDAA001084-5":
        - /url: /wms/warehouse/receipt/cdbe44d4-3861-470a-9c57-9eb27fe28235/package/62584f3c-be09-45c5-8d1c-6593a08d5acb/general
    - gridcell
    - gridcell "Pre-Received"
    - gridcell "mikosddra"
    - gridcell "Jionni Pizza Plus"
    - gridcell "IFS Demo"
    - gridcell "08/13/2026"
    - gridcell "WRAA000936":
      - link "WRAA000936":
        - /url: /wms/warehouse/receipt/cdbe44d4-3861-470a-9c57-9eb27fe28235/general
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell "0"
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
  - row "Select Row PIDAA001084-4 Pre-Received mikosddra Jionni Pizza Plus IFS Demo 08/13/2026 WRAA000936 0":
    - gridcell "Select Row":
      - checkbox "Select Row": 
    - gridcell "PIDAA001084-4":
      - link "PIDAA001084-4":
        - /url: /wms/warehouse/receipt/cdbe44d4-3861-470a-9c57-9eb27fe28235/package/878a12a3-e764-4f8f-a8f0-c378637068bd/general
    - gridcell
    - gridcell "Pre-Received"
    - gridcell "mikosddra"
    - gridcell "Jionni Pizza Plus"
    - gridcell "IFS Demo"
    - gridcell "08/13/2026"
    - gridcell "WRAA000936":
      - link "WRAA000936":
        - /url: /wms/warehouse/receipt/cdbe44d4-3861-470a-9c57-9eb27fe28235/general
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell "0"
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
    - gridcell
- text: 1-25 of 12734 items
- button "Go to the first page":
  - note "Go to the first page"
- button "Go to the previous page":
  - note "Go to the previous page"
- list:
  - listitem:
    - button "Page 1": "1"
  - listitem:
    - button "Page 2": "2"
  - listitem:
    - button "Page 3": "3"
  - listitem:
    - button "Page 4": "4"
  - listitem:
    - button "Page 5": "5"
  - listitem:
    - button "Page 6": "6"
  - listitem:
    - button "Page 7": "7"
  - listitem:
    - button "Page 8": "8"
  - listitem:
    - button "Page 9": "9"
  - listitem:
    - button "Page 10": "10"
  - listitem:
    - button "Page 11": ...
- button "Go to the next page":
  - note "Go to the next page"
- button "Go to the last page":
  - note "Go to the last page"
- button "25 per page"
- button "AI Assistant AI":
  - img "AI Assistant"
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
  15 | 
  16 |     async navigateToLoginPageURL() {
  17 |         // Use Playwright baseURL from config and wait for initial DOM readiness.
  18 |         await this.page.goto('/', {
  19 |             waitUntil: 'domcontentloaded',
  20 |             timeout: 60000,
  21 |         });
  22 | 
  23 |         await utils.waitForLoaderToDisappear(
  24 |             this.page.locator('loginLoader'),
  25 |             60000
  26 |         );
  27 | 
  28 |         // await this.page.pause();
  29 | 
  30 |     }
  31 | 
  32 |     async verfiyLoginPageTitle() {
  33 |         const logText = await this.locator('loginLogo').textContent();
  34 |         expect(logText).toContain(loginData.DataVerify.appTitle, "Login Page Title does not match expected value");
  35 |         console.log('Login Page Title verified successfully:', logText);
  36 | 
  37 |     }
  38 | 
  39 |     async validLogin() {
  40 |         await this.locator('usernameField').fill(env.username);
  41 |         await this.locator('passwordField').fill(env.password);
  42 |         await this.locator('rememberMeCheckbox').click();
  43 |         await this.locator('loginButton').click();
  44 | 
  45 | 
  46 | 
  47 | 
  48 |         //await this.loginButton.click();
  49 |     }
  50 | 
  51 | 
  52 | 
  53 |     async verifyUserLandingToWarehouseOrchestratorPage() {
  54 |         await utils.waitForLoaderToDisappear(this.page.locator('loginLoader'), 60000);
> 55 |         await expect(this.page).toHaveURL(
     |                                 ^ Error: expect(page).toHaveURL(expected) failed
  56 |             new RegExp(loginData.DataVerify.warehouseOrchestratorURL),
  57 |             { timeout: 60000 }
  58 |         );
  59 |         const wrURL = this.page.url();
  60 |         console.log('Current URL after login:', wrURL);
  61 | 
  62 |         if (wrURL.includes(loginData.DataVerify.warehouseOrchestratorURL)) {
  63 |             console.log('User has successfully landed to Warehouse Orchestrator Page:', wrURL);
  64 |         }
  65 |         else {
  66 |             await expect(this.locator('navLink').first()).toBeVisible({ timeout: 15000 });
  67 |             await this.locator('navLink').first().click();
  68 |             const dropdownHeading = await utils.getDropdownValues(this.locator('dropdownHeadingSelector'));
  69 |             console.log(dropdownHeading);
  70 |             await this.locator('warehouseReceiptsTitle').click();
  71 |             await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
  72 | 
  73 |         }
  74 |     }
  75 | }
  76 | 
  77 | module.exports = LoginPage;
  78 | 
  79 | 
  80 | 
```