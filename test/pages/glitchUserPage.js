const glitchUserLocator = require("../locators/glitchUserLocator");

class Account {
  
  async clickProductSortOption() {
    await glitchUserLocator.productSortOptionBTn.click();
    await browser.pause(2000);
  }

  async clickZtoABtn() {
    await glitchUserLocator.zToaBtn.click();
    await browser.pause(2000);
  }
  async clickAddToCartBtnForTshirt() {
    await glitchUserLocator.addToCartBtnForTshirt.click();
    await browser.pause(2000);
  }

  async clickCartList() {
    await glitchUserLocator.cartList.click();
    await browser.pause(5000);
  }

  async clickCheckoutBtn() {
    await glitchUserLocator.checkOutBtn.click();
    await browser.pause(500);
  }
  async enterFirstName(firstName) {
    await glitchUserLocator.firstName.addValue(firstName);
    await browser.pause(1000);
  }
  async enterLastName(lastName) {
    await glitchUserLocator.lastName.addValue(lastName);
    await browser.pause(1000);
  }

  async enterPostalcode(postalCode) {
    await glitchUserLocator.postalCode.addValue(postalCode);
    await browser.pause(1000);
  }
  async clickContinueButton() {
    await glitchUserLocator.continueBtn.click();
    await browser.pause(1000);
  }
  async clickFinishBtn() {
    await glitchUserLocator.finishBtn.click();
    await browser.pause(1000);
  }
  async clickBackHomeBtn() {
    await glitchUserLocator.backHomeBtn.click();
    await browser.pause(1000);
  }

  async clickLogoutBtn() {
    await glitchUserLocator.logoutBtn.click();
    await browser.pause(1000);
  }

  async login(userName, password) {
    //await this.clickAccountIcon()
    await this.enteruserName(userName);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  async ResetAppState() {
    await this.clickHamburgerMenu();
    await this.clickResetAppStateBtn();
    await this.clickCloseMenuBtn();
  }

  async sortAndSelectTshirt() {
    await this.clickProductSortOption();
    await this.clickZtoABtn();
    await this.clickAddToCartBtnForTshirt();
    await this.clickCartList();
  }

  async checkoutInformation(firstName, lastName, postalCode) {
    await this.clickCheckoutBtn();
    await this.enterFirstName(firstName);
    await this.enterLastName(lastName);
    await this.enterPostalcode(postalCode);
    await this.clickContinueButton();
    await browser.pause(200);
  }

  async confirmOrderMessage() {
    await this.clickFinishBtn();
    const data = await glitchUserLocator.getOrderMessage();
    await browser.pause(3000);
    return data;
  }

  async logout() {
    await this.clickBackHomeBtn();
    await this.clickHamburgerMenu();
    await this.clickLogoutBtn();
    await browser.pause(4000);
  }
}
module.exports = new Account();
