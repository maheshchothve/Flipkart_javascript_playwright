import { expect, Page } from '@playwright/test';

export class To_Check_hyperlink {
    constructor(page) {
        this.page = page;
        this.hyperlink = '//span[@class="pCGSTE"]';
    }

    async checkHyperlink(){
        const link = await this.page.locator(this.hyperlink);
        await this.page.waitForTimeout(2000);
        await link.scrollIntoViewIfNeeded();
        const text = await link.textContent();
        expect(text).toContain('© 2007-');
         await this.page.screenshot({path:'screenshot/screenshot.png',fullPage:true});
    }
}