import Upload from "../selectors/Toolsqa/uploadselectors"
const upload = new Upload()
export default class UploadImage{

    uploadfile(){

        cy.get(upload.uploadSection).should('be.visible')
        cy.get('input[type="file"]').selectFile('cypress/fixtures/sc.png').click()
    }
}