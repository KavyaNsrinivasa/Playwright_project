import {test} from "@playwright/test"
import { log } from "console"

test("fill n type",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui")
    // await page.getByLabel("Name").fill("Kavya")
    await page.getByPlaceholder("Enter your password").fill("123456789")
    await page.locator("//input[@id='email']").type("wehf@gmail.com")
    // await page.waitForTimeout(2000)
    await page.getByText("Register").last().click();
    // await page.pause(1000)
    

    // let text = await page.locator("//section[@class='poppins text-[14px]' and text() ='Radio Button' ]").innerText();
    // console.log(text)
    // let text = await page.locator("//section[@class='poppins text-[14px]' and text() ='Radio Button' ]").textContent()
    // console.log(text)

    //inputvalue()

    let text = await page.getByLabel("Name").inputValue()
    console.log(text)
    let dis = await page.getByPlaceholder("Enter your password").inputValue()
    console.log(dis)

    //allTextContents

    let a = await page.locator("//section[@class='poppins text-[14px]']").allTextContents()
    console.log(a)

    //getAttribute - returns the attribute value based on the attribute name

    let c = await page.locator('//input[@id="name"]').getAttribute("type")
    console.log(c);
    
    //all() - returns all the locator handles - for multiple elements

    let all = await page.locator('//section[@class="poppins text-[14px]"]').all()
    console.log(all)
    let first = await page.locator('//section[@class="poppins text-[14px]"]').first()
    console.log(first)
    let last = await page.locator('//section[@class="poppins text-[14px]"]').last()
    console.log(last)
    let nth = await page.locator('//section[@class="poppins text-[14px]"]').nth(2)
    console.log(nth)
    let d = await page.locator('//input[@id="name"]').all() //when there is single element it gives only that locator
    console.log(d)

    //isVisible() - checks if the element is visible in dom or not
    
    await page.locator('//input[@id="name"]').fill("Kavya");

    let vis = await page.getByRole("textbox",{name: "Name"}).isVisible()
    console.log(vis)
})