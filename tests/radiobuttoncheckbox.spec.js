import {test,expect} from "@playwright/test"

test("radiobutton",async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/radio?sublist=0')
    //used promise.all because the page was not loading
    await Promise.all([
        await page.waitForNavigation(10000),
        await page.locator('//input[@value="net"]').click()
    ])
       await page.waitForTimeout(2000)
    //asserting
    await expect(page.locator('//input[@value="net"]')).toBeChecked
    // await expect(page.locator('//input[@value="net"]')).not.toBeChecked()
})

test.only("checkbox", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    await Promise.all([
        await page.waitForNavigation(10000),
        await page.locator('//input[@id="domain_b"]').check(),
        await page.waitForTimeout(2000),
        await page.locator('//input[@id="domain_b"]').uncheck()
        ])
    // await page.locator('//input[@id="domain_b"]').check()
    await page.waitForTimeout(2000)
    //asserting
    await expect(await page.locator('//input[@id="domain_b"]')).toBeChecked
    await expect(await page.locator('//input[@id="domain_b"]')).not.toBeChecked
})