import {test} from "@playwright/test"

test("keyboard action", async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    //using type()
    await page.locator('//input[@id="name"]').click()
    // // await page.keyboard.type("Kavya")
    // await page.waitForTimeout(2000)
    // await page.type('//input[@id="name"]', "Kavya")
    
    //insertText()
    await page.keyboard.insertText("Kavya")

    //down() and up()
    await page.keyboard.down("Space")
    await page.keyboard.up("Space")
    await page.keyboard.down("N")
    await page.keyboard.up("N")
    await page.waitForTimeout(2000)

    //press()
    await page.keyboard.press('Tab')
    await page.keyboard.type("66@gmail.com")
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(2000)
})

test.only("scroll using keyboard", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.keyboard.press("ArrowDown")//for only once
    //for multiple times use loop
    for(let i =1;i<5;i++){
        await page.keyboard.press("ArrowDown")
    }
    await page.waitForTimeout(2000)
})