const { test, expect } = require('@playwright/test');

test('autosearch for google search', async ({ page }) => {
    await  page.goto('https://www.google.com/');

    await page.fill('//textarea[@aria-label="Search"]','playwright');

    const suggestions=await page.$$('ul[role="listbox"] li');
    console.log("the suggestions are"+suggestions.length);
    await page.waitForTimeout(2000);
    //await page.screenshot({path:'test-results/google.png',fullPage:true  });
    const text=await page.$$('//ul[@class="G43f7e"]/li/div/div[@class="pcTkSc"]//span');
    for(const t of text){
        const val=await t.textContent();
        console.log(val); 
        if(val.includes('playwright automation')){
            await t.click();
            await page.screenshot({path:'test-results/google.png',fullPage:true  });
            break;                                                  
            
        }
    }
})