import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path"

test("read excel", async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testData/excelData.xlsx"))
    let sheet = await book.getWorksheet("Sheet1")
    let data = await sheet.getRow(1).getCell(1).toString()
    let data1 = await sheet.getRow(1).getCell(1).value
    console.log(data)
    console.log(data1);
    
})
test("multiple data", async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testData/excelData.xlsx"))
    let sheet = await book.getWorksheet("Sheet2")
    for(let row =1; row<=sheet.actualRowCount;row++){
        for(let c =1;c<=sheet.actualColumnCount;c++){
            let data = await sheet.getRow(row).getCell(c).toString()
            console.log(data)
        }
    }
})

test.only("application", async({page})=>{
    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"../../testData/excelData.xlsx"))
    let sheet = await book.getWorksheet("Sheet1")
    let alldata = [] //contains array of objects
    for(let r=1;r<=sheet.actualRowCount;r++){
        let row = sheet.getRow(r)
        let url = row.getCell(1).toString()
        let usn = row.getCell(2).toString()
        let pwd = row.getCell(3).toString()
        alldata.push({url:url, usn:usn, pwd:pwd})
    }
    console.log(alldata)
    for(let d of alldata){
    await page.goto(d.url)
    await page.waitForTimeout(2000)
    await page.getByRole("link", {name: "CRM"}).click()
   let p2=  page.waitForEvent("popup")
    await page.getByRole("link",{name: "Small CRM"}).click()
    let page2 = await p2
    await page2.getByRole("link", {name:"Admin"}).click()
    await page2.locator("#txtusername").fill(d.usn)
    await page2.locator("#txtpaswsword").fill(d.pwd)}
    await page2.getByRole("button",{name: "Login"}).click()
    await page2.waitForTimeout(2000)
    
    
})
