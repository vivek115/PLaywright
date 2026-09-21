const LoginPageLocators = {
    loginLogo: "//div[@class='form-content']//p[@class='company-name']",
    usernameField: "//input[@formcontrolname='email']",
    passwordField: "//input[@formcontrolname='password']",
    rememberMeCheckbox: "input[type='checkbox']",
    rememberMeLabel: "label:has-text('Remember Me')",
    loginButton: "button:has-text('Sign In')",
    initialPageLoader: ".loader-new mainloadingicon",
    loginLoader: ".loader-new.ng-star-inserted",
    navLink: ".dropdown-heading",
    dropdownHeadingSelector: "//a//span[@class='mat-tooltip-trigger option-item-text']",
    warehouseReceiptsTitle: "//a//span[contains(@class,'mat-tooltip-trigger') and contains(@class,'option-item-text') and normalize-space()='Warehouse Receipts']",
    loaderNewTrue: "//div[contains(@class,'k-loading-image ng-star-inserted')]",
    itemsNav: "//grid-page-info//div[@class='itemsNav']",
    userImage:"//app-header//li[@class='userImage']",
    loader: "//div[@class='loader-new true']",
    logoutButton: "//app-header//a[contains(@class,'dropdown-item') and contains(text(),'Logout')]"

}
module.exports = LoginPageLocators;