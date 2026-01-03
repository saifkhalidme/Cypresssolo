import {BuzzPage,UploadBuzz} from '../Pages/orange hrm buzz page'
const buzzNews = new BuzzPage()
const postpicupload = new UploadBuzz()

describe('Verify the buzz page functionality' , ()=> {

    it('Buzz feed form' , ()=>{
    buzzNews.buzzNewsFeed()
    postpicupload.buzzTheFeed()
})     
})
