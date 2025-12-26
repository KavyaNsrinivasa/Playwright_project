import {test} from "@playwright/test"

// test("locators", async({page})=>{
//     await page.goto("https://practicetestautomation.com/practice-test-login/")
//     //input text into username
//     await page.locator("input#username").fill("student")
//     //input text into password
//     await page.locator("input#password").fill("Password123")
//     //click on submit button
//     await page.locator("button#submit").click()
// })

// test("locators",async({page})=>{
//     await page.goto("https://practicetestautomation.com/practice-test-login/")
//     await page.locator("//input[@id='username']").fill("student")
//     await page.locator("//input[@name='password']").fill("Password123")
//     await page.locator("//button[@class='btn']").click()
// })

test("locators",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator("//input[@id='name']").fill("Kavya")
    await page.locator("//input[@placeholder='Enter Your Email']").fill("kavya@gmail.com")
    await page.locator("//input[@id='password']").fill("Password123")
    await page.waitForTimeout(2000)
    await page.locator("//button[contains(.,'Register')]").click()
    await page.waitForTimeout(2000)
})