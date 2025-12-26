import {test} from "@playwright/test"
import erplanding from "../../PageObjectModel/erp/ERPlanding.page"
import admindata from "../../testData/erpdata/erpdata.json"
import  adminhome from "../../PageObjectModel/erp/erpadminhome.page"
import customerledger from "../../PageObjectModel/erp/erpcustomerledger.page"

test("scenario 5",async({page})=>{
    let land = new erplanding(page)
    let home = new adminhome(page)
    let ledger = new customerledger(page)
    //launch url
    await page.goto(admindata.url)
    //click on admin tab
    await land.admintab.click()
    //pass admin un
    await land.adminusernametf.fill(admindata.username)
    //pass admin pwd
    await land.adminpasswordtf.fill(admindata.password)
    //click on login button
    await land.adminloginbutton.click()
    //click on customer ledger
    await home.customerledgerlink.click()
    //enter/search customer name
    await home.searchcusttf.fill("madhu")
    //click on search
    await home.searchbutton.click()
    //click on add payment
    await ledger.addpaymentbutton.click()
    //enter amount
    await ledger.amounttf.fill("900")
    //enter remarks
    await ledger.remarkstf.fill("asdfghj")
    //click on save
    await ledger.savebutton.click()
    //click on logout
    await home.profiledropdown.click()
    await home.logoutlink.click()
})

test.only("scenario 6", async({page})=>{
    let land = new erplanding(page)
    let home = new adminhome(page)
    let ledger = new customerledger(page)
    //launch url
    await page.goto(admindata.url)
    //click on admin tab
    await land.admintab.click()
    //pass admin un
    await land.adminusernametf.fill(admindata.username)
    //pass admin pwd
    await land.adminpasswordtf.fill(admindata.password)
    //click on login button
    await land.adminloginbutton.click()
    //click on customer ledger
    await home.customerledgerlink.click()
    //click on profile dropdown
    await ledger.profiledropdown.click()
    //click on add
    await ledger.adduserlink.click()
    //fill username
    await ledger.username.fill("sri")
    //fill password
    await ledger.password.fill("asdfghj")
    //fill fullname
    await ledger.fullname.fill("srika")
    //click on save
    await ledger.savebutton.click()
    //click on dropdown
    await home.profiledropdown.click()
    //logout
    await home.logoutlink.click()
})