import {test} from "@playwright/test"


test("dropdown", async({page})=>{
    // await page.goto('https://demoapps.qspiders.com/ui/dropdown?sublist=0')
    // //selectOption()
    // // await page.locator('//select[@id="select3"]').selectOption({value:"India"})//selecting with value
    // // await page.locator('//select[@id="select3"]').selectOption({label:"India"})//select with label
    // // await page.locator('//select[@id="select3"]').selectOption({index:7})//selecting with index
    // await page.locator('//select[@id="select3"]').selectOption('India')//selecting directly with value
    // await page.waitForTimeout(2000)
    
    //-----------multiselect---------------//

//     await page.goto('https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1')
//     await page.waitForTimeout(2000)
//     // await page.locator('//select[@id="select-multiple-native"]').selectOption([{value:"Mens Cotton Jacket"},{value: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"}])
//    await page.locator('//select[@id="select-multiple-native"]').selectOption([{index:1},{index:3}])
//     await page.locator('//button[@class="bg-orange-500 p-2 text-white rounded w-[150px]"]').click();
//     await page.waitForTimeout(2000)

    //--------custom dropdown ---------------------//

    await page.goto('https://www.amazon.in/s?k=books&crid=1JAZBP91H609W&sprefix=books%2Caps%2C257&ref=nb_sb_noss_2')
    await page.locator('//select[@id="s-result-sort-select"]').click({force:true})
    await page.locator('//a[@class="a-dropdown-link"]').first().waitFor()
    let options= await page.locator('//a[@class="a-dropdown-link"]').all()
    //or
    // let options= await page.locator('//a[@class="a-dropdown-link"]').first().click()
    // for(let option of options){
    //     let text = await option.textContent()//gives the visible text in the option
    //     if(text.includes('Best ')){
    //         await option.click()
    //     }
    // }
    // await page.waitForTimeout(3000)

    //xpath-----------------------//

    // await page.locator('//a[@id="s-result-sort-select_2"]').click()
    // await page.waitForTimeout(2000)
    //variable attached to xpath for text to avoid hardcoding
    let text = "Price: Low to High"
    await page.locator(`//a[@class="a-dropdown-link" and text()= "${text}"]`).click()
    await page.waitForTimeout(2000)
})