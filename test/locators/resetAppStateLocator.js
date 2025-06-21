class ResetAppStateLocator {
  get hamburgerMenu() {
    return $("//button[contains(@id,'react-burger-menu')]");
  }

  get resetAppStateBtn() {
    return $("//a[contains(@id,'reset_sidebar')]");
  }
  get closeMenuBtn() {
    return $("//button[contains(@id,'cross-btn')]");
  }
}
module.exports = new ResetAppStateLocator();
