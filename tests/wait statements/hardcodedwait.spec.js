import {test} from "@playwright/test"


test("hard code wait", async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.getByText("Username",{exact:true}).fill("fgdhsj")
    await page.waitForTimeout(1000) //manually setting the timeout for the particular paage 
    await page.getByText("Password",{exact:true}).fill("345678")
    await page.locator('button#submit').click()
    await page.waitForTimeout(1000)
})

test.only("auto sugges", async({page})=>{
    await page.goto("https://www.myntra.com/")
    await page.locator('//input[@placeholder="Search for products, brands and more"]').type('kids dress')
    await page.waitForTimeout(5000)
    let autosugg = await page.locator('//li[@class="desktop-suggestion null"]').allTextContents()//this method has no autowait so it returns empty array
    console.log(autosugg);
    
})