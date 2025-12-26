import {test} from "@playwright/test"

test("flipkart", async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.locator('//a[@title="Cart" and @class="_1krdK5 _3jeYYh"]').click();
    await page.waitForTimeout(2000)
})