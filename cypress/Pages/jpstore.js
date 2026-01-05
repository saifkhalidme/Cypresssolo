
class JPStoreVisit {
 sideSection(){
     cy.get('#SidebarContent').should('be.visible')
}
}
class MenuHeader{
    menubar(){
     cy.get('#MenuContent').should('be.visible')
}
}
class SearchBarr{
      searchVisible(){
      cy.get('#Search').should('be.visible')

}
}    
class SearchBarFunc{
    searchBarWork(){
    cy.get('#Search').type('FI-SW-01')
}
}

class CategorySelect{
     catF(){
    cy.get('img[src="../images/fish_icon.gif"]').parent('a').should('be.visible').click()
    cy.contains('Angelfish')
    cy.get('#Catalog').should('be.visible')
}
}
class AddCart{
    cart(){
    cy.get('img[src="../images/fish_icon.gif"]').parent('a').should('be.visible').click()
    cy.contains('Angelfish')
    cy.get('#Catalog').should('be.visible')
    cy.get('a[href="/actions/Catalog.action?viewProduct=&productId=FI-SW-01"]').click()
    cy.get('a[href="/actions/Cart.action?addItemToCart=&workingItemId=EST-1"]').click()
    cy.get('#Catalog')
    cy.contains ('Shopping Cart')
    cy.get('input[name="EST-1"]').clear().type('2')
    cy.contains('Proceed to Checkout').click()
    cy.get('.messages').should('be.visible')

}
}

export {JPStoreVisit,MenuHeader,SearchBarr,SearchBarFunc,CategorySelect,AddCart,}