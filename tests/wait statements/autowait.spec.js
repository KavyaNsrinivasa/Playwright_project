import {test} from "@playwright/test"

test.use({actionTimeout: 3000})// this timeout is for this particular script

// we can set this timout for all the spec files in config file

test("auto wait1", async({page})=>{
//  page.setDefaultTimeout(3000) ; //changing the default timeout this is for the particular page only ie this test block only
   await page.goto("https://practicetestautomation.com/practice-test-login/")
   await page.getByLabel("username").fill("fgh")
   await page.locator("input#password").fill("dfghj") // fill has autowait of 30sec
   await page.locator('button#submit').click({timeout: 1000})
})

test("auto wait2", async({page})=>{// this block takes default 30 sec timeout only
   await page.goto("https://practicetestautomation.com/practice-test-login/")
   await page.getByLabel("username").fill("fgh")
   await page.locator("input#pasword").fill("dfghj") // fill has autowait of 30sec
})