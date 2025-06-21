const resetAppStateLocator = require("../locators/resetAppStateLocator");

class ResetAppState {
  async clickHamburgerMenu() {
    await resetAppStateLocator.hamburgerMenu.click();
    await browser.pause(500);
  }
  async clickResetAppStateBtn() {
    await resetAppStateLocator.resetAppStateBtn.click();
    await browser.pause(500);
  }

  async clickCloseMenuBtn() {
    await resetAppStateLocator.closeMenuBtn.click();
    await browser.pause(500);
  }

  async ResetAppState() {
    await this.clickHamburgerMenu();
    await this.clickResetAppStateBtn();
    await this.clickCloseMenuBtn();
    await browser.pause(500);
  }
}
module.exports = new ResetAppState();
