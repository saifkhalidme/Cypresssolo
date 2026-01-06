import PunchVerification from '../../Pages/orangehrm/punchverification'
const punchfunction = new PunchVerification()

describe('Verify punch In Punch out Functionality is working in dashboard', ()=>{
     
     it ('Punch in functionality' ,()=> {
         cy.orangeVisit()
         cy.hrmLoginT()
         punchfunction.punchIN()
 })

     it ('Punch out functionality' ,()=>{
        cy.orangeVisit()
        cy.hrmLoginT()
        punchfunction.punchOutt()
})
})
