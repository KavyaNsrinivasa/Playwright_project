import {test} from "@playwright/test"
import erpdata from "../../testData/erpdata/erpdata.json"
import erplanding from "../../PageObjectModel/erp/ERPlanding.page"
import adminhome from "../../PageObjectModel/erp/erpadminhome.page"
import erpsellerdata from "../../testData/erpdata/erpseller.json"
import supplier from "../../PageObjectModel/erp/erpsupplier.page"
import addsupplier from "../../PageObjectModel/erp/erpaddsupplier.page"
import purchaseorder from "../../PageObjectModel/erp/erppurchaseorderlist.page"
import purchasedata from "../../testData/erpdata/erppurchase.json"

test("scenario 3", async({page})=>{
    let url = erpdata.url
    let un = erpdata.username
    let pwd = erpdata.password
    let landing = new erplanding(page);
    let home = new adminhome(page)
    let supply = new supplier(page)
    let addsupp = new addsupplier(page)
    //launch url
    await page.goto(url)
    //click on admin tab
    await landing.admintab.click()
    //pass un
    await landing.adminusernametf.fill(un)
    //pass pwd
    await landing.adminpasswordtf.fill(pwd)
    //click login
    await landing.adminloginbutton.click()
    //click on supplier
    await home.supplierlink.click()
    //click on add supplier
    await supply.addsuppbutton.click()
    //add supplier
    await addsupp.suppliernametf.fill(erpsellerdata.supplier)
    //add contactperson
    await addsupp.contactpersontf.fill(erpsellerdata.contactperson)
    //add address
    await addsupp.addresstf.fill(erpsellerdata.address)
    //add contact
    await addsupp.contactf.fill(erpsellerdata.contact)
    //click save
    await addsupp.savebtn.click()
    //click on profile dropdown
    await home.profiledropdown.click()
    //click on logout
    await home.logoutlink.click()
})

test.only("scenario 4", async({page})=>{
    let url = erpdata.url
    let un = erpdata.username
    let pwd = erpdata.password
    let landing = new erplanding(page);
    let home = new adminhome(page)
    let purchase = new purchaseorder(page)
    //launch url
    await page.goto(url)
    //click on admin tab
    await landing.admintab.click()
    //add username
    await landing.adminusernametf.fill(erpdata.username)
    //add password
    await landing.adminpasswordtf.fill(erpdata.password)
    //click login
    await landing.adminloginbutton.click()
    //click purchase order lst
    await home.purchaseorderlistlink.click()
    //click on add
    await purchase.addbutton.click()
    // add product code
    await purchase.productcode.fill(purchasedata.productcode)
    //add quantity
    await purchase.quantity.fill(purchasedata.quantity)
    //select status
    await purchase.selectstatus.selectOption("Received")
    //select expiration date
    // await purchase.expirydate.click()
    await purchase.expirydate.fill(purchasedata.expirydate)
    //add remarks
    await purchase.rmarks.fill(purchasedata.remarks)
    //click on save
    await purchase.savebutton.click()
    //logout
    await home.profiledropdown.click()
    await home.logoutlink.click()
})