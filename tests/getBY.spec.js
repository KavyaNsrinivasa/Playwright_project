import {test} from "@playwright/test"

// //getByLabel
// test("label", async({page})=>{
//     await page.goto("https://demo.nopcommerce.com/login")
//     // await page.getByLabel("Password:").fill("!@#$%^&")
//     await page.getByLabel("Passwor:",{exact: true}).fill("sdfghj") //check for exact label text
//     // await page.getByLabel("Password",{exact : false}).fill("fghjk") //works even if partial label text is there
// })

//getByPlaceholder

// test("placeholder", async({page})=>{
//     await page.goto("https://demo.nopcommerce.com/login")
//     // await page.getByPlaceholder("Search store").fill("books")
//     // await page.getByPlaceholder("Search stoe",{exact: true}).fill("phone")
//     // //searches for exact placeholder text if not match waits for timeout and then exits
//     await page.getByPlaceholder("Search stor",{exact: false}).fill("soap")
//     await page.waitForTimeout(1000)
// })

//getByText

// test("text", async({page})=>{
    
//     await page.goto("https://demo.nopcommerce.com/login")
//     // await page.getByText("Computers").click()
//     // await page.getByText("Computers",{exact : true}).click()
//     await page.getByText("Electronics").click()
//     await page.waitForTimeout(1000)
// })

//getByAltText

// test("alt text", async({page})=>{
//     await page.goto("https://demo.nopcommerce.com/login")
//     await page.getByAltText("nopCommerce demo store",{exact:true}).click()
//     await page.waitForTimeout(1000)
// })

//getByTitle

// test("title", async({page})=>{
//     await page.goto("https://demo.nopcommerce.com/electronics")
//     await page.getByTitle("Show products in category Camera & photo").first().click()
//     await page.waitForTimeout(1000)
// })

//getByRole --very important 

// test("ARIA role", async({page})=>{
//     await page.goto("https://demo.nopcommerce.com/electronics")
//     await page.getByRole("link", {name:  'Camera & photo' }).first().click();
//     await page.waitForTimeout(1000)
// })

//getBy TestId
test("test id", async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId("password").fill("sdfghj");
    await page.waitForTimeout(3000);
})