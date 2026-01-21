import UploadImage from "../Pages/uploadimage"
const image = new UploadImage()


describe('Verify Image is properly uploading', ()=>{
    beforeEach(()=>{
        cy.visit('https://demoqa.com/upload-download')
    })
    
    it('Image upload section' , ()=>{
    image.uploadfile()
 })



})