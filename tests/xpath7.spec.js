import {test} from "@playwright/test"

test("makemytrip", async({page})=>{
   await page.goto('https://www.makemytrip.com/')
    await page.locator('//span[@data-cy="closeModal"]').click()
    await page.waitForTimeout(2000)
    await page.locator('//label[@for="departure"]').click()
    await page.waitForTimeout(2000)
    await page.locator('//div[@class="DayPicker-Day"]/ancestor::div[@class="DayPicker-Body"]/preceding-sibling::div[@class="DayPicker-Caption"]/div[.="January 2026"]')
})