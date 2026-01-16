import CheckBoX from "../Pages/checkbox"
const checkboX = new CheckBoX()

describe('Verify checkbox section is functional',()=>{

beforeEach(() => {
    cy.visit('https://demoqa.com/checkbox')

})

it('Verify the checkbox Home and Dropdown', () => {

    checkboX.checkthebox()


})
})