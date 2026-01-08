import LoginSelector from "../selectors/practiceexpand/loginSelector"
const login= new LoginSelector;

Cypress.Commands.add('expandLogin', () => {
  cy.get(login.login).should('be.visible')
  cy.get('#username').should('be.visible').type(Cypress.env('username'))
  cy.get('#password').should('be.visible').type(Cypress.env('password'), { log: false })
  cy.get('#submit-login').click()
  cy.get('.alert.alert-success.alert-dismissible.fade.show').should('be.visible')
  cy.get('.btn-close').click()

})

Cypress.Commands.add('expandLogout', () => {
  cy.get('#login').should('be.visible')
  cy.get('#username').should('be.visible').type(Cypress.env('username'))
  cy.get('#password').should('be.visible').type(Cypress.env('password'), { log: false })
  cy.get('#submit-login').click()
  cy.get('.alert.alert-success.alert-dismissible.fade.show').should('be.visible')
  cy.get('.btn-close').click()
  cy.get('.icon-2x.icon-signout').click()
})
