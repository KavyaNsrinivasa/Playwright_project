import {expect, test} from '@playwright/test'

test("frames", async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    //total frames

    let frames = await page.frames(); //returns frames objects in an array
    // console.log(frames.length);
    // for(let frame of frames){
    //     console.log(await frame.title()); //to get the title of frame
    // }
    // console.log(await page.title()) //main page is also considered as a frame
   
    /// Approach1 frame() name and url------------//

   let frame1= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.locator('//input[@name="mytext1"]').fill("asfghjkl")
    await page.waitForTimeout(2000)
    // await expect(await frame1.locator('//input[@name="mytext1"]').inputValue()).toContain('asfghjkl')

    ///approach2 ----------framelocator////
    let frame2 = await page.frameLocator('//frame[@src="frame_2.html"]').locator('//input[@name="mytext2"]')
    await frame2.fill('qwertyuiop')
    await page.waitForTimeout(2000)

    //approach3-------------
    let frame3= await page.locator('//frame[@src="frame_2.html"]').contentFrame()
    await frame3.locator('//input[@name="mytext2"]').fill('fghjklllllll')

    //innerframe

    let frame4 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'})
   let button =  await frame4.frameLocator('//iframe').locator("//div[@class='ulDsOb' and .='I am a human']")
    await button.click()
    await page.waitForTimeout(2000)
})