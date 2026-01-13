describe('Logut button is functional' , ()=>{
    it('logout is working' , ()=>{
        cy.visit('https://practice.expandtesting.com/login')
        cy.expandLogout()
    })
})