import LocatorStrategy from "../Pages/locatorspage"
const getelement = new LocatorStrategy()

describe('verify and get the elements using different ways', ()=>{
beforeEach(()=>{
    cy.visit('https://testpages.eviltester.com/pages/basics/locator-approaches/')
})
    it('Verify locators section is visible on page', ()=>{

        getelement.findContent()
    })

    it ('Get elements using different approach', ()=>{

        getelement.findLocator()
    })
})