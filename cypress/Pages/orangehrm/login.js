class LoginModal {

  orangeLogin() {
    cy.get('.orangehrm-login-slot').should('be.visible')
    cy.fixture('orangeadmin').then((creds) => {
    cy.get('input[name="username"]').type(creds.username)
    cy.get('input[name="password"]').type(creds.password)
    cy.get('button[type="submit"]').click()
    
})
}

  wrongLogin() {
    cy.fixture('orangewrong').then((creds) => {
    cy.get('input[name="username"]').type(creds.username)
    cy.get('input[name="password"]').type(creds.password)
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-alert-content.oxd-alert-content--error').should('be.visible')
 
})
}

  dashboardAssert() {
    cy.get('.oxd-layout-context', { timeout: 4000 }).should('be.visible')
    cy.contains('Dashboard').should('be.visible')
  
}

  iForgot() {
    cy.get('.orangehrm-login-forgot').should('be.visible')
    cy.get('.orangehrm-login-forgot').click()
    cy.get('.oxd-form').should('be.visible')
}
}

export default LoginModal
