class CheckOutLocator {
  get checkOutBtn() {
    return $("//button[contains(@id,'checkout')]");
  }
  get firstName() {
    return $('//input[@placeholder="First Name"]');
  }
  get lastName() {
    return $('//input[@id="last-name"]');
  }
  get postalCode() {
    return $('//input[@id="postal-code"]');
  }
  get continueBtn() {
    return $('//input[@id="continue"]');
  }
}
module.exports = new CheckOutLocator();
