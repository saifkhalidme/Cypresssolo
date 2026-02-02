import SongSearch from "../Pages/Search"
const searching = new SongSearch()
describe('Verify basic Search functionality fo a Song' ,()=>{

    beforeEach(()=>{
        cy.visit('https://www.youtube.com')
    })

    it('search the song' ,()=>{

        searching.SearchSection()
    })
})