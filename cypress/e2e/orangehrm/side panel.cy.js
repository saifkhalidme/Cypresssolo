import SidePanel from '../Pages/orangehrm/side panel'

const sideVisible = new SidePanel()

describe(' Verify Side Panel Visibility and Search Bar functionality', ()=>{
    
    it ('Side Panel Visibility' , ()=> {
               
      sideVisible.sidePanelVisible()
  })
  
      it ('Arrow button on side pandel allow to close and open panel', ()=>{
       
     sideVisible.openCloseButton()
})
})  



