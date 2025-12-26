class bookregister{
    constructor(page){
        this.usernametf = page.locator('//input[@name="register_username"]')
        this.pwdtf = page.locator('//input[@name="register_password"]')
        this.signupbutton = page.locator('//button[@value="register"]')
    }
}
export default bookregister