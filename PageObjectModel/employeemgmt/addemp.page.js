class addemp{
    constructor(page){
        this.page = page
        this.firstnametf = page.locator('//input[@name="firstName"]')
        this.lastnametf = page.locator('//input[@name="lastName"]')
        this.emailtf = page.locator('//input[@name="email"]')
        this.birthda = page.locator('//input[@placeholder="BIRTHDATE"]')
        this.gender = page.locator('//span[@id="select2-gender-ly-container"]')
        this.female = page.locator('//li[@id="select2-gender-7r-result-155p-Female"]')
    }
    async firstname(fn){
        await this.firstnametf.fill(fn)
    }
    async lastname(ln){
        await this.lastnametf.fill(ln)
    }
    async email(email){
        await this.emailtf.fill(email)
    }
    async birthday(date){
        // await this.birthda.click({force:true})
        await this.birthda.type(date)
    }
    async gend(){
        await this.gender.click()
    }
    async fem(){
        await this.female.click()
    }
}

export default addemp