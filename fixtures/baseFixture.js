const base = require('@playwright/test');
const LoginPage = require('../pages/LoginPages/loginPage');

exports.test = base.test.extend({
    // This loggedInPage is the fixture name  will be available in all tests that use this base fixture
    loggedInPage: async ({page}, use) => {
        
        const login = new LoginPage(page);
        // i have created a login page object and now i want to use it in my test
        await login.goto();
        await login.login();
        await use(page);
    }
,
    loggedOutPage: async ({page}, use) => {
        
    } ,

    
});