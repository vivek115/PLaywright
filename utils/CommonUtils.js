class CommonUtils {


    static async wait(seconds) {

        await new Promise(resolve =>
            //I promise I will complete this task in the future
            setTimeout(resolve, seconds * 1000)
            //Run something after a certain amount of time
            //resolve - The waiting time is finished. Continue the next step.
        );

    };

    static getTimeStamp() {

        return Date.now();

    }

    static isEmpty(value) {

        return value === null || value === undefined || value === "";

    }

    static async waitForLoaderToDisappear(locator, timeout = 100000) {
        await locator.first().waitFor({
            state: 'hidden',
            timeout: Math.min(timeout, 30000)
        });
    }


    static async getDropdownValues(locator, dropdownName = 'dropdown') {
        if (!locator) {
            throw new Error(`${dropdownName} locator is null or undefined.`);
        }

        try {
            await locator.first().waitFor({ state: 'visible', timeout: 10000 });
        } catch (error) {
            if (error.name === 'TimeoutError') {
                console.log(`No options appeared in the ${dropdownName}; continuing.`);
                return [];
            }
            throw error;
        }
        const values = await locator.allTextContents();

        const dropdownValues = values
            .map(value => value.trim())
            .filter(value => value !== '');

        return dropdownValues;
    }
    static async randomFunction(value) {
        const randomvalue = Math.floor(Math.random() * value.length);
        return value[randomvalue];
    }
    static async selectRandomValue(values, options, valueName = 'dropdown value') {
        if (!Array.isArray(values) || values.length === 0) {
            console.log(`No ${valueName} is available; continuing.`);
            return null;
        }
        if (!options) {
            throw new Error(`Cannot select a random ${valueName}: dropdown locator is null or undefined.`);
        }

        const randomIndex = Math.floor(Math.random() * values.length);
        const randomValue = values[randomIndex];

        console.log('Randomly selected value:', randomValue);

        const randomOption = options
            .filter({ hasText: randomValue })
            .first();

        await randomOption.waitFor({ state: 'visible' });
        await randomOption.scrollIntoViewIfNeeded();
        await randomOption.click();

        console.log('Selected value:', randomValue);

        return randomValue;
    }

    static async randomDimension(min = 1, max = 100) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }



}

module.exports = CommonUtils;


