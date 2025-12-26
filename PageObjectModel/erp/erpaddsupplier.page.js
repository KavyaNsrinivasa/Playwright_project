class addsupplier{
    constructor(page){
        this.suppliernametf = page.locator("//div[@class='container-fluid']/descendant::div[@id='ac']//input[@name='name' and @class='form-control']")
        this.contactpersontf = page.locator('//input[@name="cperson"]')
        this.addresstf = page.locator('//input[@name="address"]')
        this.contactf = page.locator('//input[@name="contact"]')
        this.savebtn = page.locator('//div[@class="container-fluid"]/descendant::div[@id ="ac"]/input[@value="save"]')
    }
}
export default addsupplier