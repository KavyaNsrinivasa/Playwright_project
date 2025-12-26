import {test,expect} from "@playwright/test"
import erpdata from "../../testData/erpdata/erpdata.json"
import erplanding from "../../PageObjectModel/erp/ERPlanding.page"
import adminhome from "../../PageObjectModel/erp/erpadminhome.page"
import customerlist from "../../PageObjectModel/erp/erpcustomerlist.page"
import custpage from "../../PageObjectModel/erp/erpaddcust.page"
import custdata from "../../testData/erpdata/erpdata.json"
import editcustpage from "../../PageObjectModel/erp/erpeditcust.page"

test("scenario1", async({page})=>{
    let url = erpdata.url
    let adminusn = erpdata.username
    let adminpwd = erpdata.password
    let custf = custdata.custfn
    let custm = custdata.custmn
    let custl = custdata.custln
    let custa = custdata.custadd
    let custcont = custdata.custcontact
    let custmem = custdata.custmembershipno
    let landing = new erplanding(page);
    let home = new adminhome(page)
    let customer = new customerlist(page)
    let addcust = new custpage(page)
    //launch url
    await page.goto(url)
    //click on admin tab
    await landing.admintab.click()
    //enter username
    await expect(landing.adminusernametf).toBeEnabled
    await landing.adminusernametf.fill(adminusn)
    //enter password
    await landing.adminpasswordtf.fill(adminpwd)
    //click on login
    await landing.adminloginbutton.click()
    //in home page click on customer
    await home.customerlink.click()
    //click on add customer
    await customer.addcustbutton.click()
    //pass first name
    await addcust.firstnametf.fill(custf)
    //pass middle name
    await addcust.middlenametf.fill(custm)
    //pass last name
    await addcust.lastnametf.fill(custl)
    //address
    await addcust.addresstf.fill(custa)
    //contact
    await addcust.contacttf.fill(custcont)
    //membership no
    await addcust.membertf.fill(custmem)
    //click save
    await addcust.savebtn.click()
    //click on profile dropdown
    await customer.profiledropdown.click()
    //click on logout
    await customer.logoutlink.click()
})

test("scenario2", async({page})=>{
    page.on('dialog',async (dialog)=>{
        console.log(await dialog.message)
        await dialog.accept()
    })
    let url = erpdata.url
    let adminusn = erpdata.username
    let adminpwd = erpdata.password
    let custf = custdata.custfn
    let landing = new erplanding(page);
    let home = new adminhome(page)
    let customer = new customerlist(page)
    let editc = new editcustpage(page)
    //launch url
    await page.goto(url)
    //click on admin tab
    await landing.admintab.click()
    //enter username
    await expect(landing.adminusernametf).toBeEnabled
    await landing.adminusernametf.fill(adminusn)
    //enter password
    await landing.adminpasswordtf.fill(adminpwd)
    //click on login
    await landing.adminloginbutton.click()
    //in home page click on customer
    await home.customerlink.click()
    //update a user and save
    await customer.editbtn.click()
    await editc.fname.fill(custf)
    await editc.updatebutton.click()
    //click on profile dropdown
    await customer.profiledropdown.click()
    //click on logout
    await customer.logoutlink.click()
})
