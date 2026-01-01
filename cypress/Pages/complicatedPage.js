class FormFill {
 
basicDetail(){

cy.get('#name').type("saif")
cy.get('#email').type("testemail@gmail.com")
cy.get('[placeholder=Enter "Phone"]').type("03248743284")
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


export default {FormFill,PersonalDetail,DatesSubmit}