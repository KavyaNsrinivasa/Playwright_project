import {test} from "@playwright/test"
import fs from 'fs'//fs means file system

let datafile = fs.readFileSync("C:/Users/KAVYA N/Desktop/Playwright/testData/singlesetdata.json")
let data = JSON.parse(datafile)
// test.describe("grouping test", async()=>{
//     let url = data.url
//     let p = data.password
//     let u = data.username
// })
test("get data from json", async({page})=>{
   await page.goto(data.url)
   await page.locator("input#username").fill(data.username)
   await page.locator('input#password').fill(data.password)
   await page.getByRole("button",{name:"Submit"}).click()
   let title = await page.title()
   if(title =="Logged In Successfully | Practice Test Automation" ){
    console.log("valid credentials");
    }else{
        console.log("invalid credentials");
        
    }
   
})
test.only("multiple data",async({page})=>{
    // data.array.forEach(d => {
    //     let url = d.url
    //     let username = d.username
    //     let password = d.password
    //     await page.goto()
    // });
    for(let testdata of data){
        let url = testdata.url
        let un = testdata.username
        let pwd = testdata.password
        await page.goto(url)
        await page.locator("input#username").fill(un)
   await page.locator('input#password').fill(pwd)
   await page.getByRole("button",{name:"Submit"}).click()
   let title = await page.title()
   if(title =="Logged In Successfully | Practice Test Automation" ){
    console.log("valid credentials");
    }else{
        console.log("invalid credentials");
        
    }
   
    }
})