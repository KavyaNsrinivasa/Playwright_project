import { test, expect } from "@playwright/test";

import erpdata from "../../testData/erpdata/erpdata.json";
import erpsellerdata from "../../testData/erpdata/erpseller.json";
import purchasedata from "../../testData/erpdata/erppurchase.json";

import erplanding from "../../PageObjectModel/erp/ERPlanding.page";
import adminhome from "../../PageObjectModel/erp/erpadminhome.page";
import supplier from "../../PageObjectModel/erp/erpsupplier.page";
import addsupplier from "../../PageObjectModel/erp/erpaddsupplier.page";
import purchaseorder from "../../PageObjectModel/erp/erppurchaseorderlist.page";


test("Scenario 9 - Add Supplier", async ({ page }) => {

  const landing = new erplanding(page);
  const home = new adminhome(page);
  const supply = new supplier(page);
  const addsupp = new addsupplier(page);

  await page.goto(erpdata.url);
  await landing.admintab.click();
  await landing.adminusernametf.fill(erpdata.username);
  await landing.adminpasswordtf.fill(erpdata.password);
  await landing.adminloginbutton.click();

  await expect(home.supplierlink).toBeVisible();
  await home.supplierlink.click();

  await supply.addsuppbutton.click();

  await addsupp.suppliernametf.fill(erpsellerdata.supplier);
  await addsupp.contactpersontf.fill(erpsellerdata.contactperson);
  await addsupp.addresstf.fill(erpsellerdata.address);
  await addsupp.contactf.fill(erpsellerdata.contact);
  await addsupp.savebtn.click();

  //  Assertion
  await expect(
    page.getByText(erpsellerdata.supplier, { exact: true })
  ).toBeVisible();

  await home.profiledropdown.click();
  await home.logoutlink.click();
});


test("Scenario 10 - Add Purchase Order", async ({ page }) => {

  const landing = new erplanding(page);
  const home = new adminhome(page);
  const purchase = new purchaseorder(page);

  await page.goto(erpdata.url);
  await landing.admintab.click();
  await landing.adminusernametf.fill(erpdata.username);
  await landing.adminpasswordtf.fill(erpdata.password);
  await landing.adminloginbutton.click();

  await expect(home.purchaseorderlistlink).toBeVisible();
  await home.purchaseorderlistlink.click();

  await purchase.addbutton.click();

  await purchase.productcode.fill(purchasedata.productcode);
  await purchase.quantity.fill(purchasedata.quantity);
  await purchase.selectstatus.selectOption({ label: "Received" });
  await purchase.expirydate.fill(purchasedata.expirydate); // YYYY-MM-DD
  await purchase.rmarks.fill(purchasedata.remarks);
  await purchase.savebutton.click();

  // Assertion
  await expect(
    page.getByText(purchasedata.productcode, { exact: true })
  ).toBeVisible();

  await home.profiledropdown.click();
  await home.logoutlink.click();
});