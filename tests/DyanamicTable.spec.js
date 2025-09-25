const { test, expect } = require('@playwright/test');

test('dynamic table test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.waitForSelector('//table[@id="taskTable"]');

  // 🔹 Get headers
  const headers = page.locator('//table[@id="taskTable"]/thead/tr/th');
  const headerCount = await headers.count();
  console.log("Number of headers = " + headerCount);

  let colIdx = -1;
  for (let i = 0; i < headerCount; i++) {
    const text = await headers.nth(i).innerText();
    if (text.trim() === 'Memory (MB)') {
      colIdx = i;
      break;
    }
  }
  if (colIdx === -1) throw new Error("Column 'Memory (MB)' not found");

  // 🔹 Get rows
  const rows = page.locator('//table[@id="taskTable"]/tbody/tr');
  const rowCount = await rows.count();
  let memoryValue = "";

  for (let i = 0; i < rowCount; i++) {
    const rowHeader = await rows.nth(i).locator('td').nth(0).innerText();
    if (rowHeader.trim() === "System") {
      memoryValue = await rows.nth(i).locator('td').nth(colIdx).innerText();
      break;
    }
  }

  console.log("Memory value for System row = ", memoryValue);
  expect(memoryValue).toBe("89.0 MB");
});
