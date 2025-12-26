import {test} from "@playwright/test"

test("scroll", async({page})=>{
    page.goto('https://demoapps.qspiders.com/ui/scroll/newTabVertical')//vertical
    await page.waitForTimeout(3000)
    await page.mouse.wheel(0,2000)
    await page.waitForTimeout(3000)
    await page.mouse.wheel(0,-2000)
    await page.waitForTimeout(3000)
    await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabHorizontal')//horizontal
    await page.waitForTimeout(3000)
    await page.mouse.wheel(1000,0)
    await page.waitForTimeout(3000)
    await page.mouse.wheel(-1000,0)
    await page.waitForTimeout(3000)
    //to scroll till particular element
     await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabVertical')
     await page.locator("//h1[.='4. Intellectual property rights']").scrollIntoViewIfNeeded()
     await page.waitForTimeout(3000)
})

test.only("drag and drop", async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/dragDrop?sublist=0')
    // 1st approach drag and drop using moouse actions
    await page.locator('//div[text()="Drag Me"]').hover();
    await page.mouse.down();
    await page.waitForTimeout(3000)
    await page.mouse.move(300,500);
    await page.waitForTimeout(3000)
    await page.mouse.up()
    await page.waitForTimeout(3000)

    //2nd approach source to target using mouse actions
    // await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
    // await page.locator('//div[text()="Mobile Charger"]').hover()
    // await page.mouse.down();
    // await page.locator('//div[text()="Mobile Accessories"]/parent::div').hover()
    // await page.mouse.up()

    //3rd approach source to target location
    // await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
    // await page.locator('//div[text()="Mobile Charger"]').hover()
    // await page.mouse.down();
    // await page.waitForTimeout(3000)
    // let targetlocation = await page.locator('//div[text()="Mobile Accessories"]/parent::div').boundingBox()
    // await page.mouse.move(targetlocation.x,targetlocation.y);
    // await page.waitForTimeout(3000)
    // await page.mouse.up()

    //4th approach without using mouse actions - dragTo()
    await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
    let source = page.locator('//div[text()="Mobile Charger"]')
    let target = page.locator('//div[text()="Mobile Accessories"]/parent::div')
    await source.dragTo(target)
    await page.waitForTimeout(3000)
})