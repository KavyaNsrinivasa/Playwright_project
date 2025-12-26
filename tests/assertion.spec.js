import {test,expect} from "@playwright/test"

test("auto retry assertion",async ({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    //  await expect(page).toHaveTitle("DemoApps | Qspiders | Text Box") //checks for the page title
    //  await expect(page).toHaveURL("https://demoapps.qspiders.com/ui?scenario=1") //checks for the page url
    // await expect(await page.locator("//button[@type='submit']")).toBeVisible()//checks if element is visible
    // await expect( page.getByText("Yes")).toBeEnabled() //check if the button is enabled
    // await expect(await page.getByText("Yes")).toBeDisabled()
    // await expect(page.locator('//label[text() = "Password"]')).toContainText("Password") 
    // //checks if the element contains the ssame text
    // await expect(page.locator("//a[contains(., 'Login Now' )]")).toBeAttached()//checks if the ele is attached to dom
    // await expect(page.locator('//input[@id="domain_a"]')).toBeChecked()//it checks if the checkbox is checked by default
    // await expect(page.locator('//input[@id="domain_a"]')).not.toBeChecked()//it cheks if the checkbox is unchecked
    // await expect(page.locator('//span[contains(., "EMI(Easy Installments)")]')).toBeDisabled()//checks if ele is not disabled
    // await expect(page.locator('//input[@id="email"]')).toBeEditable()//check if the ele is editable
    // await expect(page.locator('//input[@id="email"]')).toBeEmpty()//check is the ele is empty
    // await expect(page.locator('//input[@id="domain_a"]')).toBeEditable()
    await expect(page.locator('//input[@id="name"]')).toBeHidden() // checks for hidden text
    await page.locator("//*[name()='svg']").first().screenshot({path: "./screenshot/eye.png"})
    await expect(page.getByLabel('Name')).toHaveScreenshot()

})