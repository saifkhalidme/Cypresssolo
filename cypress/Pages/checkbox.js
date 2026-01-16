import CheckBox from "../selectors/Toolsqa/checkboxselectors"
const checkbox = new CheckBox()
export default class CheckBoX {

checkthebox(){
cy.get(checkbox.form).should('be.visible')
cy.get(checkbox.heading).should('be.visible')
cy.get(checkbox.headingHome).should('be.visible')
cy.get(checkbox.hCheckBox).click()
cy.get(checkbox.dropDown).click()



}
}