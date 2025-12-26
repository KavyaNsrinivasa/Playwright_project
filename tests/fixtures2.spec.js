import {test} from "@playwright/test"

test("fix",async({browser,page})=>{
    let c = await browser.newContext();
    let p = await c.newPage();
    let p1 = await c.newPage();
    await p.goto("https://playwright.dev/")
    await p1.goto("https://www.amazon.in/")
    await page.goto("https://www.flipkart.com/")
    await page.goto("https://www.zepto.com/")
    
})