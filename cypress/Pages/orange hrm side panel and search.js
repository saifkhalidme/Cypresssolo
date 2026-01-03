class SidePanel {

    sidePanelVisible(){

    cy.orangeVisit()
    cy.wait(20000)
    cy.hrmLoginT()
    cy.get('.oxd-main-menu').should('be.visible')
   
}
}

class SideMenuArrow{

    openCloseButton(){
    cy.orangeVisit()
    cy.wait(20000)
    cy.hrmLoginT()
    cy.get('.oxd-main-menu').should('be.visible') 
    cy.get('.oxd-icon.bi-chevron-left').click()
    cy.get('.oxd-icon.bi-chevron-right').click()   
   
}
}

class SearchBar{
    
    searchB(){

    cy.orangeVisit()
    cy.wait(20000)
    cy.hrmLoginT()
    cy.get('.oxd-main-menu').should('be.visible')
    cy.get('.oxd-main-menu-search').type('buzz')
    cy.contains('span', 'Buzz').should('be.visible')

}
}
export default { SidePanel ,SideMenuArrow, SearchBar, }