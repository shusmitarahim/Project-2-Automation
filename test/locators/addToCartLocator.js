class AddToCartLocator {
  get addToCartBtnForBackpack() {
    return $("//button[contains(@id,'backpack')]");
  }

  get addToCartBtnForBikeLight() {
    return $("//button[contains(@id,'bike-light')]");
  }

  get addToCartBtnForBoltTshirt() {
    return $("//button[contains(@id,'bolt-t-shirt')]");
  }

  get cartList() {
    return $("//span[contains(@class,'cart_badge')]");
  }
}
module.exports = new AddToCartLocator();
