class LocatorHelper {

    constructor(page, locators = {}) {
        this.page = page;
        this.locators = { ...locators };

        Object.keys(this.locators).forEach(locatorName => {
            this[locatorName] = page.locator(this.locators[locatorName]);
        });
    }

    setLocators(locators = {}) {
        this.locators = { ...this.locators, ...locators };

        Object.keys(locators).forEach(locatorName => {
            this[locatorName] = this.page.locator(this.locators[locatorName]);
        });
    }

    locator(locatorName) {
        const selector = this.locators[locatorName] || locatorName;

        if (!selector) {
            throw new Error(`Locator not found: ${locatorName}`);
        }

        return this.page.locator(selector);
    }
}

module.exports = LocatorHelper;
