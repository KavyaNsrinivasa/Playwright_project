import {test} from "@playwright/test"

test("amazon2", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('phones')
    await page.keyboard.press('Enter')
   await page.locator("//span[contains(text(),'Android 13')]/preceding-sibling::div/label/i").check()
    
})