import {LoginModal,WrongLogin,DashboardDetails,ForgotPassword,PunchInVerification,PunchOut} from '../Pages/orange hrm login'
const ologin = new LoginModal()
const xlogin = new WrongLogin()
const forgot = new ForgotPassword()
const dashboard= new DashboardDetails()
const attendance= new PunchInVerification()
const attendanceOut= new PunchOut()

describe('Verify Login button and forgot password is functional' , ()=>{

    it('Login button' , ()=> {

    cy.orangeVisit()
    cy.wait(20000)
    ologin.orangeLogin()
    dashboard.details()
    
})
   
    it('Forgot Password button ' ,()=>{

    cy.orangeVisit()
    forgot.iForgot()
    cy.wait(10000)
    
   })
    
 })

describe ('Verify login flow with wrong creds and cred validation ',()=>{

     it('Login with wrong username and password' , ()=>{
      
      cy.orangeVisit()
      cy.wait(20000)
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
     it ('Punch out functionality' ,()=>{
        cy.orangeVisit()
        ologin.orangeLogin()
        attendanceOut.punchOutt()
})
})

