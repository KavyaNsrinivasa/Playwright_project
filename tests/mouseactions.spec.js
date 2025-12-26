import {test} from "@playwright/test"

test("mouse actions", async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
    await page.locator('//button[@id="btn"]').click({clickCount: 2})
    await page.waitForTimeout(3000)
    // await page.locator('//button[@id="btn_two"]').click({button:'right'})
        // await page.waitForTimeout(3000)
        await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
    await page.locator('//button[@id="btn_a"]').dblclick()
            await page.waitForTimeout(3000)
            await page.goto('https://demoapps.qspiders.com/ui/clickHold?sublist=0')
            await page.locator('//div[@id="circle"]').hover()
            await page.mouse.down();
            await page.waitForTimeout(2000)
            await page.mouse.up()
    await page.waitForTimeout(2000)
    await page.goto('https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4')
    // await page.locator('//input[@type="checkbox"]').click({force:true})
     await page.locator('//input[@type="checkbox"]').dispatchEvent('click')
    await page.waitForTimeout(3000)
    await page.goto('https://demoapps.qspiders.com/ui/mouseHover?sublist=0')
    await page.locator('//img[@class="w-5 h-5 mt-5 ml-3 cursor-pointer "]').hover()
    await page.waitForTimeout(3000)
    await page.mouse.move(100,200)
        await page.waitForTimeout(3000)

})