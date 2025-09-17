const{expect}=require('@playwright/test');

exports.Hover = class Hover {
    constructor(page) {
        this.page = page;
        this.hover_homeApplicances = "//div[@class='_3sdu8W emupdz']/div[@aria-label='Home & Furniture']";
        this.options_for_furniture = '//div[@class="_1UgUYI _2eN8ye"] /div[1]/object/a';
    }
    async hover_home_and_furniture() {
        await this.page.hover(this.hover_homeApplicances);
        const options = await this.page.$$(this.options_for_furniture);
        for (const option of options) {
            await this.page.waitForTimeout(2000);
            const text = await option.textContent();
            console.log(`Hovered over option: ${text}`);
            if (text && text.includes('Kitchen & Dining')) {
                await option.click();
                console.log('Clicked on Kitchen & Dining');
                break;
            }
        }
    }
}
