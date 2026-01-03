import {LoginModal,WrongLogin,DashboardDetails,ForgotPassword,PunchInVerification} from '../Pages/orange hrm login'
const ologin = new LoginModal()
const xlogin = new WrongLogin()
const forgot = new ForgotPassword()
const dashboard= new DashboardDetails()
const attendance= new PunchInVerification()

describe('Verify Login button and forgot password is functional' , ()=>{

    it('Login button' , ()=> {

    cy.orangeVisit()
    cy.wait(20000)
    ologin.orangeLogin()
    dashboard.details()
    
})
   
    it('Forgot Password button ' ,()=>{

    cy.orangeVisit()
    cy.wait(30000)
    forgot.iForgot()
    
   })
    
 })

describe ('Verify login flow with wrong creds and cred validation ',()=>{

     it('Login with wrong username and password' , ()=>{
      
      cy.orangeVisit()
      xlogin.wrongOrange()

   })
      it ('credential validation', ()=>{
         cy.orangeVisit()
         cy.emptylogin()


      })
   })
  
describe('Verify punch In Punch out Functionality is working in dashboard', ()=>{
     
     it ('Punch in functionality' ,()=> {
         cy.orangeVisit()
         ologin.orangeLogin()
         attendance.punchIN()
      })
})


