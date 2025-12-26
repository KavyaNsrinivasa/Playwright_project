import {test} from "@playwright/test"
import loginpage from "../PageObjectModel/loginpage.page"
import logindata from "../testData/logindata.json"

test("",async({page})=>{
    //launch url
    // enter un
    // enter pwd
    // click on submit button
   let lognpage= new loginpage(page)
   let url = logindata.url
   let un = logindata.usn
   let pwd = logindata.pwd
   await page.goto(url)
   await lognpage.usernameTextfield.fill(un)
   await lognpage.passwordTextfield.fill(pwd)
   await lognpage.submitButton.click()
   await page.waitForTimeout(2000)
})