const { expect } = require('@playwright/test');
const utils = require('../../utils/CommonUtils');
const LocatorHelper = require('../../utils/LocatorHelper');
const LoginPageLocators = require('./loginPageLocators');
const loginData = require('../../data/loginData.json');
const env = require('../../config/env.prod.json');

class LoginPage extends LocatorHelper {

    constructor(page) {
        super(page, LoginPageLocators);
    }

    async navigateToLoginPageURL() {
        await this.page.goto(env.baseUrl, { waitUntil: 'domcontentloaded' });
        await expect(this.locator('usernameField')).toBeVisible();
    }
    async verfiyLoginPageTitle() {
        const logText = await this.locator('loginLogo').textContent();
        expect(logText).toContain(loginData.DataVerify.appTitle, "Login Page Title does not match expected value");
        console.log('Login Page Title verified successfully:', logText);

    }
    async validLogin() {
        await this.locator('usernameField').fill(env.username);
        await this.locator('passwordField').fill(env.password);
        const rememberMeCheckbox = this.locator('rememberMeCheckbox');
        if (!await rememberMeCheckbox.isChecked()) {
            await this.locator('rememberMeLabel').click();
        }
        await expect(rememberMeCheckbox).toBeChecked();
        const loginButton = this.locator('loginButton');
        await expect(loginButton).toBeEnabled();
        await loginButton.click();
        await utils.waitForLoaderToDisappear(this.locator('loginLoader'));
    }
    async verifyUserLandingToWarehouseOrchestratorPage() {
        const currentUrl = this.page.url();
        console.log('Current URL after login:', currentUrl);

        if (currentUrl == env.postLoginUrl) {

            console.log('User has successfully landed on the Warehouse Orchestrator page:', currentUrl);

        }

        else {
            await this.locator('navLink').click();
            await this.locator('warehouseReceiptsTitle').click();
            await utils.waitForLoaderToDisappear(this.locator('loaderNewTrue'));
            const currentUrl = this.page.url();
            console.log('Current URL after navigation:', currentUrl);
            expect(currentUrl).toBe(env.postLoginUrl, "User did not land on the expected Warehouse Orchestrator page");
            console.log('User has successfully landed on the Warehouse Orchestrator page:', currentUrl);
        }
    }
    async logout() {
        await this.locator('userImage').click();
        await this.locator('logoutButton').click();
        await utils.waitForLoaderToDisappear(this.locator('loader'));
        const currentUrl = this.page.url();
        console.log('Current URL after logout:', currentUrl);
        expect(currentUrl).toBe(env.baseUrl, "User did not land on the expected login page after logout");

    }



}
module.exports = LoginPage;


