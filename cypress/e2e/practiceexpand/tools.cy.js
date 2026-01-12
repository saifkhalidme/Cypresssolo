import Tools from '../../Pages/practiceexpand/tools'
const toolsCheck = new Tools()

describe('Verify tools page is visible along tools list', () => {
    beforeEach('performLogin', () => {
        cy.visit('https://practice.expandtesting.com/login')
        cy.expandLogin()
    })
    it('verify tools page navigation', () => {
        toolsCheck.checkTools()



    })
    it('Verify tools page heading and tool is accessable', () => {
        cy.visit('https://practice.expandtesting.com/login')
        toolsCheck.checkTools()

    })
})