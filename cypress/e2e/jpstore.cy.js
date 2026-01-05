import {JPStoreVisit,MenuHeader,SearchBarr,SearchBarFunc,CategorySelect,AddCart} from '../Pages/jpstore'
const sidePanel = new JPStoreVisit()
const topMenu = new MenuHeader()
const search = new SearchBarr()
const sbar = new SearchBarFunc()
const catSelect= new CategorySelect()
const cartt = new AddCart()

beforeEach(() =>{
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
})


describe('Verify side section and menu is visible', ()=>{
     
    it('Side section visibility', ()=>{
     sidePanel.sideSection()
})

     it('Menu is visible', ()=>{
       topMenu.menubar() 
})
})

describe ('Verify search bar is visible and functional', ()=>{
       
    it('Searchbar visibility' , ()=>{
          search.searchVisible()
    
})
    it ('Searchbar Functionality' , ()=>{
          sbar.searchBarWork()
})
})

describe('Verify Category is clickable' , ()=>{
     it ('category is selected', ()=>{
        catSelect.catF()
})       
})

describe ('Verify Fish can be added to cart' , ()=>{
     it ('Add to Cart' , ()=>{
      cartt.cart()
    
})
})


