import {test} from "@playwright/test"

// test.skip("test1",async({page})=>{ //skip this particular test block
//     console.log("test1");
    
// })
test("test2",async({browserName})=>{
    test.skip(browserName === "chromium") //skips based on condition
    console.log("test1");
    
})
// test.only("test3",async({page})=>{ //only this block gets executed
//     console.log("test1");
    
// })

test.fail("test 4",async({page})=>{ //here the execution should fail then only the res is pass
    page.goto("123");
})

// test.fixme("test 5",async({page})=>{ //basically it is like skip, if there is error it should not get executed
//     page.goto("123");
// })

test("test 6",async({page})=>{ 
    test.slow() //it takes the timeout thrice the default time
    console.log("test 6");
    
})

test.describe("login",async()=>{//declare group of tests
    test("valid",async()=>{
        console.log("valid");
        test.setTimeout(3000) //sets the time for the particular block
    })
   test("invalid",async()=>{
    console.log("invalid");
    
   })
})