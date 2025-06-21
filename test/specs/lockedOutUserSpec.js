const login = require("../pages/loginPage");
const username = "locked_out_user";
const password = "secret_sauce";
const expectedError = "Epic sadface: Sorry, this user has been locked out.";

describe("Saucedemo Login Activity Tests As a Locked_Out_User", () => {
  it("Verify the error message with locked out user", async () => {
    await login.doLogin(username, password);
    const errorMessage = await login.getErrorMessage();
    console.log("errorMessage:", errorMessage);
    try {
      expect(errorMessage).toEqual(expectedError);
    } catch (error) {
      console.error("Assertion failed:", error);
      throw error; // re-throw if you want the test to fail
    }
  });
});
