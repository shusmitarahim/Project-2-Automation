const addToCartLocator = require("../locators/addToCartLocator");

class AddToCart {
  async clickAddToCartBtnforBackpack() {
    await addToCartLocator.addToCartBtnForBackpack.click();
    await browser.pause(500);
  }
  async clickAddToCartBtnForBikelight() {
    await addToCartLocator.addToCartBtnForBikeLight.click();
    await browser.pause(1000);
  }
  // async scrollToCreditSelection() {
  //   await standardUserLocator.addToCartBtnForBoltTshirt.scrollIntoView({
  //     behavior: "smooth",
  //   });
  //await browser.pause(3000);
  //}
  async clickAddToCartBtnForBolttshirt() {
    await addToCartLocator.addToCartBtnForBoltTshirt.click();
    await browser.pause(500);
  }
  async clickCartList() {
    await addToCartLocator.cartList.click();
    await browser.pause(500);
  }

  get backHomeBtn() {
    return $('//button[@id="back-to-products"]');
  }

  async addToCartThreeItems() {
    await this.clickAddToCartBtnforBackpack();
    await this.clickAddToCartBtnForBikelight();
    await this.clickAddToCartBtnForBolttshirt();
    await this.clickCartList();
  }
}
module.exports = new AddToCart();
