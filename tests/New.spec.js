import { test, expect } from '@playwright/test';

test("check buttons on the page",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const button = page.locator("//input[@id='female']");
    await button.check();
    await page.screenshot({path:'screenshot/checked_button.png'});
})