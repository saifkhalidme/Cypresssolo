import YouSearch from "../selectors/Searchselectors"
const search = new YouSearch()
export default class SongSearch{

    SearchSection(){
   cy.get(search.searchBox).should('be.visible')
   cy.get(search.searchForm).should('be.visible').type('Javed Amirkhail & Mir Maftoon - Worekhmany Janan')
   cy.get(search.searchIcon).should('be.visible').click()
   cy.get(search.specificResult).should('be.visible').click()
   
   cy.wait(1200000)
   cy.get(search.stopVideo).click()


}
}