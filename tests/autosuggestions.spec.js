import {test} from "@playwright/test"

test("auto suggestion box", async ({page}) => {
    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("toys")
    // await page.waitForSelector('(//div[@role="row"])[1]')


    // let allsugg = await page.locator('//div[@role="row"]').all()
    // for(let option of allsugg){
    //     let text = await option.textContent()
    //     if(text.includes("  for 1 year old girl")){
    //         await option.click()
                // break;
    //     }
    // }
    // await page.waitForTimeout(3000)

    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000)
})