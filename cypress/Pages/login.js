import LoginForm from '../selectors/loginselectors'
const login = new LoginForm()
export class LoginModule{
    loginuser(){
    cy.get(login.loginModule).should('be.visible')
    cy.get(login.loginText).should('be.visible')

}

    loginfields(){
    cy.get(login.userNameFiled).should('be.visible')
    cy.get(login.passwordField).should('be.visible')
    }

    loginbutton(){
        cy.get(login.signInButton).should('be.visible')
        
    }

    loginfunctionality(){
        cy.get(login.signInButton).should('be.visible')  
        cy.get(login.signInButton).click()
    }
}
