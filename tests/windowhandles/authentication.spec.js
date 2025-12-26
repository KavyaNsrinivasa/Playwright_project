import {test} from "@playwright/test"

test("auth", async({browser})=>{
    let context = await browser.newContext(
        {
            httpCredentials:{
                username: 'admin',
                password: 'admin'
            }
        }
    );
    let page = await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/auth?sublist=0")
    await page.getByRole("link", {name:"Login"}).click()
    await page.waitForTimeout(2000)
}) 