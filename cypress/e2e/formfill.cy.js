import FormFill from "../Pages/textform"
const textForm = new FormFill()

describe('Verify Text Form Is Fucntional', () => {
    it('Form Filling is Working', () => {

        cy.visit('https://demoqa.com/text-box')
        textForm.formFilling()

    })
})
