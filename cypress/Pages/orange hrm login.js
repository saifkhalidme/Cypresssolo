class LoginModal {
    
    orangeLogin(){    
    cy.get('.orangehrm-login-slot').should('be.visible')
    cy.fixture('orangeadmin').then((creds) =>{
    cy.get('input[name="username"]').type(creds.username)
    cy.get('input[name="password"]').type(creds.password)
    cy.get('button[type="submit"]').click()
    })
    
}
}

class WrongLogin {

    wrongOrange(){
    cy.fixture('orangewrong').then((creds)=>{
    cy.get('input[name="username"]').type(creds.username)
    cy.get('input[name="password"]').type(creds.password)
    cy.get('button[type="submit"]').click() 
    })

}
}

class DashboardDetails{

    details(){
    cy.get('.oxd-layout-context',{timeout:4000}).should('be.visible')
    cy.contains('Dashboard').should('be.visible')

}
}

class ForgotPassword{

    iForgot(){
    cy.get('.orangehrm-login-forgot').should('be.visible') 
    cy.get('.orangehrm-login-forgot').click()
    cy.get('.oxd-form').should('be.visible')
   // cy.get('[placeholder="Username"]').type("Admin")
   // cy.get('button[type="submit"]').click()
   // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/sendPasswordReset")
    //cy.get('.orangehrm-card-container').should('be.visible')
    //cy.go('back')
}
}
 
 class PunchInVerification{

    punchIN(){
      cy.get('.oxd-icon-button.oxd-icon-button--solid-main.orangehrm-attendance-card-action',{timeout:10000}).should('be.visible').click()
       cy.get('.orangehrm-card-container').should('be.visible')
       cy.get('button[type="Submit"]').click()
       cy.get('.orangehrm-card-container').should('be.visible')
       cy.contains('Success',{timeout:10000}).should('be.visible')
    }
}
    class PunchOut{

    punchOutt(){
       cy.get('.oxd-icon-button.oxd-icon-button--solid-main.orangehrm-attendance-card-action',{timeout:10000}).should('be.visible').click()
       cy.get('.orangehrm-card-container').should('be.visible')
       cy.get('button[type="Submit"]').click()
       cy.get('.orangehrm-card-container').should('be.visible')
       cy.contains('Success',{timeout:10000}).should('be.visible')
    } 
 
 }     
 

export default {LoginModal, WrongLogin, DashboardDetails, ForgotPassword, PunchInVerification, PunchOut}
