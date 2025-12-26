class erplanding{
    constructor(page){
        this.cashiertab = page.locator('//a[@href="#menu2"]')
        this.cashierusername = page.locator('//input[@name="cashier_username"]')
        this.cashierpassword = page.locator('name="cashier_pass"')
        this.cashierloginbutton = page.locator('//button[@id="btn"]')
        this.admintab = page.locator('//a[@href="#home"]')
        this.adminusernametf = page.locator('//input[@name="username"]')
        this.adminpasswordtf = page.locator('//input[@name="pass"]')
        this.adminloginbutton = page.locator('//button[@id="btn-login"]')
        this.cashiertab = page.locator('//a[@href="#menu2"]')
        this.cashierusernametf = page.locator('//input[@name="cashier_username"]')
        this.cashierpwdtf = page.locator('//input[@name="cashier_pass"]')
        this.cashierloginbtn = page.locator('//button[@id="btn"]')
    }
}
export default erplanding