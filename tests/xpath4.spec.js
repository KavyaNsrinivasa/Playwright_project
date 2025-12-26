import {test} from "@playwright/test"
import { log } from "console"

test("ICC rankings", async({page})=>{
    await page.goto('https://www.icc-cricket.com/rankings')
    await page.locator('//a[@href="#mens-batting-rankings"]/div[@class=" pointer-events-none"]').click()
    await page.waitForTimeout(3000)
    let ranking = await page.locator('//span[contains(.,"Virat")]/ancestor::div[@class="si-table-data si-player"]/preceding-sibling::div/span[@class="si-text"]').innerText()
    console.log(ranking);
})