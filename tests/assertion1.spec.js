import {test,expect} from "@playwright/test"

// test("non retry", async()=>{
//     // let a = 10;
//     // expect(a).toBe(1) //compares the value and gives pass or fail
//     let b ={name:10,
//         age: 20
//     }
//     // expect(b.age).toBe(20)// check the values in the object
//     // expect(b).toBe([])
//     // expect(b).not.toBe([])
//     // expect(1+0.2).toBeCloseTo(1.2,2)//checks that the value should be in range
//     let c = 25;
//     // expect(c).toBeDefined()//ensure value is defined
//     // expect(c).toBeFalsy()//falsy values are zero,undefined,null,NaN
//     expect(c).toBeGreaterThan(26)
// })

test("contain", async({page})=>{

    // page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    // let a =await page.locator('//button[contains(.,"Register")]').textContent()
    // await expect(a).toContain("Register")
    await page.goto("https://www.amazon.in")
     await page.locator('//input[@id="twotabsearchtextbox"]').fill("book")
     await page.waitForTimeout(1000)
  let b =   await page.locator('//div[@role="row"]').allTextContents()
   await  expect(b).toContain("book self")//checks if the list contains the particular text
   await expect.soft(b).toHaveLength(1)
   await page.locator('//a[@href="/deals?ref_=nav_cs_gb"]').click()
   await page.waitForTimeout(1000)
})