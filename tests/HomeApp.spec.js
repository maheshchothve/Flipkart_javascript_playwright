const { test, expect } = require('@playwright/test');
const { Hover, hover } = require('../pages/Hover');

test('hover over the home and furniture and click on kitchen and dining', async ({ page }) => {
    const hover = new Hover(page);

    // Step 1: Open Flipkart
    await page.goto('https://www.flipkart.com/');

    // Step 2: Hover over the Home & Furniture section
    await hover.hover_home_and_furniture();
    expect(await page.title()).toBe("Kitchen Cookware(किचन कुकवेयर): Buy Kitchen Utensils Online in India | Free Shipping");
    await page.screenshot({ path: 'test-results/hover_result.png' });
    await page.waitForTimeout(3000); // wait for 3 seconds to observe the result
    console.log('Test completed successfully');
});