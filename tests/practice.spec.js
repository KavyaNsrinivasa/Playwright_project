import {test} from "@playwright/test"

// test("naukri", async ({page})=>{
//    await page.goto("https://www.naukri.com/")
//    await page.locator('//a[@id="register_Layer"]').click();
//    await page.waitForTimeout(1000)
//    await page.locator('//input[@id="name"]').fill("Kavya")
//    await page.waitForTimeout(1000)
//    await page.locator('//input[@placeholder="Tell us your Email ID"]').click()
//    await page.locator('//input[@placeholder="Tell us your Email ID"]').fill("1234@gmail.com")
//    await page.waitForTimeout(1000)
//    await page.locator('//input[@id="password"]').click()
//    await page.locator('//input[@id="password"]').fill('password@123')
//    await page.waitForTimeout(1000)
//    await page.locator('//input[@id="mobile"]').click()
//    await page.locator('//input[@id="mobile"]').fill('123456789')
//    await page.waitForTimeout(1000)
//    await page.getByTestId('exp').click()
//    await page.waitForTimeout(1000)
//    await page.getByText('Send me important updates & promotions via SMS, email, and').click()
//    await page.waitForTimeout(1000)
// })

// test("youtube", async({page})=>{
//    await page.goto("https://www.youtube.com/")
//    await page.locator('//input[@name="search_query"]').fill("mr bean animatedd series")
//    await page.waitForTimeout(2000)
//    await page.locator('//div[@role="presentation"]').nth(0).click()
//       await page.waitForTimeout(2000)
//    await page.locator('//a[@id="video-title"]').nth(0).click()
//    await page.waitForTimeout(5000)
// })

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

