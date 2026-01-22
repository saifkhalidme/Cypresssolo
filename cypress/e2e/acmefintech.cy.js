import LoginModule from"../Pages/login"
const logingin = new LoginModule()

describe('Verify Login Module is functional', () => {

    beforeEach(() => {
        cy.visit('https://demo.applitools.com/')
    })

    it('Verify login Modal is visible', () => {
        logingin.loginuser()
    })

    it('verify mandatory fields are visible', () => {
        logingin.loginfields()
    })

    it('verify login button is visible', () => {
        logingin.loginbutton()
    })
   
    it('verify login functionality is workin', () => {
         
        cy.get('#username').type(Cypress.env('acmelogin').username)
        cy.get('#password').type(Cypress.env('acmelogin').password)
       logingin.loginfunctionality()
    })

})