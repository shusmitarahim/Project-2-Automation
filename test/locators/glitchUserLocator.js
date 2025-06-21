class AccountLocator {
  get userName() {
    return $('//input[@placeholder="Username"]');
  }
  get password() {
    return $('//input[@placeholder="Password"]');
  }

  get buttonLogIn() {
    return $('//input[@id="login-button"]');
  }

  get hamburgerMenu() {
    return $("//button[contains(@id,'react-burger-menu')]");
  }

  get resetAppStateBtn() {
    return $("//a[contains(@id,'reset_sidebar')]");
  }

  get closeMenuBtn() {
    return $("//button[contains(@id,'cross-btn')]");
  }

  get productSortOptionBTn() {
    return $('//select[@class="product_sort_container"]');
    //return $('//option[@value="az"]')
  }
  get zToaBtn() {
    return $('//option[@value="za"]');
  }

  get addToCartBtnForTshirt() {
    return $("//button[contains(@id,'test.allthethings()')]");
  }



  get cartList() {
    return $("//span[contains(@class,'cart_badge')]");
  }

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
  get finishBtn() {
    return $('//button[@id="finish"]');
  }
  get orderMessage() {
    return $('//div[@class="complete-text"]');
  }

  async getOrderMessage() {
    return await this.orderMessage.getText();
  }

  get backHomeBtn() {
    return $('//button[@id="back-to-products"]');
  }
  get logoutBtn() {
    return $("//a[contains(@id,'logout')]");
  }
  //   get itemName() {
  //     return $$('//div[@data-test="inventory-item-name"]');
  //   }
}
module.exports = new AccountLocator();
