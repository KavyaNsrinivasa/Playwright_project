import {test} from "@playwright/test"
import booklanding from "../PageObjectModel/booklanding.page"
import bookregister from "../PageObjectModel/bookregiser.page"
import booklogin from "../PageObjectModel/booklogin.page"
import bookhome from "../PageObjectModel/bookhome.page"
import bookgenre from "../PageObjectModel/bookgenre.page"
import book from "../PageObjectModel/book.page"
import bookcart from "../PageObjectModel/bookcart.page"
import bookdata from "../testData/book.json"

test("online book", async({page})=>{
    page.on('dialog',async(dialog)=>{
        console.log(await dialog.message())
       await dialog.accept()
    })
    let url = bookdata.url;
    let rusn = bookdata.username;
    let rpwd = bookdata.password;
    let lusn = bookdata.username;
    let lpwd = bookdata.password;

    let bookland = new booklanding(page)
    let bookreg = new bookregister(page)
    let booklog = new booklogin(page)
    let bookho = new bookhome(page)
    let bookge = new bookgenre(page)
    let bookpage = new book(page)
    let bookkart = new bookcart(page)

    //launch url
    await page.goto(url)
    //signup
    await bookland.signupbutton.click()
    //enter username
    await bookreg.usernametf.fill(rusn)
    //enter password
    await bookreg.pwdtf.fill(rpwd)
    //click signup
    await bookreg.signupbutton.click()
    //alert - popup - message
    //login
    await bookland.loginbutton.click()
    //enter username
    await booklog.usernametf.fill(lusn)
    //enter password
    await booklog.passwordtf.fill(lpwd)
    //click on login
    await booklog.loginbutton.click()
    //alert -popup-message
    //click on literature and fiction
    await bookho.genrelink.click()
    //click on 1st book
    await bookge.booklink.click()
    //click on add to cart
    await bookpage.addtocartlink.click()
    //click on place order
    await bookkart.placeorderlink.click()
    //alert - popup -message
    //take screenshot
    await page.screenshot({path:"screenshot/books.png"})
})