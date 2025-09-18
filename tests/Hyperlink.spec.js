const{To_Check_hyperlink}= require('../pages/To_Check-hyperlink');
const{test}=require('@playwright/test');

test('Check the hyperlink at the bottom of the page',async({page})=>{
    const check_hyperlink=new To_Check_hyperlink(page);
    await page.goto('https://www.flipkart.com/');
    await check_hyperlink.checkHyperlink();
});