class bookgenre{
    constructor(page){
        this.booklink = page.locator("//div[contains(., 'Chetan Bhagat Collection') and @class='book-block']")
    }
}
export default bookgenre