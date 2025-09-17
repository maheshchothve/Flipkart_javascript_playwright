const { expect } = require('@playwright/test');

exports.MensPage = class MensPage {
    constructor(page) {
        this.page = page;
        this.adidasFilter = 'div._6i1qKy';
        this.firstShoe = 'a.WKTcLC';
    }

    async filterByAdidas() {
        const options = await this.page.$$(this.adidasFilter);
        for (const option of options) {
            const text = await option.textContent();
            if (text && text.includes('ADIDAS')) {
                await Promise.all([
                    this.page.waitForLoadState('networkidle'),
                    option.click()
                ]);
                break;
            }
        }
        console.log('Adidas filter applied');
    }

    async selectFirstShoe() {
        const firstShoe = this.page.locator(this.firstShoe).first();
        await firstShoe.click();
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForTimeout(2000); 
        console.log('New tab opened');
    }
};
