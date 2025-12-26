import {test} from "@playwright/test"
import data  from "../../testData/singlesetdata.json"

test("valid and invalid", async({page})=>{
    for(let d of data.valid){
        await page.goto(d.url)
        await page.locator("input#username").fill(d.username)
   await page.locator('input#password').fill(d.password)
   await page.getByRole("button",{name:"Submit"}).click()
   let title = await page.title()
   if(title =="Logged In Successfully | Practice Test Automation" ){
    console.log("valid credentials");
    }else{
        console.log("invalid credentials");
        
    }
    }

    for(let d of data.invalid){
        await page.goto(d.url)
        await page.locator("input#username").fill(d.username)
   await page.locator('input#password').fill(d.password)
   await page.getByRole("button",{name:"Submit"}).click()
   let title = await page.title()
   if(title =="Logged In Successfully | Practice Test Automation" ){
    console.log("valid credentials");
    }else{
        console.log("invalid credentials");
        
    }
    }
})
test.only(" ",async({page})=>{
    for(let key in data){
        for(let d of data[key]){
           await page.goto(d.url)
        await page.locator("input#username").fill(d.username)
   await page.locator('input#password').fill(d.password)
   await page.getByRole("button",{name:"Submit"}).click()
   let title = await page.title()
   if(title =="Logged In Successfully | Practice Test Automation" ){
    console.log("valid credentials");
    }else{
        console.log("invalid credentials");
        
    } 
        }
    }
})