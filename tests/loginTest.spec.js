const { test, expect } = require('./BaseTest');

test('Login test', async ({ loginPage, testConfig }) => {
    await loginPage.navigateToLoginPageURL();
    await loginPage.verfiyLoginPageTitle();
    await loginPage.validLogin();
    await loginPage.verifyUserLandingToWarehouseOrchestratorPage();
    await loginPage.logout();
});

