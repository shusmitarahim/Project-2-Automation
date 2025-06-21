class LoginLocator {
  get username() {
    return $('//input[@placeholder="Username"]');
  }
  get password() {
    return $('//input[@placeholder="Password"]');
  }

  get buttonSignIn() {
    return $('//input[@id="login-button"]');
  }

  get errorMessage() {
    return $('//h3[@data-test="error"]');
  }

  async getErrorMessageText() {
    return await this.errorMessage.getText();
  }
}
module.exports = new LoginLocator();
