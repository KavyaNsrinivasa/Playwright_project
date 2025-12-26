class createticket{
    constructor(page){
        this.subjecttf= page.locator('//input[@id="subject"]')
        this.tasktypedropdwn= page.locator('//select[@name="tasktype"]')
        this.prioritydropdwn = page.locator('//select[@name="priority"]')
        this.descriptiontextareaf = page.locator('//textarea[@name="description"]')
        this.sendbutton = page.locator('//input[@name="send"]')
    }
}
export default createticket