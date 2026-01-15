import TextBox from "../selectors/Toolsqa/textboxselectors"

const form = new TextBox()

export default class FormFill {

    formFilling() {

       cy.get(form.textForm).should('be.visible')
       cy.get(form.textCenter).should('be.visible')

         cy.fixture('textform').then((textform) => {
         cy.get(form.userField).type(textform['FullName'])
         cy.get(form.userEmail).type(textform['Email'])
         cy.get(form.userAddress).type(textform['CurrentAddress'])

        })
          cy.get(form.submit).click()
    }
}
