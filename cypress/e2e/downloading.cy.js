import Downloading from "../Pages/downloadimage"
const downloadButton = new Downloading()

describe('Verify the downloading works', () => {


    it('Verify download button works', () => {
        cy.visit('https://demoqa.com/upload-download')
        downloadButton.imageDownload()
    })
})