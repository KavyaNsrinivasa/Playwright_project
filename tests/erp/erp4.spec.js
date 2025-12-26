import { test, expect } from "@playwright/test";
import erpdata from "../../testData/erpdata/erpdata.json";
import custdata from "../../testData/erpdata/erpcustdata.json";

import erplanding from "../../PageObjectModel/erp/ERPlanding.page";
import adminhome from "../../PageObjectModel/erp/erpadminhome.page";
import customerlist from "../../PageObjectModel/erp/erpcustomerlist.page";
import custpage from "../../PageObjectModel/erp/erpaddcust.page";
import editcustpage from "../../PageObjectModel/erp/erpeditcust.page";

test("scenario 7", async ({ page }) => {

    const landing = new erplanding(page);
    const home = new adminhome(page);
    const customer = new customerlist(page);
    const addcust = new custpage(page);
    const editc = new editcustpage(page);

    await page.goto(erpdata.url);

    await landing.admintab.click();
    await expect(landing.adminusernametf).toBeEnabled();
    await landing.adminusernametf.fill(erpdata.username);
    await landing.adminpasswordtf.fill(erpdata.password);
    await landing.adminloginbutton.click();

    await expect(home.customerlink).toBeVisible();
    await home.customerlink.click();

    await customer.addcustbutton.click();

    await addcust.firstnametf.fill(custdata.custfn);
    await addcust.middlenametf.fill(custdata.custmn);
    await addcust.lastnametf.fill(custdata.custln);
    await addcust.addresstf.fill(custdata.custadd);
    await addcust.contacttf.fill(custdata.custcontact);
    await addcust.membertf.fill(custdata.custmembershipno);
    await addcust.savebtn.click();

    
    await expect(
  page.getByRole('gridcell', { name: custdata.custfn, exact: true })
).toBeVisible();

    await home.customerlink.click();

    await customer.editbtn.click();
    await editc.fname.fill(custdata.custfn);
    await editc.updatebutton.click();

    await customer.profiledropdown.click();
    await customer.logoutlink.click();
});



test.only("Add customer → Edit customer → Logout", async ({ page }) => {

    // Handle alert (for update/save if any)
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });

    const landing = new erplanding(page);
    const home = new adminhome(page);
    const customer = new customerlist(page);
    const addcust = new custpage(page);
    const editc = new editcustpage(page);

    // ---------- LOGIN ----------
    await page.goto(erpdata.url);

    await landing.admintab.click();
    await expect(landing.adminusernametf).toBeEnabled();
    await landing.adminusernametf.fill(erpdata.username);
    await landing.adminpasswordtf.fill(erpdata.password);
    await landing.adminloginbutton.click();

    await expect(home.customerlink).toBeVisible();

    // ---------- ADD CUSTOMER ----------
    await home.customerlink.click();
    await customer.addcustbutton.click();

    await addcust.firstnametf.fill(custdata.custfn);
    await addcust.middlenametf.fill(custdata.custmn);
    await addcust.lastnametf.fill(custdata.custln);
    await addcust.addresstf.fill(custdata.custadd);
    await addcust.contacttf.fill(custdata.custcontact);
    await addcust.membertf.fill(custdata.custmembershipno);
    await addcust.savebtn.click();

    // Assertion: customer added
    await expect(
        page.getByRole('gridcell', { name: custdata.custfn, exact: true })
    ).toBeVisible();

    // ---------- EDIT CUSTOMER ----------
    await customer.editbtn.click();
    await editc.fname.fill(custdata.custfn);
    await editc.updatebutton.click();

    // ---------- LOGOUT ----------
    await customer.profiledropdown.click();
    await customer.logoutlink.click();

    // Assertion: logout success
    await expect(landing.admintab).toBeVisible();
});

