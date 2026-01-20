import SideePanel from "../Pages/sidepanel"
const panelview = new SideePanel()

describe('Verify the visiblity and drop down functionality for side Panel', () => {

    beforeEach(() => {

        cy.visit('https://demoqa.com/text-box')
    })

    it('Verify side panel visibility', () => {

        panelview.leftside()
    })

    it('Verify side panel drop down button is functional and menu options visible', () => {

        panelview.expandclose()
    })
})
