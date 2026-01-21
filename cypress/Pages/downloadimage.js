import Download from "../selectors/Toolsqa/downloadselectors"

const downloads = new Download()
export default class Downloading{
    imageDownload(){
    cy.get(downloads.buttonss).click()
}
}