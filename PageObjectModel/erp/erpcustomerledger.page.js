class customerledger{
    constructor(page){
        this.addpaymentbutton = page.locator('//a[@id="addd"]')
        this.amounttf = page.locator('//input[@name="amount"]')
        this.remarkstf = page.locator('//input[@name="remarks"]')
        this.savebutton = page.locator('//div[@id="facebox"]/descendant::input[@class="btn btn-primary btn-block"]')
        this.profiledropdown = page.locator('//a[@class="dropdown-toggle"]')
        this.adduserlink = page.locator('//a[@href="#myModal"]')
        this.username = page.locator('//input[@name="user"]')
        this.password = page.locator('//input[@name="pass"]')
        this.fullname = page.locator('//input[@name="name"]')
        this.savebutton = page.locator('//div[@class="modal-dialog"]/descendant::form[@action="saveuser.php"]/div[@id="ac"]/input[@class="btn btn-primary btn-block"]')
    }
}
export default customerledger