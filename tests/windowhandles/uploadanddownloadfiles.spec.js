import {test} from "@playwright/test"
import path from "path"

test("upload file", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    console.log(__dirname)

    // await page.locator("#singleFileInput").setInputFiles(path.join(__dirname,"../uploadfiles/resume.txt"))

    // await page.locator("#singleFileInput").setInputFiles("C:/Users/KAVYA N/Desktop/Playwright/tests/uploadfiles/resume.txt")
    // await page.locator('//button[@type="submit" and .="Upload Single File"]').click()
    // await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/KAVYA N/Desktop/Playwright/tests/uploadfiles/resume.txt","C:/Users/KAVYA N/Desktop/Playwright/tests/uploadfiles/bio.txt"])
    // await page.getByRole("button",{name:"Upload Multiple Files"}).click()
    // await page.waitForTimeout(5000)

    ///to copy  the file from local system

    // await page.locator('#singleFileInput').setInputFiles("C:/Users/KAVYA N/Desktop/Hospital project url.txt")
    // await page.locator('//button[@type="submit" and .="Upload Single File"]').click()
    // await page.waitForTimeout(5000)
    // await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/KAVYA N/Desktop/Hospital project url.txt","C:/Users/KAVYA N/Desktop/New Microsoft Excel Worksheet.xlsx"])
    // await page.getByRole("button",{name:"Upload Multiple Files"}).click()
    // await page.waitForTimeout(5000)

    //to remove the files uploaded
    await page.locator('#singleFileInput').setInputFiles("C:/Users/KAVYA N/Desktop/Hospital project url.txt")
    await page.locator('#singleFileInput').setInputFiles([])
    await page.locator('//button[@type="submit" and .="Upload Single File"]').click()
    await page.waitForTimeout(5000)
    await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/KAVYA N/Desktop/Hospital project url.txt","C:/Users/KAVYA N/Desktop/New Microsoft Excel Worksheet.xlsx"])
    await page.locator("#multipleFilesInput").setInputFiles([])
    await page.getByRole("button",{name:"Upload Multiple Files"}).click()
    await page.waitForTimeout(5000)

})

test("download file",async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
    await page.locator("#writeArea").fill("Downloading file")
    await page.locator("#fileName").fill("newfile.txt")
     let [downloadfile] = await Promise.all([           //retruns an objecthaving all the data related to download file
        page.getByRole("button",{name:"Download"}).click()
    ])
    let downloadfolder = "c:/Users/KAVYA N/Desktop/download"
    let filename = downloadfile.suggestedFilename()
     await downloadfile.saveAs(path.join(downloadfolder,filename));//or
    // await downloadfile.saveAs(path.join(__dirname,"../downloadedfile",filename))
    await downloadfile.saveAs(path.join(downloadfolder,filename))
    //  console.log(await download.path());//saved in random space
     
    await page.waitForTimeout(2000)
}) 