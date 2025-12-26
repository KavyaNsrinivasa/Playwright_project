import {expect, test} from "@playwright/test"

test("handling multi tabs", async({page})=>{
    // let context = await browser.newContext()
    // let page1 = await context.newPage()
    // await page1.goto("https://www.flipkart.com/")
    // let page2 = await context.newPage();
    // await page2.goto('https://www.myntra.com/')
    // await page1.waitForTimeout(3000)

    await page.goto('https://www.flipkart.com/search?q=book&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off')
    
    let [page1]= await Promise.all([
     
        page.waitForEvent('popup'),
     page.click('(//div[@class="lWX0_T"])[1]')
    
    ])
    
    console.log(await page1.url())
    // await expect(page1.url()).not.toBe('https://www.flipkart.com/search?q=book&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off')
    await page.goto('https://www.redbus.in/')
    
    let [page2] = await Promise.all([
         page.waitForEvent('popup'),
        page.click('//a[@href="https://www.redbus.in/info/privacypolicy"]')
     ])
     await page2.click('//li[@id="account_dd"]')
})

test.only("multi window", async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2')
    let [window] = await Promise.all([
        page.waitForEvent('popup'),
     page.locator("//button[text()='Shop Now']").click()
    ])
    await window.locator("//button[text()='Add to Cart']").click()
})