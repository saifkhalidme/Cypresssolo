 class PunchVerification{

    punchIN(){
      cy.get('.oxd-icon-button.oxd-icon-button--solid-main.orangehrm-attendance-card-action',{timeout:10000}).should('be.visible').click()
       cy.get('.orangehrm-card-container').should('be.visible')
       cy.get('button[type="Submit"]').click()
       cy.get('.orangehrm-card-container').should('be.visible')
       cy.contains('Success',{timeout:10000}).should('be.visible')
    }

     punchOutt(){
       cy.get('.oxd-icon-button.oxd-icon-button--solid-main.orangehrm-attendance-card-action',{timeout:10000}).should('be.visible').click()
       cy.get('.orangehrm-card-container').should('be.visible')
       cy.get('button[type="Submit"]').click()
       cy.get('.orangehrm-card-container').should('be.visible')
       cy.contains('Success',{timeout:10000}).should('be.visible')
} 
}

export default PunchVerification