Cypress.Commands.add ('webVisit', ()=>{
    cy.visit('https://testautomationpractice.blogspot.com/')
})

Cypress.Commands.add('orangeVisit' , ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    
})

Cypress.Commands.add('hrmLogin',()=>{
    
    cy.get('.orangehrm-login-slot')
    cy.fixture('orangewrong').then((creds)=>{
    cy.get('input[name="username"]').type(creds.username)
    cy.get('input[name="password"]').type(creds.password)
    cy.get('button[type="submit"]').click()
})
})
Cypress.Commands.add('emptylogin', ()=>{

    cy.get('button[type="submit"]').click()
    cy.contains('span', 'Required').should('be.visible')
})
Cypress.Commands.add('tOut',(timeout=40000)=>{

    return cy.get('selector' , {})    
   
})

Cypress.Commands.add('hrmLoginT',()=>{   

    cy.get('.orangehrm-login-slot').should('be.visible')
    cy.fixture('orangeadmin').then((creds) =>{
    cy.get('input[name="username"]').type(creds.username)
    cy.get('input[name="password"]').type(creds.password)
    cy.get('button[type="submit"]').click()

})
})