import {test} from "@playwright/test"

test("lenskart", async({page})=>{
    await page.goto('https://www.lenskart.com/')
    await page.locator('//a[@id="lrd9"]').click();
    // await page.locator('//a[@href="https://www.lenskart.com/stores/location/karnataka/bengaluru"]').click()
    await page.getByText('Bangalore').click()
    
})