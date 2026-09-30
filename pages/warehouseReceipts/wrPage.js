const { expect } = require('@playwright/test');
const utils = require('../../utils/CommonUtils');
const LocatorHelper = require("../../utils/LocatorHelper");
const wrData = require('../../data/warehouseReceiptData.json');
const warehouseReceiptLocators = require('./warehouseReceiptLocators');
const WRCommonFields = require('./wrCommonFields');
const env = require('../../config/env.prod.json');

class WRPage extends LocatorHelper {

    constructor(page) {
        super(page, warehouseReceiptLocators);
        this.wrCommonFields = new WRCommonFields(page);
    }

    async verifyWRForm() {
        await this.locator('createNewButton').click();
        await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
        const wrHeadingText = await this.locator('wrHeading').textContent();
        expect(wrHeadingText).toContain(wrData.wrGeneralFormURL.expectedHeading)
        console.log("WR Form is displaying on the screen");
    }

    async createWarehouseReceipts() {
        await this.locator('warehouseReceiptField').click();
        const warehouseOptions = this.locator('DropdownList');
        const warehouses = await utils.getDropdownValues(warehouseOptions, 'warehouse dropdown');
        await utils.selectRandomValue(warehouses, warehouseOptions, 'warehouse');
        await this.wrCommonFields.selectStatus();
        await this.wrCommonFields.selectShipper();
        await this.wrCommonFields.selectConsignee();
        await this.wrCommonFields.selectAgent();
        await this.wrCommonFields.selectSupplier();
        await this.page.mouse.wheel(0, 500);
        await this.locator('submitButton').first().click();
        await utils.waitForLoaderToDisappear(this.locator('loader'));
        expect(await this.locator('successMessage').textContent()).toContain(wrData.wrGeneralFormURL.expectedSuccessMessage);
        await this.locator('packageTab').click();
        await utils.waitForLoaderToDisappear(this.locator('loader'));
    }

    async createPackage() {
        await this.locator('packageTab').click();
        await utils.waitForLoaderToDisappear(this.locator('loadingImage'));
        await this.locator('inlineButton').first().click();
        const menuOptions = await this.locator('inlineOptions').allTextContents();
        console.log("Menu options available: ", menuOptions);
        const cardViewOption = menuOptions.find(option => option.trim().toLowerCase() === wrData.wrGeneralFormURL.switchToCardView.toLowerCase());
        if (cardViewOption) {
            await this.locator('inlineOptions').filter({ hasText: cardViewOption }).first().click();
        }
        else {
            console.log("Card view option not found in the menu options.");
            await this.page.mouse.click(100, 100);
        }
        await this.locator('createNewDropdownButton').click();
        const createNewOptions = await this.locator('createNewDropdownOption').allTextContents();
        await this.locator('createMultiple').click();
        const packageFormHeading = await this.locator('packageFormDialogBox').textContent();
        console.log("Package form heading: ", packageFormHeading);
        expect(packageFormHeading).toContain(wrData.wrGeneralFormURL.expectedPackageFormHeading);
        await this.locator('packageTypeField').click();
        const packageTypeOptions = this.locator('packageTypeDropdownList');
        const packageTypes = await utils.getDropdownValues(packageTypeOptions, 'package type dropdown');
        await utils.selectRandomValue(packageTypes, packageTypeOptions, 'package type');
        await this.locator('dimensionsField').waitFor({ state: 'visible' });
        await this.locator('dimensionsField').click();
        await this.locator('lengthField').fill(String(await utils.randomDimension()));
        await this.locator('widthField').fill(String(await utils.randomDimension()));
        await this.locator('heightField').fill(String(await utils.randomDimension()));
        await this.locator('weightField').fill(String(await utils.randomDimension()));
        await this.locator('noOfPiecesField').fill(String(wrData.wrGeneralFormURL.noOfPieces));
        await this.locator('createButton').click();
        await utils.waitForLoaderToDisappear(this.locator('loader'));
        const location = this.locator('locationField');
        await location.waitFor({ state: 'visible' });
        await location.hover();
        await this.locator('searchButton').click();
        await utils.waitForLoaderToDisappear(this.locator('loadingImage'));
        const grid = this.locator('kendoGrid');
        await grid.waitFor({ state: 'visible' });
        const rows = this.locator('row');
        let rowCount = await rows.count();
        while (rowCount === 0) {
            console.log("No rows found in the Kendo grid. Selecting warehouse.");
            await this.locator('warehouseField').click();
            const warehouseDropdownOptions = this.locator('warehouseDropdownList');
            const warehouseOptions = await utils.getDropdownValues(warehouseDropdownOptions, 'warehouse dropdown');
            await utils.selectRandomValue(warehouseOptions, warehouseDropdownOptions, 'warehouse');
            await utils.waitForLoaderToDisappear(this.locator('loadingImage'));

            try {
                await rows.first().waitFor({ state: 'visible', timeout: 10000 });
            } catch (error) {
                console.log("No rows appeared after warehouse selection.");
            }

            rowCount = await rows.count();
        }

        expect(rowCount).toBeGreaterThan(0);
        console.log("Rows found in the Kendo grid: ", rowCount);
        const rowRadioButtons = this.locator('rowRadioButton');
        const radioButtonCount = await rowRadioButtons.count();
        expect(radioButtonCount).toBeGreaterThan(0);
        await rowRadioButtons.nth(Math.floor(Math.random() * radioButtonCount)).click();
        await this.locator('submitButton').first().click();
        await utils.waitForLoaderToDisappear(this.locator('loader'));
    }


}

module.exports = WRPage;