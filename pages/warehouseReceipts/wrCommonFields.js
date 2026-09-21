const { expect } = require('@playwright/test');
const utils = require('../../utils/CommonUtils');
const LocatorHelper = require("../../utils/LocatorHelper");
const wrData = require('../../data/warehouseReceiptData.json');
const warehouseReceiptLocators = require('./warehouseReceiptLocators');

class WRCommonFields extends LocatorHelper {

    constructor(page) {
        super(page, warehouseReceiptLocators);
    }

    async selectLocation(fieldKey) {
        const locationField = await this.locator(fieldKey).first();
        await expect(locationField).toBeVisible();

        let location = '';
        try {
            await expect.poll(
                async () => (await locationField.textContent())?.trim() || '',
                { timeout: 10000, message: 'Waiting for the location field to be populated' }
            ).not.toBe('');
            location = ((await locationField.textContent()) || '').trim();
        } catch {
            location = '';
        }

        console.log('Current location:', location);
        //? - it is optional chaining only call this if location is not null or undefined.
        if (location?.trim()) {
            console.log('Location is auto-populated:', location);
            return location.trim();
        }
        else {
            await this.locator(fieldKey).click();
            const locationOptions = this.locator('locationDropdownList');
            const locations = await utils.getDropdownValues(locationOptions, 'location dropdown');
            const selectedLocation = await utils.selectRandomValue(locations, locationOptions, 'location');
            await this.page.keyboard.press('Escape');
            return selectedLocation;
        }
    }


    async selectShipper() {
        const shipper = await this.locator('shipperNameField').textContent();
        console.log('Current shipper:', shipper);
        if (shipper == null || shipper === "") {
            console.log('Shipper is not specified. Clicking to select shipper.');
            await this.locator('shipperNameField').click();
            const shipperOptions = this.locator('formDropdownList');
            const shippers = await utils.getDropdownValues(shipperOptions, 'shipper dropdown');
            await utils.selectRandomValue(shippers, shipperOptions, 'shipper');
        }
        else {
            console.log('Shipper is specified:', shipper);
        }
        await this.selectLocation('shipperLocation');
        await this.selectConsigneeMultiCheckboxDropdownContact('shipperpointOfContact');
    }
    async closeDropdown() {
        const closeButton = this.locator('upArrowBlue');

        if (await closeButton.isVisible().catch(() => false)) {
            await closeButton.click();
        } else {
            await this.page.keyboard.press('Escape');
        }
    }

    async pointOfContact(fieldKey) {
        const poc = this.locator(fieldKey).first();

        try {
            await poc.waitFor({ state: 'visible', timeout: 20000 });
        } catch (error) {
            if (error.name === 'TimeoutError') {
                console.log(`Point of Contact '${fieldKey}' is not available; continuing.`);
                return null;
            }
            throw error;
        }

        // Check if Point of Contact is already populated
        const contact = (await poc.textContent())?.trim() || '';

        if (contact) {
            console.log('Point of Contact is auto-populated:', contact);
            return contact;
        }

        // Check if field is disabled
        const isDisabled =
            (await poc.getAttribute('aria-disabled')) === 'true' ||
            !(await poc.isEnabled());

        if (isDisabled) {
            console.log(`Point of Contact '${fieldKey}' is disabled; continuing.`);
            return null;
        }

        // Open dropdown
        await poc.click();

        const pocOptions = this.locator('locationDropdownList');
        const pocs = await utils.getDropdownValues(
            pocOptions,
            'point of contact dropdown'
        );

        // No options → close dropdown and continue
        if (!pocs?.length) {
            console.log('Point of Contact dropdown is empty; closing dropdown.');
            await this.closeDropdown();
            return null;
        }

        // Select random Point of Contact
        const selectedContact = await utils.selectRandomValue(
            pocs,
            pocOptions,
            'point of contact'
        );

        // Close dropdown after selection
        await this.closeDropdown();

        return selectedContact;
    }

