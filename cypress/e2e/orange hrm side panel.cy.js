import {SidePanel,SideMenuArrow,SearchBar} from '../Pages/orange hrm side panel and search'

const sideVisible = new SidePanel()
const arrowButton = new SideMenuArrow()
const searchingg = new SearchBar()

describe(' Verify Side Panel Visibility and Search Bar functionality', ()=>{
    
    it ('Side Panel Visibility' , ()=> {
               
      sideVisible.sidePanelVisible()
})
   it ('Arrow button on side pandel allow to close and open panel', ()=>{
       
     arrowButton.openCloseButton()
})
   it ('Search Bar is functional' , ()=>{
      searchingg.searchB()
   })
})



