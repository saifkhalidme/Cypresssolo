class LoginModal{

logIn() {
 cy.visit('https://practice.expandtesting.com/login')   
 cy.expandLogin()

}
}

export default LoginModal