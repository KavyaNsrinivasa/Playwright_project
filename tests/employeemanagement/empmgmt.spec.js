import {test,expect} from "@playwright/test"

import landing from "../../PageObjectModel/employeemgmt/landing.page"
import home from "../../PageObjectModel/employeemgmt/adminhome.page"
import addemp from "../../PageObjectModel/employeemgmt/addemp.page"

test("", async({page})=>{
    let land = new landing(page)
    let homep = new home(page)
    let empadd = new addemp(page)

    //launch url
    await page.goto('http://49.249.28.218:8081/TestServer/Build/Employee_Management_System//index.html')
    //click login
    await land.clicklogin()
    //click admin login
    await land.clickadminlink()
    //enter email
    await land.adminemail("admin@gmail.com")
    //enter pwd
    await land.adminpwd("admin")
    //click login
    await land.clickadminlogin()
    //click addemp
    await homep.clickaddemp()
    //enter firstname
    await empadd.firstname("asha")
    //enter lastname
    await empadd.lastname("hublikar")
    //enter email
    await empadd.email("asha@gmail.com")
    //enter birthday
     await empadd.birthday("21-01-1997")
    //  await console.log(await empadd.birthda.boundingBox());
    //  await empadd.birthda.click( {position: { x:200, y:23 }} )
    // await page.keyboard.press("ArrowDown")
    // await page.keyboard.press("Enter")
    //  await empadd.gend()
    //  await empadd.gend().selectOption("Female")
})