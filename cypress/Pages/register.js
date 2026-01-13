import SignIn from "../selectors/jp/jpsignup"
const signFlow = new SignIn
export default class Register {

    register() {
        cy.get(signFlow.signInButton,).click()

        cy.get(signFlow.register).should('be.visible').click()

        cy.get(signFlow.userId).type(Cypress.env('jp').username)

        cy.get(signFlow.password).type(Cypress.env('jp').password)

        cy.get(signFlow.repeatPassword).type(Cypress.env('jp').password)

        cy.fixture('jpregister').then((jpregister) => {
            cy.get(signFlow.firstName).type(jpregister['First name'])
            cy.get(signFlow.lastName).type(jpregister['Last name'])
            cy.get(signFlow.email).type(jpregister['Email'])

        })

        cy.get(signFlow.saveButton).click()
    }


}
