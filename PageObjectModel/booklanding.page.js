class booklanding{
    constructor(page){
        this.signupbutton = page.locator('//button[@id="register_button"]')
        this.loginbutton = page.locator('//button[@id="login_button"]')
    }
}
export default booklanding