class Search{


searchedResult(){

    cy.orangeVisit()
    cy.hrmLoginT()
    cy.get('.oxd-main-menu').should('be.visible')
    cy.get('.oxd-main-menu-search').type('buzz')
    cy.contains('span', 'Buzz').should('be.visible')

}
}
export default Search