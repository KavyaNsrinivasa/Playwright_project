class purchaseorder{
    constructor(page){
        this.addbutton = page.locator('//a[@href="stockin.php?name=P-08&iv=PO-8330322&qty=100&date=2017-02-23&tid=1"]')
        this.productcode = page.locator('//input[@name="product_code"]')
        this.quantity = page.locator('//input[@name="qty"]')
        this.selectstatus = page.locator('//select[@name="status"]')
        this.expirydate = page.locator('//input[@name="exdate"]')
        this.rmarks = page.locator('//textarea[@name="remark"]')
        this.savebutton = page.locator('//div[@id="facebox"]/descendant::input[@class="btn btn-primary btn-block"]')
    }
}
export default purchaseorder