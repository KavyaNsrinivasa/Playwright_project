import {test} from '@playwright/test'
// test.use({actionTimeout: 200000})
test("pro kabaddi", async({page})=>{
   
   await page.goto("https://www.prokabaddi.com/")
  let c = await page.locator('//div[@class="team-name"]/../../following-sibling::div[@class="table-data points"]|//div[@class="team-name"]').allInnerTexts()
  console.log(c);
   await page.locator('//a[@href="https://www.prokabaddi.com/teams"]').click();
   await page.locator("//div[@class='card-text' and contains(.,'Bengaluru')]").click()
   // let d = await page.locator('//div[@class="stats-wrap"]/p[@class="name"]/following-sibling::p[@class="stats-count"]|//div[@class="stats-wrap"]/p[@class="name"]').allInnerTexts()
  let e = await page.locator('//div[@class="stats-wrap"]/p[@class="name"]/parent::div/p[@class="stats-count"]|//div[@class="stats-wrap"]/p[@class="name"]').allInnerTexts()
   console.log(e)
   let a = await page.locator('//div[@class="card-wrapper"]/descendant::p[@class="title" and contains(.,"Attack")]/../following-sibling::div[@class="card-body"]/descendant::div[@class="stats-item"]').allInnerTexts()
   console.log(a);
   
// let overall = await page.locator('//p[@class="title" and contains(.,"Overall")]/../following-sibling::div/descendant::div[@class="information-body"]/descendant::p[@class="name"]/following-sibling::p[@class="stats-count"]|//p[@class="title" and contains(.,"Overall")]/../following-sibling::div/descendant::div[@class="information-body"]/descendant::p[@class="name"]').allInnerTexts()
// console.log(overall);
// let attack = await page.locator("//p[@class='title' and contains(.,'Attack')]/../following-sibling::div/descendant::div[@class='information-body']/descendant::p[@class='name']/following-sibling::p[@class='stats-count']|//p[@class='title' and contains(.,'Attack')]/../following-sibling::div/descendant::div[@class='information-body']/descendant::p[@class=''name']").allInnerTexts()
// console.log(attack);

})