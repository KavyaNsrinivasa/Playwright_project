class home{
    constructor(page){
        this.homelink = page.locator('//a[@href="aloginwel.php"]')
        this.addemplink = page.locator('//a[@href="addemp.php"]')
        this.viewemplink = page.locator('//a[@href="viewemp.php"]')
        this.assignprojlink = page.locator('//a[@href="assign.php"]')
        this.projstatuslink = page.locator('//a[@href="assignproject.php"]')
        this.salarytablelink = page.locator('//a[@href="salaryemp.php"]')
        this.empleavelink = page.locator('//a[@href="empleave.php"]')
        this.logoutlink = page.locator('//a[@href="alogin.html"]')
    }
    clickhome(){
        return this.homelink.click()
    }
    clickaddemp(){
        return this.addemplink.click()
    }
    clickviewemp(){
        return this.viewemplink.click()
    }
    clickassignproj(){
        return this.assignprojlink.click()
    }
    clickprojectstatus(){
        return this.projstatuslink.click()
    }
    clicksaltab(){
        return this.salarytablelink.click()
    }
    clickempleave(){
        return this.empleavelink.click()
    }
}
export default home