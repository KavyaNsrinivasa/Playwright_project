class signup{
     constructor(page){
        this.nametf= page.locator('//input[@id="name"]')
        this.emailtf = page.locator('//input[@id="email"]')
        this.passwordtf = page.locator('//input[@id="password"]')
        this.confirmpwdtf = page.locator('//input[@id="cpassword"]')
        this.contacttf = page.locator('//input[@id="txtpassword"]')
        this.maleradiobtn = page.locator('//input[@value="m"]')
        this.femaleradiobtn = page.locator('//input[@value="f"]')
        this.submitbutton = page.locator('//input[@name="submit"]')
     }
}
export default signup