class SidePanel {

    sidePanelVisible(){

    cy.orangeVisit()
    cy.wait(20000)
    cy.hrmLoginT()
    cy.get('.oxd-main-menu').should('be.visible')
   
}
}
    openCloseButton(){
    cy.orangeVisit()
    cy.wait(20000)
    cy.hrmLoginT()
    cy.get('.oxd-main-menu').should('be.visible') 
    cy.get('.oxd-icon.bi-chevron-left').click()
    cy.get('.oxd-icon.bi-chevron-right').click()   
   
}

   

export SidePanel 