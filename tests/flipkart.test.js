const { test } = require('@playwright/test');
const { HomePage } = require('../pages/homePage');
const { MensPage } = require('../pages/mensPage');
const { ProductPage } = require('../pages/productPage');

test('Flipkart - Add Adidas shoes to cart', async ({ page }) => {
    const homePage = new HomePage(page);
    const mensPage = new MensPage(page);
    const productPage = new ProductPage(page);

    // Step 1: Open Flipkart
    await homePage.openFlipkart();

    // Step 2: Hover over Men > Sports Shoes
    await homePage.navigateToSportsShoes();

    // Step 3: Filter Adidas
    await page.waitForTimeout(2000);
    await mensPage.filterByAdidas();

    // Step 4: Select first shoe
    await mensPage.selectFirstShoe();

    // Step 5: Add to cart
    await productPage.addToCart();

    await page.screenshot({path:'test-results/final.png',fullPage:true  });
});
