import {FormFill,PersonalDetail,DatesSubmit,Pictures,SearchBar} from '../Pages/practice website one'

const form1= new FormFill()
const form2= new PersonalDetail()
const date1= new DatesSubmit()
const image1= new Pictures()
const searchit= new SearchBar()

describe('Verify forms,images and websearch are functional on website', ()=>{

 it('basics' , ()=> {
    cy.webVisit()
    form1.basicDetail()
 })

 it('personal detail' , ()=>{
    cy.webVisit()
    form2.pDetail() 
})

 it ('date entry' , ()=>{
    cy.webVisit()
    date1.dateSelector() 
 })
 it ('image upload', ()=>{
   cy.webVisit()
   image1.imageFiless()
 })  
 it ('websearch' , ()=>{
    cy.webVisit()
    searchit.searchWeb()
 })
})
