import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path"
test("write data", async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testData/excelData.xlsx"))
    let sheet = book.getWorksheet("Sheet6")
    if(!sheet){
        sheet = book.addWorksheet("Sheet6")
    }
    // sheet.getRow(1).getCell(1).value="hello";
    await page.goto("https://www.amazon.in/")
    await page.locator("#twotabsearchtextbox").fill("shoes")
    await page.locator("//div[@role='row']").first().waitFor()
    let alloptions =  await page.locator("//div[@role='row']").allTextContents()
    console.log(alloptions)
    for(let text of alloptions){
        let i = alloptions.indexOf(text)
        sheet.getRow(i+1).getCell(1).value = text
    }
    await book.xlsx.writeFile(path.join(__dirname,"../../testData/excelData.xlsx"))
})