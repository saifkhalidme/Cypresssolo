class FormFill {
 
basicDetail(){

cy.get('#name').type("saif")
cy.get('#email').type("testemail@gmail.com")
cy.get('[placeholder="Enter Phone"]').type("03248743284")
cy.get('#textarea').type("DHA PH8 W block CC4 Lahore")
}
}
class PersonalDetail{

  pDetail(){

cy.get('#male').click()
cy.get('#monday').click()
cy.get('#country').select('china')
cy.get ('#colors').select('Green')
}
}

class DatesSubmit{

  dateSelector(){
  
  cy.get('#datepicker').click()                         
  cy.get('.ui-datepicker-calendar').should('be.visible')
  cy.get('.ui-datepicker-calendar').contains('2').click()
 
  }
  }

  class Pictures{

    imageFiless(){  
  cy.get('#singleFileInput')
  cy.get('input[type="file"]').eq(0).selectFile('cypress/fixtures/picone.png',{ force: true })
  cy.get('button[type="submit"]').eq(0).click()
  }
  }
  
  class SearchBar{
    searchWeb(){
    cy.get('#Wikipedia1_wikipedia-search-input').type("Razor1")
    cy.get('.wikipedia-search-button').should('be.visible').click()
    cy.get('a[href="https://en.wikipedia.org/wiki/Razor_1911"]').invoke('removeAttr','target').click()
    cy.go('back')
   
  }
  
  }



export default {FormFill,PersonalDetail,DatesSubmit,Pictures,SearchBar}