class editcustpage{
    constructor(page){
        this.fname = page.locator('//input[@value="sindhu" ]')
        this.lname = page.locator('//input[@value="rao" ]')
        this.updatebutton = page.locator('//input[@value="Update"]')
    }
}
export default editcustpage