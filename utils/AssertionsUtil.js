import {expect} from '@playwright/test'

//@playwright/test(it is used as Toolbox) - it is a testing framework that is built on top of Playwright.  
// It provides a set of APIs and utilities for writing and running tests in a 
// structured manner. It includes features like test runners, assertions, fixtures, and
//  reporting, making it easier to write and manage tests for web applications.

// Export- Give
//Import- Take

export default class AssertionsUtil {

    async verfiyElementVisible(locator){
        await expect(locator).toBeVisible();

    }

    async verifyElementHidden(locator){
        await expect(locator).toBeHidden();
    }

    async verfiyElementEnabled(locator){
        await expect(locator).toBeEnabled();
    }

    async verfiyElementDisabled(locator){
        await expect(locator).toBeDisabled();
    }
    async verifyText(locator, expectedText){
        await expect(locator).toHaveText(expectedText);
    }
    // toHavetext = The entire text must match exactly
    async verifyContainsText(locator, expectedText){
        await expect(locator).toContainText(expectedText);
        //toContainText - The text only needs to include the expected words somehwere 
    }
      async verfiyValue(locator, expectedValue){
        await expect(locator).toHaveValue(expectedValue);
      }
      async verifyURL(page,expectedURL){
        await expect(page).toHaveURL(expectedURL);
    }

    async verifyTitle(page,expectedTitle){
        await expect(page).toHaveTitle(expectedTitle);
    }       

    async verfiyCount(locator, expectedCount){
        await expect(locator).toHaveCount(expectedCount);
    }       

    async verifyAttribute(locator, attributeName, expectedValue){
        await expect(locator).toHaveAttribute(attributeName, expectedValue);
    }   
//  verifyAttribute() is used whenever 
// you need to verify that an HTML element has the correct attribute value.
    async verifyChecked(locator){
        await expect(locator).toBeChecked();
    }

    async verifyNotChecked(locator){
        await expect(locator).not.toBeChecked();
    }



}