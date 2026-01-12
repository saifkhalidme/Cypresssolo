import ToolSelector from "../../selectors/practiceexpand/toolsSelector"
const tools = new ToolSelector
export default class Tools {

    checkTools() {
       cy.get(tools.navigateTools, { timeout: 20000 }).should('be.visible').click()
       cy.get(tools.idHeading).should('be.visible')
       cy.get(tools.toolList).should('be.visible')
       cy.get(tools.toolLink1).eq(0).click()

}
}
