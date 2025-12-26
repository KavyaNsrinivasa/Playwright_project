import {test} from "@playwright/test"

// get viewport size
// test("browser controls",async({page})=>{
//     await page.goto("https://www.flipkart.com") //launches the particular url 
//     // let size =  page.viewportSize(); //returns the page size 
//     // console.log(size);
//     console.log(page.viewportSize())// use either in both the ways
// })

// SET VIEWPORT SIZE AND GET THE PAGE TITLE AND URL

// test("set port size", async({page})=>{
//     await page.goto("https://www.amazon.com");
//     await page.setViewportSize({width: 1000, height: 600}) //sets the width and height of the viewport
//     let title = await page.title();
//     console.log(await page.url())
//     console.log(title); //gets the title of the page
//     console.log(page.viewportSize())
// })

//TO GET THE CONTEXT COOKIES

// test(" context cookies", async ({browser})=>{
//    let context = await browser.newContext();
//    let page1 = await context.newPage();
//     console.log(await context.cookies()); // here we get empty because we have just created the context 
//    await page1.goto("https://www.amazon.in");
//    let page2 = await context.newPage();
//     await page2.goto("https://www.flipkart.com");
//     // console.log(await context.cookies());
// })

//CHROMIUM/FIREFOX/WEBKIT LAUNCH - getting error should execute again

// test("launch", async ()=>{
//     let browser =  await chromium.launch();
//     let context = await browser.newContext();
//     let page = context.newPage(); 
//     await page.goto("https://www.google.com");
// })

// SCREENSHOTS

test("screenshots", async({page})=>{
    await page.goto("https://www.amazon.in");
    page.close()
    await page.waitForTimeout(2000) //to pause the page (not recomended in real time)
    await page.screenshot({path:"screenshot/ss.png"}) //it takes only one screenshot
    let t = new Date().getTime();
    await page.screenshot({path:`screenshot/page-${t}.png`})
})