import {test} from "@playwright/test"

test("text", async({page})=>{
    await page.goto('https://www.flipkart.com/')
    // await page.locator('//input[@placeholder="Search for Products, Brands and More"]').fill('mobile')
    // await page.locator('//div[@class="YGcVZO _2VHNef"]',{hasText:"mobile under 10000"}).waitFor({state: "visible"})//.waitFor({timeout:3000})//waits until the text is displayed/        
    // await page.waitForTimeout(3000)
    await page.waitForSelector('//input[@placeholder="Search for Products, Brands and More"]')
    await page.locator('//input[@placeholder="Search for Products, Brands and More"]').fill('mobile')
    let a = await page.locator('//div[@class="YGcVZO _2VHNef"]',).allTextContents()
    console.log(a);
    
})

