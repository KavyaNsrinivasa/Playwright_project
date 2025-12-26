class customerlist{
    constructor(page){
        this.addcustbutton = page.locator('//button[@class="btn btn-primary"]')
        this.editbutton = page.locator('//a[@href="editcustomer.php?id=2"]')
        this.deletebtn = page.locator('//a[@id="2"]')
        this.adduserlink = page.locator('//a[@href="#myModal"]')
        this.deletecust = page.locator('//a[@id="3"]')
        this.editbtn = page.locator('//a[@href="editcustomer.php?id=4"]')
        this.updatebtn = page.locator('//input[@value="Update"]')
    }
}
export default customerlist