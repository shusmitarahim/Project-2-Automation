const confirmOrderLocator = require("../locators/confirmOrderLocator");

class ConfirmOrder {
  async verifyProductName() {
    const productName = await confirmOrderLocator.getItemNames();
    await browser.pause(1000);
    return productName;
  }

  async verifyTotalPrice() {
    const itemPrice = await confirmOrderLocator.getItemPrice();
    const tax = await confirmOrderLocator.getTAX();
    const totalPrice = await confirmOrderLocator.getTotalPrice();
    await browser.pause(1000);

    return {
      itemPrice,
      tax,
      totalPrice,
    };
  }

  async clickFinishBtn() {
    await confirmOrderLocator.finishBtn.click();
    await browser.pause(1000);
  }
  async clickBackHomeBtn() {
    await confirmOrderLocator.backHomeBtn.click();
  }
  async clickLogoutBtn() {
    await confirmOrderLocator.logoutBtn.click();
  }

  async confirmOrderMessage() {
    await this.clickFinishBtn();
    const data = await confirmOrderLocator.getOrderMessage();
    await browser.pause(2000);
    return data;
  }

  async clickHamburgerMenu() {
    await confirmOrderLocator.hamburgerMenu.click();
    await browser.pause(2000);
  }

  async logout() {
    await this.clickBackHomeBtn();
    await this.clickHamburgerMenu();
    await this.clickLogoutBtn();
    await browser.pause(2000);
  }
}
module.exports = new ConfirmOrder();