    async getDropdownSelectedText(dropdown) {
        const selectedValue = dropdown.locator('.mat-select-value-text, .mat-select-min-line').first();

        if (await selectedValue.isVisible().catch(() => false)) {
            return ((await selectedValue.innerText()) || '').trim();
        }

        return ((await dropdown.innerText().catch(() => dropdown.textContent())) || '').trim();
    }

    async selectStatus() {
        const status = await this.locator('statusField').textContent();
        if (status == null || status === "") {
            console.log('Status is not specified. Clicking to select status.');
            await this.locator('statusField').click();
            const statusOptions = this.locator('DropdownList');
            const statuses = await utils.getDropdownValues(statusOptions, 'status dropdown');
            await utils.selectRandomValue(statuses, statusOptions, 'status');
        }
        else {
            console.log('Status is specified:', status);
        }
    }

    async selectConsigneeMultiCheckboxDropdownContact(fieldKey) {
        const poc = this.locator(fieldKey).first();

        try {
            await poc.waitFor({ state: 'visible', timeout: 80000 });
            await expect(poc).toBeEnabled({ timeout: 80000 });
        } catch (error) {
            throw new Error(`Point of Contact '${fieldKey}' did not become visible and enabled after selecting consignee/location.`);
        }

        await this.page.waitForTimeout(6000); // Small delay to ensure the dropdown is ready
         const contact = await this.locator(fieldKey).textContent();
        if (contact) {

            console.log('Point of Contact already populated:', contact);
            return contact;
        }    

        await poc.click();

        const pocOptions = this.locator('consigneeContactCheckboxDropdown');
        const pocs = await utils.getDropdownValues(
            pocOptions,
            'point of contact dropdown'
        );

        if (!pocs?.length) {
            console.log('No Point of Contact options found; closing dropdown.');
            await this.closeDropdown();
            return null;
        }

        await utils.selectRandomValue(pocs, pocOptions, 'point of contact');
        await this.closeDropdown();

        return await this.getDropdownSelectedText(poc) || null;
    }
    async closeDropdown() {
        const closeButton = this.locator('upArrowBlue');

        if (await closeButton.isVisible().catch(() => false)) {
            await closeButton.click();
        } else {
            await this.page.keyboard.press('Escape');
        }
    }



    async selectConsignee() {
        const consignee = await this.locator('consigneeNameField').textContent();
        if (!consignee || consignee === "") {
            console.log('Consignee is not specified. Clicking to select consignee.');
            await this.locator('consigneeNameField').click();
            const consigneeOptions = this.locator('formDropdownList');
            const consignees = await utils.getDropdownValues(consigneeOptions, 'consignee dropdown');
            await utils.selectRandomValue(consignees, consigneeOptions, 'consignee');
        }
        else {
            console.log('Consignee is specified:', consignee);
        }
        await this.selectLocation('consigneeLocation');
        await this.selectConsigneeMultiCheckboxDropdownContact('consigneepointOfContact');

    }
    async selectAgent() {
        const agentField = this.locator('agentNameField');
        const agent = await agentField.inputValue().catch(() => agentField.textContent());
        if (!agent || agent === "") {
            console.log('Agent is not specified. Clicking to select agent.');
            await agentField.click();
            const agentOptions = this.locator('formDropdownList');
            const agents = await utils.getDropdownValues(agentOptions, 'agent dropdown');
            await utils.selectRandomValue(agents, agentOptions, 'agent');
        }
        else {
            console.log('Agent is specified:', agent);
        }
        await this.selectLocation('agentLocation');
        await this.selectConsigneeMultiCheckboxDropdownContact('agentpointOfContact');
    }
    async selectSupplier() {
        const supplier = await this.locator('supplierNameField').textContent();
        if (!supplier || supplier === "") {
            console.log('Supplier is not specified. Clicking to select supplier.');
            await this.locator('supplierNameField').click();
            const supplierOptions = this.locator('formDropdownList');
            const suppliers = await utils.getDropdownValues(supplierOptions, 'supplier dropdown');
            await utils.selectRandomValue(suppliers, supplierOptions, 'supplier');
        }
        else {
            console.log('Supplier is specified:', supplier);
        }
        await this.selectLocation('supplierLocation');
    }
}




module.exports = WRCommonFields;