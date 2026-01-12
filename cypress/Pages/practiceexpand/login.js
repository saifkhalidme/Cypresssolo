export default class LoginModalclass LoginModal{

logIn() {
 cy.visit('https://practice.expandtesting.com/login')   
 cy.expandLogin()

}
}

