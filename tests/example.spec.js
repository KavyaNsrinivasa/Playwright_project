import {test} from "@playwright/test"

test("example", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator("//input[@id='name']").fill("kavya")
    await page.locator("//input[@id='email']").fill("Password123")
    await page.waitForTimeout(2000)
    await page.locator("//input[@placeholder='Enter your password']").fill("dfghjk")
    await page.waitForTimeout(2000)
    await page.locator("//button[text() = 'Register']").click()
    await page.waitForTimeout(2000)
})