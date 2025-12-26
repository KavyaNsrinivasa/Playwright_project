class booklogin{
    constructor(page){
        this.usernametf = page.locator('//input[@name="login_username"]')
        this.passwordtf = page.locator('//input[@name="login_password"]')
        this.loginbutton = page.locator('//button[@value="login"]')
    }
}
export default booklogin