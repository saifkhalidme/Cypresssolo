import SidePanel from "../selectors/Toolsqa/sidepanelselectors"
const sidepanel = new SidePanel()
export default class SideePanel {

    leftside(){
    cy.get(sidepanel.leftSidePanel).should('be.visible')
    cy.get(sidepanel.firstOption).contains('Elements').should('be.visible')
    cy.get(sidepanel.secondOption).contains('Form').should('be.visible')
    cy.get(sidepanel.thrirdOption).contains('Alerts, Frame & Windows').should('be.visible')

}
    expandclose(){
     cy.get(sidepanel.dropdownbutton).eq(0).click()
     cy.get(sidepanel.dropdownOptions).should('be.visible')
    

}
}