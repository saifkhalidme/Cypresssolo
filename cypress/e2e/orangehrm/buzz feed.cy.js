import BuzzPage from '../../Pages/orangehrm/buzzfeed'
const buzzNews = new BuzzPage()

describe('Verify the buzz page functionality' , ()=> {

    it('Buzz feed form' , ()=>{
    buzzNews.buzzNewsFeed()
    buzzNews.buzzPicUpload()

})     
})
