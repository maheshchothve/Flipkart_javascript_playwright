import { test, expect } from '@playwright/test';

test('Add review for the product', async ({ page }) => {
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
    await page.screenshot({path:'screenshots/Added_Review.png',fullPage:true});
});