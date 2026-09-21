const { test, expect } = require('./BaseTest');

test.describe('Warehouse receipts', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigateToLoginPageURL();
        await loginPage.validLogin();
        await loginPage.verifyUserLandingToWarehouseOrchestratorPage();
    });

    test('Create warehouse receipt', async ({  wrPage }) => {
        await wrPage.verifyWRForm();
        await wrPage.createWarehouseReceipts();
        await wrPage.createPackage();
        await wrPage.logout();
        
    });
});