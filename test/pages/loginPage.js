const loginLocator = require("../locators/loginLocator");

class Login {
  async enterUserName(username) {
    await loginLocator.username.setValue(username);
    await browser.pause(300);
  }

  async enterPassword(password) {
    await loginLocator.password.setValue(password);
    await browser.pause(300);
  }

  async getErrorMessage() {
    const data = await loginLocator.getErrorMessageText();
    return data;
  }

  async clickSignInBtn() {
    await loginLocator.buttonSignIn.click();
    await browser.pause(300);
  }

  async doLogin(username, password) {
    await this.enterUserName(username);
    await this.enterPassword(password);
    await this.clickSignInBtn();
  }
}
module.exports = new Login();
