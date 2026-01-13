import Register from "../Pages/register"
const register = new Register()

describe('Signup Functionality is working', () => {

    it('Check Register Flow', () => {
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
        register.register()
    })
})
