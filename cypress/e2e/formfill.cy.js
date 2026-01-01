import {FormFill,PersonalDetail,DatesSubmit} from '../Pages/complicatedPage'

const form1= new FormFill()
const form2= new PersonalDetail()
const date1= new DatesSubmit()

describe('testingforms', ()=>{

 it('first test' , ()=> {
    cy.webVisit()
    form1.basicDetail
 })

 it('second test' , ()=>{
    cy.webVisit()
    form2.pDetail() 
})

 it ('date' , ()=>{
    cy.webVisit()
    date1.dateSelector() 
   
})

})
