import {test} from "@playwright/test"

test('amazon1', async({page})=>{
  await page.goto("https://www.amazon.in/");
  await page.getByPlaceholder('Search Amazon.in').fill('samsung phones')
  await page.waitForTimeout(2000);
  await page.locator('//div[@role="row"]').first().click();
  await page.waitForTimeout(2000);
  let price = await page.locator('(//div[@data-cy="title-recipe"])[1]/parent::div[@class="a-section a-spacing-small a-spacing-top-small"]/descendant::span[@class="a-offscreen"][1]').innerText()
  await page.waitForTimeout(2000);
  console.log(price)
})