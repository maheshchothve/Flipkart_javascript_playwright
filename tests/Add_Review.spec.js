import { test, expect } from '@playwright/test';

test.skip('Add review for the product', async ({ page }) => {
   await page.goto("https://automationexercise.com/");
   await page.waitForTimeout(5000);
   await page.click("//a[@href='/products']");
   await page.click("//a[@href='/product_details/31']");
   await page.locator("#name").fill("Mahesh");
   await page.fill("#email", "mahesh@example.com");
   await page.fill("//textarea[@name='review']", "Great product, highly recommend!");
    await page.click("//button[@id='button-review']");  
    const thankYouMessage = await page.locator("//div[@class='alert-success alert']/span").innerText();
    expect(thankYouMessage).toContain("Thank you for your review");
    await page.screenshot({path:'screenshot/Added_Review.png',fullPage:true});
});

test('verify the pop-up', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    page.on('dialog',async dialog=>{
       expect(dialog.message()).toContain("Please enter your name");
        expect(dialog.type()).toBe("prompt");
        await dialog.accept("John Doe");
    })
    await page.locator("//button[normalize-space()='Prompt Alert']").click();
    await expect(page.locator('//p[@id="demo"]')).toHaveText("Hello John Doe! How are you today?");
    await page.screenshot({path:'screenshot/prompt alert.png'});
    await page.waitForTimeout(5000);
    await page.screenshot({path:'screenshot/prompt_alert.png'});


});