const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.closeLoginPopup = 'button._2KpZ6l._2doB4z'; // Close login popup
        this.searchbox = '//input[@type="text" and @name="q"]';
        this.sportsShoes = 'a:has-text("Sports Shoes")';
    }

    async openFlipkart() {
        await this.page.goto('https://www.flipkart.com/');
        if (await this.page.locator(this.closeLoginPopup).isVisible()) {
            await this.page.click(this.closeLoginPopup);
        }
        await expect(this.page).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
        console.log('Flipkart home page opened successfully');
    }

    async navigateToSportsShoes() {
        await this.page.fill(this.searchbox,'mens shoes');
        await this.page.keyboard.press('Enter');
        console.log('Search for mens shoes');
        //await expect(this.page).toHaveURL(/sports-shoes/);
    }
};
