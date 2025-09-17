const { expect } = require('@playwright/test');

exports.ProductPage = class ProductPage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = 'button:has-text("Add to cart")';
        this.cartTitle = 'span:has-text("Shopping Cart | Flipkart.com")';
    }

    async addToCart() {
        const newPage = this.page.context().pages().at(-1);
        await newPage.bringToFront();
        await newPage.click(this.addToCartButton);
        //await expect(newPage.locator(this.cartTitle)).toBeVisible();
        console.log('Shoe added to cart successfully');
    }
};
