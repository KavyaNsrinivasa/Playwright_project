class home{
    constructor(page){
        this.createticketlink = page.locator('//a[@href="create-ticket.php" and .=" Create Ticket"]')
        this.viewticketlink = page.locator('//a[@href="view-tickets.php" ]')
    }
}
export default home