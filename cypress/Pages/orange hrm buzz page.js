class BuzzPage {

   buzzNewsFeed(){
    cy.orangeVisit()
    cy.wait(20000)
    cy.hrmLoginT()
    cy.get('.oxd-main-menu').should('be.visible')
    cy.get('a[href="/web/index.php/buzz/viewBuzz"]').click()
    cy.get('.oxd-layout-context').should('be.visible')
    cy.contains('.oxd-layout-context' , 'Buzz Newsfeed').should('be.visible')
} 
}
class UploadBuzz{
   buzzTheFeed() {

   cy.get('.oxd-main-menu').should('be.visible')
   cy.get('a[href="/web/index.php/buzz/viewBuzz"]').click()
   cy.get('textarea[placeholder="What\'s on your mind?"]').should('be.visible').type("This is my auto test saif here")

}
}
export default { BuzzPage,UploadBuzz}