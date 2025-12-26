class bookcart{
    constructor(page){
        this.placeorderlink = page.locator('//a[@href="cart.php?place=true"]')
    }
}
export default bookcart