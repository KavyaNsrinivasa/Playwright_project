class custpage{
    constructor(page){
        this.firstnametf = page.locator('//input[@name="fname"]')
        this.middlenametf = page.locator('//input[@name="mname"]')
        this.lastnametf = page.locator('//input[@name="lname"]')
        this.addresstf = page.locator('//input[@name="address"]')
        this.contacttf = page.locator('//input[@name="contact"]')
        this.membertf = page.locator('//input[@name="memno"]')
        this.savebtn = page.locator('//input[@value="Save"]')
    }
}
export default custpage