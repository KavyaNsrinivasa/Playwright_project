import {test} from "@playwright/test"
import landing from "../PageObjectModel/landing.page"
import signup from "../PageObjectModel/signup.page"
import signin from "../PageObjectModel/signin.page"
import home from "../PageObjectModel/home.page"
import createticket from "../PageObjectModel/createticket.page"
import e2edata from "../testData/e2e.json"

test("end to end", async({page})=>{
    let url = e2edata.url;
    let name = e2edata.name;
    let email = e2edata.email;
    let pwd = e2edata.password;
    let cpwd = e2edata.repassword;
    let contact = e2edata.contact;
    let semail = e2edata.email;
    let spwd = e2edata.password;
    let sub = e2edata.subject;
    let desc = e2edata.description;
    page.on('dialog',async(dialog)=>{
        console.log(await dialog.message());
        await dialog.accept()
    })
    let landpage = new landing(page)
    let signuppage = new signup(page)
    let signinpage = new signin(page)
    let homepage = new home(page)
    let createticketpage = new createticket(page)
    //launch the url
    await page.goto(url)
    //click on signup
    await landpage.usersignupLink.click()
    //pass name
    await signuppage.nametf.fill(name)
    //pass emailid
    await signuppage.emailtf.fill(email)
    //password
    await signuppage.passwordtf.fill(pwd)
    //re enter pwd
    await signuppage.confirmpwdtf.fill(cpwd)
    //contact number
    await signuppage.contacttf.fill(contact)
    //gender radiobutto
    await signuppage.femaleradiobtn.click()
    //submit button
    await signuppage.submitbutton.click()
    //alert popup- get message
    //login emailid
    await signinpage.emailtf.fill(email)
    //login passwrd
    await signinpage.pwdtf.fill(pwd)
    //click on login
    await signinpage.loginbutton.click()
    //click create ticket
    await homepage.createticketlink.click()
    //enter subject
    await createticketpage.subjecttf.fill(sub)
    //select dropdown
    await createticketpage.tasktypedropdwn.selectOption({value:"ot1"})
    //select priority dropdown
    await createticketpage.prioritydropdwn.selectOption({value:"important"})
    //add description
    await createticketpage.descriptiontextareaf.fill(desc)
    //click send button
    await createticketpage.sendbutton.click()
    //alert message and accept

    //click view ticket
    await homepage.viewticketlink.click()
    //take screenshot
    await page.screenshot({path:"screenshot/ticketss.png"})
})