import {test} from '@playwright/test'

test("notification", async({browser})=>{
    let context = await browser.newContext({permissions:["notifications","microphone","geolocation","camera"]});
    let page = await context.newPage();
    await page.goto('https://demoapps.qspiders.com/ui/browserNot?sublist=0')
    await page.getByRole("button",{name: "Notification"}).click()
    await page.waitForTimeout(2000)
    let grantresult = await page.evaluate(()=>{return Notification.requestPermission()})//to go inside the browser from node to get the status of the permission
    console.log(grantresult)
    //revoke permissions
    await context.clearPermissions()//clears the granted permissions 
    let revokeresult = await page.evaluate(()=>{return Notification.requestPermission()})
    console.log(revokeresult);
    
})