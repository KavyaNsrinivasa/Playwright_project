import {test} from "@playwright/test"

test("cricbuzz", async({page})=>{
    await page.goto("https://www.cricbuzz.com/")
    await page.locator('//a[@title="Live Cricket Score"]').click()
    await page.waitForTimeout(3000)
    await page.locator('//span[@class="text-cbComplete" and contains(.,"Scorecard")]').first().click()
    let c = await page.locator('(//a[contains(.,"Orchide Tuyisenge")])[1]/../following-sibling::div').first().innerText()
    console.log(c)
})