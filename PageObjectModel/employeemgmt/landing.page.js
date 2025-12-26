class landing{
    constructor(page){
        this.loginlink = page.locator('//a[@href="elogin.html"]')
        this.employeeloginlink = page.locator('//a[@href="elogin.html"]')
        this.empemailaddtf = page.locator('//input[@name="mailuid"]')
        this.emppwdtf = page.locator('//input[@name="pwd"]')
        this.emploginbutton = page.locator('//input[@name="login-submit"]')

        this.adminloginlink = page.locator('//a[@href="alogin.html"]')
        this.adminemailtf = page.locator('//input[@name="mailuid"]')
        this.adminpwdtf = page.locator('//input[@name="pwd"]')
        this.adminloginbutton = page.locator('//input[@name="login-submit"]')
    }
    
    clicklogin(){
    return this.loginlink.click()
    }
    clickadminlink(){
        return this.adminloginlink.click()
    }
    adminemail(email){
        return this.adminemailtf.fill(email)
    }
    adminpwd(pwd){
        return this.adminpwdtf.fill(pwd)
    }
    clickadminlogin(){
        return this.adminloginbutton.click()
    }
}
export default landing
