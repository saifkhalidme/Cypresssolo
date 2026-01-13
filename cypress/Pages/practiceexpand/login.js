export default class LoginModal{

logIn() {
 cy.visit('https://practice.expandtesting.com/login')   
 cy.expandLogin()

}
}

