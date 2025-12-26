class signin{
    constructor(page){
        this.emailtf = page.locator('//input[@id="txtusername"]')
        this.pwdtf = page.locator('//input[@id="txtpassword"]')
        this.loginbutton =  page.locator('//button[@name="login"]')
    }
}
export default signin