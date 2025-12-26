class adminhome{
    constructor(page){
        this.customerlink = page.locator('//a[@href="customer.php"]')
        this.supplierlink = page.locator('//a[@href="supplier.php"]')
        this.purchaseorderlistlink = page.locator('//a[@href="purchaseslist.php"]')
        this.customerledgerlink = page.locator('//a[@href="select_customer.php"]')
        this.searchcusttf = page.locator('//input[@id="country"]')
        this.searchbutton = page.locator('//input[@value="Search"]')
        this.profiledropdown = page.locator('//a[@class="dropdown-toggle"]')
        this.adduserlink = page.locator('//a[@href="#myModal"]')
        this.username = page.locator('//input[@name="user"]')
        this.password = page.locator('//input[@name="pass"]')
        this.fullname = page.locator('//input[@name="name"]')
        this.savebutton = page.locator('//div[@class="modal-dialog"]/descendant::form[@action="saveuser.php"]/div[@id="ac"]/input[@class="btn btn-primary btn-block"]')
        this.logoutlink = page.locator('//a[@href="Logout.php"]')
    }
}
export default adminhome