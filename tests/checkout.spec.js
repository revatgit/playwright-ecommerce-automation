const { test, expect } = require('@playwright/test');

import { LoginPage } from "../.github/workflows/pages/LoginPage.js";
import { HomePage } from "../.github/workflows/pages/HomePage.js";
import { CartPage } from "../.github/workflows/pages/CartPage.js";  
const user = require('../test-data/users.json');

test('Checkout Tests', async ({ page }) => {
    let loginPage;
    let homePage;
    let cartPage;

    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    cartPage = new CartPage(page);


    await loginPage.navigate();
    // perform login using credentials pulled from JSON file
    await loginPage.login(user.validUser.email, user.validUser.password);

    // search for a laptop on the home page
    await homePage.searchProductName('laptop');

    await cartPage.addProductToCart();
    await cartPage.openCart();

    // verify we are on the cart page
    await expect(page).toHaveURL(/cart/);
    await expect(page.locator('h1')).toContainText('Shopping cart');
});