import {test,expect} from '@playwright/test'

test("dialog handling", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    // await page.getByRole("button", {name:"Simple Alert"}).click()
    // await page.getByRole("button", {name:"Confirmation Alert"}).click()
    // await page.waitForTimeout(2000)
    // await page.getByRole("button", {name:"Prompt Alert"}).click()
    // await page.waitForTimeout(2000)
    page.on("dialog", async (dialog)=>{if (dialog.type()=='alert'){
        console.log(await dialog.message());
        
        await dialog.accept()
    }else if(dialog.type()=='confirm'){
        await dialog.accept()
    }else if(dialog.type()=='prompt'){
        if(dialog.defaultValue =="tom"){
            console.log(await dialog.defaultValue())}
            else{
                await dialog.accept("tom")
            }
        
       
    }})
    await page.getByRole("button", {name:"Simple Alert"}).click()
     await page.waitForTimeout(2000)
    await page.getByRole("button", {name:"Confirmation Alert"}).click()
     await page.waitForTimeout(2000)
     await expect(page.locator("#demo")).toContainText("OK")
    await page.getByRole("button", {name:"Prompt Alert"}).click()
    await expect(await page.locator('#demo').textContent()).toBe("Hello tom! How are you today?")
    await page.waitForTimeout(2000)
})

test.only("using page.once", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByRole("button",{name: "Simple Alert"}).click()
    await page.getByRole("button", {name:"Confirmation Alert"}).click()
    page.once("dialog", async(dialog)=>dialog.accept("dfghhhhhhhhhhhh"))
    await page.getByRole("button", {name:"Prompt Alert"}).click()
    await page.waitForTimeout(2000)
    await page.reload()
    await page.getByRole("button", {name:"Prompt Alert"}).click()
    await page.waitForTimeout(2000)
})