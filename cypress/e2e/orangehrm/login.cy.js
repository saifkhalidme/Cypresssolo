import LoginModal from '../../Pages/orangehrm/login'
const ologin = new LoginModal()


describe('Verify Login button and forgot password is functional' , ()=>{

    it('Login button' , ()=> {

    cy.orangeVisit()
    ologin.orangeLogin()
    ologin.dashboardAssert()
    
})
   
    it('Forgot Password button ' ,()=>{

    cy.orangeVisit()
    ologin.iForgot()
    cy.wait(10000)
    
   })
    
 })

describe ('Verify login flow with wrong creds and cred validation ',()=>{

     it('Login with wrong username and password' , ()=>{
      
      cy.orangeVisit()
      ologin.wrongLogin()

   })
      it ('credential validation', ()=>{
         cy.orangeVisit()
         cy.emptylogin()


      })
   })
  


