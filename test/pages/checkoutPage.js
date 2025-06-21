const checkOutLocator = require("../locators/checkoutLocator");

class CheckOutPage {
 
  async clickCheckoutBtn() {
    await checkOutLocator.checkOutBtn.click();
    await browser.pause(500);
  }
  async enterFirstName(firstName) {
    await checkOutLocator.firstName.addValue(firstName);
    await browser.pause(500);
  }
  async enterLastName(lastName) {
    await checkOutLocator.lastName.addValue(lastName);
    await browser.pause(500);
  }

  async enterPostalcode(postalCode) {
    await checkOutLocator.postalCode.addValue(postalCode);
    await browser.pause(500);
  }

   async insertCheckoutInformation(firstName, lastName, postalCode) {
    await this.clickCheckoutBtn();
    await this.enterFirstName(firstName);
    await this.enterLastName(lastName);
    await this.enterPostalcode(postalCode);
    await this.clickContinueButton();
  }

  async clickContinueButton() {
    await checkOutLocator.continueBtn.click();
    await browser.pause(500);
  }
  async clickFinishBtn() {
    await checkOutLocator.finishBtn.click();
    await browser.pause(500);
  }
 
}
module.exports = new CheckOutPage();
