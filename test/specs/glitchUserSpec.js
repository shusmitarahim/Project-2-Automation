const login = require("../pages/loginPage");
const resetAppState = require("../pages/resetAppState");
const sort = require("../pages/glitchUserPage");
const checkout = require("../pages/checkoutPage");
const verifyOrder = require("../pages/confirmOrderPage");
const confirmOrder = require("../pages/confirmOrderPage");

const userName = "performance_glitch_user";
const password = "secret_sauce";
const firstName = "ostad";
const lastName = "batch ten";
const postalCode = "1112";
const orderMessage =
  "Your order has been dispatched, and will arrive just as fast as the pony can get there!";

const expectedProducts = ["Test.allTheThings() T-Shirt (Red)"];


describe("Saucedemo Website Activity Tests as a Performance_Glitch_USER", () => {
  it("Successfully login with valid credentials", async () => {
    await login.doLogin(userName, password);
  });

  it("Verify AppState Reset", async () => {
    await resetAppState.ResetAppState();
  });

  it("verify add to cart functionality", async () => {
    await sort.sortAndSelectTshirt();
  });

  it("Verify Checkout Functionality", async () => {
    await checkout.insertCheckoutInformation(firstName, lastName, postalCode);
  });

  it("Check Product Name", async () => {
    const products = await verifyOrder.verifyProductName();

    let matchedCount = 0;
    for (let i = 0; i < products.length; i++) {
      const currentProduct = products[i];
      try {
        expect(expectedProducts).toContain(currentProduct);
        matchedCount++;
      } catch (error) {
        console.log("Product not found yet");
      }
    }
    if (matchedCount == 0) {
      throw new error("product not found");
    }
  });

  it("Verify Total Price", async () => {
    const prices = await verifyOrder.verifyTotalPrice();

    let itemPriceTotal = 0;
    for (let i = 0; i < prices.itemPrice.length; i++) {
      itemPriceTotal += prices.itemPrice[i];
    }

    console.log("itemPrice " + itemPriceTotal);
    const tax = parseFloat(prices.tax);
    console.log("tax " + tax);

    const totalPrice = parseFloat(prices.totalPrice);
    console.log("totalPrice " + totalPrice);

    const expectedTotal = itemPriceTotal + tax;

    expect(parseFloat(expectedTotal.toFixed(2))).toEqual(
      parseFloat(totalPrice.toFixed(2))
    );
  });

  it("Verify Confirm Order Message", async () => {
    const text = await confirmOrder.confirmOrderMessage();
    console.log("Order message " + text);

    expect(text).toEqual(orderMessage);
  });

  it("ResetAppState And Logout", async () => {
    await resetAppState.ResetAppState();
    await confirmOrder.logout();
  });
});
