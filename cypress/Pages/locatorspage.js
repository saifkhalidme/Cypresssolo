import PageLocators from "../selectors/locatorsselectors"

const locate = new PageLocators()
export default class LocatorStrategy {

    findContent() {
        cy.get(locate.pageVisible).should('be.visible')
        cy.get(locate.focusedContent).should('be.visible')
    }

    findLocator() {

        cy.get(locate.liName).should('be.visible')
        cy.get(locate.byId).should('be.visible')
        cy.get(locate.byTheClass).should('be.visible')
        cy.get(locate.byButtonName).should('be.visible').click()

    }
}
