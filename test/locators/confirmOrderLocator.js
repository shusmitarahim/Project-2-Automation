class ConfirmOrderLocator {
  get hamburgerMenu() {
    return $("//button[contains(@id,'react-burger-menu')]");
  }
  get itemName() {
    return $$('//div[@data-test="inventory-item-name"]');
  }

  async getItemNames() {
    const items = [];

    for (const item of await this.itemName) {
      const text = await item.getText();
      items.push(text);
    }

    return items;
  }

  get itemPrice() {
    return $$('//div[@data-test="inventory-item-price"]');
  }

  async getItemPrice() {
    const prices = [];

    for (const el of await this.itemPrice) {
      const text = await el.getText();
      prices.push(parseFloat(text.replace("$", "")));
    }

    return prices;
  }

  async getItemPrice() {
    const prices = [];

    for (const el of await this.itemPrice) {
      const text = await el.getText();
      prices.push(parseFloat(text.replace("$", "")));
    }

    return prices;
  }

  get tax() {
    return $('//div[@data-test="tax-label"]');
  }

  async getTAX() {
    const text = await this.tax.getText();
    return parseFloat(text.replace("Tax: $", ""));
  }

  get TotalPrice() {
    return $('//div[@data-test="total-label"]');
  }

  async getTotalPrice() {
    const text = await this.TotalPrice.getText();
    return parseFloat(text.replace("Total: $", ""));
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
}
module.exports = new ConfirmOrderLocator();
